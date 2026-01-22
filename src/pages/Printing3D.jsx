import React, { memo } from 'react';
import { Printer, Layers, Box, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';
import SEO from '../components/SEO';
import References3D from '../components/References3D';
import Testimonials3D from '../components/Testimonials3D';
import EducationBridge from '../components/EducationBridge';

const Printing3D = memo(() => {
  return (
    <div className="bg-[#0B0F19] min-h-screen text-slate-300 selection:bg-[#1877F2] selection:text-white overflow-x-hidden">
      <SEO 
        title="Endüstriyel 3D Baskı Hizmetleri | 3D3P" 
        description="SLA ve FDM teknolojileri ile hassas prototip ve son kullanıcı ürün üretimi. Tasarımınızı gönderin, profesyonel 3D baskı hizmeti alın."
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
             <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1877F2]/5 rounded-full blur-[120px] animate-pulse-slow" />
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px]" />
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631541909061-71e349d1f2b1?q=80&w=2800&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1877F2]/10 border border-[#1877F2]/20 rounded-full text-[#1877F2] text-xs font-bold uppercase tracking-widest animate-fade-in-up">
                     <Printer size={14} />
                     Additive Manufacturing
                 </div>
                 
                 <h1 className="text-5xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter animate-fade-in-up delay-100 uppercase">
                     Hassas <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1877F2] to-indigo-500 neon-text">3D Baskı</span>
                 </h1>
                 
                 <p className="text-xl text-slate-400 max-w-xl leading-relaxed animate-fade-in-up delay-200">
                     Fikrinizi fiziksel gerçeğe dönüştürün. SLA ve FDM teknolojileriyle, prototiplemeden seri üretime kadar yanınızdayız.
                 </p>

                 <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
                     <Link to="/teklif-al" className="px-8 py-4 bg-[#1877F2] hover:bg-blue-600 text-white rounded-xl font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(24,119,242,0.4)] hover:shadow-[0_0_40px_rgba(24,119,242,0.6)] transition-all flex items-center gap-2 group">
                         Teklif Al <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                     </Link>
                     <a href="#teknolojiler" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold uppercase tracking-widest transition-all">
                         Teknolojiler
                     </a>
                 </div>
             </div>

             {/* Right Content - Floating 3D Elements */}
             <div className="relative hidden lg:block perspective-container">
                 <div className="relative z-10 bg-gradient-to-tr from-[#151E32] to-[#1E293B] p-2 rounded-3xl border border-white/10 shadow-2xl rotate-y-12 animate-float">
                      <OptimizedImage 
                          src="/assets/images/kullanilan_gorseller/3D Baskıya Uygun Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (22).jpeg" 
                          className="rounded-2xl w-full h-auto object-cover opacity-90"
                      />
                      {/* Floating Specs Card */}
                      <div className="absolute -bottom-10 -left-10 bg-[#1877F2] p-6 rounded-2xl shadow-xl text-white max-w-xs">
                          <div className="flex items-center gap-3 mb-2">
                              <Layers size={24} />
                              <span className="font-bold text-lg">0.05mm</span>
                          </div>
                          <p className="text-xs font-medium opacity-90">Ultra yüksek hassasiyetli katman kalınlığı ile pürüzsüz yüzeyler.</p>
                      </div>
                 </div>
             </div>
        </div>
      </section>

      {/* TECH SPECS */}
      <section id="teknolojiler" className="py-24 bg-[#0F1420]">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                  <span className="text-[#1877F2] font-black text-xs uppercase tracking-[0.2em] mb-4 block">Teknolojilerimiz</span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tight">Üretim Yöntemleri</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                  {/* SLA Card */}
                  <div className="group relative bg-[#151E32] rounded-3xl p-1 overflow-hidden hover:bg-[#1a253a] transition-colors">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1877F2]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative h-full flex flex-col md:flex-row gap-8 p-8 items-center">
                          <div className="flex-1 space-y-6">
                               <div className="w-16 h-16 bg-[#1877F2]/10 rounded-2xl flex items-center justify-center text-[#1877F2]">
                                   <Box size={32} />
                               </div>
                               <h3 className="text-2xl font-bold text-white">SLA/Reçine Baskı</h3>
                               <p className="text-slate-400 leading-relaxed">
                                   Sıvı fotopolimer reçinenin lazer ile katılaştırılmasıyla çalışır. Kuyumculuk, dental modeller ve ultra hassas parçalar için idealdir.
                               </p>
                               <ul className="space-y-2">
                                   {['25 Mikron Reçine Hassasiyeti', 'Pürüzsüz Yüzey', 'Yüksek Detay'].map(i => (
                                       <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                           <CheckCircle2 size={14} className="text-[#1877F2]" /> {i}
                                       </li>
                                   ))}
                               </ul>
                          </div>
                          <div className="flex-1 h-64 w-full bg-black/20 rounded-xl overflow-hidden">
                               <OptimizedImage 
                                  src="/assets/images/kullanilan_gorseller/3D Baskıya Uygun Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (24).jpeg"
                                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                               />
                          </div>
                      </div>
                  </div>

                   {/* FDM Card */}
                   <div className="group relative bg-[#151E32] rounded-3xl p-1 overflow-hidden hover:bg-[#1a253a] transition-colors">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative h-full flex flex-col md:flex-row gap-8 p-8 items-center">
                          <div className="flex-1 space-y-6">
                               <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500">
                                   <Cpu size={32} />
                               </div>
                               <h3 className="text-2xl font-bold text-white">FDM/Filament Baskı</h3>
                               <p className="text-slate-400 leading-relaxed">
                                   Termoplastik malzemelerin eritilerek katmanlanması. Fonksiyonel prototipler, büyük parçalar ve dayanıklı mekanik ve endüstriyel parçalar için.
                               </p>
                               <ul className="space-y-2">
                                   {['Geniş Malzeme Seçeneği (PLA, ABS, PETG)', 'Büyük Hacimli Baskı', 'Ekonomik Çözüm'].map(i => (
                                       <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                           <CheckCircle2 size={14} className="text-orange-500" /> {i}
                                       </li>
                                   ))}
                               </ul>
                          </div>
                           <div className="flex-1 h-64 w-full bg-black/20 rounded-xl overflow-hidden">
                               <OptimizedImage 
                                  src="/assets/images/kullanilan_gorseller/3D Baskıya Uygun Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (28).jpeg"
                                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                               />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

       {/* SUCCESS STORIES FEATURE */}
       <section className="py-24 border-t border-white/5 bg-[#0B0F19] relative">
           <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1877F2]/30 to-transparent" />
           
           <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Başarı Hikayeleri</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">Üretim Kapasitesi</h2>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                     {/* Feature 1: Large Engine Block */}
                     <div className="group relative rounded-[2.5rem] overflow-hidden bg-[#151E32] border border-white/5 aspect-[16/9] lg:aspect-auto">
                         <OptimizedImage 
                             src="/assets/images/kullanilan_gorseller/3D Baskıya Uygun Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (23).jpeg"
                             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-10">
                             <div className="bg-orange-500 w-16 h-1 mb-6" />
                             <h3 className="text-3xl font-black text-white mb-2 uppercase italic">Motor Bloğu Prototipi</h3>
                             <p className="text-slate-300 max-w-md">Dayanıklı filament kullanılarak üretilen tam ölçekli motor parçası prototiplemesi. Isı dayanımı ve montaj testi başarısı.</p>
                         </div>
                     </div>

                     <div className="flex flex-col gap-8">
                         {/* Feature 2: Turbine */}
                         <div className="flex-1 group relative rounded-[2.5rem] overflow-hidden bg-[#151E32] border border-white/5">
                             <OptimizedImage 
                                 src="/assets/images/kullanilan_gorseller/3D Baskıya Uygun Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (27).jpeg"
                                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                             />
                             <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent flex flex-col justify-center p-8 pl-10">
                                 <h3 className="text-2xl font-black text-white mb-1">Türbin Tasarımı</h3>
                                 <p className="text-slate-400 text-sm">Aerodinamik test modeli üretimi.</p>
                             </div>
                         </div>

                         {/* Feature 3: Detailed Gear */}
                         <div className="flex-1 group relative rounded-[2.5rem] overflow-hidden bg-[#151E32] border border-white/5">
                             <OptimizedImage 
                                 src="/assets/images/kullanilan_gorseller/3D Baskıya Uygun Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (25).jpeg"
                                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                             />
                             <div className="absolute inset-0 bg-gradient-to-l from-black/90 to-transparent flex flex-col justify-center items-end p-8 pr-10 text-right">
                                 <h3 className="text-2xl font-black text-white mb-1">Dişli Sistemleri</h3>
                                 <p className="text-slate-400 text-sm">Fonksiyonel mekanik parça üretimi.</p>
                             </div>
                         </div>
                     </div>
                </div>

                <div className="text-center">
                    <Link to="/galeri" className="inline-block px-8 py-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-colors font-bold text-sm uppercase tracking-widest">
                        Tüm Projeleri Keşfet
                    </Link>
                </div>
           </div>
       </section>

      <EducationBridge 
        title="3D Yazıcı Teknolojilerini Öğrenin"
        desc="SLA ve FDM yazıcıların çalışma prensiplerini, bakımını ve dilimleme (slicing) tekniklerini uygulamalı olarak öğrenin."
        linkText="Kursu İncele"
        linkTo="/egitimlerimiz"
      />

      <References3D />
      <Testimonials3D />

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
           <div className="absolute inset-0 bg-[#151E32]">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837')] bg-cover bg-center opacity-5 mix-blend-overlay" />
           </div>
           
           <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
               <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter">Projenizi Üretmeye Hazır Mısınız?</h2>
               <p className="text-slate-400 text-lg mb-12">
                   3D modelinizi gönderin, uzman ekibimiz incelesin ve en uygun üretim yöntemiyle en hızlı teklifi sunsun.
               </p>
               <Link to="/teklif-al" className="inline-flex items-center gap-3 px-12 py-5 bg-[#1877F2] hover:bg-blue-600 text-white rounded-full font-black uppercase tracking-widest shadow-[0_0_30px_rgba(24,119,242,0.3)] hover:shadow-[0_0_50px_rgba(24,119,242,0.5)] transition-all">
                   Hemen Teklif Al <ArrowRight />
               </Link>
           </div>
      </section>
    </div>
  );
});

export default Printing3D;
