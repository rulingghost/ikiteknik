import React, { useState, useMemo } from 'react';
import { Search, Clock, User, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';
import { useData } from '../context/DataContext';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';
import SEO from '../components/SEO';

const Articles = () => {
    const { articles, loading } = useData();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = useMemo(() => {
        const cats = ['All', ...new Set(articles.map(a => a.category))];
        return cats;
    }, [articles]);

    const filteredArticles = useMemo(() => {
        return articles.filter(article => {
            const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [articles, searchTerm, selectedCategory]);

    const featuredArticle = articles[0];

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-rose-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-600 font-medium">Makaleler yükleniyor...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-16 bg-slate-50 min-h-screen">
            <SEO 
                title="Blog & Makaleler" 
                description="3D tasarım, yazılım ve mühendislik alanında güncel makaleler, teknik ipuçları ve sektör haberleri."
                keywords="blog, makaleler, 3d tasarım, yazılım, autocad, solidworks"
            />

            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="max-w-3xl mb-16 animate-slide-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 rounded-full border border-rose-100 mb-6">
                        <Sparkles size={16} className="text-rose-600" />
                        <span className="text-rose-600 text-xs font-bold tracking-widest uppercase">Blog & İçerikler</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
                        Makaleler & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600">İpuçları</span>
                    </h1>
                    <p className="text-slate-500 text-lg leading-relaxed">
                        3D tasarım, yazılım ve mühendislik dünyasından güncel içerikler.
                    </p>
                </div>

                {/* Featured Article */}
                {featuredArticle && (
                    <div className="mb-16 group bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-slate-200 animate-slide-up">
                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                                <img 
                                    src={featuredArticle.image} 
                                    alt={featuredArticle.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1.5 bg-rose-600 text-white text-xs font-bold rounded-lg shadow-lg">
                                        ⭐ Öne Çıkan
                                    </span>
                                </div>
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <span className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-3">
                                    {featuredArticle.category}
                                </span>
                                <h2 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-rose-600 transition-colors">
                                    {featuredArticle.title}
                                </h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {featuredArticle.excerpt}
                                </p>
                                <div className="flex items-center gap-6 text-sm text-slate-400 mb-6">
                                    <div className="flex items-center gap-2">
                                        <User size={16} />
                                        <span>{featuredArticle.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} />
                                        <span>{featuredArticle.read_time}</span>
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 text-rose-600 font-bold hover:gap-3 transition-all">
                                    Devamını Oku <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Search & Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-12 animate-fade-in">
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Makale ara..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-6 py-4 bg-white rounded-2xl border border-slate-200 focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 transition-all shadow-sm"
                        />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-4 rounded-2xl font-bold text-sm transition-all ${
                                    selectedCategory === cat
                                        ? 'bg-slate-900 text-white shadow-lg'
                                        : 'bg-white text-slate-600 border border-slate-200 hover:border-rose-500 hover:text-rose-600'
                                }`}
                            >
                                {cat === 'All' ? 'Tümü' : cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map((article, index) => (
                        <div 
                            key={article.id} 
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-200 hover:-translate-y-2 animate-slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="aspect-[16/10] overflow-hidden relative">
                                <img 
                                    src={article.image} 
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
                                    {article.category}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mt-3 mb-3 group-hover:text-rose-600 transition-colors line-clamp-2">
                                    {article.title}
                                </h3>
                                <p className="text-slate-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-100">
                                    <span className="flex items-center gap-1">
                                        <User size={14} /> {article.author}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={14} /> {article.read_time}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredArticles.length === 0 && (
                    <div className="text-center py-16 bg-white rounded-2xl border-2 border-dashed border-slate-200">
                        <Search className="mx-auto mb-4 text-slate-300" size={64} />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Sonuç Bulunamadı</h3>
                        <p className="text-slate-500">Arama kriterlerinize uygun makale bulunmuyor.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Articles;
