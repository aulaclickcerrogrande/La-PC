
import React, { useState, useEffect } from 'react';
import {
    Box, Typography, Paper, TextField, Button,
    Grid, CircularProgress, Container, InputAdornment, IconButton, Tooltip, Divider, Collapse
} from '@mui/material';
import { Plus, Trash2, Save, ImagePlus, ChevronDown, ChevronUp, Maximize2, BookOpen, Loader2, Puzzle, Eye, Cpu, LogOut } from 'lucide-react';
import Crossword from './Crossword';
import { getAllComponents, updateComponent, collections, uploadImage } from '../supabase/db';

const AdminPanel = () => {
    const [view, setView] = useState('external');
    const [components, setComponents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(null); // format: {id, field}
    const [expandedTypes, setExpandedTypes] = useState({});
    const [expandedSpecs, setExpandedSpecs] = useState({});
    const [expandedCrosswords, setExpandedCrosswords] = useState({});
    const [message, setMessage] = useState('');

    useEffect(() => {
        loadData();
    }, [view]);

    const loadData = async () => {
        setLoading(true);
        try {
            const data = await getAllComponents(
                view === 'internal' ? collections.INTERNAL : collections.EXTERNAL
            );
            setComponents(data || []);
        } catch (error) {
            console.error("Error loading data:", error);
            setMessage("Error cargando datos de Supabase");
        }
        setLoading(false);
    };

    const handleFieldImageUpload = async (id, field, file) => {
        if (!file) return;
        setUploading({ id, field });
        try {
            const publicUrl = await uploadImage(file);

            setComponents(prev => prev.map(comp => {
                if (comp.id === id) {
                    if (field === 'image') {
                        return { ...comp, image: publicUrl };
                    } else if (field.startsWith('type-desc-')) {
                        // Special case for nested type descriptions
                        const [, , catIdx, itemIdx] = field.split('-');
                        const newTypes = [...(comp.types || [])];
                        const newItems = [...newTypes[catIdx].items];
                        const currentVal = newItems[itemIdx].description || '';
                        newItems[itemIdx].description = currentVal ? `${currentVal} \n\n${publicUrl} ` : publicUrl;
                        newTypes[catIdx] = { ...newTypes[catIdx], items: newItems };
                        return { ...comp, types: newTypes };
                    } else if (field.startsWith('spec-val-')) {
                        // Special case for specs
                        const specKey = field.replace('spec-val-', '');
                        const newSpecs = { ...comp.specs };
                        const currentVal = newSpecs[specKey] || '';
                        newSpecs[specKey] = currentVal ? `${currentVal} \n\n${publicUrl} ` : publicUrl;
                        return { ...comp, specs: newSpecs };
                    } else {
                        // Append URL to text fields
                        const currentVal = comp[field] || '';
                        const newVal = currentVal ? `${currentVal} \n\n${publicUrl} ` : publicUrl;
                        return { ...comp, [field]: newVal };
                    }
                }
                return comp;
            }));

            setMessage("Imagen insertada correctamente");
            setTimeout(() => setMessage(''), 2000);
        } catch (error) {
            console.error("Upload error:", error);
            setMessage("Error al subir imagen");
        }
        setUploading(null);
    };

    const handleUpdate = (id, field, value) => {
        setComponents(prev => prev.map(comp =>
            comp.id === id ? { ...comp, [field]: value } : comp
        ));
    };

    const toggleTypes = (id) => {
        setExpandedTypes(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const toggleSpecs = (id) => {
        setExpandedSpecs(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const toggleCrossword = (id) => {
        setExpandedCrosswords(prev => ({ ...prev, [id]: !prev[id] }));
    };

    // Types management functions
    const handleTypeUpdate = (compId, catIdx, field, value) => {
        setComponents(prev => prev.map(comp => {
            if (comp.id === compId) {
                const newTypes = [...(comp.types || [])];
                newTypes[catIdx] = { ...newTypes[catIdx], [field]: value };
                return { ...comp, types: newTypes };
            }
            return comp;
        }));
    };

    const handleTypeItemUpdate = (compId, catIdx, itemIdx, field, value) => {
        setComponents(prev => prev.map(comp => {
            if (comp.id === compId) {
                const newTypes = [...(comp.types || [])];
                const newItems = [...newTypes[catIdx].items];
                newItems[itemIdx] = { ...newItems[itemIdx], [field]: value };
                newTypes[catIdx] = { ...newTypes[catIdx], items: newItems };
                return { ...comp, types: newTypes };
            }
            return comp;
        }));
    };

    const addTypeCategory = (compId) => {
        setComponents(prev => prev.map(comp => {
            if (comp.id === compId) {
                const newTypes = [...(comp.types || []), { category: 'Nueva Categoría', items: [] }];
                return { ...comp, types: newTypes };
            }
            return comp;
        }));
    };

    const removeTypeCategory = (compId, catIdx) => {
        setComponents(prev => prev.map(comp => {
            if (comp.id === compId) {
                const newTypes = (comp.types || []).filter((_, i) => i !== catIdx);
                return { ...comp, types: newTypes };
            }
            return comp;
        }));
    };

    const addTypeItem = (compId, catIdx) => {
        setComponents(prev => prev.map(comp => {
            if (comp.id === compId) {
                const newTypes = [...(comp.types || [])];
                const newItems = [...(newTypes[catIdx].items || []), { name: 'Nuevo Tipo', description: '' }];
                newTypes[catIdx] = { ...newTypes[catIdx], items: newItems };
                return { ...comp, types: newTypes };
            }
            return comp;
        }));
    };

    const removeTypeItem = (compId, catIdx, itemIdx) => {
        setComponents(prev => prev.map(comp => {
            if (comp.id === compId) {
                const newTypes = [...(comp.types || [])];
                const newItems = newTypes[catIdx].items.filter((_, i) => i !== itemIdx);
                newTypes[catIdx] = { ...newTypes[catIdx], items: newItems };
                return { ...comp, types: newTypes };
            }
            return comp;
        }));
    };

    // Specs management functions
    const handleSpecUpdate = (compId, oldKey, newKey, newValue) => {
        setComponents(prev => prev.map(comp => {
            if (comp.id === compId) {
                const newSpecs = { ...comp.specs };
                if (oldKey !== newKey) {
                    delete newSpecs[oldKey];
                }
                newSpecs[newKey] = newValue;
                return { ...comp, specs: newSpecs };
            }
            return comp;
        }));
    };

    const addSpec = (compId) => {
        setComponents(prev => prev.map(comp => {
            if (comp.id === compId) {
                const newSpecs = { ...comp.specs, 'Nueva Etiqueta': 'Nuevo Valor' };
                return { ...comp, specs: newSpecs };
            }
            return comp;
        }));
    };

    const removeSpec = (compId, key) => {
        setComponents(prev => prev.map(comp => {
            if (comp.id === compId) {
                const newSpecs = { ...comp.specs };
                delete newSpecs[key];
                return { ...comp, specs: newSpecs };
            }
            return comp;
        }));
    };

    // Crossword management functions
    const handleCrosswordUpdate = (compId, wordIdx, field, value) => {
        setComponents(prev => prev.map(comp => {
            if (comp.id === compId) {
                const newCrossword = { ...(comp.crossword || { words: [] }) };
                const newWords = [...(newCrossword.words || [])];
                newWords[wordIdx] = { ...newWords[wordIdx], [field]: value };
                return { ...comp, crossword: { ...newCrossword, words: newWords } };
            }
            return comp;
        }));
    };

    const addCrosswordWord = (compId) => {
        setComponents(prev => prev.map(comp => {
            if (comp.id === compId) {
                const newCrossword = { ...(comp.crossword || { words: [] }) };
                const newWords = [...(newCrossword.words || [])];
                newWords.push({ word: '', clue: '', x: 0, y: 0, dir: 'across' });
                return { ...comp, crossword: { ...newCrossword, words: newWords } };
            }
            return comp;
        }));
    };

    const removeCrosswordWord = (compId, wordIdx) => {
        setComponents(prev => prev.map(comp => {
            if (comp.id === compId) {
                const newCrossword = { ...(comp.crossword || { words: [] }) };
                const newWords = (newCrossword.words || []).filter((_, i) => i !== wordIdx);
                return { ...comp, crossword: { ...newCrossword, words: newWords } };
            }
            return comp;
        }));
    };

    const saveChanges = async (component) => {
        const confirmSave = window.confirm(`¿Estás seguro de que quieres guardar los cambios en "${component.name}" ? `);
        if (!confirmSave) return;

        try {
            await updateComponent(
                view === 'internal' ? collections.INTERNAL : collections.EXTERNAL,
                component.id,
                component
            );
            setMessage(`¡Componente "${component.name}" actualizado!`);
            setTimeout(() => setMessage(''), 2500);
        } catch (error) {
            setMessage("Error al guardar en Supabase");
        }
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#09090b', color: 'white' }}>
            {/* --- SLIM HEADER --- */}
            <Box component="header" sx={{
                bgcolor: '#18181b',
                borderBottom: '1px solid rgba(168, 85, 247, 0.2)',
                py: 2,
                position: 'sticky', top: 0, zIndex: 100,
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}>
                <Container maxWidth="md">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box sx={{
                                bgcolor: '#a855f7',
                                p: 0.8,
                                borderRadius: '8px',
                                display: 'flex',
                                boxShadow: '0 0 10px rgba(168, 85, 247, 0.3)'
                            }}>
                                <Cpu color="white" size={20} />
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 900, fontSize: '1.1rem' }}>
                                AULA<span className="text-tech-purple">CLIC</span> <span style={{ opacity: 0.5, fontWeight: 400, fontSize: '0.9rem' }}>| ADMIN</span>
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                            <div className="flex p-0.5 bg-black/40 rounded-lg border border-white/5">
                                <button
                                    onClick={() => setView('internal')}
                                    className={`px - 4 py - 1.5 rounded - md text - [10px] font - black uppercase tracking - wider transition - all ${view === 'internal' ? 'bg-tech-purple text-white shadow-lg shadow-purple-500/20' : 'text-gray-500 hover:text-gray-300'} `}
                                >
                                    Internos
                                </button>
                                <button
                                    onClick={() => setView('external')}
                                    className={`px - 4 py - 1.5 rounded - md text - [10px] font - black uppercase tracking - wider transition - all ${view === 'external' ? 'bg-tech-purple text-white shadow-lg shadow-purple-500/20' : 'text-gray-500 hover:text-gray-300'} `}
                                >
                                    Periféricos
                                </button>
                            </div>

                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 0.2 }}>
                                <Button
                                    variant="text"
                                    size="small"
                                    startIcon={<LogOut size={16} />}
                                    onClick={() => {
                                        if (window.confirm('¿Quieres volver a la página principal? (Tu sesión seguirá activa)')) {
                                            window.location.href = '/';
                                        }
                                    }}
                                    sx={{
                                        color: '#a1a1aa',
                                        fontWeight: 700,
                                        textTransform: 'none',
                                        fontSize: '0.85rem',
                                        py: 0,
                                        minHeight: 0,
                                        '&:hover': { color: '#a855f7', bgcolor: 'transparent' }
                                    }}
                                >
                                    Ir a la Web
                                </Button>
                                <Button
                                    variant="text"
                                    size="small"
                                    onClick={() => {
                                        if (window.confirm('¿CERRAR SESIÓN?\n\nAl confirmar, se borrarán tus credenciales de este navegador y tendrás que ingresar la contraseña la próxima vez que quieras entrar al Panel.')) {
                                            localStorage.removeItem('is_admin_auth');
                                            window.location.href = '/';
                                        }
                                    }}
                                    sx={{
                                        color: 'rgba(255,255,255,0.4)',
                                        fontWeight: 500,
                                        textTransform: 'none',
                                        fontSize: '0.65rem',
                                        py: 0,
                                        minHeight: 0,
                                        '&:hover': { color: '#ef4444', bgcolor: 'transparent' }
                                    }}
                                >
                                    Cerrar sesión
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* --- CONTENT AREA --- */}
            <main className="py-8">
                <Container maxWidth="md">
                    {/* Message Box moved to fixed bottom */}

                    {loading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
                            <div className="w-10 h-10 border-4 border-tech-purple border-t-transparent rounded-full animate-spin"></div>
                        </Box>
                    ) : (
                        <Grid container spacing={4}>
                            {components.map(comp => (
                                <Grid item xs={12} key={comp.id}>
                                    <Paper sx={{
                                        p: 3,
                                        bgcolor: '#1c1c1f',
                                        color: 'white',
                                        borderRadius: '24px',
                                        border: '1px solid rgba(255,255,255,0.03)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': { borderColor: 'rgba(168, 85, 247, 0.4)' }
                                    }}>
                                        <Grid container spacing={3} alignItems="flex-start">
                                            {/* Preview Image */}
                                            <Grid item xs={12} md={2}>
                                                <div className="bg-black/60 rounded-2xl p-4 flex items-center justify-center h-32 border border-white/5 relative group sticky top-24">
                                                    <img src={comp.image} className="w-full h-full object-contain" alt={comp.name} />
                                                </div>
                                            </Grid>

                                            {/* Text Fields */}
                                            <Grid item xs={12} md={7}>
                                                <TextField
                                                    fullWidth
                                                    value={comp.name}
                                                    onChange={(e) => handleUpdate(comp.id, 'name', e.target.value)}
                                                    variant="standard"
                                                    InputProps={{
                                                        disableUnderline: true,
                                                        style: { color: 'white', fontWeight: 900, fontSize: '1.5rem', letterSpacing: -0.5 }
                                                    }}
                                                    sx={{ mb: 2 }}
                                                />

                                                {/* Resumen Field */}
                                                <Box sx={{ mb: 3 }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                                        <Typography variant="caption" sx={{ color: '#a855f7', fontWeight: 800, fontSize: '0.7rem' }}>Resumen (Vista Lateral)</Typography>
                                                        <input
                                                            type="file"
                                                            id={`img - description - ${comp.id} `}
                                                            hidden
                                                            onChange={(e) => handleFieldImageUpload(comp.id, 'description', e.target.files[0])}
                                                        />
                                                        <Tooltip title="Insertar imagen en el resumen">
                                                            <IconButton
                                                                size="small"
                                                                onClick={() => document.getElementById(`img - description - ${comp.id} `).click()}
                                                                sx={{ p: 0.2, color: '#71717a', '&:hover': { color: '#a855f7' } }}
                                                            >
                                                                {uploading?.id === comp.id && uploading?.field === 'description' ? <Loader2 size={14} className="animate-spin" /> : <ImagePlus size={14} />}
                                                            </IconButton>
                                                        </Tooltip>
                                                    </Box>
                                                    <TextField
                                                        fullWidth
                                                        size="small"
                                                        multiline
                                                        value={comp.description}
                                                        onChange={(e) => handleUpdate(comp.id, 'description', e.target.value)}
                                                        variant="outlined"
                                                        sx={{
                                                            '& .MuiOutlinedInput-root': {
                                                                borderRadius: '12px',
                                                                color: 'white',
                                                                fontSize: '0.85rem',
                                                                bgcolor: 'rgba(0,0,0,0.2)',
                                                                '& fieldset': { borderColor: 'rgba(255,255,255,0.08)' },
                                                                '&.Mui-focused fieldset': { borderColor: '#a855f7' },
                                                            }
                                                        }}
                                                    />
                                                </Box>

                                                {/* Descripción Detallada Field */}
                                                <Box sx={{ mb: 3 }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                                        <Typography variant="caption" sx={{ color: '#a1a1aa', fontWeight: 700, fontSize: '0.7rem' }}>Descripción detallada (Ventana Popup)</Typography>
                                                        <input
                                                            type="file"
                                                            id={`img - long - ${comp.id} `}
                                                            hidden
                                                            onChange={(e) => handleFieldImageUpload(comp.id, 'long_description', e.target.files[0])}
                                                        />
                                                        <Tooltip title="Insertar imagen en la descripción">
                                                            <IconButton
                                                                size="small"
                                                                onClick={() => document.getElementById(`img - long - ${comp.id} `).click()}
                                                                sx={{ p: 0.2, color: '#71717a', '&:hover': { color: '#a855f7' } }}
                                                            >
                                                                {uploading?.id === comp.id && uploading?.field === 'long_description' ? <Loader2 size={14} className="animate-spin" /> : <ImagePlus size={14} />}
                                                            </IconButton>
                                                        </Tooltip>
                                                    </Box>
                                                    <TextField
                                                        fullWidth
                                                        multiline
                                                        rows={3}
                                                        value={comp.long_description}
                                                        onChange={(e) => handleUpdate(comp.id, 'long_description', e.target.value)}
                                                        variant="outlined"
                                                        sx={{
                                                            '& .MuiOutlinedInput-root': {
                                                                borderRadius: '12px',
                                                                color: '#e4e4e7',
                                                                fontSize: '0.85rem',
                                                                bgcolor: 'rgba(255,255,255,0.03)',
                                                                '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                                                                '&.Mui-focused fieldset': { borderColor: '#a855f7' },
                                                            }
                                                        }}
                                                    />
                                                </Box>

                                                {/* --- SPECS EDITOR SECTION --- */}
                                                <Box sx={{ mt: 2, border: '1px solid rgba(168, 85, 247, 0.1)', borderRadius: '16px', bgcolor: 'rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                                                    <Button
                                                        fullWidth
                                                        onClick={() => toggleSpecs(comp.id)}
                                                        startIcon={<Maximize2 size={16} />}
                                                        endIcon={expandedSpecs[comp.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                                        sx={{
                                                            justifyContent: 'space-between',
                                                            px: 2, py: 1.5,
                                                            color: expandedSpecs[comp.id] ? '#a855f7' : '#71717a',
                                                            textTransform: 'none',
                                                            fontWeight: 800,
                                                            fontSize: '0.75rem',
                                                            '&:hover': { bgcolor: 'rgba(168, 85, 247, 0.05)' }
                                                        }}
                                                    >
                                                        EDITAR ESPECIFICACIONES (RECUADROS)
                                                    </Button>

                                                    <Collapse in={expandedSpecs[comp.id]}>
                                                        <Box sx={{ p: 2, pt: 0 }}>
                                                            <Divider sx={{ mb: 2, borderColor: 'rgba(168, 85, 247, 0.1)' }} />

                                                            {Object.entries(comp.specs || {}).map(([key, value], specIdx) => (
                                                                <Box key={specIdx} sx={{ mb: 2, p: 2, bgcolor: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                                    <Grid container spacing={2} alignItems="center">
                                                                        <Grid item xs={12} sm={4}>
                                                                            <TextField
                                                                                fullWidth
                                                                                size="small"
                                                                                label="Etiqueta"
                                                                                value={key}
                                                                                onBlur={(e) => handleSpecUpdate(comp.id, key, e.target.value, value)}
                                                                                sx={{
                                                                                    '& .MuiOutlinedInput-root': { borderRadius: '8px', color: '#a855f7', fontWeight: 800, fontSize: '0.7rem' },
                                                                                    '& .MuiInputLabel-root': { color: '#a1a1aa', fontSize: '0.7rem' }
                                                                                }}
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={12} sm={6}>
                                                                            <TextField
                                                                                fullWidth
                                                                                multiline
                                                                                size="small"
                                                                                label="Valor / Descripción"
                                                                                value={value}
                                                                                onChange={(e) => handleSpecUpdate(comp.id, key, key, e.target.value)}
                                                                                helperText="Las imágenes se insertan como links al final"
                                                                                sx={{
                                                                                    '& .MuiOutlinedInput-root': { borderRadius: '8px', color: 'white', fontSize: '0.8rem' },
                                                                                    '& .MuiInputLabel-root': { color: '#71717a', fontSize: '0.7rem' },
                                                                                    '& .MuiFormHelperText-root': { color: '#71717a', fontSize: '0.6rem', opacity: 0.8 }
                                                                                }}
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={12} sm={2} sx={{ display: 'flex', gap: 0.5 }}>
                                                                            <input
                                                                                type="file"
                                                                                id={`img - spec - ${comp.id} -${specIdx} `}
                                                                                hidden
                                                                                onChange={(e) => handleFieldImageUpload(comp.id, `spec - val - ${key} `, e.target.files[0])}
                                                                            />
                                                                            <IconButton
                                                                                size="small"
                                                                                onClick={() => document.getElementById(`img - spec - ${comp.id} -${specIdx} `).click()}
                                                                                sx={{ color: '#a855f7' }}
                                                                            >
                                                                                {uploading?.id === comp.id && uploading?.field === `spec - val - ${key} ` ? <Loader2 size={16} className="animate-spin" /> : <ImagePlus size={16} />}
                                                                            </IconButton>
                                                                            <IconButton size="small" onClick={() => removeSpec(comp.id, key)} sx={{ color: '#ef4444' }}>
                                                                                <Trash2 size={16} />
                                                                            </IconButton>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Box>
                                                            ))}

                                                            <Button
                                                                fullWidth
                                                                variant="outlined"
                                                                startIcon={<Plus size={16} />}
                                                                onClick={() => addSpec(comp.id)}
                                                                sx={{
                                                                    mt: 1, borderStyle: 'dashed', borderColor: 'rgba(168, 85, 247, 0.3)',
                                                                    color: '#a855f7', textTransform: 'none', fontWeight: 700
                                                                }}
                                                            >
                                                                NUEVA ESPECIFICACIÓN
                                                            </Button>
                                                        </Box>
                                                    </Collapse>
                                                </Box>

                                                {/* --- TYPES EDITOR SECTION --- */}
                                                <Box sx={{ mt: 2, border: '1px solid rgba(168, 85, 247, 0.1)', borderRadius: '16px', bgcolor: 'rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                                                    <Button
                                                        fullWidth
                                                        onClick={() => toggleTypes(comp.id)}
                                                        startIcon={<BookOpen size={16} />}
                                                        endIcon={expandedTypes[comp.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                                        sx={{
                                                            justifyContent: 'space-between',
                                                            px: 2, py: 1.5,
                                                            color: expandedTypes[comp.id] ? '#a855f7' : '#71717a',
                                                            textTransform: 'none',
                                                            fontWeight: 800,
                                                            fontSize: '0.75rem',
                                                            '&:hover': { bgcolor: 'rgba(168, 85, 247, 0.05)' }
                                                        }}
                                                    >
                                                        EDITAR TIPOS Y CATEGORÍAS
                                                    </Button>

                                                    <Collapse in={expandedTypes[comp.id]}>
                                                        <Box sx={{ p: 2, pt: 0 }}>
                                                            <Divider sx={{ mb: 2, borderColor: 'rgba(168, 85, 247, 0.1)' }} />

                                                            {(comp.types || []).map((cat, catIdx) => (
                                                                <Box key={catIdx} sx={{ mb: 3, p: 2, bgcolor: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(168, 85, 247, 0.15)' }}>
                                                                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                                                                        <TextField
                                                                            fullWidth
                                                                            size="small"
                                                                            label="Categoría"
                                                                            value={cat.category}
                                                                            onChange={(e) => handleTypeUpdate(comp.id, catIdx, 'category', e.target.value)}
                                                                            sx={{
                                                                                '& .MuiOutlinedInput-root': {
                                                                                    borderRadius: '8px',
                                                                                    color: '#d8b4fe',
                                                                                    fontWeight: 800,
                                                                                    bgcolor: 'rgba(0,0,0,0.3)'
                                                                                },
                                                                                '& .MuiInputLabel-root': { color: '#a1a1aa' }
                                                                            }}
                                                                        />
                                                                        <IconButton size="small" onClick={() => removeTypeCategory(comp.id, catIdx)} sx={{ color: '#ef4444', bgcolor: 'rgba(239, 68, 68, 0.05)', '&:hover': { bgcolor: 'rgba(239, 68, 68, 0.1)' } }}>
                                                                            <Trash2 size={18} />
                                                                        </IconButton>
                                                                    </Box>

                                                                    <Box sx={{ ml: 2, spaceY: 2 }}>
                                                                        {cat.items.map((item, itemIdx) => (
                                                                            <Box key={itemIdx} sx={{ mb: 2, p: 1.5, bgcolor: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '3px solid #a855f7' }}>
                                                                                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                                                                                    <TextField
                                                                                        fullWidth
                                                                                        size="small"
                                                                                        label="Nombre del Tipo"
                                                                                        value={item.name}
                                                                                        onChange={(e) => handleTypeItemUpdate(comp.id, catIdx, itemIdx, 'name', e.target.value)}
                                                                                        sx={{
                                                                                            '& .MuiOutlinedInput-root': { borderRadius: '8px', fontSize: '0.85rem', color: 'white', fontWeight: 600 },
                                                                                            '& .MuiInputLabel-root': { color: '#71717a' }
                                                                                        }}
                                                                                    />
                                                                                    <IconButton size="small" onClick={() => removeTypeItem(comp.id, catIdx, itemIdx)} sx={{ color: '#ef4444' }}>
                                                                                        <Trash2 size={16} />
                                                                                    </IconButton>
                                                                                </Box>
                                                                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                                                                                    <TextField
                                                                                        fullWidth
                                                                                        multiline
                                                                                        size="small"
                                                                                        label="Descripción"
                                                                                        value={item.description}
                                                                                        onChange={(e) => handleTypeItemUpdate(comp.id, catIdx, itemIdx, 'description', e.target.value)}
                                                                                        sx={{
                                                                                            '& .MuiOutlinedInput-root': { borderRadius: '8px', fontSize: '0.8rem', color: '#e4e4e7' },
                                                                                            '& .MuiInputLabel-root': { color: '#71717a' }
                                                                                        }}
                                                                                    />
                                                                                    <input
                                                                                        type="file"
                                                                                        id={`img - type - ${comp.id} -${catIdx} -${itemIdx} `}
                                                                                        hidden
                                                                                        onChange={(e) => handleFieldImageUpload(comp.id, `type - desc - ${catIdx} -${itemIdx} `, e.target.files[0])}
                                                                                    />
                                                                                    <IconButton
                                                                                        size="small"
                                                                                        onClick={() => document.getElementById(`img - type - ${comp.id} -${catIdx} -${itemIdx} `).click()}
                                                                                        sx={{ color: '#a855f7', mt: 0.5 }}
                                                                                    >
                                                                                        {uploading?.id === comp.id && uploading?.field === `type - desc - ${catIdx} -${itemIdx} ` ? <Loader2 size={14} className="animate-spin" /> : <ImagePlus size={14} />}
                                                                                    </IconButton>
                                                                                </Box>
                                                                            </Box>
                                                                        ))}
                                                                        <Button
                                                                            size="small"
                                                                            startIcon={<Plus size={14} />}
                                                                            onClick={() => addTypeItem(comp.id, catIdx)}
                                                                            sx={{ color: '#a855f7', textTransform: 'none', fontSize: '0.7rem' }}
                                                                        >
                                                                            Agregar Item a {cat.category}
                                                                        </Button>
                                                                    </Box>
                                                                </Box>
                                                            ))}

                                                            <Button
                                                                fullWidth
                                                                variant="outlined"
                                                                startIcon={<Plus size={16} />}
                                                                onClick={() => addTypeCategory(comp.id)}
                                                                sx={{
                                                                    mt: 1, borderStyle: 'dashed', borderColor: 'rgba(168, 85, 247, 0.3)',
                                                                    color: '#a855f7', textTransform: 'none', fontWeight: 700
                                                                }}
                                                            >
                                                                NUEVA CATEGORÍA DE TIPO
                                                            </Button>
                                                        </Box>
                                                    </Collapse>
                                                </Box>

                                                {/* --- CROSSWORD EDITOR SECTION --- */}
                                                <Box sx={{ mt: 2, border: '1px solid rgba(168, 85, 247, 0.1)', borderRadius: '16px', bgcolor: 'rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                                                    <Button
                                                        fullWidth
                                                        onClick={() => toggleCrossword(comp.id)}
                                                        startIcon={<Puzzle size={16} />}
                                                        endIcon={expandedCrosswords[comp.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                                        sx={{
                                                            justifyContent: 'space-between',
                                                            px: 2, py: 1.5,
                                                            color: expandedCrosswords[comp.id] ? '#a855f7' : '#71717a',
                                                            textTransform: 'none',
                                                            fontWeight: 800,
                                                            fontSize: '0.75rem',
                                                            '&:hover': { bgcolor: 'rgba(168, 85, 247, 0.05)' }
                                                        }}
                                                    >
                                                        EDITAR CRUCIGRAMA
                                                    </Button>

                                                    <Collapse in={expandedCrosswords[comp.id]}>
                                                        <Box sx={{ p: 2, pt: 0 }}>
                                                            <Divider sx={{ mb: 2, borderColor: 'rgba(168, 85, 247, 0.1)' }} />

                                                            {/* Live Preview Section */}
                                                            <Box sx={{ mb: 4, p: 3, bgcolor: 'rgba(0,0,0,0.3)', borderRadius: '16px', border: '1px border-tech-purple/20' }}>
                                                                <div className="flex items-center gap-2 mb-4 text-tech-purple text-xs font-black uppercase tracking-widest">
                                                                    <Eye size={14} /> Vista Previa en Tiempo Real
                                                                </div>
                                                                <Crossword data={comp.crossword} preview={true} />
                                                            </Box>

                                                            {(comp.crossword?.words || []).map((word, wIdx) => (
                                                                <Box key={wIdx} sx={{ mb: 2, p: 2, bgcolor: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                                    <Grid container spacing={2}>
                                                                        <Grid item xs={12} sm={4}>
                                                                            <TextField
                                                                                fullWidth
                                                                                size="small"
                                                                                label="Palabra"
                                                                                value={word.word}
                                                                                onChange={(e) => handleCrosswordUpdate(comp.id, wIdx, 'word', e.target.value.toUpperCase())}
                                                                                sx={{
                                                                                    '& .MuiOutlinedInput-root': {
                                                                                        borderRadius: '8px',
                                                                                        color: '#a855f7',
                                                                                        fontWeight: 800,
                                                                                        fontSize: '0.7rem',
                                                                                        bgcolor: 'rgba(0,0,0,0.2)',
                                                                                        '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                                                                                        '&:hover fieldset': { borderColor: 'rgba(168, 85, 247, 0.4)' },
                                                                                    },
                                                                                    '& .MuiInputLabel-root': { color: '#71717a', fontSize: '0.7rem' }
                                                                                }}
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={12} sm={8}>
                                                                            <TextField
                                                                                fullWidth
                                                                                size="small"
                                                                                label="Pista"
                                                                                value={word.clue}
                                                                                onChange={(e) => handleCrosswordUpdate(comp.id, wIdx, 'clue', e.target.value)}
                                                                                sx={{
                                                                                    '& .MuiOutlinedInput-root': {
                                                                                        borderRadius: '8px',
                                                                                        color: 'white',
                                                                                        fontSize: '0.7rem',
                                                                                        bgcolor: 'rgba(0,0,0,0.2)',
                                                                                        '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                                                                                        '&:hover fieldset': { borderColor: 'rgba(168, 85, 247, 0.4)' },
                                                                                    },
                                                                                    '& .MuiInputLabel-root': { color: '#71717a', fontSize: '0.7rem' }
                                                                                }}
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={3}>
                                                                            <TextField
                                                                                fullWidth
                                                                                size="small"
                                                                                type="number"
                                                                                label="X"
                                                                                value={word.x}
                                                                                onChange={(e) => handleCrosswordUpdate(comp.id, wIdx, 'x', parseInt(e.target.value) || 0)}
                                                                                sx={{
                                                                                    '& .MuiOutlinedInput-root': {
                                                                                        borderRadius: '8px',
                                                                                        fontSize: '0.7rem',
                                                                                        color: 'white',
                                                                                        bgcolor: 'rgba(0,0,0,0.2)',
                                                                                        '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                                                                                    },
                                                                                    '& .MuiInputLabel-root': { color: '#71717a', fontSize: '0.7rem' }
                                                                                }}
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={3}>
                                                                            <TextField
                                                                                fullWidth
                                                                                size="small"
                                                                                type="number"
                                                                                label="Y"
                                                                                value={word.y}
                                                                                onChange={(e) => handleCrosswordUpdate(comp.id, wIdx, 'y', parseInt(e.target.value) || 0)}
                                                                                sx={{
                                                                                    '& .MuiOutlinedInput-root': {
                                                                                        borderRadius: '8px',
                                                                                        fontSize: '0.7rem',
                                                                                        color: 'white',
                                                                                        bgcolor: 'rgba(0,0,0,0.2)',
                                                                                        '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                                                                                    },
                                                                                    '& .MuiInputLabel-root': { color: '#71717a', fontSize: '0.7rem' }
                                                                                }}
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={4}>
                                                                            <TextField
                                                                                fullWidth
                                                                                select
                                                                                size="small"
                                                                                label="Dir"
                                                                                value={word.dir}
                                                                                onChange={(e) => handleCrosswordUpdate(comp.id, wIdx, 'dir', e.target.value)}
                                                                                SelectProps={{ native: true }}
                                                                                sx={{
                                                                                    '& .MuiOutlinedInput-root': {
                                                                                        borderRadius: '8px',
                                                                                        fontSize: '0.7rem',
                                                                                        color: 'white',
                                                                                        bgcolor: 'rgba(0,0,0,0.2)',
                                                                                        '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                                                                                    },
                                                                                    '& .MuiInputLabel-root': { color: '#71717a', fontSize: '0.7rem' },
                                                                                    '& select': { color: 'white' },
                                                                                    '& option': { bgcolor: '#18181b', color: 'white' }
                                                                                }}
                                                                            >
                                                                                <option value="across">Horizontal</option>
                                                                                <option value="down">Vertical</option>
                                                                            </TextField>
                                                                        </Grid>
                                                                        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                            <IconButton size="small" onClick={() => removeCrosswordWord(comp.id, wIdx)} sx={{ color: '#ef4444' }}>
                                                                                <Trash2 size={16} />
                                                                            </IconButton>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Box>
                                                            ))}

                                                            <Button
                                                                fullWidth
                                                                variant="outlined"
                                                                startIcon={<Plus size={16} />}
                                                                onClick={() => addCrosswordWord(comp.id)}
                                                                sx={{
                                                                    mt: 1, borderStyle: 'dashed', borderColor: 'rgba(168, 85, 247, 0.3)',
                                                                    color: '#a855f7', textTransform: 'none', fontWeight: 700
                                                                }}
                                                            >
                                                                AGREGAR PALABRA AL CRUCIGRAMA
                                                            </Button>
                                                        </Box>
                                                    </Collapse>
                                                </Box>
                                            </Grid>

                                            {/* Actions */}
                                            < Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column', gap: 2, position: 'sticky', top: 24 }}>
                                                <TextField
                                                    fullWidth
                                                    label="URL Imagen Principal"
                                                    value={comp.image}
                                                    onChange={(e) => handleUpdate(comp.id, 'image', e.target.value)}
                                                    size="small"
                                                    variant="filled"
                                                    InputProps={{
                                                        style: { fontSize: '0.7rem', color: '#a1a1aa' }
                                                    }}
                                                    sx={{
                                                        '& .MuiFilledInput-root': {
                                                            borderRadius: '8px',
                                                            bgcolor: 'rgba(255,255,255,0.03)',
                                                            '&:hover': { bgcolor: 'rgba(255,255,255,0.06)' }
                                                        },
                                                        '& .MuiInputLabel-root': { color: '#71717a' },
                                                        '& .MuiInputLabel-root.Mui-focused': { color: '#a855f7' }
                                                    }}
                                                />

                                                <Button
                                                    fullWidth
                                                    variant="contained"
                                                    onClick={() => saveChanges(comp)}
                                                    startIcon={<Save size={18} />}
                                                    sx={{
                                                        py: 2,
                                                        bgcolor: '#a855f7',
                                                        color: 'white',
                                                        fontWeight: 900,
                                                        borderRadius: '12px',
                                                        fontSize: '0.85rem',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: 1,
                                                        boxShadow: '0 8px 20px -5px rgba(168,85,247,0.4)',
                                                        '&:hover': { bgcolor: '#9333ea', boxShadow: '0 10px 25px -5px rgba(168,85,247,0.6)', transform: 'translateY(-1px)' }
                                                    }}
                                                >
                                                    Actualizar Cambios
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            ))
                            }
                        </Grid >
                    )}
                </Container >
            </main >

            {/* --- GLOBAL SUCCESS MESSAGE (FIXED) --- */}
            {
                message && (
                    <Box sx={{ position: 'fixed', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 9999 }}>
                        <Paper sx={{
                            px: 4, py: 2,
                            bgcolor: '#a855f7',
                            color: 'white',
                            fontWeight: 900,
                            borderRadius: '50px',
                            boxShadow: '0 10px 40px rgba(168,85,247,0.5)',
                            border: '2px solid rgba(255,255,255,0.2)',
                            textAlign: 'center',
                            fontSize: '0.85rem',
                            whiteSpace: 'nowrap'
                        }}>
                            {message}
                        </Paper>
                    </Box>
                )
            }
        </Box >
    );
};

export default AdminPanel;
