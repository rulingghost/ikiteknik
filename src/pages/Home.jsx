import React, { memo } from 'react';
import { ArrowRight, ChevronRight, Zap, Sparkles, Code, Printer, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';
import SEO from '../components/SEO';
import { SITE_DATA } from '../constants'; // Import constants for phone number

const SplitHero = memo(() => {
  const phoneNumber = SITE_DATA.contact.phones[0]; // Get the first phone number
  const cleanPhone = phoneNumber.replace(/\s/g, '');

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row mt-0 md:mt-0 overflow-hidden">
       {/* Left Side: EDUCATION (Light) */}
       <div className="flex-1 relative group overflow-hidden bg-gradient-to-br from-slate-50 via-white to-rose-50 flex items-center justify-center min-h-[50vh] md:min-h-screen border-b md:border-b-0 md:border-r border-slate-200">
           {/* Super Visible Animated Background (KEPT AS IS) */}
           <div className="absolute inset-0 z-0 overflow-hidden">
               <OptimizedImage 
                   src="/assets/images/kullanilan_gorseller/3d tarama/WhatsApp Image 2026-01-20 at 16.18.30 (1).jpeg"
                   className="w-full h-full object-cover opacity-10 grayscale"
               />
               <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-rose-400/40 via-pink-300/30 to-transparent rounded-full blur-3xl animate-float" />
               <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-orange-300/40 via-rose-200/30 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-300/30 to-rose-300/30 rounded-full blur-3xl animate-pulse-slow" />
               <div className="absolute top-32 left-20 w-32 h-32 border-4 border-rose-400/40 rounded-2xl rotate-12 animate-spin-slow" />
               <div className="absolute bottom-40 left-1/3 w-24 h-24 border-4 border-orange-400/40 rounded-full animate-bounce-slow" />
               <div className="absolute top-1/3 right-20 w-28 h-28 border-4 border-pink-400/40 rounded-lg -rotate-45 animate-reverse-spin" />
               <div className="absolute top-20 right-32 w-4 h-4 bg-rose-500/60 rounded-full animate-float" style={{animationDelay: '0.5s'}} />
               <div className="absolute bottom-24 left-40 w-3 h-3 bg-orange-500/60 rounded-full animate-bounce-slow" style={{animationDelay: '1s'}} />
               <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-pink-500/60 rounded-full animate-float" style={{animationDelay: '1.5s'}} />
           </div>
           
           {/* İki Teknik Logo & Badge */}
           <div className="absolute top-8 left-8 md:left-12 z-20 flex flex-col items-start gap-4 animate-slide-up">
               <Link to="/egitim" className="group/logo hover:scale-110 transition-transform drop-shadow-2xl flex flex-col">
                    <div className="flex items-baseline">
                        <span className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none text-slate-900">
                            İKİ
                        </span>
                        <span className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none text-rose-600">
                            TEKNİK
                        </span>
                    </div>
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-slate-400 uppercase leading-none ml-1 group-hover:text-rose-500 transition-colors">
                        BİLİŞİM
                    </span>
               </Link>
               <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/90 backdrop-blur-sm text-rose-600 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg border border-rose-200 animate-pulse-slow">
                   <Sparkles size={12} /> EĞİTİM AKADEMİSİ <Code size={12} />
               </div>
           </div>
           
           <div className="relative z-10 p-8 md:p-16 max-w-xl flex flex-col items-center md:items-start text-center md:text-left transition-transform duration-500">
               <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-slate-900 mb-6 leading-[0.9] tracking-tighter uppercase drop-shadow-sm">
                   Geleceği <br/>
                   <span className="relative inline-block">
                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-orange-500 to-pink-600 bg-[length:200%_auto] animate-gradient">Öğren</span>
                       <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-600 via-orange-500 to-pink-600 rounded-full shadow-lg"></span>
                   </span>
               </h1>
               
               <p className="text-slate-600 text-lg md:text-xl font-medium mb-10 leading-relaxed max-w-md">
                   Yazılım, Tasarım ve Mühendislik eğitimleri ile <span className="font-bold text-slate-900">kariyerinizi şekillendirin.</span>
               </p>
               
               <Link 
                   to="/egitim"
                   className="group/btn relative px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-widest overflow-hidden shadow-2xl hover:shadow-rose-500/40 transition-all active:scale-95"
               >
                   <span className="relative z-10 flex items-center gap-3">
                       Kursları İncele <ChevronRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                   </span>
                   <div className="absolute inset-0 bg-gradient-to-r from-rose-600 via-orange-500 to-pink-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
               </Link>
           </div>
       </div>

       {/* Right Side: PRODUCTION (Dark) */}
       <div className="flex-1 relative group overflow-hidden bg-[#0B0F19] flex items-center justify-center min-h-[50vh] md:min-h-screen">
           {/* Super Visible Tech Background (KEPT AS IS) */}
           <div className="absolute inset-0 z-0 overflow-hidden">
                <OptimizedImage 
                    src="/assets/images/kullanilan_gorseller/Endüstriyel ve Teknik 3D Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (21).jpeg"
                    className="w-full h-full object-cover opacity-25 grayscale mix-blend-overlay"
                />
               <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-[#1877F2]/50 via-cyan-500/30 to-transparent rounded-full blur-3xl animate-pulse-slow" />
               <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-blue-500/40 via-[#1877F2]/30 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}} />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/30 to-[#1877F2]/30 rounded-full blur-3xl animate-pulse-slow" />
               <div className="absolute inset-0 opacity-20">
                   <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1877F2] to-transparent"></div>
                   <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                   <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1877F2] to-transparent"></div>
               </div>
               <div className="absolute top-20 right-20 w-40 h-40 border-2 border-[#1877F2]/50 rounded-full animate-rotate-slow">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-cyan-400/50 rounded-full animate-reverse-spin"></div>
               </div>
               <div className="absolute bottom-32 left-32 w-32 h-32 border-2 border-cyan-500/50 rounded-lg rotate-45 animate-spin-slow" />
               <div className="absolute top-1/3 left-20 w-28 h-28 border-4 border-[#1877F2]/40 rounded-full animate-pulse-slow" />
               <div className="absolute top-32 left-1/3 w-6 h-6 bg-[#1877F2]/80 rounded-full animate-float shadow-lg shadow-[#1877F2]/50" />
               <div className="absolute bottom-40 right-1/4 w-5 h-5 bg-cyan-400/80 rounded-full animate-bounce-slow shadow-lg shadow-cyan-400/50" style={{animationDelay: '0.8s'}} />
               <div className="absolute top-2/3 right-32 w-4 h-4 bg-[#1877F2]/80 rounded-full animate-float shadow-lg shadow-[#1877F2]/50" style={{animationDelay: '1.2s'}} />
           </div>

           {/* 3D3P Logo & Badge */}
           <div className="absolute top-8 right-8 md:right-12 z-20 flex flex-col items-end gap-4 animate-slide-up">
               <Link to="/uretim" className="group/logo hover:scale-110 transition-transform drop-shadow-2xl">
                   <div className="flex items-center gap-1">
                       <img src="/assets/images/3D3P.png" alt="3D3P" className="h-10 md:h-14 w-auto object-contain" />
                       <span className="text-white font-black text-lg md:text-xl tracking-tighter uppercase">3D3PRINTER</span>
                   </div>
               </Link>
               <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1877F2]/20 text-[#1877F2] border border-[#1877F2]/40 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#1877F2]/20 animate-pulse-slow">
                   <Zap size={12} /> 3D PRODUCTION <Printer size={12} />
               </div>
           </div>

           <div className="relative z-10 p-8 md:p-16 max-w-xl flex flex-col items-center md:items-start text-center md:text-left transition-transform duration-500">
               <h2 className="text-5xl md:text-6xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter uppercase neon-text">
                   Geleceği <br/>
                   <span className="relative inline-block">
                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1877F2] via-cyan-400 to-blue-500 bg-[length:200%_auto] animate-gradient">Üret</span>
                       <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1877F2] via-cyan-400 to-blue-500 rounded-full shadow-lg shadow-[#1877F2]/70"></span>
                   </span>
               </h2>
               
               <p className="text-slate-300 text-lg md:text-xl font-medium mb-10 leading-relaxed max-w-md">
                   Endüstriyel 3D Tarama, Modelleme ve Baskı hizmetleri ile <span className="font-bold text-white">sınırları zorlayın.</span>
               </p>
               
               <Link 
                   to="/uretim"
                   className="group/btn relative px-10 py-5 border-2 border-[#1877F2] text-white rounded-2xl font-bold uppercase tracking-widest overflow-hidden shadow-[0_0_30px_rgba(24,119,242,0.4)] hover:shadow-[0_0_60px_rgba(24,119,242,0.7)] transition-all bg-transparent active:scale-95"
               >
                   <span className="relative z-10 flex items-center gap-3">
                       Hizmetleri Keşfet <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                   </span>
                   <div className="absolute inset-0 bg-gradient-to-r from-[#1877F2] via-cyan-500 to-blue-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
               </Link>
           </div>
       </div>
    </section>
  );
});

const Home = () => {
    return (
        <div className="bg-slate-50 min-h-screen overflow-hidden">
            <SEO 
                title="İki Teknik Group | Geleceği Öğren, Geleceği Üret" 
                description="İki Teknik Bilişim Eğitim Merkezi ve 3D3P Endüstriyel Üretim Merkezi. Tek çatı altında eğitim ve üretim çözümleri."
            />
            
            <SplitHero />
        </div>
    );
};

export default Home;
