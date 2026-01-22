import React from 'react';
import { useData } from '../../context/DataContext';
import { 
    Users, 
    Image, 
    ShoppingBag, 
    MessageSquare, 
    BookOpen, 
    Calendar,
    TrendingUp,
    Eye,
    Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const { gallery, courses, articles, events, products, submissions, loading } = useData();

    const stats = [
        { 
            label: 'Galeri Görselleri', 
            value: gallery.length, 
            icon: Image, 
            color: 'from-blue-500 to-blue-600',
            link: '/admin/galeri'
        },
        { 
            label: 'Kurslar', 
            value: courses.length, 
            icon: BookOpen, 
            color: 'from-purple-500 to-purple-600',
            link: '/admin/egitimler'
        },
        { 
            label: 'Makaleler', 
            value: articles.length, 
            icon: Award, 
            color: 'from-green-500 to-green-600',
            link: '/admin/makaleler'
        },
        { 
            label: 'Etkinlikler', 
            value: events.length, 
            icon: Calendar, 
            color: 'from-orange-500 to-orange-600',
            link: '/admin/takvim'
        },
        { 
            label: 'Ürünler', 
            value: products.length, 
            icon: ShoppingBag, 
            color: 'from-pink-500 to-pink-600',
            link: '/admin/satis'
        },
        { 
            label: 'Mesajlar', 
            value: submissions.length, 
            icon: MessageSquare, 
            color: 'from-rose-500 to-rose-600',
            link: '/admin/mesajlar'
        }
    ];

    const recentActivities = [
        { type: 'gallery', text: `${gallery.length} galeri görseli mevcut`, time: 'Şimdi' },
        { type: 'course', text: `${courses.length} aktif kurs`, time: '1 saat önce' },
        { type: 'message', text: `${submissions.length} yeni mesaj`, time: '2 saat önce' }
    ];

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-16 h-16 border-4 border-rose-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
                <p className="text-slate-500">İkiteknik & 3D3P Yönetim Paneli</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <Link
                            key={index}
                            to={stat.link}
                            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:scale-105 hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl shadow-lg`}>
                                    <Icon className="text-white" size={24} />
                                </div>
                                <TrendingUp className="text-green-500" size={20} />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 mb-2">{stat.value}</h3>
                            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                        </Link>
                    );
                })}
            </div>

            {/* Recent Activity & Quick Actions */}
            <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Eye className="text-rose-600" />
                        Son Aktiviteler
                    </h2>
                    <div className="space-y-4">
                        {recentActivities.map((activity, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                                <div className="w-2 h-2 bg-rose-600 rounded-full mt-2"></div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-slate-900">{activity.text}</p>
                                    <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 shadow-lg text-white">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Users className="text-rose-400" />
                        Hızlı İşlemler
                    </h2>
                    <div className="space-y-3">
                        <Link
                            to="/admin/galeri"
                            className="block p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all border border-white/10"
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-medium">Yeni Görsel Ekle</span>
                                <Image size={20} />
                            </div>
                        </Link>
                        <Link
                            to="/admin/egitimler"
                            className="block p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all border border-white/10"
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-medium">Yeni Kurs Ekle</span>
                                <BookOpen size={20} />
                            </div>
                        </Link>
                        <Link
                            to="/admin/makaleler"
                            className="block p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all border border-white/10"
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-medium">Yeni Makale Yaz</span>
                                <Award size={20} />
                            </div>
                        </Link>
                        <Link
                            to="/admin/mesajlar"
                            className="block p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all border border-white/10"
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-medium">Mesajları Görüntüle</span>
                                <MessageSquare size={20} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* System Info */}
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <p className="text-sm text-blue-900 font-medium">
                        Sistem aktif ve çalışıyor. Tüm veriler Supabase üzerinden senkronize ediliyor.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
