import React, { memo } from 'react';
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';
import SEO from '../components/SEO';

const SplitHero = memo(() => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row mt-0 md:mt-0">
       {/* Left Side: EDUCATION (Light) */}
       <div className="flex-1 relative group overflow-hidden bg-slate-50 flex items-center justify-center min-h-[50vh] md:min-h-screen border-b md:border-b-0 md:border-r border-slate-200">
           {/* Animated BG */}
           <div className="absolute inset-0 z-0">
               <div className="absolute top-0 left-0 w-96 h-96 bg-rose-200/20 rounded-full blur-[100px] animate-pulse-slow" />
               <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-slate-200/30 rounded-full blur-[120px]" />
           </div>
           
           <div className="relative z-10 p-8 md:p-16 max-w-xl flex flex-col items-center md:items-start text-center md:text-left transition-transform duration-500 md:group-hover:scale-105">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                   <span className="w-2 h-2 bg-rose-600 rounded-full animate-ping" />
                   Eğitim Akademisi
               </div>
               
               <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-6 leading-[0.9] tracking-tighter uppercase">
                   Geleceği <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500">Öğren</span>
               </h1>
               
               <p className="text-slate-500 text-lg font-medium mb-10 leading-relaxed max-w-sm">
                   Yazılım, Tasarım ve Mühendislik eğitimleri ile kariyerinizi şekillendirin.
               </p>
               
               <Link 
                   to="/egitim"
                   className="group/btn relative px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-widest overflow-hidden shadow-xl hover:shadow-2xl transition-all"
               >
                   <span className="relative z-10 flex items-center gap-3">
                       Kursları İncele <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                   </span>
                   <div className="absolute inset-0 bg-rose-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
               </Link>
           </div>
       </div>

       {/* Right Side: PRODUCTION (Dark - Wix Style) */}
       <div className="flex-1 relative group overflow-hidden bg-[#0B0F19] flex items-center justify-center min-h-[50vh] md:min-h-screen">
           {/* Animated BG */}
           <div className="absolute inset-0 z-0">
                <OptimizedImage 
                    src="/assets/images/kullanilan_gorseller/Endüstriyel ve Teknik 3D Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (21).jpeg"
                    className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
                />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1877F2]/10 rounded-full blur-[120px] animate-pulse-slow" />
           </div>

           <div className="relative z-10 p-8 md:p-16 max-w-xl flex flex-col items-center md:items-start text-center md:text-left transition-transform duration-500 md:group-hover:scale-105">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1877F2]/10 text-[#1877F2] border border-[#1877F2]/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                   <Zap size={14} />
                   3D Production
               </div>
               
               <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter uppercase neon-text">
                   Geleceği <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1877F2] to-cyan-400">Üret</span>
               </h2>
               
               <p className="text-slate-400 text-lg font-medium mb-10 leading-relaxed max-w-sm">
                   Endüstriyel 3D Tarama, Modelleme ve Baskı hizmetleri ile sınırları zorlayın.
               </p>
               
               <Link 
                   to="/uretim"
                   className="group/btn relative px-8 py-4 border border-[#1877F2] text-white rounded-2xl font-bold uppercase tracking-widest overflow-hidden shadow-[0_0_20px_rgba(24,119,242,0.2)] hover:shadow-[0_0_30px_rgba(24,119,242,0.4)] transition-all bg-transparent"
               >
                   <span className="relative z-10 flex items-center gap-3">
                       Hizmetleri Keşfet <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                   </span>
                   <div className="absolute inset-0 bg-[#1877F2] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
               </Link>
           </div>
       </div>

       {/* Center Divider/Logo (Desktop Only) */}
       <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full items-center justify-center shadow-2xl z-20 border-4 border-slate-50">
            <span className="font-black text-2xl text-slate-900 tracking-tighter italic">iki</span>
       </div>
    </section>
  );
});

const Home = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SEO 
                title="İki Teknik Group | Geleceği Öğren, Geleceği Üret" 
                description="İki Teknik Bilişim Eğitim Merkezi ve 3D3P Endüstriyel Üretim Merkezi. Tek çatı altında eğitim ve üretim çözümleri."
            />
            
            <SplitHero />
        </div>
    );
};

export default Home;
