import React, { memo } from 'react';
import { ArrowRight, ChevronRight, Zap, Play, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';
import SEO from '../components/SEO';

const EducationHero = memo(() => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-slate-50 overflow-hidden">
        {/* Animated BG */}
        <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-200/20 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-rose-100">
                    <span className="w-2 h-2 bg-rose-600 rounded-full animate-ping" />
                    İkiteknik Bilişim
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter">
                    Geleceğin <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500">Kariyerini Tasarla</span>
                </h1>
                
                <p className="text-slate-600 text-xl font-medium mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
                    Yazılım, Tasarım ve Mühendislik eğitimleri ile potansiyelini açığa çıkar. Sektörün liderleriyle öğren.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Link 
                        to="/egitimlerimiz"
                        className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold uppercase tracking-widest shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                    >
                        Eğitimleri İncele <ChevronRight size={18} />
                    </Link>
                    <Link 
                        to="/takvim"
                        className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold uppercase tracking-widest hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
                    >
                        Takvime Göz At
                    </Link>
                </div>
            </div>

            <div className="relative hidden md:block group">
                 {/* Background decoration with real project image */}
                 <div className="absolute inset-0 -z-10">
                     <OptimizedImage 
                        src="/assets/images/kullanilan_gorseller/ürün 3d modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (14).jpeg"
                        className="w-full h-full object-cover opacity-10 rounded-3xl"
                     />
                 </div>
                 
                 <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white rotate-3 group-hover:rotate-0 transition-transform duration-700">
                     <OptimizedImage 
                        src="/assets/images/kullanilan_gorseller/3d tarama/WhatsApp Image 2026-01-20 at 16.18.30 (2).jpeg"
                        className="w-full h-full object-cover aspect-[4/3]"
                     />
                 </div>
                 <div className="absolute top-10 -right-10 w-full h-full bg-gradient-to-br from-rose-200 to-orange-200 rounded-3xl -z-10 -rotate-3 group-hover:rotate-0 transition-transform duration-700 delay-75 opacity-50" />
            </div>
        </div>
    </section>
  );
});

const EducationHome = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SEO 
                title="Eğitim Akademisi | İkiteknik" 
                description="Türkiye'nin önde gelen Bilişim Eğitim Merkezi. Yazılım, Tasarım, 3D Modelleme ve Mühendislik kursları."
            />
            
            <EducationHero />

            {/* Quick Stats / Features */}
            <div className="py-12 border-y border-slate-200 bg-white">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                     {[
                        { label: 'Mezun', val: '5000+' },
                        { label: 'Eğitmen', val: '20+' },
                        { label: 'Kurumsal Referans', val: '150+' },
                        { label: 'Başarı Oranı', val: '%98' },
                     ].map((s,i) => (
                         <div key={i} className="text-center">
                             <div className="text-3xl md:text-4xl font-black text-rose-600 mb-1">{s.val}</div>
                             <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{s.label}</div>
                         </div>
                     ))}
                </div>
            </div>

            {/* EDUCATION HIGHLIGHTS (Copied roughly from Home.jsx) */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-rose-600 font-bold uppercase tracking-widest text-xs mb-2 block">AKADEMİ</span>
                            <h2 className="text-3xl font-black text-slate-900">Popüler Eğitimler</h2>
                        </div>
                        <Link to="/egitimlerimiz" className="group flex items-center gap-2 text-slate-500 font-bold text-sm uppercase hover:text-rose-600 transition-colors">
                            Tümünü Gör <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Course Cards */}
                        {[
                            { title: 'SolidWorks Uzmanlık', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789' },
                            { title: '3DS Max & V-Ray', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee' },
                            { title: 'Yazılım Mühendisliği', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c' },
                        ].map((c, i) => (
                             <Link key={i} to="/egitimlerimiz" className="group relative rounded-2xl overflow-hidden aspect-video shadow-lg hover:shadow-2xl transition-all">
                                 <OptimizedImage src={c.img} width={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end p-6">
                                     <h3 className="text-white font-bold text-lg group-hover:text-rose-400 transition-colors">{c.title}</h3>
                                 </div>
                             </Link>
                        ))}
                    </div>
                </div>
            </section>

             {/* FOOTER CTA */}
             <section className="relative h-[400px] flex items-center justify-center bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581092160562-40aa08e78837")' }}>
                 <div className="absolute inset-0 bg-slate-900/80" />
                 <div className="relative z-10 text-center px-6 max-w-3xl">
                     <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter">Geleceğini Kodla</h2>
                     <p className="text-slate-300 text-lg mb-10">Kariyerinde yeni bir sayfa açmak için en doğru yerdesin.</p>
                     <Link to="/iletisim" className="btn-3d bg-white text-slate-900 px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-all shadow-2xl">
                         Kayıt Ol
                     </Link>
                 </div>
             </section>
        </div>
    );
};

export default EducationHome;
