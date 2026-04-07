import React, { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';

const AuthWrapper = ({ children }) => {
    const [password, setPassword] = useState('');
    const [isAuth, setIsAuth] = useState(() => {
        return localStorage.getItem('is_admin_auth') === 'true';
    });
    const [error, setError] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple password matching for demo purposes
        if (password === 'admin2025') {
            setIsAuth(true);
            setError(false);
            localStorage.setItem('is_admin_auth', 'true');
        } else {
            setError(true);
        }
    };

    if (!isAuth) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-tech-black text-white p-4">
                <div className="glass-morphism w-full max-w-md p-10 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.1)] text-center space-y-8">
                    <div className="w-20 h-20 bg-tech-purple/20 rounded-2xl flex items-center justify-center text-tech-purple mx-auto">
                        <Lock className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-3xl font-black italic uppercase tracking-tighter">Zona Restringida</h2>
                        <p className="text-gray-400 text-sm font-medium tracking-wide">Ingresa la clave de acceso de AulaClic</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'} rounded-2xl p-4 text-center text-xl tracking-[0.5em] focus:border-tech-purple outline-none transition-all placeholder:tracking-normal placeholder:text-gray-600`}
                        />
                        {error && <p className="text-red-500 text-xs font-black uppercase tracking-widest">Credenciales incorrectas. Verifique e intente nuevamente.</p>}
                        <button
                            type="submit"
                            className="w-full py-4 bg-tech-purple hover:bg-tech-purple-dark text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-lg shadow-tech-purple/20 transition-all active:scale-95"
                        >
                            Acceder al Panel
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return children;
};

export default AuthWrapper;
