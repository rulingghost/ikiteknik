import React, { useState } from 'react';
import { Award, Target, CheckCircle, Globe, ChevronRight, TrendingUp, Zap, Heart, Maximize2 } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import { Link } from 'react-router-dom';
import ImageLightbox from '../components/ImageLightbox';
import SEO from '../components/SEO';

const About = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const teamImages = [
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
        'https://images.unsplash.com/photo-1560250097-0b93528c311a',
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
        'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    ];

    const facilityImages = [
        'https://images.unsplash.com/photo-1497366216548-37526070297c',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
    ];

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    return (
        <div className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen font-sans relative overflow-hidden">
            <SEO 
                title="Hakkımızda" 
                description="ikiteknik Bilişim: 2008'den beri Ankara'da teknoloji eğitiminin öncüsü. Uzman kadro, modern tesisler ve %95 istihdam oranıyla kariyerinizi güçlendiriyoruz."
                keywords="hakkimizda, ikiteknik, bilisim egitim, ankara kurs merkezi, teknoloji egitimi"
            />
            {/* Animated background */}
            <div 
                className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-rose-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse-slow"
            />
            
            <div className="container mx-auto px-6 relative z-10">
                
                {/* Hero with Images */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div
                        className="animate-fade-in"
                    >
                        <div className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white text-[10px] font-bold tracking-widest uppercase mb-4 shadow-lg">
                            Hakkımızda
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Geleceği Birlikte <br/> <span className="text-rose-600">İnşa Ediyoruz.</span>
                        </h1>
                        <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                            2008 yılından bu yana Ankara'nın kalbinde, teknolojinin ve tasarımın sınırlarını zorlayan nesiller yetiştiriyor, hayallerinizi mesleğe dönüştürüyoruz.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 max-w-md mb-8">
                             <div 
                                className="bg-white p-4 rounded-xl border border-slate-100 shadow-lg cursor-pointer hover:scale-105 transition-transform"
                                style={{ transformStyle: "preserve-3d" }}
                             >
                                 <div 
                                    className="text-2xl font-black text-slate-900 mb-1 animate-pulse"
                                 >
                                    15+
                                 </div>
                                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Yıllık Tecrübe</div>
                             </div>
                             <div 
                                className="bg-white p-4 rounded-xl border border-slate-100 shadow-lg cursor-pointer hover:scale-105 transition-transform"
                                style={{ transformStyle: "preserve-3d" }}
                             >
                                 <div 
                                    className="text-2xl font-black text-slate-900 mb-1 animate-pulse"
                                    style={{ animationDelay: '0.5s' }}
                                 >
                                    5000+
                                 </div>
                                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mezun Öğrenci</div>
                             </div>
                        </div>

                        <Link
                            to="/egitimlerimiz"
                            className="inline-flex bg-gradient-to-r from-rose-600 to-rose-700 text-white px-8 py-3 rounded-xl text-sm font-bold shadow-xl shadow-rose-500/30 items-center gap-2 hover:scale-105 active:scale-95 hover:translate-x-1 transition-all"
                        >
                            Eğitimleri İncele <ChevronRight size={16} />
                        </Link>
                    </div>
                    
                    {/* Image Grid */}
                    <div 
                        className="relative animate-fade-in"
                        style={{ animationDelay: '0.2s' }}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div 
                                className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl hover:scale-105 hover:rotate-2 transition-transform duration-300"
                            >
                                <OptimizedImage src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" className="w-full h-full object-cover" alt="Team 1" />
                            </div>
                            <div 
                                className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl mt-8 hover:scale-105 hover:-rotate-2 transition-transform duration-300"
                            >
                                <OptimizedImage src="https://images.unsplash.com/photo-1531482615713-2afd69097998" className="w-full h-full object-cover" alt="Team 2" />
                            </div>
                        </div>
                        
                        {/* Floating Badge */}
                        <div 
                            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-slate-50 hover:scale-110 hover:rotate-3 transition-all duration-300 animate-scale-in"
                            style={{ animationDelay: '0.5s' }}
                        >
                            <div className="flex items-center gap-4">
                                <div 
                                    className="bg-rose-50 p-3 rounded-xl text-rose-600 animate-spin-slow"
                                >
                                    <Award size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 text-sm">Kalite Ödüllü</div>
                                    <div className="text-[10px] text-slate-400">Eğitim Merkezi</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features / Mission Grid with Images */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                     <div 
                        className="bg-white rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all overflow-hidden group cursor-pointer animate-slide-up"
                     >
                         <div className="h-32 relative overflow-hidden">
                             <OptimizedImage 
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
                                className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                                alt="Mission" 
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                         </div>
                         <div className="p-8">
                            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                                <Target size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Misyonumuz</h3>
                            <p className="text-slate-500 text-xs leading-relaxed">
                                Bilişim ve tasarım dünyasındaki yenilikleri yakından takip ederek, öğrencilerimize uluslararası standartlarda eğitim sunmak.
                            </p>
                         </div>
                     </div>

                     <div 
                        className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] border border-slate-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all text-white relative overflow-hidden group cursor-pointer animate-slide-up"
                        style={{ animationDelay: '0.1s' }}
                     >
                         <div className="h-32 relative overflow-hidden">
                             <OptimizedImage 
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" 
                                className="w-full h-full object-cover opacity-30 transition-transform group-hover:scale-110" 
                                alt="Vision" 
                             />
                         </div>
                         <div className="p-8 relative z-10">
                            <div className="w-10 h-10 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6">
                                <Globe size={20} />
                            </div>
                            <h3 className="text-lg font-bold mb-3">Vizyonumuz</h3>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                Türkiye'nin teknoloji ve tasarım alanındaki lider eğitim kurumu olmak ve global standartları yakalamak.
                            </p>
                         </div>
                         <div 
                            className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse-slow"
                         />
                     </div>

                     <div 
                        className="bg-white rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all overflow-hidden group cursor-pointer animate-slide-up"
                        style={{ animationDelay: '0.2s' }}
                     >
                         <div className="h-32 relative overflow-hidden">
                             <OptimizedImage 
                                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c" 
                                className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                                alt="Values" 
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                         </div>
                         <div className="p-8">
                            <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                                <CheckCircle size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Değerlerimiz</h3>
                            <ul className="space-y-2">
                                {['Öğrenci Odaklılık', 'Sürekli Gelişim', 'Etik Değerler', 'Yenilikçilik'].map((item, i) => (
                                    <li 
                                        key={i}
                                        className="flex items-center gap-2 text-slate-500 text-xs font-semibold animate-fade-in"
                                        style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                                    >
                                        <div 
                                            className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
                                            style={{ animationDelay: `${i * 0.2}s` }}
                                        /> 
                                        {item}
                                    </li>
                                ))}
                            </ul>
                         </div>
                     </div>
                </div>

                {/* Facilities Gallery */}
                <div
                    className="mb-16 animate-fade-in"
                >
                    <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">Modern Tesislerimiz</h2>
                    <p className="text-slate-500 text-sm text-center mb-8">Son teknoloji ekipmanlarla donatılmış eğitim ortamları</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {facilityImages.map((img, i) => (
                            <div
                                key={i}
                                onClick={() => openLightbox(i)}
                                className="aspect-square rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:scale-105 hover:rotate-2 transition-all duration-300 animate-scale-in group relative"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <OptimizedImage src={img} className="w-full h-full object-cover" alt={`Facility ${i + 1}`} />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="bg-white/20 p-3 rounded-full backdrop-blur-md border border-white/30 text-white">
                                        <Maximize2 size={24} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team Section with Photos */}
                <div className="bg-white rounded-[2rem] p-10 border border-slate-100 text-center shadow-xl animate-fade-in">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">Eğitmen Kadromuz</h2>
                        <p className="text-slate-500 text-sm mb-8">Sektörün içinden gelen uzmanlarla çalışıyoruz.</p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                        {teamImages.map((img, i) => (
                            <div 
                                key={i}
                                className="flex flex-col items-center gap-2 group cursor-pointer animate-scale-in"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white group-hover:ring-rose-500 hover:scale-110 hover:-translate-y-2 transition-all duration-300">
                                     <OptimizedImage src={img} alt={`Instructor ${i + 1}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <div 
                                    className="h-1 bg-rose-500 rounded-full w-0 group-hover:w-8 transition-all"
                                />
                            </div>
                        ))}
                        <button 
                            className="w-20 h-20 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-900 hover:scale-110 hover:rotate-45 transition-all shadow-lg"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div
                        className="flex justify-center gap-8 text-center"
                    >
                        {[
                            { icon: <Heart size={20} />, value: '98%', label: 'Memnuniyet' },
                            { icon: <TrendingUp size={20} />, value: '85%', label: 'İstihdam' },
                            { icon: <Zap size={20} />, value: '100+', label: 'Şirket Ortağı' }
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center gap-2 hover:scale-110 hover:-translate-y-1 transition-transform cursor-pointer"
                            >
                                <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center">
                                    {stat.icon}
                                </div>
                                <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox for Facilities */}
            {lightboxOpen && (
                <ImageLightbox
                    images={facilityImages}
                    currentIndex={currentImageIndex}
                    onClose={() => setLightboxOpen(false)}
                    onNext={(step = 1) => {
                        const newIndex = (currentImageIndex + step + facilityImages.length) % facilityImages.length;
                        setCurrentImageIndex(newIndex);
                    }}
                    onPrev={() => {
                        const newIndex = (currentImageIndex - 1 + facilityImages.length) % facilityImages.length;
                        setCurrentImageIndex(newIndex);
                    }}
                />
            )}
        </div>
    );
};

export default About;
