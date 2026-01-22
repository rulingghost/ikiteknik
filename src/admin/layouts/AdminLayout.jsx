import React, { useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
    LayoutDashboard, 
    Image, 
    ShoppingBag, 
    MessageSquare, 
    BookOpen, 
    Calendar,
    FileText,
    LogOut,
    Menu,
    X
} from 'lucide-react';

const AdminLayout = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    const menuItems = [
        { path: '/admin', icon: LayoutDashboard, label: 'Dashboard', exact: true },
        { path: '/admin/galeri', icon: Image, label: 'Galeri' },
        { path: '/admin/satis', icon: ShoppingBag, label: 'Mağaza' },
        { path: '/admin/makaleler', icon: FileText, label: 'Makaleler' },
        { path: '/admin/egitimler', icon: BookOpen, label: 'Eğitimler' },
        { path: '/admin/takvim', icon: Calendar, label: 'Takvim' },
        { path: '/admin/mesajlar', icon: MessageSquare, label: 'Mesajlar' },
    ];

    const isActive = (path, exact = false) => {
        if (exact) {
            return location.pathname === path;
        }
        return location.pathname.startsWith(path);
    };

    return (
        <div className="min-h-screen bg-slate-100 flex">
            {/* Sidebar */}
            <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                <div className="h-full flex flex-col">
                    {/* Logo */}
                    <div className="p-6 border-b border-white/10">
                        <div className="flex items-center justify-between">
                                <div>
                                <h1 className="text-xl font-black tracking-tighter">İKİTEKNİK</h1>
                                <p className="text-xs text-slate-400 mt-1">Yönetim Paneli</p>
                            </div>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="lg:hidden text-white"
                            >
                                <X size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const active = isActive(item.path, item.exact);
                            
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setSidebarOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                                        active
                                            ? 'bg-rose-600 text-white shadow-lg'
                                            : 'text-slate-300 hover:bg-white/10 hover:text-white'
                                    }`}
                                >
                                    <Icon size={20} />
                                    <span>{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User Info & Logout */}
                    <div className="p-4 border-t border-white/10">
                        <div className="flex items-center gap-3 mb-4 px-4 py-3 bg-white/5 rounded-xl">
                            <div className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center font-bold">
                                {user?.email?.[0]?.toUpperCase() || 'A'}
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold">Admin</p>
                                <p className="text-xs text-slate-400">{user?.email || 'admin@ikiteknik.com'}</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white rounded-xl font-bold transition-all"
                        >
                            <LogOut size={20} />
                            Çıkış Yap
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen">
                {/* Mobile Header */}
                <header className="lg:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between sticky top-0 z-40">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                        <Menu size={24} />
                    </button>
                    <h1 className="font-bold text-slate-900">İkiteknik Admin</h1>
                    <div className="w-10"></div> {/* Spacer */}
                </header>

                {/* Page Content */}
                <main className="flex-1">
                    <Outlet />
                </main>

                {/* Footer */}
                <footer className="bg-white border-t border-slate-200 p-4 text-center text-sm text-slate-500">
                    © 2024 İkiteknik Bilişim & 3D3P Technology. Tüm hakları saklıdır.
                </footer>
            </div>

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
};

export default AdminLayout;
