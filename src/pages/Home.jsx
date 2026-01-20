import React, { useState, useEffect, memo } from 'react';
import { ChevronRight, Calendar, Phone, MessageCircle, Users, Award, MapPin, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_DATA } from '../constants';
import OptimizedImage from '../components/OptimizedImage';

const Hero = memo(() => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
        setCurrent(prev => (prev + 1) % SITE_DATA.slider.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-white to-rose-50/50 min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-rose-200/10 to-blue-200/10 rounded-full blur-[100px] animate-pulse-slow translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-[100px] animate-pulse-slow stagger-3 -translate-x-1/3 translate-y-1/3" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-6 items-stretch">
                {/* Main Content Card with 3D Interaction */}
                <div className="lg:col-span-8 bg-white/70 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-slate-900/5 border border-white/60 flex flex-col justify-center relative overflow-hidden group animate-slide-up transition-all duration-500 hover:shadow-rose-900/5 hover:border-rose-100/50">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                         <div className="w-64 h-64 border-[40px] border-slate-900 rounded-full"></div>
                    </div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <span 
                                className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-bold tracking-[0.2em] uppercase shadow-lg shadow-slate-900/20"
                            >
                                {SITE_DATA.slider[current].badge}
                            </span>
                            <div className="h-px bg-slate-200 flex-1 max-w-[100px]"></div>
                        </div>

                        <h1 
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-[0.95] max-w-3xl"
                        >
                            {SITE_DATA.slider[current].title.split(' ').map((word, i) => (
                                <span key={i} className="inline-block mr-3 hover:text-rose-600 transition-colors duration-300 cursor-default">
                                    {word}
                                </span>
                            ))}
                        </h1>
                        <p 
                            className="text-slate-500 text-base md:text-lg font-medium max-w-xl mb-10 leading-relaxed"
                        >
                            {SITE_DATA.slider[current].sub}
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                             <Link 
                                to="/iletisim"
                                className="btn-3d bg-slate-900 text-white px-8 py-4 rounded-2xl text-sm font-bold shadow-xl shadow-slate-900/20 hover:bg-rose-600 hover:shadow-rose-600/30 transition-all flex items-center gap-3"
                             >
                                 Hemen Başvur <ChevronRight size={16} />
                             </Link>
                             <Link 
                                to="/egitimlerimiz"
                                className="btn-3d bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl text-sm font-bold shadow-lg hover:bg-slate-50 transition-all"
                             >
                                 Eğitimleri İncele
                             </Link>
                        </div>
                    </div>

                    {/* Simple Slider Dots */}
                    <div className="absolute bottom-10 right-10 flex gap-2 z-20">
                        {SITE_DATA.slider.map((_, i) => (
                            <button 
                                key={i}
                                onClick={() => setCurrent(i)}
                                aria-label={`Slide ${i + 1}`}
                                className={`h-2 rounded-full transition-all duration-300 ${current === i ? 'w-8 bg-slate-900' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Side Cards */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    {/* Education Calendar Mini with Image */}
                    <Link 
                        to="/takvim"
                        className="tilt-3d bg-slate-900 text-white rounded-[2.5rem] p-8 flex-1 flex flex-col justify-between relative overflow-hidden group cursor-pointer shadow-2xl shadow-slate-900/20 animate-slide-up"
                    >
                        <div className="absolute inset-0 opacity-40 group-hover:opacity-30 transition-opacity duration-500">
                            <OptimizedImage src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe" width={400} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" alt="Calendar" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                        
                        <div className="relative z-10 flex justify-between items-start">
                            <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                                <Calendar size={24} />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                <ChevronRight size={16} />
                            </div>
                        </div>

                        <div className="relative z-10 mt-auto">
                            <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight leading-none">Eğitim<br/>Takvimi</h3>
                            <p className="text-xs text-slate-300 font-medium line-clamp-2">Güncel kurs başlangıç tarihlerini ve programları inceleyin.</p>
                        </div>
                    </Link>

                    {/* Contact Card */}
                    <Link 
                        to="/iletisim"
                        className="tilt-3d bg-white rounded-[2.5rem] p-8 flex-1 flex flex-col justify-between relative overflow-hidden group cursor-pointer border border-white shadow-xl shadow-slate-200/50 animate-slide-up stagger-1 hover:border-rose-100"
                    >
                         <div className="absolute -right-6 -top-6 text-slate-50 group-hover:text-rose-50 transition-colors duration-500 rotate-12">
                            <MessageCircle size={140} />
                        </div>
                        
                        <div className="relative z-10">
                            <div className="inline-block px-3 py-1 rounded-lg bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-wider mb-4">Çevrimiçi</div>
                            <h3 className="text-2xl font-black text-slate-900 mb-1 uppercase tracking-tight">Destek Hattı</h3>
                        </div>

                        <div className="relative z-10 flex items-center gap-4 mt-auto">
                             <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg group-hover:bg-rose-600 transition-colors duration-300">
                                 <Phone size={20} />
                             </div>
                             <div>
                                 <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest">Hemen Arayın</span>
                                 <span className="block text-lg font-black text-slate-900 tracking-tight">0312 231 31 35</span>
                             </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
});


const FeatureCard = memo(({ title, icon, desc, delay }) => (
    <div className="tilt-3d bg-white p-6 rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl cursor-pointer relative overflow-hidden group animate-slide-up" style={{ animationDelay: `${delay}s` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-10 h-10 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl flex items-center justify-center text-slate-900 mb-4 relative z-10 shadow-md group-hover:rotate-[360deg] transition-transform duration-500">
            {icon}
        </div>
        <h3 className="text-base font-bold text-slate-900 mb-2 relative z-10">{title}</h3>
        <p className="text-slate-500 text-xs leading-relaxed font-medium relative z-10">{desc}</p>
    </div>
));

const TechnologyShowcase = memo(() => (
    <section className="py-24 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse-slow" />
        
        <div className="container mx-auto px-6 relative z-10">
            <div
                className="text-center mb-16 animate-slide-up"
            >
                <h2 className="text-3xl font-bold text-slate-900 mb-3">Teknoloji Yığınımız</h2>
                <p className="text-slate-500 text-sm">Sektörün en güncel ve talep gören yazılımlarında eğitim veriyoruz</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {[
                    { name: '3DS Max', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee', color: 'from-cyan-500 to-blue-600' },
                    { name: 'AutoCAD', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789', color: 'from-red-500 to-rose-600' },
                    { name: 'SolidWorks', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837', color: 'from-orange-500 to-amber-600' },
                    { name: 'Python', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5', color: 'from-blue-500 to-indigo-600' },
                ].map((tech, i) => (
                    <div
                        key={i}
                        className="tilt-3d group cursor-pointer"
                    >
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                            <div className="aspect-square relative">
                                <OptimizedImage 
                                    src={tech.img}
                                    width={300}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    alt={tech.name}
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-60 group-hover:opacity-80 transition-opacity`} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 
                                        className="text-white text-xl font-black tracking-tight drop-shadow-2xl"
                                    >
                                        {tech.name}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
));

const PopularCourses = memo(() => (
    <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
            }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div
                className="text-center mb-12 animate-slide-up"
            >
                <h2 className="text-3xl font-bold text-white mb-3">Popüler Eğitimlerimiz</h2>
                <p className="text-slate-400 text-sm">En çok tercih edilen uzmanlık kurslarımız</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        title: '3DS Max Mimari Görselleştirme',
                        img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
                    },
                    {
                        title: 'SolidWorks Mekanik Tasarım',
                        img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789',
                    },
                    {
                        title: 'Python Programlama',
                        img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
                    }
                ].map((course, i) => (
                    <div
                        key={i}
                        className="tilt-3d bg-white/5 backdrop-blur-sm rounded-[2rem] overflow-hidden border border-white/10 group cursor-pointer"
                    >
                        <div className="aspect-video relative overflow-hidden">
                            <OptimizedImage 
                                src={course.img}
                                width={500}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                alt={course.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <h3 className="absolute bottom-6 left-6 right-6 text-white text-lg font-bold">{course.title}</h3>
                        </div>
                        <div className="p-6">
                            <button
                                className="btn-3d w-full bg-white text-slate-900 py-3 rounded-xl font-bold text-sm"
                            >
                                Detayları Gör
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
));

import SEO from '../components/SEO';

const Home = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SEO 
                title="Ana Sayfa" 
                description="ikiteknik Bilişim ile geleceğinizi şekillendirin. 3D Tarama, 3D Modelleme ve Profesyonel Teknik Eğitimler: AutoCAD, SolidWorks, Yazılım ve daha fazlası Ankara'da."
                keywords="3d tarama, 3d modelleme, teknik eğitim, ankara kurs, autocad kursu, solidworks kursu, yazılım eğitimi, ikiteknik"
            />
            <Hero />
            
            {/* Features Grid - Minimalist */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div 
                        className="flex flex-col md:flex-row justify-between items-end mb-16"
                    >
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Neden ikiteknik?</h2>
                            <p className="text-slate-500 text-sm italic">"Eğitimde ayrıcalıklı ve teknolojik yaklaşım."</p>
                        </div>
                        <Link to="/hakkimizda" className="btn-3d text-rose-600 text-sm font-bold flex items-center gap-2 pr-4">
                            Detaylı Bilgi <ChevronRight size={18} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FeatureCard 
                            title="Uzman Kadro" 
                            icon={<Users size={20} />} 
                            desc="Alanında uzman, sektör deneyimi yüksek eğitmenler."
                            delay={0.1}
                        />
                        <FeatureCard 
                            title="Sertifikalı Eğitim" 
                            icon={<Award size={20} />} 
                            desc="M.E.B. onaylı ve uluslararası geçerli sertifikalar."
                            delay={0.2}
                        />
                        <FeatureCard 
                            title="Modern Sınıflar" 
                            icon={<MapPin size={20} />} 
                            desc="Son teknoloji laboratuvar ve ekipmanlar."
                            delay={0.3}
                        />
                         <FeatureCard 
                            title="Kariyer Desteği" 
                            icon={<Target size={20} />} 
                            desc="Eğitim sonrası staj ve iş bulma desteği."
                            delay={0.4}
                        />
                    </div>
                </div>
            </section>

             {/* 3D Technology Showcase */}
             <TechnologyShowcase />

             {/* 3D Scanning Services Section - NEW */}
             <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-rose-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse-slow stagger-1" />
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div className="animate-slide-up">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-6">
                                <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
                                <span className="text-white text-xs font-bold tracking-widest uppercase">Yeni Hizmet</span>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase italic leading-tight">
                                Profesyonel <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400">3D Tarama</span> Hizmetleri
                            </h2>
                            
                            <p className="text-slate-300 text-base md:text-lg font-medium leading-relaxed mb-8">
                                Fiziksel nesneleri yüksek hassasiyetli sensörler ve kameralar kullanarak dijital ortama aktarıyoruz. 
                                Tersine mühendislik, kalite kontrol, restorasyon ve prototip geliştirme için profesyonel çözümler sunuyoruz.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    { icon: '🎯', title: 'Lazer Tarama', desc: 'Yüksek hassasiyet' },
                                    { icon: '💡', title: 'Yapılandırılmış Işık', desc: 'Detaylı parçalar' },
                                    { icon: '📱', title: 'El Tipi Tarama', desc: 'Sahada tarama' },
                                    { icon: '📸', title: 'Fotogrametri', desc: 'Geniş alanlar' }
                                ].map((service, idx) => (
                                    <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all group">
                                        <div className="text-2xl mb-2">{service.icon}</div>
                                        <h3 className="text-white text-sm font-bold mb-1">{service.title}</h3>
                                        <p className="text-slate-400 text-xs font-medium">{service.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link 
                                    to="/3d-tarama"
                                    className="btn-3d bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest shadow-2xl shadow-rose-500/30 inline-flex items-center gap-3 justify-center"
                                >
                                    Detaylı Bilgi
                                    <ChevronRight size={20} />
                                </Link>
                                <Link 
                                    to="/iletisim"
                                    className="btn-3d bg-white/10 backdrop-blur-xl text-white border-2 border-white/20 px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest shadow-2xl inline-flex items-center gap-3 justify-center"
                                >
                                    Teklif Al
                                </Link>
                            </div>
                        </div>

                        {/* Image Grid */}
                        <div className="grid grid-cols-2 gap-4 animate-slide-up stagger-1">
                            {[
                                { img: '/images/3d-tarama/WhatsApp Image 2026-01-20 at 16.18.30 (1).jpeg', title: 'Lazer Tarama' },
                                { img: '/images/3d-tarama/WhatsApp Image 2026-01-20 at 16.18.30 (5).jpeg', title: 'Yapılandırılmış Işık' },
                                { img: '/images/3d-tarama/WhatsApp Image 2026-01-20 at 16.18.30 (8).jpeg', title: 'El Tipi Tarama' },
                                { img: '/images/3d-tarama/WhatsApp Image 2026-01-20 at 16.18.30 (12).jpeg', title: 'Fotogrametri' }
                            ].map((item, idx) => (
                                <div 
                                    key={idx}
                                    className="tilt-3d group relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                                    style={{ animationDelay: `${idx * 0.1}s` }}
                                >
                                    <div className="aspect-square relative">
                                        <OptimizedImage 
                                            src={item.img}
                                            width={300}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            alt={item.title}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-rose-600/60 to-purple-600/60 opacity-60 group-hover:opacity-80 transition-opacity" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <h3 className="text-white text-sm font-black tracking-tight drop-shadow-2xl text-center px-4">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
             </section>

             {/* 3D Modeling Services Section - NEW */}
             <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse-slow" />
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image Grid */}
                        <div className="grid grid-cols-2 gap-4 animate-slide-up">
                            {[
                                { img: '/images/3d-modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (14).jpeg', title: 'Ürün Modelleme' },
                                { img: '/images/3d-modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (20).jpeg', title: 'Endüstriyel' },
                                { img: '/images/3d-modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (24).jpeg', title: '3D Baskı' },
                                { img: '/images/3d-modelleme/WhatsApp Image 2026-01-20 at 16.18.30 (30).jpeg', title: 'Tersine Mühendislik' }
                            ].map((item, idx) => (
                                <div 
                                    key={idx}
                                    className="tilt-3d group relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                                    style={{ animationDelay: `${idx * 0.1}s` }}
                                >
                                    <div className="aspect-square relative">
                                        <OptimizedImage 
                                            src={item.img}
                                            width={300}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            alt={item.title}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/60 to-pink-600/60 opacity-60 group-hover:opacity-80 transition-opacity" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <h3 className="text-white text-sm font-black tracking-tight drop-shadow-2xl text-center px-4">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="animate-slide-up stagger-1">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full border border-purple-200 mb-6">
                                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                                <span className="text-purple-700 text-xs font-bold tracking-widest uppercase">Profesyonel Hizmet</span>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-tight">
                                3D <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Modelleme</span> Hizmetleri
                            </h2>
                            
                            <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed mb-8">
                                Fikir ve tasarımlarınızı dijital ortamda üç boyutlu, detaylı ve gerçekçi modeller haline getiriyoruz. 
                                Ürünler, yapılar veya objeler üretim aşamasına geçmeden önce net bir şekilde görselleştirilebilir.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    { icon: '📦', title: 'Ürün Modelleme', desc: 'Detaylı ürün tasarımı' },
                                    { icon: '⚙️', title: 'Endüstriyel', desc: 'Teknik hassasiyet' },
                                    { icon: '🖨️', title: '3D Baskı', desc: 'Baskıya hazır' },
                                    { icon: '🔄', title: 'Tersine Mühendislik', desc: 'Dijital dönüşüm' }
                                ].map((service, idx) => (
                                    <div key={idx} className="bg-slate-50 rounded-2xl p-4 border border-slate-100 hover:bg-purple-50 hover:border-purple-200 transition-all group">
                                        <div className="text-2xl mb-2">{service.icon}</div>
                                        <h3 className="text-slate-900 text-sm font-bold mb-1">{service.title}</h3>
                                        <p className="text-slate-500 text-xs font-medium">{service.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link 
                                    to="/3d-modelleme"
                                    className="btn-3d bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest shadow-2xl shadow-purple-500/30 inline-flex items-center gap-3 justify-center"
                                >
                                    Detaylı Bilgi
                                    <ChevronRight size={20} />
                                </Link>
                                <Link 
                                    to="/iletisim"
                                    className="btn-3d bg-slate-100 text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest shadow-xl inline-flex items-center gap-3 justify-center"
                                >
                                    Teklif Al
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
             </section>

             {/* 3D Course Preview Cards */}
             <PopularCourses />

             {/* Stats section with 3D Float */}
             <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { val: '15+', label: 'YILLIK DENEYİM' },
                            { val: '5000+', label: 'MEZUN ÖĞRENCİ' },
                            { val: '50+', label: 'FARKLI KURS' },
                            { val: '%95', label: 'İSTİHDAM ORANI' }
                        ].map((stat, i) => (
                            <div key={i} className="animate-float p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl text-center group transition-all hover:bg-rose-600" style={{ animationDelay: `${i * 0.5}s` }}>
                                <div className="text-3xl font-black text-slate-900 group-hover:text-white mb-2">{stat.val}</div>
                                <div className="text-[10px] text-slate-400 group-hover:text-rose-100 font-bold tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Categories - Compact List with Images */}
             <section className="py-16 bg-white border-y border-slate-100">
                <div className="container mx-auto px-6">
                    <div 
                        className="mb-10 animate-fade-in"
                    >
                         <h2 className="text-2xl font-bold text-slate-900 mb-2">Eğitim Kategorileri</h2>
                         <p className="text-slate-500 text-sm">Uzmanlaşmak istediğiniz alanı seçin.</p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {SITE_DATA.education_page.categories.map((cat, i) => (
                            <div
                                key={i}
                                className="animate-scale-in"
                                style={{ animationDelay: `${i * 0.05}s` }}
                            >
                                <Link 
                                    to="/egitimlerimiz" 
                                    className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group text-center relative overflow-hidden"
                                >
                                    <div 
                                        className="w-12 h-12 bg-gradient-to-br from-slate-50 to-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:from-rose-50 group-hover:to-rose-100 group-hover:text-rose-600 transition-all shadow-md group-hover:shadow-lg group-hover:scale-110"
                                    >
                                        {cat.icon}
                                    </div>
                                    <span className="text-xs font-bold text-slate-700 group-hover:text-slate-900 transition-colors uppercase tracking-tight">{cat.title}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
             </section>

             {/* References - Corporate Logos */}
             <section className="py-24 bg-white border-y border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Kurumsal Referanslarımız</h2>
                        <p className="text-slate-500 text-sm">Güvenilir kurumlarla çalışıyoruz</p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            { name: 'ASELSAN', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab' },
                            { name: 'TUSAŞ', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c' },
                            { name: 'ROKETSAN', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72' },
                            { name: 'HAVELSAN', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40' },
                            { name: 'STM', img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d' },
                            { name: 'BAYKAR', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837' },
                        ].map((company, i) => (
                            <div
                                key={i}
                                className="tilt-3d aspect-square bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer shadow-md hover:shadow-xl border border-slate-100 relative overflow-hidden group animate-scale-in"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <OptimizedImage src={company.img} width={200} className="w-full h-full object-cover" alt={company.name} />
                                </div>
                                <div className="relative z-10 text-center">
                                    <div className="text-2xl font-black text-slate-900 mb-2">{company.name}</div>
                                    <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Kurumsal Partner</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
             </section>

             {/* Success Stories */}
             <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Başarı Hikayeleri</h2>
                        <p className="text-slate-500 text-sm">Mezunlarımızın kariyerlerindeki başarıları</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Ahmet Yılmaz',
                                role: 'Senior 3D Artist',
                                company: 'Ubisoft',
                                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
                                quote: '3DS Max eğitimi sayesinde hayallerimi gerçekleştirdim.',
                                bg: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee'
                            },
                            {
                                name: 'Ayşe Kaya',
                                role: 'Mechanical Engineer',
                                company: 'TUSAŞ',
                                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
                                quote: 'SolidWorks ve ANSYS eğitimleri kariyerime yön verdi.',
                                bg: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837'
                            },
                            {
                                name: 'Mehmet Demir',
                                role: 'Full Stack Developer',
                                company: 'Microsoft',
                                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
                                quote: 'Yazılım eğitimi ile teknoloji dünyasına adım attım.',
                                bg: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'
                            }
                        ].map((story, i) => (
                            <div
                                key={i}
                                className="tilt-3d bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all animate-slide-up"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <div className="h-32 relative overflow-hidden">
                                    <OptimizedImage src={story.bg} width={400} className="w-full h-full object-cover" alt={story.name} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                                <div className="p-6 -mt-12 relative z-10 text-center">
                                    <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-white shadow-xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                                        <OptimizedImage src={story.image} width={150} className="w-full h-full object-cover" alt={story.name} />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">{story.name}</h3>
                                    <p className="text-xs font-bold text-rose-600 mb-1">{story.role}</p>
                                    <p className="text-[10px] text-slate-400 mb-4 uppercase font-bold tracking-widest">{story.company}</p>
                                    <p className="text-slate-500 text-xs italic leading-relaxed">"{story.quote}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
             </section>

             {/* Facility Gallery */}
             <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Modern Tesislerimiz</h2>
                        <p className="text-slate-500 text-sm">Son teknoloji ekipmanlarla donatılmış eğitim ortamları</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            'https://images.unsplash.com/photo-1497366216548-37526070297c',
                            'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
                            'https://images.unsplash.com/photo-1524178232363-1fb2b075b655',
                            'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
                        ].map((img, i) => (
                            <div
                                key={i}
                                className="tilt-3d aspect-square rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                            >
                                <OptimizedImage src={img} width={300} className="w-full h-full object-cover" alt={`Facility ${i + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
             </section>

             {/* Footer CTA */}
             <section className="py-24">
                <div className="container mx-auto px-6">
                    <div 
                        className="tilt-3d bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
                    >
                         <div className="absolute inset-0 opacity-10">
                             <OptimizedImage src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" width={1000} className="w-full h-full object-cover" alt="Team" />
                         </div>
                         <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Geleceğinizi Teknikle Şekillendirin</h2>
                            <p className="text-slate-400 mb-10 text-sm md:text-base leading-relaxed">Uzman eğitmen kadromuz ve modern altyapımızla kariyerinizi zirveye taşıyın.</p>
                            <Link to="/iletisim" className="btn-3d inline-block bg-rose-600 text-white px-10 py-4 rounded-2xl text-base font-bold shadow-xl shadow-rose-500/20">
                                Şimdi Başvurun
                            </Link>
                         </div>
                    </div>
                </div>
             </section>
        </div>
    );
};

export default Home;
