import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { collections, getAllComponents } from './supabase/db';
import { motherboardData } from './data/motherboardData';
import { externalData as externalStaticData } from './data/externalData';
import { BookOpen, GraduationCap, ArrowLeft } from 'lucide-react';


const AdminPanel = lazy(() => import('./components/AdminPanel'));
const AuthWrapper = lazy(() => import('./components/AuthWrapper'));
const SpecsModal = lazy(() => import('./components/SpecsModal'));
const TypesModal = lazy(() => import('./components/TypesModal'));
const DetailsPanel = lazy(() => import('./components/DetailsPanel'));
const Hotspot = lazy(() => import('./components/Hotspot'));
const CrosswordModal = lazy(() => import('./components/CrosswordModal'));

const App = () => {
    const [viewMode, setViewMode] = useState('external');
    const [selected, setSelected] = useState(null);
    const [showSpecs, setShowSpecs] = useState(false);
    const [showTypes, setShowTypes] = useState(false);
    const [showCrossword, setShowCrossword] = useState(false);
    const [isQuizMode, setIsQuizMode] = useState(false);
    const [quizResponses, setQuizResponses] = useState({});
    const [score, setScore] = useState(null);

    const [internalData, setInternalData] = useState(() => {
        const saved = localStorage.getItem('internal_data');
        return saved ? JSON.parse(saved) : motherboardData;
    });
    const [externalData, setExternalData] = useState(() => {
        const saved = localStorage.getItem('external_data');
        return saved ? JSON.parse(saved) : externalStaticData;
    });

    useEffect(() => {
        const loadData = async () => {
            try {
                const [internal, external] = await Promise.all([
                    getAllComponents(collections.INTERNAL),
                    getAllComponents(collections.EXTERNAL)
                ]);

                if (internal && internal.length > 0) {
                    setInternalData(internal);
                    localStorage.setItem('internal_data', JSON.stringify(internal));
                }
                if (external && external.length > 0) {
                    setExternalData(external);
                    localStorage.setItem('external_data', JSON.stringify(external));
                }
            } catch (error) {
                console.error("Error fetching Supabase data:", error);
            }
        };
        loadData();
    }, []);

    useEffect(() => {
        setSelected(null);
        setShowSpecs(false);
        setShowTypes(false);
        setScore(null);
        setQuizResponses({});
    }, [viewMode]);

    return (
        <Suspense fallback={
            <div className="min-h-screen bg-tech-black flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-tech-purple border-t-transparent rounded-full animate-spin"></div>
            </div>
        }>

            <Routes>
                <Route path="/admin" element={
                    <AuthWrapper>
                        <AdminPanel />
                    </AuthWrapper>
                } />
                <Route path="/" element={
                    <MainExplorer
                        viewMode={viewMode}
                        setViewMode={setViewMode}
                        selected={selected}
                        setSelected={setSelected}
                        showSpecs={showSpecs}
                        setShowSpecs={setShowSpecs}
                        showTypes={showTypes}
                        setShowTypes={setShowTypes}
                        showCrossword={showCrossword}
                        setShowCrossword={setShowCrossword}
                        isQuizMode={isQuizMode}
                        setIsQuizMode={setIsQuizMode}
                        quizResponses={quizResponses}
                        setQuizResponses={setQuizResponses}
                        score={score}
                        setScore={setScore}
                        internalData={internalData}
                        externalData={externalData}
                    />
                } />
            </Routes>
        </Suspense>
    );
};

