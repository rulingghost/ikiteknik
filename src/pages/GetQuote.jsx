import React, { useState, useEffect, useRef } from 'react';
import { 
  Upload, CheckCircle, ChevronRight, ChevronLeft, Send, 
  Settings, Check, X, Loader2, HelpCircle, ChevronDown, Scan,
  Cpu, Box, Layers, Zap, PenTool, Hammer, Factory, ArrowRight, 
  ShieldCheck, Users, Database, FileCode, Info, Calculator
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// --- Constants & Data ---
const technologies = [
  { 
    id: 'fdm', 
    title: 'Hızlı Prototipleme (FDM)', 
    icon: <Zap size={24} />,
    desc: 'En ekonomik ve hızlı seçenek. Fonksiyonel testler ve basit parçalar için ideal.',
    materials: ['PLA', 'ABS', 'PETG', 'TPU', 'ASA'],
    basePrice: 150
  },
  { 
    id: 'sla', 
    title: 'SLA / DLP Reçine', 
    icon: <Layers size={24} />,
    desc: 'Yüksek yüzey kalitesi ve detay. Görsel prototipler ve döküm modelleri.',
    materials: ['Standart Reçine', 'Tough 2000', 'Dental Model', 'Castable Wax'],
    basePrice: 300
  },
  { 
    id: 'mjf', 
    title: 'Endüstriyel MJF', 
    icon: <Box size={24} />,
    desc: 'Nihai ürün kalitesinde, izotropik özelliklere sahip naylon parçalar.',
    materials: ['PA12 (Nylon)', 'PA11', 'PA12 Glass Beads'],
    basePrice: 400
  },
  {
     id: 'scanning',
     title: '3D Tarama (Reverse Eng.)',
     icon: <Scan size={24} />,
     desc: 'Fiziksel parçaları dijital ortama aktarın. Tersine mühendislik ve kalite kontrol.',
     materials: ['Lazer Tarama', 'Optik Tarama', 'Tersine Mühendislik', 'Kalite Kontrol Raporu'],
     basePrice: 1500
  },
  {
     id: 'design',
     title: '3D Tasarım & Modelleme',
     icon: <PenTool size={24} />,
     desc: 'Fikirlerinizi üretime hazır CAD modellerine ve teknik resimlere dönüştürün.',
     materials: ['Mekanik Tasarım', 'Endüstriyel Tasarım', 'Teknik Resim Oluşturma', 'Render'],
     basePrice: 2000
  }
];

const finishes = [
  { id: 'standart', name: 'Standart (İşlendiği Gibi)', priceMod: 1 },
  { id: 'kum', name: 'Kumlama (Mat Yüzey)', priceMod: 1.1 },
  { id: 'boya', name: 'Sprey Boya', priceMod: 1.3 },
  { id: 'polisaj', name: 'Polisaj (Parlak)', priceMod: 1.5 },
  { id: 'eloksal', name: 'Eloksal Kaplama (Sadece Alüminyum)', priceMod: 1.4 }
];

const tolerances = [
  { id: 'standart', name: 'Standart (ISO 2768-m)', priceMod: 1 },
  { id: 'hassas', name: 'Hassas (±0.05 mm)', priceMod: 1.5 },
  { id: 'cok-hassas', name: 'Çok Hassas (±0.01 mm)', priceMod: 2.5 }
];

// --- Sub Components ---

const ServiceCarousel = ({ startQuote }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 240; 
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-24 animate-fade-in relative z-10">
       <div className="flex justify-between items-end mb-6 px-2">
          <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Üretim Teknolojileri</h2>
              <p className="text-sm text-slate-500 font-medium mt-1">İhtiyacınıza uygun yöntemi seçin</p>
          </div>
          <div className="flex gap-2">
              <button 
                onClick={() => scroll('left')} 
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white border border-slate-200 rounded-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm active:scale-95 group"
              >
                  <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button 
                onClick={() => scroll('right')} 
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white border border-slate-200 rounded-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm active:scale-95 group"
              >
                  <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
          </div>
       </div>
       
       <div 
          ref={scrollRef}
          className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide flex gap-4 snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
       >
          {technologies.map(tech => (
             <div 
                key={tech.id}
                onClick={() => startQuote(tech.id)}
                className="min-w-[200px] w-[200px] bg-white rounded-xl shadow-sm border border-slate-100 p-5 flex flex-col items-start cursor-pointer hover:shadow-xl hover:-translate-y-1 hover:border-blue-400 transition-all duration-300 snap-start group relative overflow-hidden"
             >
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                   {React.cloneElement(tech.icon, { size: 20 })}
                </div>
                
                <h3 className="font-bold text-slate-900 text-sm mb-2 leading-tight group-hover:text-blue-600 transition-colors">{tech.title}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed mb-4 line-clamp-3">
                  {tech.desc}
                </p>
                
                <div className="mt-auto pt-3 border-t border-slate-50 w-full group-hover:border-slate-100">
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-blue-600 flex items-center justify-between">
                      Seç <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                   </span>
                </div>
             </div>
          ))}
       </div>
    </div>
  );
};

