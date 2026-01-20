import React, { useState, memo } from 'react';
import { Camera, Box, Layers, Monitor, ChevronRight } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import SEO from '../components/SEO';

const categories = [
    { id: 'all', label: 'Tümü', icon: Layers },
    { id: 'scan', label: '3D Tarama', icon: Camera, folder: '3d tarama' },
    { id: 'print', label: '3D Baskı', icon: Box, folder: '3D Baskıya Uygun Modelleme' },
    { id: 'reverse', label: 'Tersine Müh.', icon: Monitor, folder: 'Tersine Mühendislik (Reverse Engineering)' },
    { id: 'industrial', label: 'Endüstriyel', icon: Box, folder: 'Endüstriyel ve Teknik 3D Modelleme' },
    { id: 'product', label: 'Ürün Modelleme', icon: Box, folder: 'ürün 3d modelleme' },
];

// Sample images mapping (Simulated based on file existence)
const images = [
    // 3D Scanning
    { cat: 'scan', src: '/assets/images/kullanilan_gorseller/3d tarama/WhatsApp Image 2026-01-20 at 16.18.30 (1).jpeg' },
    { cat: 'scan', src: '/assets/images/kullanilan_gorseller/3d tarama/WhatsApp Image 2026-01-20 at 16.18.30 (2).jpeg' },
    { cat: 'scan', src: '/assets/images/kullanilan_gorseller/3d tarama/WhatsApp Image 2026-01-20 at 16.18.30 (3).jpeg' },
    { cat: 'scan', src: '/assets/images/kullanilan_gorseller/3d tarama/WhatsApp Image 2026-01-20 at 16.18.30 (4).jpeg' },
    { cat: 'scan', src: '/assets/images/kullanilan_gorseller/3d tarama/WhatsApp Image 2026-01-20 at 16.18.30 (5).jpeg' },
    { cat: 'scan', src: '/assets/images/kullanilan_gorseller/3d tarama/WhatsApp Image 2026-01-20 at 16.18.30 (6).jpeg' },
    
    // 3D Print
    { cat: 'print', src: '/assets/images/kullanilan_gorseller/3D Baskıya Uygun Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (22).jpeg' },
    { cat: 'print', src: '/assets/images/kullanilan_gorseller/3D Baskıya Uygun Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (23).jpeg' },
    { cat: 'print', src: '/assets/images/kullanilan_gorseller/3D Baskıya Uygun Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (24).jpeg' },
    { cat: 'print', src: '/assets/images/kullanilan_gorseller/3D Baskıya Uygun Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (25).jpeg' },
    { cat: 'print', src: '/assets/images/kullanilan_gorseller/3D Baskıya Uygun Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (28).jpeg' },

    // Reverse Engineering
    { cat: 'reverse', src: '/assets/images/kullanilan_gorseller/Tersine Mühendislik (Reverse Engineering)/WhatsApp Image 2026-01-20 at 16.18.30 (29).jpeg' },
    { cat: 'reverse', src: '/assets/images/kullanilan_gorseller/Tersine Mühendislik (Reverse Engineering)/WhatsApp Image 2026-01-20 at 16.18.30 (30).jpeg' },
    { cat: 'reverse', src: '/assets/images/kullanilan_gorseller/Tersine Mühendislik (Reverse Engineering)/WhatsApp Image 2026-01-20 at 16.18.30 (31).jpeg' },

    // Industrial
    { cat: 'industrial', src: '/assets/images/kullanilan_gorseller/Endüstriyel ve Teknik 3D Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (19).jpeg' },
    { cat: 'industrial', src: '/assets/images/kullanilan_gorseller/Endüstriyel ve Teknik 3D Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (20).jpeg' },
    { cat: 'industrial', src: '/assets/images/kullanilan_gorseller/Endüstriyel ve Teknik 3D Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (21).jpeg' },

    // Product
    { cat: 'product', src: '/assets/images/kullanilan_gorseller/ürün 3d modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (14).jpeg' },
    { cat: 'product', src: '/assets/images/kullanilan_gorseller/ürün 3d modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (15).jpeg' },
    { cat: 'product', src: '/assets/images/kullanilan_gorseller/ürün 3d modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (16).jpeg' },
    { cat: 'product', src: '/assets/images/kullanilan_gorseller/ürün 3d modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (17).jpeg' },
];

const Gallery3D = memo(() => {
    const [activeCat, setActiveCat] = useState('all');

    const filteredImages = activeCat === 'all' 
        ? images 
        : images.filter(img => img.cat === activeCat);

    return (
        <div className="bg-[#0B0F19] min-h-screen">
             <SEO 
                title="3D Üretim Galerisi | 3D3P" 
                description="Endüstriyel 3D tarama, modelleme ve baskı projelerimizden örnekler."
            />

            {/* Header */}
            <div className="pt-24 pb-12 bg-gradient-to-b from-[#151E32] to-[#0B0F19] border-b border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-[#1877F2] font-black tracking-widest text-xs uppercase mb-4 block animate-fade-in">PORTFOLYO</span>
                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 animate-fade-in delay-100">
                        Üretim <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1877F2] to-cyan-400">Galerisi</span>
                    </h1>
                    
                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 animate-fade-in delay-200">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCat(cat.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                                    activeCat === cat.id 
                                    ? 'bg-[#1877F2] text-white shadow-lg shadow-[#1877F2]/30 scale-105' 
                                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                                }`}
                            >
                                <cat.icon size={14} />
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="container mx-auto px-6 py-12">
                <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                    {filteredImages.map((img, idx) => (
                        <div key={idx} className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-[#151E32] animate-fade-in-up">
                            <OptimizedImage 
                                src={img.src} 
                                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 pointer-events-none">
                                <div>
                                    <span className="text-[#1877F2] font-bold text-[10px] uppercase tracking-widest mb-1 block">
                                        {categories.find(c => c.id === img.cat)?.label}
                                    </span>
                                    <span className="text-white font-bold text-sm flex items-center gap-1">
                                        İncele <ChevronRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {filteredImages.length === 0 && (
                    <div className="text-center py-24 text-slate-500">
                        Bu kategoride henüz görsel bulunmuyor.
                    </div>
                )}
            </div>
        </div>
    );
});

export default Gallery3D;
