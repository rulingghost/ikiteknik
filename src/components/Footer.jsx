import React from 'react';
import { MapPin, Phone, MessageCircle, Mail, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { SITE_DATA } from '../constants';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const isDarkPage = ['/3d-tarama', '/3d-modelleme', '/3d-baski', '/galeri', '/satis'].includes(location.pathname);

    // Helper to get category by ID
    const getCat = (id) => SITE_DATA.education_page.categories.find(c => c.id === id) || { courses: [], title: "" };

    const footerSections = [
        { id: "drawing", title: "Çizim & Tasarım" },
        { id: "it", title: "Bilgisayar & IT" },
        { id: "animation", title: "Animasyon" },
        { id: "graphics", title: "Grafik & Web Tasarım" },
        { id: "3d-scanning", title: "3D Tarama Hizmetleri", isService: true, link: "/3d-tarama" },
        { id: "3d-modeling", title: "3D Modelleme Hizmetleri", isService: true, link: "/3d-modelleme" },
        { id: "analysis", title: "Analiz" },
        { id: "quality", title: "Kalite" },
        { id: "corporate_edu", title: "Kurumsal Eğitimler" },
        { id: "corporate_srv", title: "Kurumsal Hizmetler" }
    ];

    return (
        <footer className={`pt-32 pb-16 border-t transition-colors duration-500 ${isDarkPage ? 'bg-[#0B0F19] border-[#1877F2]/20' : 'bg-slate-50 border-slate-200'}`}>
            <div className="container mx-auto px-6">
                {/* Mega Menu Links Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24 border-b pb-20 ${isDarkPage ? 'border-white/10' : 'border-slate-200'}`}>
                    {footerSections.map((section, idx) => {
                        const cat = getCat(section.id);
                        
                        // Special handling for 3D services
                        if (section.isService) {
                            const serviceItems = section.id === '3d-scanning' 
                                ? ['Lazer 3D Tarama', 'Beyaz Işık Tarama', 'El Tipi 3D Tarama', 'Fotogrametri']
                                : ['Ürün 3D Modelleme', 'Endüstriyel Modelleme', '3D Baskıya Uygun Model', 'Tersine Mühendislik'];
                            
                            return (
                                <div 
                                    key={section.id}
                                    className="space-y-6 animate-fade-in"
                                    style={{ animationDelay: `${idx * 0.1}s` }}
                                >
                                    <h4 className={`font-black text-[11px] uppercase tracking-[0.2em] border-l-4 pl-4 mb-8 ${isDarkPage ? 'text-white border-[#1877F2]' : 'text-slate-900 border-rose-600'}`}>
                                        {section.title.toUpperCase()}
                                    </h4>
                                    <ul className="space-y-3">
                                        {serviceItems.map(service => (
                                            <li key={service}>
                                                <Link 
                                                    to={section.link} 
                                                    className={`hover:translate-x-1 text-[10px] font-bold uppercase transition-all block ${isDarkPage ? 'text-slate-400 hover:text-[#1877F2]' : 'text-slate-500 hover:text-rose-600'}`}
                                                >
                                                    {service}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        }
                        
                        return (
                            <div 
                                key={section.id}
                                className="space-y-6 animate-fade-in"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <h4 className={`font-black text-[11px] uppercase tracking-[0.2em] border-l-4 pl-4 mb-8 ${isDarkPage ? 'text-white border-[#1877F2]' : 'text-slate-900 border-rose-600'}`}>
                                    {section.title.toUpperCase()}
                                </h4>
                                <ul className="space-y-3">
                                    {cat.courses.map(course => (
                                        <li 
                                            key={course}
                                        >
                                            <Link 
                                                to="/egitimlerimiz" 
                                                className={`hover:translate-x-1 text-[10px] font-bold uppercase transition-all block ${isDarkPage ? 'text-slate-400 hover:text-[#1877F2]' : 'text-slate-500 hover:text-rose-600'}`}
                                            >
                                                {course}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* Contact & Branding Info */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 py-16">
                    <div className="animate-fade-in">
                        <div className="flex flex-col mb-8">
                            {isDarkPage ? (
                                <div className="flex items-center gap-2">
                                     <img src="/assets/images/3D3P.png" alt="3D3P" className="h-10 w-auto" />
                                     <span className="text-3xl font-black tracking-tighter text-white uppercase italic">3D3P Tech</span>
                                </div>
                            ) : (
                                <>
                                    <span className="text-3xl font-black tracking-tighter text-slate-900 uppercase italic">ikiteknik</span>
                                    <span className="text-xs text-rose-600 font-black tracking-[0.4em] uppercase">BİLİŞİM</span>
                                </>
                            )}
                        </div>
                        <p className={`leading-relaxed font-medium italic mb-10 text-sm ${isDarkPage ? 'text-slate-400' : 'text-slate-500'}`}>
                            "Eğitim merkezimiz kursiyerlerine iyi bir eğitim vermenin yanında çeşitli iş imkanlarıda sağlamaktadır."
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                                <a 
                                    key={i} 
                                    href="#" 
                                    className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all shadow-md animate-scale-in ${
                                        isDarkPage 
                                        ? 'bg-[#151E32] border-white/10 text-slate-400 hover:text-[#1877F2] hover:border-[#1877F2]' 
                                        : 'btn-3d bg-white border-slate-100 text-slate-400 hover:text-rose-600 hover:border-rose-100'
                                    }`}
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="space-y-8">
                            <h5 className={`font-black text-[10px] uppercase tracking-widest mb-4 ${isDarkPage ? 'text-white' : 'text-slate-900'}`}>Adres & Telefon</h5>
                            <div className="flex gap-4 group cursor-pointer">
                                <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 ${
                                    isDarkPage 
                                    ? 'bg-[#1877F2]/10 text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white' 
                                    : 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white'
                                }`}>
                                    <MapPin size={20} />
                                </div>
                                <span className={`text-sm font-bold uppercase tracking-tight transition-colors ${isDarkPage ? 'text-slate-400 group-hover:text-white' : 'text-slate-500 group-hover:text-slate-900'}`}>
                                    {SITE_DATA.contact.address}
                                </span>
                            </div>
                            <div className="flex gap-4 group cursor-pointer">
                                <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 ${
                                    isDarkPage 
                                    ? 'bg-[#1877F2]/10 text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white' 
                                    : 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white'
                                }`}>
                                    <Phone size={20} />
                                </div>
                                <div className={`text-sm font-black transition-colors ${isDarkPage ? 'text-slate-400 group-hover:text-white' : 'text-slate-500 group-hover:text-slate-900'}`}>
                                    {SITE_DATA.contact.phones.map(p => (
                                        <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block hover:underline">{p}</a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                             <h5 className={`font-black text-[10px] uppercase tracking-widest mb-4 ${isDarkPage ? 'text-white' : 'text-slate-900'}`}>Destek & WhatsApp</h5>
                             <div className="flex gap-4 group cursor-pointer">
                                <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 ${
                                    isDarkPage 
                                    ? 'bg-[#1877F2]/10 text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white' 
                                    : 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white'
                                }`}>
                                    <Mail size={20} />
                                </div>
                                <div className={`text-sm font-bold underline transition-colors ${isDarkPage ? 'text-slate-400 group-hover:text-white' : 'text-slate-500 group-hover:text-slate-900'}`}>
                                    {SITE_DATA.contact.emails.map(e => <span key={e} className="block">{e}</span>)}
                                </div>
                            </div>
                            <div className="flex gap-4 group cursor-pointer">
                                <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 ${
                                    isDarkPage 
                                    ? 'bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white' 
                                    : 'bg-green-50 text-green-600 group-hover:bg-green-500 group-hover:text-white'
                                }`}>
                                    <MessageCircle size={20} />
                                </div>
                                <span className={`font-black text-sm ${isDarkPage ? 'text-white' : 'text-slate-900'}`}>{SITE_DATA.contact.whatsapp} (WHATSAPP DESTEK)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`pt-12 border-t text-[9px] text-center font-black tracking-[0.5em] uppercase ${isDarkPage ? 'border-white/10 text-slate-500' : 'border-slate-200 text-slate-400'}`}>
                    &copy; 2024 ikiteknik {isDarkPage ? '& 3D3P TECHNOLOGY' : 'BİLİŞİM EĞİTİM MERKEZİ'}. TÜM HAKLARI SAKLIDIR.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
