import React, { useState } from 'react';
import { Box, Layers, PenTool, Monitor, ArrowRight, Component, Zap, Settings, PenTool as Tool } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';
import ImageLightbox from '../components/ImageLightbox';
import References3D from '../components/References3D';
import Testimonials3D from '../components/Testimonials3D';
import EducationBridge from '../components/EducationBridge';

const Modeling3D = () => {
  const [activeTab, setActiveTab] = useState('urun');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Images mapping
  const industrialImages = [
      '/assets/images/kullanilan_gorseller/Endüstriyel ve Teknik 3D Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (20).jpeg',
      '/assets/images/kullanilan_gorseller/Endüstriyel ve Teknik 3D Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (21).jpeg',
      '/assets/images/kullanilan_gorseller/Endüstriyel ve Teknik 3D Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (19).jpeg',
  ];

  const productImages = [
      '/assets/images/kullanilan_gorseller/ürün 3d modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (15).jpeg',
      '/assets/images/kullanilan_gorseller/ürün 3d modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (16).jpeg',
  ];

  const reverseImages = [
       '/assets/images/kullanilan_gorseller/Tersine Mühendislik (Reverse Engineering)/WhatsApp Image 2026-01-20 at 16.18.30 (30).jpeg',
       '/assets/images/kullanilan_gorseller/Tersine Mühendislik (Reverse Engineering)/WhatsApp Image 2026-01-20 at 16.18.30 (31).jpeg',
  ];

  const printingImages = [
      '/assets/images/kullanilan_gorseller/3D Baskıya Uygun Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (27).jpeg',
      '/assets/images/kullanilan_gorseller/3D Baskıya Uygun Modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (22).jpeg',
  ];

  const galleryImages = [...industrialImages, ...productImages, ...reverseImages, ...printingImages];

  const services = [
    {
      id: 'urun',
      title: 'Ürün 3D Modelleme',
      icon: <Box size={22} />,
      desc: 'Ürünün fiziksel olarak üretilmeden önce dijital ortamda üç boyutlu, ölçülere uygun ve detaylı şekilde tasarlanması.',
      features: ['Gerçeğe en yakın dijital temsil', 'Pazarlama ve sunum odaklı', 'Pazara çıkış süresini kısaltır', 'Tasarım hatalarını önler'],
      image: productImages[0]
    },
    {
      id: 'endustriyel',
      title: 'Endüstriyel ve Teknik',
      icon: <Settings size={22} />,
      desc: 'Makine parçaları, mekanik sistemler ve teknik ürünlerin ölçülere birebir uygun, fonksiyonel modellenmesi.',
      features: ['Mühendislik doğruluğu', 'CNC ve Kalıp Tasarımı', 'Montaj Analizi', 'Teknik Dokümantasyon'],
      image: industrialImages[0]
    },
    {
      id: 'baski',
      title: '3D Baskıya Uygunluk',
      icon: <Layers size={22} />,
      desc: 'Objenin 3D yazıcılarla üretilebilecek şekilde doğru ölçüler, toleranslar ve baskı kurallarına göre modellenmesi.',
      features: ['Duvar kalınlığı optimizasyonu', 'Destek yapısı analizi', 'Baskı yönü belirleme', 'Hatasız üretim'],
      image: printingImages[0]
    },
    {
      id: 'tersine',
      title: 'Tersine Mühendislik',
      icon: <Monitor size={22} />,
      desc: 'Mevcut bir fiziksel ürünün taranarak dijital 3D modelinin yeniden oluşturulması.',
      features: ['Yedek parça üretimi', 'CAD verisi oluşturma', 'Ürün geliştirme ve iyileştirme', 'Hassas dijital kopya'],
      image: reverseImages[0]
    }
  ];

  const activeContent = services.find(s => s.id === activeTab);

  return (
    <div className="bg-[#0B0F19] min-h-screen text-white selection:bg-[#1877F2] selection:text-white font-sans">
      <SEO 
        title="3D Modelleme Hizmetleri | İkiteknik" 
        description="Profesyonel ürün modelleme, endüstriyel tasarım, tersine mühendislik ve 3D baskı için model hazırlama."
      />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
             <div className="absolute inset-0 bg-[#0B0F19]/80 z-10" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-transparent to-[#0B0F19] z-10" />
             <OptimizedImage 
                src={printingImages[0]} 
                className="w-full h-full object-cover opacity-50 contrast-125"
                alt="3D Modeling Hero"
             />
        </div>

        <div className="container mx-auto px-6 relative z-20">
            <div className="max-w-4xl">
                <div className="inline-block px-4 py-2 border-l-4 border-[#1877F2] bg-white/5 backdrop-blur mb-6">
                    <span className="text-white font-bold tracking-[0.3em] uppercase text-sm">Design & Engineering</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-none uppercase tracking-tighter">
                    Gerçeğe En Yakın <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1877F2] to-indigo-500 neon-text">Dijital Çözümler</span>
                </h1>
                
                <p className="text-xl text-slate-400 max-w-2xl mb-12 font-light leading-relaxed border-l border-white/10 pl-6">
                    Teknik doğruluk, gerçekçi 3D modelleme. Fikirlerinizi üretime hazır, kusursuz dijital modellere dönüştürüyoruz.
                </p>

                <div className="flex gap-4">
                    <Link to="/teklif-al" className="px-8 py-4 bg-[#1877F2] hover:bg-blue-600 text-white font-bold uppercase tracking-wider rounded-sm transition-all shadow-[0_0_20px_rgba(24,119,242,0.4)] hover:shadow-[0_0_40px_rgba(24,119,242,0.6)]">
                        Hemen Başla
                    </Link>
                    <a href="#galeri" className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-bold uppercase tracking-wider rounded-sm transition-all">
                        Galeriyi İncele
                    </a>
                </div>
            </div>
        </div>

        {/* Floating Abstract Elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#1877F2]/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      </section>

      {/* INTRO SECTION - Split Layout */}
      <section className="py-24 bg-[#0B0F19]">
          <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="order-2 lg:order-1">
                      <div className="w-20 h-1 bg-[#1877F2] mb-8 rounded-full shadow-[0_0_15px_#1877F2]" />
                      <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-wide leading-tight">
                          3D Modelleme Hizmeti <br/>
                          <span className="text-slate-500">Nedir?</span>
                      </h2>
                      <p className="text-slate-400 leading-relaxed text-lg mb-6">
                          3D modelleme hizmeti, fikir ve tasarımların dijital ortamda üç boyutlu, detaylı ve gerçekçi modeller hâline getirilmesini sağlar. Bu hizmet sayesinde ürünler, yapılar veya objeler üretim ve uygulama aşamasına geçmeden önce net bir şekilde görselleştirilebilir.
                      </p>
                      <p className="text-slate-400 leading-relaxed text-lg mb-8">
                          Ölçülere uygun, teknik gereksinimleri karşılayan ve kullanım amacına göre optimize edilmiş modeller hazırlanır. Böylece tasarım sürecinde olası hatalar önceden tespit edilir, zaman ve maliyet tasarrufu sağlanır.
                      </p>
                      <Link to="/teklif-al" className="text-[#1877F2] font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                          Projenizi Başlatın <ArrowRight />
                      </Link>
                  </div>
                  <div className="order-1 lg:order-2 relative">
                      {/* Advanced HUD Mockup */}
                      <div className="relative aspect-square max-w-sm mx-auto">
                          {/* Rotating CAD Rims */}
                          <div className="absolute inset-0 border-2 border-[#1877F2]/10 rounded-full animate-spin-slow" />
                          <div className="absolute inset-8 border border-dashed border-[#1877F2]/20 rounded-full animate-reverse-spin" />
                          
                          {/* Vertical / Horizontal Axes */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-20">
                              <div className="w-full h-[1px] bg-[#1877F2]" />
                              <div className="h-full w-[1px] bg-[#1877F2] absolute" />
                          </div>

                          {/* Image with CAD UI Elements */}
                          <div className="absolute inset-4 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                              <OptimizedImage 
                                 src={galleryImages[0]} 
                                 className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0"
                              />
                              
                              {/* HUD Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-tr from-[#1877F2]/20 to-transparent pointer-events-none" />
                              <div className="absolute bottom-4 right-4 text-[#1877F2] font-mono text-[10px] bg-black/40 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                  <div>POLYS: 1.2M</div>
                                  <div>VERTS: 840K</div>
                                  <div>RENDER: READY</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
       </section>

      {/* DETAILED SERVICES GRID */}
      <section className="py-24 bg-[#0F1420] relative">
         <div className="container mx-auto px-6">
            <div className="text-center mb-20">
                <span className="text-[#1877F2] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Çözümler</span>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Hizmet Türleri</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
                {services.map((service) => (
                    <div key={service.id} className="bg-[#151E32] rounded-3xl p-8 border border-white/5 hover:border-[#1877F2]/50 transition-all duration-300 group hover:-translate-y-2 flex flex-col">
                        <div className="flex items-start justify-between mb-8">
                            <div className="p-4 bg-[#1877F2]/10 text-[#1877F2] rounded-2xl group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">0{services.indexOf(service)+1}</span>
                            </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">{service.title}</h3>
                        <p className="text-slate-400 mb-8 leading-relaxed border-b border-white/5 pb-8 min-h-[5rem]">
                            {service.desc}
                        </p>
                        
                        <div className="mt-auto space-y-4">
                            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Öne Çıkan Özellikler</h4>
                            <div className="grid grid-cols-2 gap-3">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-[#1877F2] rounded-full" />
                                        <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>

       {/* SIGNATURE PROJECTS SHOWCASE */}
       <section id="galeri" className="py-24 bg-[#0B0F19] border-t border-white/5 relative">
         <div className="absolute inset-0 bg-[url('/assets/images/grid.png')] opacity-5 pointer-events-none" />
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20 animate-fade-in-up">
                <span className="text-[#1877F2] font-black tracking-[0.2em] uppercase text-xs mb-4 block">Design Excellence</span>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">/ Seçilmiş Çalışmalar</h2>
            </div>
            
            <div className="flex flex-col gap-32">
                {/* Project 1: Industrial (Left) */}
                <div className="flex flex-col lg:flex-row gap-12 items-center group">
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -inset-4 border-2 border-[#1877F2]/20 rounded-[2rem] transform rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                        <div className="relative rounded-[1.8rem] overflow-hidden aspect-[4/3] shadow-2xl">
                            <OptimizedImage 
                                src={galleryImages[5]} 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2 space-y-6">
                        <div className="inline-block px-3 py-1 bg-[#1877F2]/10 text-[#1877F2] text-xs font-bold uppercase rounded-full">Industrial Design</div>
                        <h3 className="text-3xl font-black text-white uppercase italic">Endüstriyel Makine Parçaları</h3>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Mekanik sistemlerin 3D modellemesi, montaj analizleri ve üretim öncesi simülasyonları. Hatasız üretim için dijital ikiz oluşturma.
                        </p>
                        <div className="flex gap-2 pt-4">
                             {['Solidworks', 'Analiz', 'Montaj'].map(tag => (
                                 <span key={tag} className="text-xs text-slate-500 border border-slate-700 px-3 py-1 rounded-full">{tag}</span>
                             ))}
                        </div>
                    </div>
                </div>

                {/* Project 2: Artistic/Complex (Right) */}
                <div className="flex flex-col lg:flex-row-reverse gap-12 items-center group">
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -inset-4 border-2 border-cyan-500/20 rounded-[2rem] transform -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                        <div className="relative rounded-[1.8rem] overflow-hidden aspect-[4/3] shadow-2xl">
                            <OptimizedImage 
                                src={galleryImages[2]} 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2 space-y-6 text-right lg:text-right">
                        <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase rounded-full">Organic Modeling</div>
                        <h3 className="text-3xl font-black text-white uppercase italic">Organik Form Tasarımı</h3>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Karmaşık yüzeylere sahip medikal, sanatsal veya ergonomik ürünlerin modellernmesi. 3ds Max ve ZBrush ile detaylandırma.
                        </p>
                        <div className="flex gap-2 pt-4 justify-end">
                             {['Sub-D', 'Sculpting', 'Render'].map(tag => (
                                 <span key={tag} className="text-xs text-slate-500 border border-slate-700 px-3 py-1 rounded-full">{tag}</span>
                             ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-24">
                <Link to="/iletisim" className="btn-primary inline-flex items-center gap-2 px-10 py-4">
                    <span>Sizin Projenizi Tasarlayalım</span>
                    <ArrowRight size={18} />
                </Link>
            </div>
         </div>
      </section>

      <EducationBridge 
        title="Kendi Tasarımlarınızı Üretin"
        desc="SolidWorks ve Fusion 360 eğitimlerimizle profesyonel modelleme tekniklerini öğrenin. Sektörün en köklü eğitim kurumu İkiteknik ile kariyerinize yön verin."
        linkTo="/egitimlerimiz"
      />

      <References3D />
      <Testimonials3D />
      
      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={galleryImages}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setCurrentImageIndex((p) => (p + 1) % galleryImages.length)}
          onPrev={() => setCurrentImageIndex((p) => (p - 1 + galleryImages.length) % galleryImages.length)}
        />
      )}
    </div>
  );
};

export default Modeling3D;
