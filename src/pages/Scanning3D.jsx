import React, { useState } from 'react';
import { Scan, Layers, Camera, CheckCircle, ArrowRight, Zap, Target, Box, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';
import ImageLightbox from '../components/ImageLightbox';
import References3D from '../components/References3D';
import Testimonials3D from '../components/Testimonials3D';
import EducationBridge from '../components/EducationBridge';

const Scanning3D = () => {
  const [activeTab, setActiveTab] = useState('lazer');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Images from the uploaded assets
  // Images
  const galleryImages = [
    '/assets/images/kullanilan_gorseller/3d tarama/WhatsApp Image 2026-01-20 at 16.18.30 (1).jpeg',
    '/assets/images/kullanilan_gorseller/3d tarama/WhatsApp Image 2026-01-20 at 16.18.30 (5).jpeg',
    '/assets/images/kullanilan_gorseller/3d tarama/WhatsApp Image 2026-01-20 at 16.18.30 (8).jpeg',
    '/assets/images/kullanilan_gorseller/3d tarama/WhatsApp Image 2026-01-20 at 16.18.30 (12).jpeg',
    '/assets/images/kullanilan_gorseller/3d tarama/WhatsApp Image 2026-01-20 at 16.18.30 (6).jpeg',
  ];

  const services = [
    {
      id: 'lazer',
      title: 'Lazer 3D Tarama',
      icon: <Target size={24} />,
      desc: 'Yüksek hassasiyet gerektiren endüstriyel uygulamalar için idealdir. Nesnenin yüzeyine lazer ışını gönderilerek yansıyan sinyalin ölçülmesi prensibine dayanır.',
      features: ['Çok yüksek ölçüm doğruluğu', 'Büyük ve karmaşık parçalar', 'Endüstriyel standartlara uyumlu', 'CAD ve ölçüm yazılımları entegrasyonu'],
      image: galleryImages[0]
    },
    {
      id: 'beyaz-isik',
      title: 'Beyaz Işık / Yapılandırılmış Işık',
      icon: <Zap size={24} />,
      desc: 'Küçük, karmaşık ve detaylı parçaların yüksek çözünürlükte taranmasını sağlar. Nesne üzerine belirli desenlerde ışık projekte edilir.',
      features: ['Çok ince detayları yakalayabilme', 'Küçük ve orta ölçekli parçalar', 'Temassız ve güvenli tarama', 'Pürüzsüz yüzeylerde yüksek performans'],
      image: galleryImages[1]
    },
    {
      id: 'eltipi',
      title: 'El Tipi 3D Tarama',
      icon: <Scan size={24} />,
      desc: 'Taşınabilir yapısı sayesinde sahada hızlı ve esnek tarama imkânı sunar. Operatör, tarayıcıyı nesne etrafında hareket ettirerek veri toplar.',
      features: ['Sahada ve yerinde tarama', 'Hızlı veri toplama', 'Büyük veya sabit nesneler', 'Kurulum gerektirmez'],
      image: galleryImages[2]
    },
    {
      id: 'fotogrametri',
      title: 'Fotogrametri',
      icon: <Camera size={24} />,
      desc: 'Çoklu fotoğraflar kullanılarak nesnelerin 3D dijital modellerinin oluşturulmasını sağlar. Büyük ölçekli nesneler için ekonomiktir.',
      features: ['Kamera ve yazılım tabanlı', 'Geniş alanlar için uygun', 'Doku (renk) bilgisi üretir', 'Maliyet avantajı'],
      image: galleryImages[3]
    }
  ];

  const activeContent = services.find(s => s.id === activeTab);

  return (
    <div className="bg-[#0B0F19] min-h-screen text-white selection:bg-[#1877F2] selection:text-white font-sans overflow-x-hidden">
      <SEO 
        title="3D Tarama Hizmetleri | İkiteknik" 
        description="Endüstriyel hassasiyette 3D tarama, lazer tarama, tersine mühendislik ve kalite kontrol çözümleri."
      />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-transparent z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1877F2]/20 via-[#0B0F19]/50 to-[#0B0F19] z-10 opacity-50" />
            <img 
              src={galleryImages[2]} 
              alt="3D Scanning Hero" 
              className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
            />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1877F2]/30 bg-[#1877F2]/10 backdrop-blur-md mb-8 animate-fade-in shadow-[0_0_15px_rgba(24,119,242,0.3)]">
                <Scan size={16} className="text-[#1877F2]" />
                <span className="text-[#1877F2] text-xs font-bold tracking-[0.2em] uppercase">Advanced Scanning Tech</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-none animate-slide-up neon-text">
                Gerçeği <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1877F2] to-cyan-400">Dijitale Dönüştürüyoruz</span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
                Detayı yakala, geleceği tasarla. Yüksek hassasiyetli sensörler ile fiziksel nesnelerinizi dijital dünyaya aktarıyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
                <a href="#hizmetler" className="btn-primary group border border-[#1877F2] hover:bg-[#1877F2] hover:text-white bg-transparent">
                  <span className="relative z-10 flex items-center gap-2">
                    Hizmetleri İncele <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <Link to="/teklif-al" className="btn-primary flex items-center gap-2 justify-center">
                   Teklif Al
                </Link>
            </div>
        </div>

         {/* Scroll Indicator */}
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center p-1">
                <div className="w-1 h-2 bg-[#1877F2] rounded-full animate-scroll" />
            </div>
        </div>
      </section>

      {/* TECH SPECS TICKER */}
      <div className="bg-[#151E32] border-y border-white/5 py-4 overflow-hidden relative">
        <div className="flex gap-16 animate-infinite-scroll whitespace-nowrap text-slate-400 font-bold uppercase tracking-widest text-xs opacity-60">
            {Array(10).fill("• Yüksek Hassasiyet • Tersine Mühendislik • Kalite Kontrol • Dijital Arşivleme").map((txt, i) => (
                <span key={i}>{txt}</span>
            ))}
        </div>
      </div>

       {/* INTRO SECTION - Split Layout */}
       <section className="py-24 bg-[#0B0F19]">
          <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="order-2 lg:order-1">
                      <div className="w-20 h-1 bg-[#1877F2] mb-8 rounded-full shadow-[0_0_15px_#1877F2]" />
                      <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-wide leading-tight">
                          3D Tarama Hizmeti <br/>
                          <span className="text-slate-500">Nedir?</span>
                      </h2>
                      <p className="text-slate-400 leading-relaxed text-lg mb-6">
                         3D tarama hizmeti, fiziksel bir nesnenin yüksek hassasiyetli sensörler ve kameralar kullanılarak dijital ortama aktarılmasını sağlar. Bu süreçte nesnenin ölçüleri, yüzey detayları ve geometrisi birebir yakalanarak üç boyutlu bir dijital model oluşturulur.
                      </p>
                      <p className="text-slate-400 leading-relaxed text-lg mb-8">
                         3D tarama; tersine mühendislik, kalite kontrol, restorasyon, prototip geliştirme ve kişiye özel üretim gibi birçok alanda etkin bir çözümdür. Karmaşık formların hızlı ve hatasız şekilde dijitalleştirilmesine olanak tanır, zaman ve maliyet avantajı sağlar.
                      </p>
                      <div className="flex gap-4">
                          <div className="flex items-center gap-2 text-white font-bold">
                              <CheckCircle className="text-[#1877F2]" /> Hızlı Dijitalleştirme
                          </div>
                          <div className="flex items-center gap-2 text-white font-bold">
                              <CheckCircle className="text-[#1877F2]" /> Mikron Hassasiyet
                          </div>
                      </div>
                  </div>
                  <div className="order-1 lg:order-2 relative">
                      {/* Technical Blueprint Layout */}
                      <div className="relative aspect-square max-w-md mx-auto">
                          {/* Rotating HUD Elements */}
                          <div className="absolute inset-0 border-[1px] border-[#1877F2]/20 rounded-full animate-rotate-slow" />
                          <div className="absolute inset-4 border-[1px] border-dashed border-[#1877F2]/10 rounded-full animate-reverse-spin" />
                          
                          {/* Crosshair / Corner Accents */}
                          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#1877F2]" />
                          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#1877F2]" />
                          
                          {/* Main Image with Scanline */}
                          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-[#1877F2]/30 shadow-[0_0_50px_rgba(24,119,242,0.1)] group">
                              <OptimizedImage 
                                 src={galleryImages[0]} 
                                 className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                              />
                              {/* Animated Scan Line */}
                              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1877F2]/20 to-transparent h-20 w-full animate-scan-line pointer-events-none" />
                              
                              {/* Technical Metadata Overlay */}
                              <div className="absolute top-4 left-4 font-mono text-[10px] text-[#1877F2] opacity-80 space-y-1">
                                  <div>COORD_X: 45.232</div>
                                  <div>COORD_Y: 12.894</div>
                                  <div>SCAN_RES: 0.02mm</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
       </section>

       {/* DETAILED SERVICES GRID */}
       <section id="hizmetler" className="py-24 bg-[#0F1420] relative">
          <div className="container mx-auto px-6">
              <div className="text-center mb-20">
                  <span className="text-[#1877F2] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Teknolojiler</span>
                  <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Hizmet Türleri</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                  {services.map((service) => (
                      <div key={service.id} className="bg-[#151E32] rounded-3xl p-8 border border-white/5 hover:border-[#1877F2]/50 transition-all duration-300 group hover:-translate-y-2">
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
                          
                          <div className="space-y-4">
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

       {/* FEATURED PROJECTS SHOWCASE */}
       <section className="py-24 bg-[#0B0F19] relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1877F2]/5 rounded-full blur-[100px]" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px]" />

         <div className="container mx-auto px-6">
              <div className="text-center mb-20">
                  <span className="text-[#1877F2] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Portfolyo</span>
                  <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Örnek Projeler</h2>
              </div>

              {/* Large Feature 1 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-32 group">
                  <div className="relative">
                      <div className="absolute inset-0 bg-[#1877F2]/20 blur-2xl transform -rotate-3 group-hover:rotate-0 transition-all duration-700 rounded-[2rem]" />
                      <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-[4/3] shadow-2xl">
                          <OptimizedImage 
                            src={galleryImages[0]} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                              <div className="flex items-center gap-2 text-[#1877F2] font-mono text-xs mb-2">
                                  <Scan size={14} /> <span>SCAN_DATA_01</span>
                              </div>
                              <h3 className="text-2xl font-bold text-white mb-2">Endüstriyel Parça Tarama</h3>
                              <p className="text-slate-300 text-sm">Tersine mühendislik için mikron hassasiyetinde veri toplama.</p>
                          </div>
                      </div>
                  </div>
                  <div className="space-y-8">
                      <div className="flex gap-4 items-start">
                          <div className="w-12 h-12 bg-[#1877F2]/10 rounded-xl flex items-center justify-center text-[#1877F2] shrink-0">
                              <Target size={24} />
                          </div>
                          <div>
                              <h4 className="text-xl font-bold text-white mb-2">Yüksek Doğruluk</h4>
                              <p className="text-slate-400 leading-relaxed">Karmaşık geometrilerin 0.02mm hassasiyetle dijitalleştirilmesi. CAD modelleme için mükemmel referans verisi.</p>
                          </div>
                      </div>
                      <div className="flex gap-4 items-start">
                          <div className="w-12 h-12 bg-[#1877F2]/10 rounded-xl flex items-center justify-center text-[#1877F2] shrink-0">
                              <Layers size={24} />
                          </div>
                          <div>
                              <h4 className="text-xl font-bold text-white mb-2">Yüzey Analizi</h4>
                              <p className="text-slate-400 leading-relaxed">Renk haritası ile deformasyon analizi ve kalite kontrol süreçleri.</p>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Large Feature 2 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center group">
                  <div className="lg:order-2 relative">
                      <div className="absolute inset-0 bg-cyan-500/20 blur-2xl transform rotate-3 group-hover:rotate-0 transition-all duration-700 rounded-[2rem]" />
                      <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-[4/3] shadow-2xl">
                          <OptimizedImage 
                            src={galleryImages[3]} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-2">
                                  <Cpu size={14} /> <span>SCAN_DATA_02</span>
                              </div>
                              <h3 className="text-2xl font-bold text-white mb-2">Mekanik Sistem Tarama</h3>
                              <p className="text-slate-300 text-sm">Montaj doğrulama ve dijital arşivleme projesi.</p>
                          </div>
                      </div>
                  </div>
                  <div className="lg:order-1 space-y-8 text-right lg:text-right">
                       <div className="flex gap-4 items-start flex-row-reverse">
                          <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 shrink-0">
                              <Box size={24} />
                          </div>
                          <div>
                              <h4 className="text-xl font-bold text-white mb-2">Dijital Montaj</h4>
                              <p className="text-slate-400 leading-relaxed">Taranan parçaların dijital ortamda birleştirilmesi ve çakışma testleri.</p>
                          </div>
                      </div>
                      <div className="flex gap-4 items-start flex-row-reverse">
                          <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 shrink-0">
                              <CheckCircle size={24} />
                          </div>
                          <div>
                              <h4 className="text-xl font-bold text-white mb-2">Hızlı Sonuç</h4>
                              <p className="text-slate-400 leading-relaxed">Geleneksel yöntemlere göre %60 daha hızlı ölçüm ve raporlama.</p>
                          </div>
                      </div>
                  </div>
              </div>

              {/* View Full Gallery Link (Optional text link instead of grid) */}
              <div className="text-center mt-20">
                   <Link to="/galeri" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors border-b border-slate-700 hover:border-white pb-1">
                       <span>Daha fazla örnek proje inceleyin</span>
                       <ArrowRight size={16} />
                   </Link>
              </div>
         </div>
       </section>

       <EducationBridge 
          title="Tersine Mühendislik Eğitimi"
          desc="Geomagic Design X ve 3D Tarama teknolojilerini uzmanlarından öğrenin. Uygulamalı eğitimlerle kalite kontrol ve dijitalleştirme süreçlerine hakim olun."
          linkText="Detaylı Bilgi"
          linkTo="/egitimlerimiz"
       />

       <References3D />
       <Testimonials3D />

       {/* CTA FOOTER */}
      <section className="py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[#0B0F19]"></div>
         <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#1877F2]/20 rounded-full blur-[100px]" />
         <div className="container mx-auto px-6 relative z-10 text-center">
             <h2 className="text-4xl md:text-5xl font-black text-white mb-8">PROJENİZİ BAŞLATIN</h2>
             <p className="text-slate-400 mb-10 max-w-xl mx-auto">
                Hassas parçalarınız, tersine mühendislik ihtiyaçlarınız veya kalite kontrol süreçleriniz için profesyonel destek alın.
             </p>
             <Link 
                to="/teklif-al"
                className="inline-block py-4 px-12 rounded-full bg-[#1877F2] text-white font-bold uppercase tracking-widest shadow-[0_0_20px_#1877F2] hover:bg-white hover:text-[#0B0F19] transition-all hover:scale-105"
             >
                Teklif Oluştur
             </Link>
         </div>
      </section>

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

export default Scanning3D;
