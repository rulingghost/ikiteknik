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
    <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-white to-rose-50 min-h-[85vh] flex flex-col justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-rose-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse-slow stagger-3" />

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                {/* Main Content Card with 3D Interaction */}
                <div className="lg:col-span-8 bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-slate-900/10 border border-white/50 flex flex-col justify-center relative overflow-hidden group animate-slide-up hover-lift transition-all duration-500">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                        }} />
                    </div>
                    
                    <div className="relative z-10">
                        <span 
                            className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-rose-500 to-rose-600 text-white text-[10px] font-bold tracking-widest uppercase mb-4 w-fit shadow-lg shadow-rose-500/30"
                        >
                            {SITE_DATA.slider[current].badge}
                        </span>
                        <h1 
                            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight leading-tight max-w-2xl"
                        >
                            {SITE_DATA.slider[current].title}
                        </h1>
                        <p 
                            className="text-slate-500 text-sm md:text-base font-medium max-w-lg mb-8 leading-relaxed"
                        >
                            {SITE_DATA.slider[current].sub}
                        </p>
                        
                        <div className="flex gap-4">
                             <button 
                                className="btn-3d bg-gradient-to-r from-rose-600 to-rose-700 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-xl shadow-rose-500/30"
                             >
                                 Hemen Başvur
                             </button>
                             <button 
                                className="btn-3d bg-slate-100 text-slate-700 px-6 py-3 rounded-xl text-sm font-bold shadow-lg"
                             >
                                 Detaylı Bilgi
                             </button>
                        </div>
                    </div>

                    {/* Slider Dots */}
                    <div className="absolute bottom-8 right-8 flex gap-2">
                        {SITE_DATA.slider.map((_, i) => (
                            <button 
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-1.5 rounded-full transition-all ${current === i ? 'w-6 bg-rose-600' : 'w-2 bg-slate-300'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Side Cards */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    {/* Education Calendar Mini with Image */}
                    <div 
                        className="tilt-3d bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-[2rem] p-8 flex-1 flex flex-col justify-between relative overflow-hidden group cursor-pointer border border-slate-700 animate-slide-up"
                    >
                        <div className="absolute inset-0 opacity-20">
                            <OptimizedImage src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe" width={400} className="w-full h-full object-cover" alt="Calendar" />
                        </div>
                        <div className="relative z-10 scale-95 group-hover:scale-100 transition-transform">
                            <Calendar className="text-rose-500 mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Eğitim Takvimi</h3>
                            <p className="text-xs text-slate-400 font-medium">Güncel kurs başlangıç tarihlerini ve programları inceleyin.</p>
                        </div>
                        <Link to="/takvim" className="relative z-10 w-fit p-2 rounded-full bg-white/10 group-hover:bg-rose-600 transition-colors">
                            <ChevronRight size={20} />
                        </Link>
                    </div>

                    {/* Contact Card */}
                    <div className="tilt-3d bg-white rounded-[2rem] p-8 flex-1 flex flex-col justify-between relative overflow-hidden group cursor-pointer border border-slate-100 shadow-xl animate-slide-up stagger-1">
                        <div className="absolute top-0 right-0 p-8 text-slate-50 group-hover:text-rose-50 transition-colors">
                            <MessageCircle size={120} />
                        </div>
                        <div className="relative z-10 scale-95 group-hover:scale-100 transition-transform">
                            <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">Soru Sorun</h3>
                            <p className="text-xs text-slate-500 font-medium">WhatsApp üzerinden anında teknik destek ve bilgi alın.</p>
                        </div>
                        <div className="relative z-10 flex gap-4">
                             <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-500/30 group-hover:animate-bounce">
                                 <Phone size={18} />
                             </div>
                             <div className="flex flex-col justify-center">
                                 <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Çevrimiçi</span>
                                 <span className="text-xs font-black text-slate-900">0312 231 31 35</span>
                             </div>
                        </div>
                    </div>
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

const Home = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
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
