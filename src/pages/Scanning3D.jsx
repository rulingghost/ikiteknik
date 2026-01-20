import React, { useState, useEffect } from 'react';
import { Scan, Layers, Camera, AlertCircle, ChevronRight, CheckCircle, ArrowRight, Sparkles, Target, Clock, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';
import ImageLightbox from '../components/ImageLightbox';

const Scanning3D = () => {
  const [activeTab, setActiveTab] = useState('laser');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Collect all images for the lightbox
  const getAllImages = () => services.map(s => s.image);
  
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const services = [
    {
      id: 'laser',
      title: 'Lazer 3D Tarama',
      subtitle: 'Yüksek hassasiyet gerektiren endüstriyel uygulamalar için idealdir.',
      description: 'Lazer 3D tarama, nesnenin yüzeyine lazer ışını gönderilerek yansıyan sinyalin ölçülmesi prensibine dayanır. Bu yöntem sayesinde nesnenin geometrisi yüksek hassasiyetle ve milimetrik doğrulukta dijital ortama aktarılır.',
      icon: <Zap className="w-full h-full" />,
      color: 'rose',
      features: [
        'Çok yüksek ölçüm doğruluğu',
        'Büyük ve karmaşık parçalar için uygun',
        'Endüstriyel standartlara uyumlu',
        'CAD ve ölçüm yazılımlarıyla tam entegrasyon'
      ],
      applications: [
        'Otomotiv',
        'Havacılık',
        'Savunma Sanayi',
        'Kalite Kontrol',
        'Tersine Mühendislik'
      ],
      image: '/images/3d-tarama/WhatsApp Image 2026-01-20 at 16.18.30 (1).jpeg'
    },
    {
      id: 'structured-light',
      title: 'Beyaz Işık / Yapılandırılmış Işık Tarama',
      subtitle: 'Küçük, karmaşık ve detaylı parçaların yüksek çözünürlükte taranmasını sağlar.',
      description: 'Bu yöntemde nesne üzerine belirli desenlerde beyaz veya mavi ışık projekte edilir. Işığın yüzeydeki bozulmaları algılanarak nesnenin çok yüksek çözünürlüklü 3D modeli oluşturulur.',
      icon: <Layers className="w-full h-full" />,
      color: 'blue',
      features: [
        'Çok ince detayları yakalayabilme',
        'Küçük ve orta ölçekli parçalar için ideal',
        'Temassız ve güvenli tarama',
        'Pürüzsüz yüzeylerde yüksek performans'
      ],
      applications: [
        'Medikal Parçalar',
        'Takı',
        'Kalıpçılık',
        'Hassas Mekanik Bileşenler'
      ],
      image: '/images/3d-tarama/WhatsApp Image 2026-01-20 at 16.18.30 (5).jpeg'
    },
    {
      id: 'handheld',
      title: 'El Tipi 3D Tarama',
      subtitle: 'Taşınabilir yapısı sayesinde sahada hızlı ve esnek tarama imkânı sunar.',
      description: 'El tipi 3D tarayıcılar, taşınabilir yapıları sayesinde nesnenin bulunduğu ortamda tarama yapılmasına olanak tanır. Operatör, tarayıcıyı nesne etrafında hareket ettirerek hızlı şekilde veri toplar.',
      icon: <Scan className="w-full h-full" />,
      color: 'purple',
      features: [
        'Sahada ve yerinde tarama imkânı',
        'Hızlı veri toplama',
        'Büyük veya sabit nesneler için ideal',
        'Kurulum gerektirmez'
      ],
      applications: [
        'Şantiye Ortamları',
        'Büyük Makineler',
        'Araçlar',
        'Arkeolojik Eserler'
      ],
      image: '/images/3d-tarama/WhatsApp Image 2026-01-20 at 16.18.30 (8).jpeg'
    },
    {
      id: 'photogrammetry',
      title: 'Fotogrametri',
      subtitle: 'Çoklu fotoğraflar kullanılarak nesnelerin 3D dijital modellerinin oluşturulmasını sağlar.',
      description: 'Fotogrametri, nesnenin farklı açılardan çekilmiş çok sayıda fotoğrafının yazılım ortamında birleştirilmesiyle 3D model oluşturulması yöntemidir. Özellikle büyük ölçekli ve ulaşılması zor nesneler için ekonomik bir çözümdür.',
      icon: <Camera className="w-full h-full" />,
      color: 'green',
      features: [
        'Kamera ve yazılım tabanlı çözüm',
        'Geniş alanlar için uygun',
        'Doku (renk) bilgisi üretir',
        'Maliyet avantajı sağlar'
      ],
      applications: [
        'Kültürel Miras',
        'Mimari Yapılar',
        'Heykeller',
        'Açık Alan Objeleri'
      ],
      image: '/images/3d-tarama/WhatsApp Image 2026-01-20 at 16.18.30 (12).jpeg'
    }
  ];

  const benefits = [
    {
      icon: <Target size={32} />,
      title: 'Yüksek Hassasiyet',
      description: 'Milimetrik doğrulukta ölçüm ve modelleme'
    },
    {
      icon: <Clock size={32} />,
      title: 'Zaman Tasarrufu',
      description: 'Geleneksel yöntemlere göre %70 daha hızlı'
    },
    {
      icon: <Shield size={32} />,
      title: 'Temassız Tarama',
      description: 'Hassas ve kırılgan parçalar için güvenli'
    },
    {
      icon: <Box size={32} />,
      title: 'Karmaşık Geometriler',
      description: 'En karmaşık formları bile yakalayabilme'
    }
  ];

  const colorClasses = {
    rose: {
      bg: 'bg-rose-600',
      text: 'text-rose-600',
      border: 'border-rose-600',
      gradient: 'from-rose-500 to-pink-600',
      shadow: 'shadow-rose-500/30'
    },
    blue: {
      bg: 'bg-blue-600',
      text: 'text-blue-600',
      border: 'border-blue-600',
      gradient: 'from-blue-500 to-cyan-600',
      shadow: 'shadow-blue-500/30'
    },
    purple: {
      bg: 'bg-purple-600',
      text: 'text-purple-600',
      border: 'border-purple-600',
      gradient: 'from-purple-500 to-indigo-600',
      shadow: 'shadow-purple-500/30'
    },
    green: {
      bg: 'bg-green-600',
      text: 'text-green-600',
      border: 'border-green-600',
      gradient: 'from-green-500 to-emerald-600',
      shadow: 'shadow-green-500/30'
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-rose-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse-slow stagger-1" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8 animate-fade-in">
              <Sparkles size={16} className="text-rose-400" />
              <span className="text-white text-xs font-bold tracking-widest uppercase">Profesyonel 3D Tarama Hizmetleri</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none animate-slide-up">
              3D Tarama <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400">Teknolojisi</span>
            </h1>
            
            <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-3xl mx-auto animate-slide-up stagger-1">
              Fiziksel nesneleri yüksek hassasiyetli sensörler ve kameralar kullanarak dijital ortama aktarıyoruz. 
              Tersine mühendislik, kalite kontrol, restorasyon ve prototip geliştirme için profesyonel çözümler.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up stagger-2">
              <a 
                href="#services"
                className="btn-3d bg-gradient-to-r from-rose-600 to-pink-600 text-white px-12 py-5 rounded-3xl text-lg font-black uppercase tracking-widest shadow-2xl shadow-rose-500/30 inline-flex items-center gap-3 justify-center"
              >
                Hizmetleri Keşfet
                <ArrowRight size={20} />
              </a>
              <a 
                href="#contact"
                className="btn-3d bg-white/10 backdrop-blur-xl text-white border-2 border-white/20 px-12 py-5 rounded-3xl text-lg font-black uppercase tracking-widest shadow-2xl inline-flex items-center gap-3 justify-center"
              >
                Teklif Al
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
              Neden 3D Tarama?
            </h2>
            <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
              Modern üretim ve tasarım süreçlerinde vazgeçilmez bir teknoloji
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="tilt-3d bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl hover:shadow-2xl transition-all group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-rose-500/20">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
              Hizmet Türlerimiz
            </h2>
            <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
              İhtiyacınıza özel profesyonel 3D tarama çözümleri
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {services.map((service, index) => {
              const colors = colorClasses[service.color];
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all shadow-lg ${
                    activeService === index
                      ? `${colors.bg} text-white ${colors.shadow} scale-105`
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {service.title}
                </button>
              );
            })}
          </div>

          {/* Active Service Detail */}
          <div className="max-w-6xl mx-auto">
            {services.map((service, index) => {
              const colors = colorClasses[service.color];
              return (
                <div
                  key={service.id}
                  className={`transition-all duration-500 ${
                    activeService === index ? 'opacity-100 block' : 'opacity-0 hidden'
                  }`}
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="order-2 lg:order-1 animate-slide-up">
                      <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
                        <OptimizedImage 
                          src={service.image}
                          width={600}
                          className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700"
                          alt={service.title}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-20`} />
                        <div className={`absolute top-8 left-8 w-20 h-20 ${colors.bg} rounded-2xl flex items-center justify-center text-white shadow-2xl ${colors.shadow}`}>
                          {service.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2 animate-slide-up stagger-1">
                      <div className={`inline-block px-4 py-2 ${colors.bg} text-white rounded-full text-xs font-bold uppercase tracking-wider mb-6`}>
                        {service.id}
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight uppercase">
                        {service.title}
                      </h3>
                      
                      <p className={`${colors.text} text-lg font-bold mb-6`}>
                        {service.subtitle}
                      </p>
                      
                      <p className="text-slate-600 text-base leading-relaxed mb-8 font-medium">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4">
                          Öne Çıkan Özellikler:
                        </h4>
                        <div className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle size={20} className={`${colors.text} mt-0.5 flex-shrink-0`} />
                              <span className="text-slate-700 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applications */}
                      <div>
                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4">
                          Kullanım Alanları:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.applications.map((app, idx) => (
                            <span 
                              key={idx}
                              className={`px-4 py-2 bg-slate-100 ${colors.text} rounded-xl text-xs font-bold uppercase tracking-wider`}
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
              Çalışma Sürecimiz
            </h2>
            <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
              Profesyonel ve hızlı hizmet garantisi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: '01', title: 'Danışma', desc: 'İhtiyaçlarınızı analiz ediyoruz' },
              { step: '02', title: 'Tarama', desc: 'Profesyonel ekipmanla veri toplama' },
              { step: '03', title: 'İşleme', desc: 'Verileri optimize edip modelleme' },
              { step: '04', title: 'Teslimat', desc: 'İstenilen formatta dosya teslimi' }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="tilt-3d bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl hover:shadow-2xl transition-all">
                  <div className="text-6xl font-black text-slate-100 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-rose-300 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-rose-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-tight">
              Projeniz İçin <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400">Profesyonel Çözüm</span>
            </h2>
            <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed mb-12">
              3D tarama hizmetlerimiz hakkında detaylı bilgi almak ve projeniz için teklif almak isterseniz bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/iletisim"
                className="btn-3d bg-gradient-to-r from-rose-600 to-pink-600 text-white px-12 py-5 rounded-3xl text-lg font-black uppercase tracking-widest shadow-2xl shadow-rose-500/30 inline-flex items-center gap-3 justify-center"
              >
                İletişime Geç
                <ArrowRight size={20} />
              </Link>
              <a 
                href="tel:+903122313135"
                className="btn-3d bg-white/10 backdrop-blur-xl text-white border-2 border-white/20 px-12 py-5 rounded-3xl text-lg font-black uppercase tracking-widest shadow-2xl inline-flex items-center gap-3 justify-center"
              >
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={getAllImages()}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={(step = 1) => {
            const newIndex = (currentImageIndex + step + getAllImages().length) % getAllImages().length;
            setCurrentImageIndex(newIndex);
          }}
          onPrev={() => {
             const newIndex = (currentImageIndex - 1 + getAllImages().length) % getAllImages().length;
             setCurrentImageIndex(newIndex);
          }}
        />
      )}
    </div>
  );
};

export default Scanning3D;
