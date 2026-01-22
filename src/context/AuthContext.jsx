import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Sayfa yenilendiğinde girişi hatırla
        const savedUser = localStorage.getItem('admin_session');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        // Senin istediğin basit kontrol
        if (email === 'admin' && password === 'admin123') {
            const adminUser = { id: 1, email: 'admin', role: 'admin' };
            setUser(adminUser);
            localStorage.setItem('admin_session', JSON.stringify(adminUser));
            return { success: true };
        } else {
            throw new Error('Hatalı kullanıcı adı veya şifre!');
        }
    };

    const logout = async () => {
        setUser(null);
        localStorage.removeItem('admin_session');
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
