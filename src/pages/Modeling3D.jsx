import React, { useState } from 'react';
import { Box, Layers, Printer, RotateCcw, CheckCircle, ArrowRight, Sparkles, Target, Clock, Shield, Zap, Search } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import { Link } from 'react-router-dom';
import ImageLightbox from '../components/ImageLightbox';

const Modeling3D = () => {
  const [activeService, setActiveService] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Collect all images for the lightbox
  const getAllImages = () => services.map(s => s.image);
  
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };
   

  const slogans = [
    "Gerçeği dijitale dönüştürüyoruz",
    "Detayı yakala, geleceği tasarla",
    "Gerçeğin dijital hali",
    "Gerçeğe En Yakın Dijital Çözümler",
    "Teknik Doğruluk, Gerçekçi 3D Modelleme"
  ];

  const services = [
    {
      id: 'product',
      title: 'Ürün 3D Modelleme',
      subtitle: 'Ürününüzü üretim öncesi dijital ortamda görselleştirin',
      description: 'Ürün 3D modelleme, bir ürünün fiziksel olarak üretilmeden önce dijital ortamda üç boyutlu, ölçülere uygun ve detaylı şekilde tasarlanmasını sağlayan profesyonel bir hizmettir. Bu süreçte ürünün formu, oranları, yüzey detayları ve teknik yapısı birebir modellenerek gerçeğe en yakın dijital temsili oluşturulur.',
      icon: <Box className="w-full h-full" />,
      color: 'rose',
      benefits: [
        'Ürünlerini üretim öncesi net şekilde görselleştirir',
        'Tasarım kararlarını daha hızlı ve doğru alır',
        'Katalog, web sitesi ve reklam çalışmalarında profesyonel sunum elde eder',
        'Pazara çıkış süresini kısaltır'
      ],
      applications: [
        'Endüstriyel Tasarım',
        'Prototipleme',
        'Pazarlama & Sunum',
        'Seri Üretim Öncesi Test'
      ],
      image: '/images/3d-modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (14).jpeg'
    },
    {
      id: 'industrial',
      title: 'Endüstriyel ve Teknik 3D Modelleme',
      subtitle: 'Mühendislik doğruluğu ve ölçü hassasiyeti odaklı modelleme',
      description: 'Endüstriyel ve teknik 3D modelleme, makine parçaları, mekanik sistemler, endüstriyel ekipmanlar ve teknik ürünlerin ölçülere birebir uygun, fonksiyonel ve üretime hazır şekilde üç boyutlu olarak modellenmesini kapsayan profesyonel bir hizmettir.',
      icon: <Layers className="w-full h-full" />,
      color: 'blue',
      benefits: [
        'Mühendislik doğruluğu ve ölçü hassasiyeti',
        'CNC üretim ve kalıp tasarımına uygun',
        'Montaj analizi ve teknik dokümantasyon',
        'Üretime hazır CAD dosyaları'
      ],
      applications: [
        'Makine Parçaları',
        'Mekanik Sistemler',
        'Endüstriyel Ekipman',
        'Kalıp Tasarımı'
      ],
      image: '/images/3d-modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (20).jpeg'
    },
    {
      id: '3d-printing',
      title: '3D Baskıya Uygun Modelleme',
      subtitle: 'Sorunsuz basılabilir, dayanıklı ve işlevsel modeller',
      description: '3D baskıya uygun modelleme, bir objenin veya ürünün 3D yazıcılarla fiziksel olarak üretilebilecek şekilde dijital ortamda doğru ölçüler, uygun toleranslar ve baskı kurallarına göre modellenmesi sürecidir. Bu hizmet, yalnızca görsel bir 3D model oluşturmayı değil, aynı zamanda modelin sorunsuz basılabilir, dayanıklı ve işlevsel olmasını hedefler.',
      icon: <Printer className="w-full h-full" />,
      color: 'purple',
      benefits: [
        'Duvar kalınlıkları ve toleranslar optimize edilir',
        'Baskı yönü ve destek ihtiyacı hesaplanır',
        'Birleşim noktaları ve boşluklar kontrol edilir',
        'Baskı hatalarını önceden engeller'
      ],
      applications: [
        'Prototip Üretim',
        'Özel Parça İmalatı',
        'Hobi ve Sanat Projeleri',
        'Yedek Parça Üretimi'
      ],
      image: '/images/3d-modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (24).jpeg'
    },
    {
      id: 'reverse',
      title: 'Tersine Mühendislik (Reverse Engineering)',
      subtitle: 'Fiziksel ürünleri dijital modellere dönüştürün',
      description: 'Tersine mühendislik, mevcut bir fiziksel ürünün, parçanın veya sistemin ölçülerek, taranarak ya da analiz edilerek dijital 3D modelinin yeniden oluşturulması sürecidir. Bu yöntem, özellikle teknik çizimi veya CAD dosyası bulunmayan parçaların yeniden üretilmesi, geliştirilmesi veya iyileştirilmesi amacıyla kullanılır.',
      icon: <RotateCcw className="w-full h-full" />,
      color: 'green',
      benefits: [
        'Teknik çizimi olmayan parçaları yeniden üretir',
        'Yüksek doğrulukla dijital ortama aktarır',
        'Üretime ve 3D baskıya uygun hale getirir',
        'Eski parçaları modernize eder'
      ],
      applications: [
        'Yedek Parça Üretimi',
        'Ürün İyileştirme',
        'Kalite Kontrol',
        'Arşivleme ve Dokümantasyon'
      ],
      image: '/images/3d-modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (30).jpeg'
    }
  ];

  const benefits = [
    {
      icon: <Target size={32} />,
      title: 'Yüksek Detay',
      description: 'Gerçeğe en yakın görselleştirme'
    },
    {
      icon: <Clock size={32} />,
      title: 'Hızlı Teslimat',
      description: 'Proje sürenizi kısaltın'
    },
    {
      icon: <Shield size={32} />,
      title: 'Profesyonel Kalite',
      description: 'Endüstri standartlarında çözümler'
    },
    {
      icon: <Zap size={32} />,
      title: 'Esneklik',
      description: 'Her formatta dosya desteği'
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
              <span className="text-white text-xs font-bold tracking-widest uppercase">Profesyonel 3D Modelleme Hizmetleri</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none animate-slide-up">
              3D <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400">Modelleme</span> Hizmetleri
            </h1>
            
            <div className="mb-8 animate-slide-up stagger-1">
              <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed mb-4">
                Fikir ve tasarımlarınızı dijital ortamda üç boyutlu, detaylı ve gerçekçi modeller haline getiriyoruz.
              </p>
              <p className="text-rose-400 text-base md:text-lg font-bold italic">
                "{slogans[Math.floor(Math.random() * slogans.length)]}"
              </p>
            </div>

            <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed mb-12 max-w-3xl mx-auto animate-slide-up stagger-2">
              Mimari, endüstriyel tasarım, ürün geliştirme, oyun, animasyon ve reklam gibi birçok alanda kullanılır. 
              Ölçülere uygun, teknik gereksinimleri karşılayan ve kullanım amacına göre optimize edilmiş modeller hazırlanır.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up stagger-3">
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
              Neden 3D Modelleme?
            </h2>
            <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
              Projelerinizi daha anlaşılır, etkileyici ve profesyonel bir şekilde sunun
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
              İhtiyacınıza özel profesyonel 3D modelleme çözümleri
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
                      <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer" onClick={() => openLightbox(index)}>
                        <OptimizedImage 
                          src={service.image}
                          width={600}
                          className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700"
                          alt={service.title}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-20 group-hover:opacity-10 transition-opacity`} />
                        <div className={`absolute top-8 left-8 w-20 h-20 ${colors.bg} rounded-2xl flex items-center justify-center text-white shadow-2xl ${colors.shadow} z-10`}>
                          {service.icon}
                        </div>

                        {/* Zoom Icon Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                             <Search size={32} />
                          </div>
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

                      {/* Benefits */}
                      <div className="mb-8">
                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4">
                          Avantajlar:
                        </h4>
                        <div className="space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle size={20} className={`${colors.text} mt-0.5 flex-shrink-0`} />
                              <span className="text-slate-700 font-medium">{benefit}</span>
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
              { step: '01', title: 'Konsept', desc: 'İhtiyaçlarınızı analiz edip konsept geliştiriyoruz' },
              { step: '02', title: 'Modelleme', desc: 'Detaylı ve ölçülere uygun 3D model oluşturuyoruz' },
              { step: '03', title: 'Revizyon', desc: 'Geri bildirimlerinize göre düzenlemeler yapıyoruz' },
              { step: '04', title: 'Teslimat', desc: 'İstenilen formatlarda dosya teslimi' }
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
              3D modelleme hizmetlerimiz hakkında detaylı bilgi almak ve projeniz için teklif almak isterseniz bizimle iletişime geçin.
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

export default Modeling3D;