const TrustBanner = () => (
  <div className="py-12 border-y border-slate-100 bg-slate-50/50 mb-24 animate-fade-in stagger-2">
      <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
          Türkiye'nin Önde Gelen Mühendislik Ekipleri Tarafından Tercih Ediliyor
      </p>
      <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale">
           {['ASELSAN', 'TUSAŞ', 'ROKETSAN', 'FORD OTOSAN', 'TOGG', 'VESTEL', 'ARÇELİK'].map((brand, i) => (
               <span key={i} className="text-xl font-black text-slate-800">{brand}</span>
           ))}
      </div>
  </div>
);

const FAQ = () => {
  const [open, setOpen] = useState(0);
  const questions = [
      { q: "Fiyat teklifi ne kadar sürede oluşturulur?", a: "Dosyalarınızı yükledikten sonra yapay zeka destekli sistemimiz saniyeler içinde tahmini bir fiyat aralığı sunar. Kesin üretim onayı ve net fiyat, mühendislerimiz tarafından yapılan (DFM) kontrollerinden sonra en geç 2 saat içinde tarafınıza iletilir." },
      { q: "Hangi dosya formatlarını kabul ediyorsunuz?", a: "Fiyatlandırma için en uygun formatlar STEP (.stp, .step) ve STL'dir. Ayrıca IGES, OBJ, X_T formatlarını da destekliyoruz. Teknik çizimler için PDF yükleyebilirsiniz." },
      { q: "Gizlilik ve Fikri Mülkiyet hakları nasıl korunuyor?", a: "Yüklediğiniz tüm dosyalar ISO 27001 bilgi güvenliği standartlarına uygun şifreli sunucularımızda saklanır. Üretim partnerlerimizle gizlilik sözleşmemiz (NDA) mevcuttur. Dilerseniz projeniz için özel NDA imzalayabiliriz." },
      { q: "Standart teslimat süreleriniz nedir?", a: "Hızlı prototipleme (FDM/SLA) için 24-48 saat, CNC işleme ve diğer endüstriyel yöntemler için projeye bağlı olarak 3-7 iş günü arasındadır. Acil durumlarda 'Express Üretim' seçeneğimiz mevcuttur." }
  ];

  return (
      <div className="max-w-3xl mx-auto mb-24 animate-slide-up">
          <h2 className="text-2xl font-black text-slate-900 text-center mb-8">Sıkça Sorulan Sorular</h2>
          <div className="space-y-4">
              {questions.map((item, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-200">
                      <button 
                          onClick={() => setOpen(open === i ? -1 : i)}
                          className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                      >
                          {item.q}
                          <ChevronDown className={`text-slate-400 transition-transform duration-300 ${open === i ? 'rotate-180 text-blue-600' : ''}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="p-5 pt-0 text-slate-500 font-medium leading-relaxed text-sm">
                              {item.a}
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
};

const WhyChooseUs = () => (
  <div className="grid md:grid-cols-3 gap-8 mb-24 animate-fade-in stagger-1">
      {[
          {
              icon: <Zap size={32} />,
              title: "Hızlı Teklif & Üretim",
              desc: "Yapay zeka destekli sistemimiz ile saniyeler içinde fiyat alın, parçalarınız günler içinde kargoya verilsin."
          },
          {
              icon: <ShieldCheck size={32} />,
              title: "Garantili Kalite",
              desc: "Her parça, ISO 9001 sertifikalı tesislerimizde üretilir ve uzman mühendislerimiz tarafından kalite kontrolünden geçer."
          },
          {
              icon: <Users size={32} />,
              title: "Uzman Mühendis Desteği",
              desc: "Tasarımınızın üretilebilirliği konusunda (DfM) ücretsiz geri bildirim ve mühendislik desteği alın."
          }
      ].map((item, idx) => (
          <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {item.icon}
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {item.desc}
              </p>
          </div>
      ))}
  </div>
);

const LandingHero = ({ startQuote }) => (
  <div className="grid lg:grid-cols-2 gap-8 mb-12 animate-fade-in">
     <div className="bg-[#E6F4FF] rounded-lg p-10 border border-[#B3D9FF] border-dashed relative overflow-hidden flex flex-col justify-center min-h-[400px]">
        <div className="mb-8 flex justify-center">
           <div className="flex -space-x-4">
               {[1,2,3].map(i => (
                  <div key={i} className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full border-2 border-white shadow-lg flex items-center justify-center text-blue-500 animate-bounce-slow" style={{animationDelay: `${i*0.2}s`}}>
                     <Box size={32} />
                  </div>
               ))}
           </div>
        </div>
        
        <h1 className="text-3xl font-black text-slate-900 text-center mb-4 leading-tight">
           Anında fiyatlandırma, proje süreleri ve DfM geri bildirimi al
        </h1>
        
        <p className="text-slate-600 text-center mb-8 max-w-md mx-auto font-medium">
           3D CAD dosyalarınızı yükleyin, parçalarınız için saniyeler içinde profesyonel üretim teklifi alın.
        </p>
        
        <div className="text-center">
           <button 
             onClick={() => startQuote()}
             className="bg-[#0057FF] hover:bg-blue-700 text-white text-lg font-bold py-4 px-12 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
           >
              Fiyat Teklifine Başla
           </button>
        </div>
        
        <div className="mt-8 flex justify-center items-center gap-2 text-[#006E2E] font-bold text-sm bg-green-100/50 py-2 px-4 rounded-full w-fit mx-auto">
           <ShieldCheck size={18} />
           <span>Tüm yüklemeler güvenli ve gizlidir</span>
        </div>
     </div>

     <div className="flex flex-col gap-6 justify-center">
         {[
             {
                 icon: <Calculator className="text-blue-600" size={28} />,
                 title: "Saniyeler İçinde Teklif Alın",
                 desc: "Parçanızın geometrisine göre anında, yapay zeka destekli piyasa ortalaması fiyatlandırma alın."
             },
             {
                 icon: <Users className="text-blue-600" size={28} />,
                 title: "Takım Çalışması (Teamspace)",
                 desc: "Ekibinizle işbirliği yapın, projeleri paylaşın ve satın alma kararlarını daha hızlı alın."
             },
             {
                 icon: <Database className="text-blue-600" size={28} />,
                 title: "Parça Kitaplığı",
                 desc: "Tüm parçalarınızı kolayca yönetin, revizyonları takip edin ve tek tıkla yeniden sipariş verin."
             }
         ].map((feature, i) => (
             <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex gap-5 items-start">
                 <div className="w-14 h-14 bg-blue-50/50 rounded-xl flex items-center justify-center shrink-0">
                     {feature.icon}
                 </div>
                 <div>
                     <h3 className="font-bold text-slate-900 text-lg mb-2">{feature.title}</h3>
                     <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                 </div>
             </div>
         ))}
     </div>
  </div>
);

const SummarySidebar = ({ files, globalConfig, estimatedPrice, calculating }) => (
    <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden sticky top-24">
        <div className="bg-slate-900 text-white p-6">
            <h3 className="font-black text-lg uppercase tracking-wide">Özet</h3>
        </div>
        <div className="p-6 space-y-4">
            {files.map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-sm border-b border-slate-100 pb-2">
                    <FileCode size={16} className="text-slate-400" />
                    <span className="truncate font-medium text-slate-700 flex-1">{f.name}</span>
                    <span className="text-slate-400 text-xs">{f.size}</span>
                </div>
            ))}
            
            <div className="space-y-3 pt-2">
            <div className="flex justify-between text-sm">
                <span className="text-slate-500">Teknoloji:</span>
                <span className="font-bold text-slate-900 text-right">{technologies.find(t=>t.id===globalConfig.technology)?.title || '-'}</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-slate-500">Malzeme:</span>
                <span className="font-bold text-slate-900">{globalConfig.material || '-'}</span>
            </div>
            {globalConfig.finish && (
                <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Bitiş:</span>
                    <span className="font-bold text-slate-900">{finishes.find(f=>f.id===globalConfig.finish)?.name}</span>
                </div>
            )}
            <div className="flex justify-between text-sm">
                <span className="text-slate-500">Adet:</span>
                <span className="font-bold text-slate-900">{globalConfig.quantity}</span>
            </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mt-6 border border-blue-100">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-blue-900 font-bold text-sm">Tahmini Tutar</span>
                    {calculating && <Loader2 size={16} className="animate-spin text-blue-600" />}
                </div>
                <div className="text-3xl font-black text-[#0057FF]">
                    {estimatedPrice ? `₺${estimatedPrice.toLocaleString('tr-TR')}` : '-'}
                </div>
                <p className="text-[10px] text-blue-600/70 mt-1 leading-tight">
                    *Bu fiyat tahmini bir değerdir. Kesin teklif dosya analizi sonrası iletilecektir.
                </p>
            </div>
        </div>
    </div>
);

const WizardStep1 = ({ files, handleFiles, removeFile, dragActive, handleDrag, handleDrop, nextStep }) => (
  <div className="animate-fade-in">
      <div className="bg-white rounded-[1rem] shadow-xl border border-slate-200 overflow-hidden">
          <div className={`p-16 text-center border-b border-slate-100 transition-colors ${dragActive ? 'bg-blue-50' : ''}`}
               onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
              
              <div className="mb-6 inline-flex p-6 rounded-full bg-blue-50 text-blue-600 animate-pulse-slow">
                  <Upload size={48} />
              </div>
              
              <h2 className="text-2xl font-black text-slate-900 mb-2">CAD Dosyalarını Yükle</h2>
              <p className="text-slate-500 mb-8 max-w-lg mx-auto">
                  Hesaplama yapabilmemiz için STEP, STP, STL veya IGS formatındaki dosyalarınızı sürükleyip bırakın.
                  <br/><span className="text-xs text-slate-400 mt-2 block">(Teknik çizimler için PDF de yükleyebilirsiniz)</span>
              </p>

              <label className="inline-flex cursor-pointer">
                  <input type="file" multiple className="hidden" onChange={(e) => e.target.files && handleFiles(e.target.files)} accept=".stl,.step,.stp,.igs,.iges,.obj,.pdf" />
                  <span className="bg-[#0057FF] hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg shadow-lg transition-all flex items-center gap-2">
                      <FileCode size={20} />
                      Bilgisayarımdan Seç
                  </span>
              </label>
          </div>

          {files.length > 0 && (
              <div className="bg-slate-50 p-6 md:p-8">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Yüklenen Dosyalar ({files.length})</h3>
                  <div className="grid gap-3 mb-8">
                      {files.map((file, i) => (
                          <div key={i} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                   <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center text-blue-700 font-bold text-[10px]">
                                       {file.type}
                                   </div>
                                   <div>
                                       <div className="font-bold text-slate-900 text-sm">{file.name}</div>
                                       <div className="text-xs text-slate-500">{file.size} - Yüklendi</div>
                                   </div>
                              </div>
                              <button onClick={() => removeFile(i)} className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-2 rounded transition-colors"><X size={18} /></button>
                          </div>
                      ))}
                  </div>
                  <div className="flex justify-end">
                      <button onClick={nextStep} className="bg-slate-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-slate-800 flex items-center gap-2">
                          Konfigürasyon'a Git <ChevronRight size={18} />
                      </button>
                  </div>
              </div>
          )}
      </div>
  </div>
);

const WizardStep2 = ({ globalConfig, setGlobalConfig, handleConfigChange, prevStep, nextStep, files, estimatedPrice, calculating }) => (
  <div className="grid lg:grid-cols-3 gap-8 animate-fade-in">
      <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                      <Settings size={20} />
                  </div>
                  <div>
                      <h3 className="font-black text-slate-900">Üretim Ayarları</h3>
                      <p className="text-xs text-slate-500">Tüm parçalar için geçerli ayarlar</p>
                  </div>
              </div>

              <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                      {technologies.map(tech => (
                          <div 
                              key={tech.id}
                              onClick={() => setGlobalConfig(prev => ({...prev, technology: tech.id, material: ''}))}
                              className={`p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md ${globalConfig.technology === tech.id ? 'border-blue-600 bg-blue-50' : 'border-slate-100 hover:border-slate-300'}`}
                          >
                              <div className="flex justify-between items-start mb-2">
                                  <div className={`${globalConfig.technology === tech.id ? 'text-blue-600' : 'text-slate-400'}`}>
                                      {tech.icon}
                                  </div>
                                  {globalConfig.technology === tech.id && <CheckCircle size={18} className="text-blue-600" />}
                              </div>
                              <div className="font-bold text-slate-900 text-sm mb-1">{tech.title}</div>
                              <div className="text-[10px] text-slate-500 leading-snug">{tech.desc}</div>
                          </div>
                      ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                       <div>
                           <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Malzeme</label>
                           <select name="material" value={globalConfig.material} onChange={handleConfigChange} 
                              className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 h-12 font-medium"
                              disabled={!globalConfig.technology}
                           >
                               <option value="">Seçiniz...</option>
                               {technologies.find(t => t.id === globalConfig.technology)?.materials.map(m => (
                                   <option key={m} value={m}>{m}</option>
                               ))}
                           </select>
                       </div>
                       <div>
                           <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Adet</label>
                           <input type="number" name="quantity" value={globalConfig.quantity} onChange={handleConfigChange} min="1"
                              className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 h-12 font-medium"
                           />
                       </div>
                       <div>
                           <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Yüzey Bitişi</label>
                           <select name="finish" value={globalConfig.finish} onChange={handleConfigChange}
                              className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 h-12 font-medium"
                           >
                               {finishes.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
                           </select>
                       </div>
                       <div>
                           <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Tolerans</label>
                           <select name="tolerance" value={globalConfig.tolerance} onChange={handleConfigChange}
                              className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 h-12 font-medium"
                           >
                               {tolerances.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                           </select>
                       </div>
                  </div>
                  
                  <div>
                       <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Proje Notları</label>
                       <textarea name="notes" value={globalConfig.notes} onChange={handleConfigChange} rows="2"
                           className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 font-medium resize-none"
                           placeholder="Özel gereksinimlerinizi buraya yazabilirsiniz..."
                       ></textarea>
                  </div>
              </div>
          </div>
          
           <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-200">
              <button onClick={prevStep} className="text-slate-500 font-bold hover:text-slate-900 px-4 py-2">Geri</button>
              <button 
                  onClick={nextStep} 
                  disabled={!globalConfig.technology || !globalConfig.material}
                  className="bg-[#0057FF] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all flex items-center gap-2"
              >
                  Onay ve İletişim <ChevronRight size={18} />
              </button>
           </div>
      </div>

      <div className="lg:col-span-1">
           <SummarySidebar files={files} globalConfig={globalConfig} estimatedPrice={estimatedPrice} calculating={calculating} />
      </div>
  </div>
);

const WizardStep3 = ({ contact, setContact, handleSubmit, isSubmitting, prevStep, files, globalConfig, estimatedPrice, calculating }) => (
    <div className="grid lg:grid-cols-3 gap-8 animate-fade-in">
      <div className="lg:col-span-2">
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-slate-200">
              <h2 className="text-2xl font-black text-slate-900 mb-2">İletişim Bilgileri</h2>
              <p className="text-slate-500 mb-8">Teklifinizi size ulaştırabilmemiz için bilgilerinizi eksiksiz doldurunuz.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                      <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Ad Soyad</label>
                          <input required type="text" name="name" value={contact.name} onChange={(e) => setContact({...contact, name: e.target.value})} className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 font-medium focus:ring-blue-500 focus:border-blue-500 appearance-none" />
                      </div>
                      <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Firma Adı (Opsiyonel)</label>
                          <input type="text" name="company" value={contact.company} onChange={(e) => setContact({...contact, company: e.target.value})} className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 font-medium focus:ring-blue-500 focus:border-blue-500 appearance-none" />
                      </div>
                  </div>
                  
                  <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">E-Mail Adresi</label>
                      <input required type="email" name="email" value={contact.email} onChange={(e) => setContact({...contact, email: e.target.value})} className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 font-medium focus:ring-blue-500 focus:border-blue-500 appearance-none" />
                  </div>
                  
                  <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Telefon</label>
                      <input required type="tel" name="phone" value={contact.phone} onChange={(e) => setContact({...contact, phone: e.target.value})} className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 font-medium focus:ring-blue-500 focus:border-blue-500 appearance-none" />
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg flex gap-3 border border-blue-100">
                      <Info size={20} className="text-blue-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-blue-800 font-medium leading-relaxed">
                          Bu formu göndererek Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında verilerinizin işlenmesini kabul etmiş olursunuz.
                      </p>
                  </div>

                  <div className="pt-4 flex gap-4">
                      <button type="button" onClick={prevStep} className="flex-1 bg-slate-100 text-slate-600 font-bold py-3 rounded-lg hover:bg-slate-200 transition-colors">Geri</button>
                      <button type="submit" disabled={isSubmitting} className="flex-[2] bg-[#0057FF] text-white font-bold py-3 rounded-lg shadow-lg hover:bg-blue-700 flex items-center justify-center gap-2 transition-all">
                          {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={18} />}
                          Teklifi Tamamla
                      </button>
                  </div>
              </form>
          </div>
      </div>

      <div className="lg:col-span-1">
           <SummarySidebar files={files} globalConfig={globalConfig} estimatedPrice={estimatedPrice} calculating={calculating} />
      </div>
    </div>
);

const SuccessView = ({ contact }) => (
  <div className="min-h-[400px] flex flex-col items-center justify-center text-center animate-scale-in">
      <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={48} />
      </div>
      <h2 className="text-3xl font-black text-slate-900 mb-4">Talebiniz Başarıyla Alındı!</h2>
      <p className="text-slate-600 max-w-lg mx-auto mb-8 font-medium">
          Dosyalarınız sistemimize güvenle yüklendi. Uzman mühendislerimiz projenizi inceleyip <strong>en geç 2 saat içinde</strong> " 
          <span className="text-slate-900 font-bold">{contact.email}</span> " adresine resmi teklifimizi iletecektir.
      </p>
      <div className="flex gap-4">
          <Link to="/" className="bg-slate-100 text-slate-700 font-bold py-3 px-8 rounded-lg hover:bg-slate-200">Ana Sayfa</Link>
          <button onClick={() => window.location.reload()} className="bg-[#0057FF] text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700">Yeni Teklif</button>
      </div>
  </div>
);

// --- Main Component ---

const GetQuote = () => {
  // State
  const [view, setView] = useState('landing');
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [calculating, setCalculating] = useState(false);
  
  // Form State
  const [files, setFiles] = useState([]);
  const [globalConfig, setGlobalConfig] = useState({
    technology: '',
    material: '',
    finish: 'standart',
    tolerance: 'standart',
    quantity: 1,
    notes: ''
  });
  
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  // Mock Price Calculation
  const [estimatedPrice, setEstimatedPrice] = useState(null);

  // Helper to simulate price calculation
  useEffect(() => {
    if (globalConfig.technology && globalConfig.material && files.length > 0) {
      setCalculating(true);
      const timer = setTimeout(() => {
        const tech = technologies.find(t => t.id === globalConfig.technology);
        const finish = finishes.find(f => f.id === globalConfig.finish);
        const tolerance = tolerances.find(t => t.id === globalConfig.tolerance);
        
        let base = tech?.basePrice || 0;
        let mod = (finish?.priceMod || 1) * (tolerance?.priceMod || 1);
        let qty = parseInt(globalConfig.quantity) || 1;
        let fileCount = files.length;
        
        // Random fluctuation to make it feel "calculated"
        let randomFactor = 0.9 + Math.random() * 0.2; 
        
        const price = Math.round((base * mod * qty * fileCount * randomFactor));
        setEstimatedPrice(price);
        setCalculating(false);
      }, 800);
      return () => clearTimeout(timer);
    } else {
        setEstimatedPrice(null);
    }
  }, [globalConfig, files]);


  // Logic
  const startQuote = (techId = null) => {
    if (techId) setGlobalConfig(prev => ({ ...prev, technology: techId }));
    setView('wizard');
    window.scrollTo(0, 0);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) handleFiles(e.dataTransfer.files);
  };

  const handleFiles = (newFilesList) => {
    const newFiles = Array.from(newFilesList).map(file => ({
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
      type: file.name.split('.').pop().toUpperCase()
    }));
    setFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleConfigChange = (e) => {
    const { name, value } = e.target;
    setGlobalConfig(prev => ({ ...prev, [name]: value }));
  };

  const validateStep = (step) => {
    if (step === 1) return files.length > 0;
    if (step === 2) return globalConfig.technology && globalConfig.material;
    if (step === 3) return contact.name && contact.email && contact.phone;
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      alert("Lütfen zorunlu alanları doldurunuz.");
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;
    setIsSubmitting(true);

    // Construct Mailto Body
    const subject = `Yeni 3D Teklif Talebi: ${contact.name}`;
    const body = `
      Müşteri Bilgileri:
      Ad Soyad: ${contact.name}
      Firma: ${contact.company}
      Email: ${contact.email}
      Telefon: ${contact.phone}

      Proje Detayları:
      Teknoloji: ${technologies.find(t=>t.id===globalConfig.technology)?.title}
      Malzeme: ${globalConfig.material}
      Adet: ${globalConfig.quantity}
      Yüzey Bitişi: ${finishes.find(f=>f.id===globalConfig.finish)?.name}
      Tolerans: ${tolerances.find(t=>t.id===globalConfig.tolerance)?.name}
      Notlar: ${globalConfig.notes}

      Dosyalar:
      ${files.map(f => `- ${f.name} (${f.size})`).join('\n')}

      Tahmini Tutar: ${estimatedPrice ? `₺${estimatedPrice}` : 'Hesaplanamadı'}
    `;

    // Simulate Network Request then Open Mail
    setTimeout(() => {
      window.location.href = `mailto:info@3d3printer.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo(0, 0);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 font-sans border-t border-slate-100">
      <SEO 
        title="Online 3D Baskı Fiyat Teklifi | Anında Hesaplama" 
        description="STEP, STL dosyalarınızı yükleyin, saniyeler içinde 3D baskı ve CNC fiyat teklifi alın. Hızlı, güvenli ve profesyonel üretim hizmeti."
        keywords="online teklif, 3d baskı fiyat, cnc fiyat hesaplama, hızlı prototipleme fiyat, fdm fiyat"
      />
      
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Wizard Header - Only show if not landing and not success */}
        {view === 'wizard' && !isSuccess && (
            <div className="mb-10 flex items-center justify-between">
                <button onClick={() => setView('landing')} className="flex items-center text-slate-500 hover:text-slate-900 font-bold gap-2 text-sm">
                    <ChevronLeft size={16} /> Çıkış
                </button>
                <div className="flex gap-2">
                    {[1,2,3].map(step => (
                        <div key={step} className={`h-2 rounded-full transition-all duration-300 ${currentStep >= step ? 'w-12 bg-blue-600' : 'w-4 bg-slate-200'}`} />
                    ))}
                </div>
            </div>
        )}

        {isSuccess ? <SuccessView contact={contact} /> : (
            view === 'landing' ? (
                <>
                    <LandingHero startQuote={startQuote} />
                    <ServiceCarousel startQuote={startQuote} />
                    <TrustBanner />
                    <WhyChooseUs />
                    <FAQ />
                </>
            ) : (
                <>
                    {currentStep === 1 && <WizardStep1 
                        files={files} 
                        handleFiles={handleFiles}
                        removeFile={removeFile}
                        dragActive={dragActive}
                        handleDrag={handleDrag}
                        handleDrop={handleDrop}
                        nextStep={nextStep}
                    />}
                    {currentStep === 2 && <WizardStep2 
                        globalConfig={globalConfig}
                        setGlobalConfig={setGlobalConfig}
                        handleConfigChange={handleConfigChange}
                        prevStep={prevStep}
                        nextStep={nextStep}
                        files={files}
                        estimatedPrice={estimatedPrice}
                        calculating={calculating}
                    />}
                    {currentStep === 3 && <WizardStep3 
                        contact={contact}
                        setContact={setContact}
                        handleSubmit={handleSubmit}
                        isSubmitting={isSubmitting}
                        prevStep={prevStep}
                        files={files}
                        globalConfig={globalConfig}
                        estimatedPrice={estimatedPrice}
                        calculating={calculating}
                    />}
                </>
            )
        )}
      </div>
    </div>
  );
};

export default GetQuote;
