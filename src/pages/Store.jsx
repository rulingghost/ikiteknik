import React, { memo } from 'react';
import { ShoppingBag, Printer, Scan, Droplet, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Navbar'; 
import SEO from '../components/SEO';

const ProductCard = ({ title, category, price, image, tag }) => (
    <div className="group bg-[#151E32] rounded-2xl overflow-hidden border border-white/5 hover:border-[#1877F2]/50 transition-all hover:-translate-y-2">
        <div className="relative aspect-square overflow-hidden bg-white/5">
             <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
             />
             {tag && (
                 <div className="absolute top-4 left-4 bg-[#1877F2] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                     {tag}
                 </div>
             )}
        </div>
        <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{category}</span>
                <div className="flex gap-0.5 text-yellow-500">
                    {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                </div>
            </div>
            <h3 className="text-white font-bold text-lg mb-4 leading-tight group-hover:text-[#1877F2] transition-colors">
                {title}
            </h3>
            <div className="flex items-center justify-between mt-auto">
                 <span className="text-xl font-light text-slate-300">
                     {price}
                 </span>
                 <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#1877F2] transition-colors">
                     <ArrowRight size={18} />
                 </button>
            </div>
        </div>
    </div>
);

const Store = memo(() => {
    return (
        <div className="bg-[#0B0F19] min-h-screen pb-24">
            <SEO 
                title="3D Yazıcı & Tarayıcı Satış | 3D3P Store" 
                description="Endüstriyel 3D yazıcılar, tarayıcılar ve sarf malzemeleri. Profesyonel ekipman satışı."
            />
            
            {/* HERO */}
            <div className="pt-32 pb-16 bg-gradient-to-b from-[#151E32] to-[#0B0F19]">
                <div className="container mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1877F2]/10 border border-[#1877F2]/20 rounded-full text-[#1877F2] text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
                        <ShoppingBag size={14} />
                        3D3P STORE
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 animate-fade-in delay-100">
                        Ekipman & <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1877F2] to-cyan-400">Sarf Malzemeler</span>
                    </h1>
                    <p className="text-slate-400 max-w-xl mx-auto text-lg mb-10 animate-fade-in delay-200">
                        Kendi projelerimizde kullandığımız, onaylanmış endüstriyel kalitede ürünler. 
                    </p>
                </div>
            </div>

            {/* CATEGORIES */}
            <div className="container mx-auto px-6 mb-24">
                <div className="grid md:grid-cols-3 gap-6">
                     {[
                         { title: '3D Yazıcılar', icon: <Printer size={32} />, bg: 'bg-blue-500/10', text: 'text-blue-500' },
                         { title: '3D Tarayıcılar', icon: <Scan size={32} />, bg: 'bg-purple-500/10', text: 'text-purple-500' },
                         { title: 'Reçine & Filament', icon: <Droplet size={32} />, bg: 'bg-green-500/10', text: 'text-green-500' },
                     ].map((cat, i) => (
                         <div key={i} className="bg-[#151E32] border border-white/5 p-8 rounded-2xl flex items-center gap-6 hover:bg-[#1a253a] transition-colors cursor-pointer group">
                             <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${cat.bg} ${cat.text} group-hover:scale-110 transition-transform`}>
                                 {cat.icon}
                             </div>
                             <h3 className="text-xl font-bold text-white uppercase tracking-tight">{cat.title}</h3>
                         </div>
                     ))}
                </div>
            </div>

            {/* PRODUCTS GRID */}
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                     <h2 className="text-3xl font-black text-white uppercase tracking-tight">Öne Çıkan Ürünler</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <ProductCard 
                        title="Formlabs Form 3+ SLA Printer"
                        category="3D Yazıcı"
                        price="$3,499"
                        tag="Çok Satan"
                        image="https://images.unsplash.com/photo-1623932612089-6bc242557760?auto=format&fit=crop&q=80&w=800"
                     />
                     <ProductCard 
                        title="EinScan HX El Tipi Tarayıcı"
                        category="3D Tarayıcı"
                        price="$12,000"
                        tag="Endüstriyel"
                        image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                     />
                     <ProductCard 
                        title="Ultimaker S5 Pro Bundle"
                        category="3D Yazıcı"
                        price="$9,900"
                        image="https://images.unsplash.com/photo-1581093196277-9f608ee3d4a9?auto=format&fit=crop&q=80&w=800"
                     />
                     <ProductCard 
                        title="Creality K1 Max Yüksek Hız"
                        category="3D Yazıcı"
                        price="$899"
                        tag="Yeni"
                        image="https://images.unsplash.com/photo-1526663089957-f2aa27d42a80?auto=format&fit=crop&q=80&w=800"
                     />
                     
                     <ProductCard 
                        title="Tough 2000 Reçine (1L)"
                        category="Sarf Malzeme"
                        price="$199"
                        image="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800"
                     />
                     <ProductCard 
                        title="PLA+ Filament (Siyah)"
                        category="Sarf Malzeme"
                        price="$25"
                        tag="Stokta"
                        image="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=800"
                     />
                </div>
                
                <div className="mt-16 p-12 bg-[#151E32] rounded-3xl border border-white/5 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Aradığınız Ürünü Bulamadınız mı?</h3>
                    <p className="text-slate-400 mb-8">Türkiye distribütörü olduğumuz onlarca marka için özel fiyat teklifi isteyin.</p>
                    <Link to="/iletisim" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-bold uppercase tracking-widest hover:bg-[#1877F2] hover:text-white transition-colors">
                        Satış Temsilcisine Bağlan
                    </Link>
                </div>
            </div>
        </div>
    );
});

export default Store;
