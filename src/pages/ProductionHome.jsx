import React, { memo } from 'react';
import { ArrowRight, ChevronRight, Zap, Play, Box, Layers, Monitor, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';
import SEO from '../components/SEO';

const ProductionHero = memo(() => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#0B0F19] overflow-hidden">
        {/* Animated BG */}
        <div className="absolute inset-0 z-0">
             <OptimizedImage 
                 src="/assets/images/kullanilan_gorseller/Endüstriyel ve Teknik 3D Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (21).jpeg"
                 className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
             />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1877F2]/10 rounded-full blur-[120px] animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
             <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1877F2]/10 text-[#1877F2] border border-[#1877F2]/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
                    <Zap size={14} />
                    3D Production Center
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1] tracking-tighter uppercase neon-text animate-slide-up">
                    Geleceği <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1877F2] to-cyan-400">Üret</span>
                </h1>
                
                <p className="text-slate-400 text-xl font-medium mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-slide-up" style={{animationDelay:'0.1s'}}>
                    Endüstriyel 3D Tarama, Modelleme ve Baskı hizmetleri ile sınırları zorlayın. Prototip değil, gelecek üretiyoruz.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{animationDelay:'0.2s'}}>
                    <Link 
                        to="/teklif-al"
                        className="px-8 py-4 bg-[#1877F2] hover:bg-white hover:text-[#0B0F19] text-white rounded-xl font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(24,119,242,0.4)] transition-all flex items-center justify-center gap-3"
                    >
                        Hızlı Teklif Al <Zap size={18} />
                    </Link>
                    <a 
                        href="#services"
                        className="px-8 py-4 border border-white/20 text-white hover:bg-white/10 rounded-xl font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3"
                    >
                        Hizmetleri Keşfet
                    </a>
                </div>
             </div>
             
             {/* 3D Visual Element (Abstract) */}
             <div className="relative hidden lg:block animate-float">
                 <div className="relative w-full aspect-square max-w-md mx-auto">
                     <div className="absolute inset-0 bg-gradient-to-tr from-[#1877F2] to-cyan-500 rounded-full opacity-20 blur-3xl"></div>
                      {/* Using the 3D Printer image as main visual but styled cool */}
                     <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl skew-y-3 hover:skew-y-0 transition-all duration-700 bg-[#151E32]/50 backdrop-blur-sm p-4">
                         <OptimizedImage 
                            src="/assets/images/kullanilan_gorseller/3D Baskıya Uygun Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (27).jpeg"
                            className="w-full h-full object-cover rounded-2xl"
                         />
                         <div className="absolute top-8 right-8 w-20 h-20 border-4 border-[#1877F2] rounded-full animate-spin-slow opacity-50 border-t-transparent" />
                     </div>
                 </div>
             </div>
        </div>
    </section>
  );
});

const ProductionHome = () => {
    return (
        <div className="bg-[#0B0F19] min-h-screen text-white">
            <SEO 
                title="3D Üretim Merkezi | 3D3PRINTER" 
                description="Endüstriyel 3D Baskı, Lazer Tarama ve Tersine Mühendislik Çözümleri. Profesyonel 3D Üretim."
            />
            
            <ProductionHero />

            {/* Quick Stats Strip */}
            <div className="border-y border-white/5 bg-[#0F1420]">
                <div className="container mx-auto px-6 py-12">
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                         {[
                             { lbl: 'Hassasiyet', val: '0.01mm' },
                             { lbl: 'Malzeme', val: '50+' },
                             { lbl: 'Teslimat', val: '24 Saat' },
                             { lbl: 'Memnuniyet', val: '%100' },
                         ].map((s,i) => (
                             <div key={i}>
                                 <div className="text-3xl font-black text-[#1877F2] mb-1 neon-text">{s.val}</div>
                                 <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{s.lbl}</div>
                             </div>
                         ))}
                     </div>
                </div>
            </div>

            {/* Services Grid */}
            <section id="services" className="py-24 bg-[#0B0F19] relative">
               <div className="container mx-auto px-6">
                   <div className="text-center mb-16">
                       <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                           Hizmetlerimiz
                       </h2>
                       <div className="w-20 h-1 bg-[#1877F2] mx-auto shadow-[0_0_15px_#1877F2] rounded-full" />
                   </div>

                   <div className="grid md:grid-cols-3 gap-8">
                       {[
                           { 
                               title: '3D Tarama', 
                               icon: <Target className="text-[#1877F2]" size={32} />,
                               desc: 'Nesnelerinizi mikron hassasiyetinde dijital ortama aktarın.',
                               link: '/3d-tarama',
                               img: '/assets/images/kullanilan_gorseller/3d tarama/WhatsApp Image 2026-01-20 at 16.18.30 (5).jpeg'
                           },
                           { 
                               title: '3D Baskı', 
                               icon: <Layers className="text-[#1877F2]" size={32} />,
                               desc: 'FDM, SLA ve MJF teknolojileri ile fonksiyonel prototipler üretin.',
                               link: '/3d-baski',
                               img: '/assets/images/kullanilan_gorseller/3D Baskıya Uygun Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (22).jpeg'
                           },
                           { 
                               title: '3D Modelleme', 
                               icon: <Box className="text-[#1877F2]" size={32} />,
                               desc: 'Fikirlerinizi üretime hazır profesyonel 3D modellere dönüştürün.',
                               link: '/3d-modelleme',
                               img: '/assets/images/kullanilan_gorseller/Endüstriyel ve Teknik 3D Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (20).jpeg'
                           }
                       ].map((s, i) => (
                           <Link key={i} to={s.link} className="group relative bg-[#151E32] rounded-3xl overflow-hidden border border-white/5 hover:border-[#1877F2]/50 transition-all hover:-translate-y-2">
                               <div className="h-48 overflow-hidden relative">
                                    <OptimizedImage src={s.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#151E32] to-transparent" />
                               </div>
                               <div className="p-8 relative">
                                   <div className="absolute -top-10 right-8 bg-[#151E32] p-4 rounded-2xl border border-white/10 group-hover:border-[#1877F2] transition-colors shadow-xl">
                                       {s.icon}
                                   </div>
                                   <h3 className="text-2xl font-bold uppercase tracking-wide mb-4 group-hover:text-[#1877F2] transition-colors">{s.title}</h3>
                                   <p className="text-slate-400 leading-relaxed mb-6 text-sm">{s.desc}</p>
                                   <div className="text-xs font-bold uppercase tracking-widest text-[#1877F2] flex items-center gap-2">
                                       İncele <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                   </div>
                               </div>
                           </Link>
                       ))}
                   </div>
               </div>
            </section>

             {/* CTA */}
             <section className="py-24 bg-[#0F1420] border-t border-white/5">
                 <div className="container mx-auto px-6 text-center">
                     <h2 className="text-3xl font-black uppercase mb-8">Projeniz Hazır mı?</h2>
                     <p className="text-slate-400 max-w-2xl mx-auto mb-10">
                         Dosyalarınızı yükleyin, anında fiyat alın ve üretim sürecini başlatın.
                     </p>
                     <Link to="/teklif-al" className="inline-flex items-center gap-3 px-10 py-5 bg-[#1877F2] hover:bg-blue-600 text-white font-bold rounded-full uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(24,119,242,0.3)]">
                         Teklif Oluştur <Zap />
                     </Link>
                 </div>
             </section>
        </div>
    );
};

export default ProductionHome;