const MainExplorer = ({
    viewMode, setViewMode, selected, setSelected,
    showSpecs, setShowSpecs, showTypes, setShowTypes,
    showCrossword, setShowCrossword,
    isQuizMode, setIsQuizMode, quizResponses, setQuizResponses,
    score, setScore, internalData, externalData
}) => {
    const navigate = useNavigate();

    const currentData = viewMode === 'internal' ? internalData : externalData;
    const currentImage = viewMode === 'internal'
        ? "/assets/motherboard.png"
        : "/assets/setup-full.jpg";

    const handleHotspotClick = (data) => {
        if (data.type === 'internal-trigger') {
            setViewMode('internal');
        } else {
            setSelected(data);
        }
    };

    const handleQuizUpdate = (id, data) => {
        setQuizResponses(prev => ({
            ...prev,
            [id]: data
        }));
    };

    return (
        <div className="min-h-screen bg-tech-black text-white p-4 md:p-8 selection:bg-tech-purple selection:text-white">
            <header className="max-w-7xl mx-auto mb-8 md:mb-12 flex flex-col lg:flex-row justify-between items-center gap-6 border-b border-white/10 pb-6 md:pb-8">
                <div className="flex items-center gap-4 md:gap-6">
                    {viewMode === 'internal' && (
                        <button
                            onClick={() => setViewMode('external')}
                            className="p-2 -ml-2 rounded-xl hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                    )}
                    <img src="/assets/logo-aulaclic.png" alt="Logo" className="h-12 md:h-20 w-auto object-contain brightness-110" />
                    <div className="space-y-1">
                        <h1 className="text-2xl md:text-5xl font-black italic tracking-tighter uppercase leading-none">
                            La <span className="text-tech-purple">PC</span>
                        </h1>
                        <p className="text-gray-400 font-medium text-[10px] md:text-sm uppercase tracking-widest">
                            {viewMode === 'internal' ? 'La Placa Base' : 'Periféricos & Gabinete'}
                        </p>
                    </div>
                </div>

                <div className="flex bg-neutral-900 p-1 rounded-xl border border-white/5">
                    <button
                        onClick={() => setIsQuizMode(false)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${!isQuizMode ? 'bg-tech-purple text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        <BookOpen className="w-4 h-4" /> Lectura
                    </button>
                    <button
                        onClick={() => setIsQuizMode(true)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${isQuizMode ? 'bg-tech-purple text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        <GraduationCap className="w-4 h-4" /> Tarea
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className={`lg:col-span-2 relative bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group ${viewMode === 'internal' ? 'aspect-square md:aspect-video lg:aspect-[4/3]' : 'aspect-video'}`}>
                    <img src={currentImage} alt="View" className={`w-full h-full object-contain transition-transform duration-1000 group-hover:scale-[1.02] ${viewMode === 'internal' ? 'p-4' : 'p-0'}`} />
                    <div className="absolute inset-0 translate-x-[-12px] translate-y-[-12px]">
                        {currentData.map((item) => (
                            <Hotspot key={item.id} data={item} isActive={selected?.id === item.id} onClick={handleHotspotClick} isQuizMode={isQuizMode} />
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-1 h-full lg:min-h-[600px]">
                    <AnimatePresence mode="wait">
                        <DetailsPanel
                            selected={selected}
                            onShowSpecs={() => setShowSpecs(true)}
                            onShowTypes={() => setShowTypes(true)}
                            isQuizMode={isQuizMode}
                            quizResponses={quizResponses}
                            onQuizUpdate={handleQuizUpdate}
                            onShowCrossword={() => setShowCrossword(true)}
                            allData={currentData}
                        />
                    </AnimatePresence>
                </div>
            </main>

            <AnimatePresence>
                {showSpecs && selected && (
                    <SpecsModal isOpen={showSpecs} onClose={() => setShowSpecs(false)} component={selected} />
                )}
                {showTypes && selected && (
                    <TypesModal isOpen={showTypes} onClose={() => setShowTypes(false)} component={selected} />
                )}
                {showCrossword && selected && (
                    <CrosswordModal isOpen={showCrossword} onClose={() => setShowCrossword(false)} component={selected} />
                )}
            </AnimatePresence>

            <footer className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-gray-500 text-[10px] md:text-xs text-center uppercase tracking-[0.2em]">
                <p>© 2026 AulaClic Cerro Grande. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default App;
