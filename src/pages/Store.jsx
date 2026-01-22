import React, { memo, useState } from 'react';
import { ShoppingBag, Printer, Scan, Droplet, ArrowRight, Star, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import SEO from '../components/SEO';

const ProductCard = ({ product }) => (
    <div className="group bg-[#151E32] rounded-2xl overflow-hidden border border-white/5 hover:border-[#1877F2]/50 transition-all hover:-translate-y-2">
        <div className="relative aspect-square overflow-hidden bg-white/5">
             <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
             />
             {product.stock < 5 && product.stock > 0 && (
                 <div className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                     Son {product.stock} Adet
                 </div>
             )}
             {product.stock === 0 && (
                 <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                     <span className="text-white font-bold text-lg">Stokta Yok</span>
                 </div>
             )}
        </div>
        <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{product.category}</span>
                <div className="flex gap-0.5 text-yellow-500">
                    {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                </div>
            </div>
            <h3 className="text-white font-bold text-lg mb-2 leading-tight group-hover:text-[#1877F2] transition-colors">
                {product.name}
            </h3>
            <p className="text-slate-400 text-sm mb-4 line-clamp-2">{product.description}</p>
            <div className="flex items-center justify-between mt-auto">
                 <span className="text-2xl font-bold text-white">
                     {product.price} ₺
                 </span>
                 <Link 
                    to="/iletisim"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#1877F2] transition-colors"
                 >
                     <ArrowRight size={18} />
                 </Link>
            </div>
        </div>
    </div>
);

const Store = memo(() => {
    const { products, loading } = useData();
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = selectedCategory === 'All' 
        ? products 
        : products.filter(p => p.category === selectedCategory);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0B0F19]">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-[#1877F2] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-white font-medium">Ürünler yükleniyor...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#0B0F19] min-h-screen pb-24 pt-32">
            <SEO 
                title="3D Yazıcı & Tarayıcı Satış | 3D3P Store" 
                description="Endüstriyel 3D yazıcılar, tarayıcılar ve sarf malzemeleri. Profesyonel ekipman satışı."
            />
            
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="max-w-3xl mb-16 animate-slide-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1877F2]/10 border border-[#1877F2]/20 rounded-full mb-6">
                        <ShoppingBag size={16} className="text-[#1877F2]" />
                        <span className="text-[#1877F2] text-xs font-bold tracking-widest uppercase">3D3P Store</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        Profesyonel <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1877F2] to-cyan-400">Ekipmanlar</span>
                    </h1>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Endüstriyel kalitede 3D yazıcılar, tarayıcılar ve sarf malzemeleri.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3 mb-12 animate-fade-in">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                                selectedCategory === cat
                                    ? 'bg-[#1877F2] text-white shadow-lg shadow-[#1877F2]/30'
                                    : 'bg-white/5 text-slate-400 border border-white/10 hover:border-[#1877F2] hover:text-[#1877F2]'
                            }`}
                        >
                            {cat === 'All' ? 'Tümü' : cat}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredProducts.map((product, index) => (
                        <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-16 bg-white/5 border border-white/10 rounded-2xl">
                        <Filter className="mx-auto mb-4 text-slate-600" size={64} />
                        <h3 className="text-xl font-bold text-white mb-2">Ürün Bulunamadı</h3>
                        <p className="text-slate-400">Bu kategoride henüz ürün bulunmuyor.</p>
                    </div>
                )}

                {/* CTA */}
                <div className="bg-gradient-to-br from-[#1877F2] to-cyan-500 rounded-[3rem] p-12 text-center text-white animate-slide-up">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Özel Ekipman Talebi?</h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Aradığınız ürünü bulamadınız mı? Özel ihtiyaçlarınız için bizimle iletişime geçin.
                    </p>
                    <Link
                        to="/iletisim"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1877F2] font-bold rounded-xl hover:scale-105 transition-transform shadow-xl"
                    >
                        Bize Ulaşın <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
});

export default Store;
