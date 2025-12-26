import React from 'react';
import { BadgeCheck, Lock, ShieldCheck, AlertCircle, FileText, ChevronRight, Award, CheckCircle2, Users } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const PearsonVue = () => {
  const certImages = [
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  ];

  const examRoomImages = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655',
  ];

  return (
    <div className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-white to-emerald-50 min-h-screen font-sans relative overflow-hidden">
      {/* Animated background */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse-slow"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header with Images */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div
                className="animate-fade-in"
            >
                <div className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-[10px] font-bold tracking-widest uppercase mb-4 shadow-lg">Yetkili Sınav Merkezi</div>
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                    Pearson Vue <br/> <span className="text-rose-600">Sınav Merkezi</span>
                </h1>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                    ikiteknik Bilişim, uluslararası geçerliliği olan sertifika sınavları için yetkili Pearson Vue test merkezidir. Kariyerinizi küresel standartlarda belgeleyin.
                </p>
                <div className="flex gap-4">
                     <button 
                        className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:from-slate-800 hover:to-slate-700 hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-2"
                     >
                        Sınav Kuralları <ChevronRight size={14} />
                     </button>
                     <button 
                        className="bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all shadow-lg"
                     >
                        İletişime Geç
                     </button>
                </div>
            </div>
            
            <div 
                className="relative animate-fade-in"
                style={{ animationDelay: '0.2s' }}
            >
                <div className="grid grid-cols-2 gap-4">
                    <div 
                        className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl hover:scale-105 hover:rotate-2 transition-transform duration-300"
                    >
                        <OptimizedImage src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" className="w-full h-full object-cover" alt="Exam Center 1" />
                    </div>
                    <div 
                        className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl mt-8 hover:scale-105 hover:-rotate-2 transition-transform duration-300"
                    >
                        <OptimizedImage src="https://images.unsplash.com/photo-1497366216548-37526070297c" className="w-full h-full object-cover" alt="Exam Center 2" />
                    </div>
                </div>
                
                {/* Floating Badge */}
                <div 
                    className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-2xl border border-slate-50 hover:scale-110 hover:rotate-3 transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: '0.5s' }}
                >
                    <div className="flex flex-col items-center text-center">
                        <div
                            className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-3 shadow-lg animate-spin-slow"
                        >
                            <BadgeCheck size={32} />
                        </div>
                        <div className="font-bold text-slate-900 text-sm">Resmi Yetkili</div>
                        <div className="text-[10px] text-slate-400">Test Merkezi</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Steps with Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[ 
                { icon: <Lock size={20} />, title: 'Güvenli Ortam', desc: 'Kamera ve biyometrik kontrol sistemleri ile güvenli sınav odaları.', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3' },
                { icon: <FileText size={20} />, title: 'Kolay Kayıt', desc: 'Pearson Vue web sitesi üzerinden kolayca randevu oluşturun.', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f' },
                { icon: <ShieldCheck size={20} />, title: 'Anında Sonuç', desc: 'Sınav bitiminde geçici sonuç belgenizi anında teslim alın.', img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4' }
            ].map((step, i) => (
                <div 
                    key={i}
                    className="bg-white rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all overflow-hidden group cursor-pointer animate-slide-up"
                    style={{ animationDelay: `${i * 0.1}s` }}
                >
                    <div className="h-32 relative overflow-hidden">
                        <OptimizedImage 
                            src={step.img}
                            className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                            alt={step.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-8">
                        <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-4 shadow-md group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all">
                            {step.icon}
                        </div>
                        <h3 className="text-sm font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Certification Gallery */}
        <div
            className="mb-16 animate-fade-in"
        >
            <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">Sertifika Programları</h2>
            <p className="text-slate-500 text-sm text-center mb-8">Uluslararası geçerliliği olan sertifikalar</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {certImages.map((img, i) => (
                    <div
                        key={i}
                        className="aspect-video rounded-2xl overflow-hidden shadow-xl cursor-pointer relative group animate-scale-in"
                        style={{ animationDelay: `${i * 0.1}s` }}
                    >
                        <OptimizedImage src={img} className="w-full h-full object-cover" alt={`Cert ${i + 1}`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div 
                            className="absolute bottom-3 left-3 text-white text-xs font-bold translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all"
                        >
                            Sertifika {i + 1}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Exam Rooms */}
        <div
            className="mb-16 animate-fade-in"
        >
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Sınav Odalarımız</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {examRoomImages.map((img, i) => (
                    <div
                        key={i}
                        className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:scale-105 hover:rotate-1 transition-all animate-slide-up"
                        style={{ animationDelay: `${i * 0.15}s` }}
                    >
                        <OptimizedImage src={img} className="w-full h-full object-cover" alt={`Room ${i + 1}`} />
                    </div>
                ))}
            </div>
        </div>

        {/* Important Info with Image Background */}
        <div 
            className="bg-rose-50 border border-rose-100 rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-xl hover:scale-[1.01] transition-transform duration-300 animate-slide-up"
        >
            <div className="absolute inset-0 opacity-5">
                <OptimizedImage src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85" className="w-full h-full object-cover" alt="Rules" />
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                 <div className="shrink-0">
                     <div 
                        className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-rose-600 shadow-lg animate-bounce"
                     >
                         <AlertCircle size={24} />
                     </div>
                 </div>
                 <div>
                     <h3 className="text-lg font-bold text-slate-900 mb-4">Sınav Günü Önemli Hatırlatmalar</h3>
                     <ul className="space-y-3">
                         {[
                             'Sınav saatinden en az 15 dakika önce merkezde bulunun.',
                             'Yanınızda iki adet geçerli kimlik (Nüfus Cüzdanı, Ehliyet, Pasaport) bulundurun.',
                             'Kişisel eşyalarınız kilitli dolaplara bırakılacaktır.',
                             'Sınav odasına yiyecek, içecek ve elektronik cihaz sokmak yasaktır.'
                         ].map((rule, idx) => (
                             <li 
                                key={idx}
                                className="flex items-start gap-2 text-slate-600 text-sm font-medium animate-fade-in"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                             >
                                 <div
                                    className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0 animate-pulse"
                                    style={{ animationDelay: `${idx * 0.2}s` }}
                                 />
                                 {rule}
                             </li>
                         ))}
                     </ul>
                 </div>
            </div>
        </div>

        {/* Stats */}
        <div
            className="mt-16 bg-white rounded-[2rem] p-10 border border-slate-100 shadow-xl animate-fade-in"
        >
            <div className="grid md:grid-cols-3 gap-8 text-center">
                {[
                    { icon: <Users size={24} />, value: '10,000+', label: 'Başarılı Sınav' },
                    { icon: <Award size={24} />, value: '50+', label: 'Farklı Sertifika' },
                    { icon: <CheckCircle2 size={24} />, value: '%98', label: 'Memnuniyet' }
                ].map((stat, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center gap-3 hover:scale-110 hover:-translate-y-1 transition-transform cursor-pointer animate-scale-in"
                        style={{ animationDelay: `${i * 0.1}s` }}
                    >
                        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                            {stat.icon}
                        </div>
                        <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default PearsonVue;
