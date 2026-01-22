import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
    LayoutDashboard, 
    Image, 
    ShoppingBag, 
    BookOpen, 
    GraduationCap, 
    Calendar, 
    MessageSquare, 
    LogOut,
    Home
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
        { icon: Image, label: 'Galeri', path: '/admin/galeri' },
        { icon: ShoppingBag, label: 'Mağaza', path: '/admin/satis' },
        { icon: BookOpen, label: 'Makaleler', path: '/admin/makaleler' },
        { icon: GraduationCap, label: 'Eğitimler', path: '/admin/egitimler' },
        { icon: Calendar, label: 'Takvim', path: '/admin/takvim' },
        { icon: MessageSquare, label: 'Mesajlar', path: '/admin/mesajlar' },
    ];

    return (
        <div className="w-64 bg-slate-900 min-h-screen flex flex-col">
            <div className="p-6">
                <h1 className="text-white text-xl font-bold tracking-wider">İKİ TEKNİK</h1>
                <p className="text-slate-400 text-xs">Yönetim Paneli</p>
            </div>

            <nav className="flex-1 mt-6 px-4">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === '/admin'}
                        className={({ isActive }) => `
                            flex items-center gap-3 px-4 py-3 rounded-xl transition-all mb-1
                            ${isActive 
                                ? 'bg-rose-600 text-white shadow-lg' 
                                : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
                        `}
                    >
                        <item.icon size={20} />
                        <span className="font-medium">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-slate-800">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-3 w-full px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-xl transition-all mb-1"
                >
                    <Home size={20} />
                    <span className="font-medium">Siteye Dön</span>
                </button>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-4 py-3 text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all"
                >
                    <LogOut size={20} />
                    <span className="font-medium">Çıkış Yap</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
