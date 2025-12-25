import React from 'react';
import { MapPin, Phone, MessageCircle, Mail, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { SITE_DATA } from '../constants';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
    // Helper to get category by ID
    const getCat = (id) => SITE_DATA.education_page.categories.find(c => c.id === id) || { courses: [], title: "" };

    const footerSections = [
        { id: "drawing", title: "Çizim & Tasarım" },
        { id: "it", title: "Bilgisayar & IT" },
        { id: "animation", title: "Animasyon" },
        { id: "graphics", title: "Grafik & Web Tasarım" },
        { id: "analysis", title: "Analiz" },
        { id: "quality", title: "Kalite" },
        { id: "corporate_edu", title: "Kurumsal Eğitimler" },
        { id: "corporate_srv", title: "Kurumsal Hizmetler" }
    ];

    return (
        <footer className="bg-slate-50 pt-32 pb-16 border-t border-slate-200">
            <div className="container mx-auto px-6">
                {/* Mega Menu Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24 border-b border-slate-200 pb-20">
                    {footerSections.map((section, idx) => {
                        const cat = getCat(section.id);
                        return (
                            <motion.div 
                                key={section.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="space-y-6"
                            >
                                <h4 className="text-slate-900 font-black text-[11px] uppercase tracking-[0.2em] border-l-4 border-rose-600 pl-4 mb-8">
                                    {section.title.toUpperCase()}
                                </h4>
                                <ul className="space-y-3">
                                    {cat.courses.map(course => (
                                        <motion.li 
                                            key={course}
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <Link 
                                                to="/egitimlerimiz" 
                                                className="text-slate-500 hover:text-rose-600 text-[10px] font-bold uppercase transition-colors block"
                                            >
                                                {course}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Contact & Branding Info */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 py-16">
                    <div>
                        <div className="flex flex-col mb-8">
                            <span className="text-3xl font-black tracking-tighter text-slate-900 uppercase italic">İKİ TEKNİK</span>
                            <span className="text-xs text-rose-600 font-black tracking-[0.4em] uppercase">BİLİŞİM</span>
                        </div>
                        <p className="text-slate-500 leading-relaxed font-medium italic mb-10 text-sm">
                            "Eğitim merkezimiz kursiyerlerine iyi bir eğitim vermenin yanında çeşitli iş imkanlarıda sağlamaktadır."
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                                <motion.a 
                                    key={i} 
                                    href="#" 
                                    whileHover={{ scale: 1.1, backgroundColor: "#e11d48", color: "#fff" }}
                                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 transition-all shadow-sm hover:shadow-lg"
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-8">
                            <h5 className="text-slate-900 font-black text-[10px] uppercase tracking-widest mb-4">Adres & Telefon</h5>
                            <div className="flex gap-4 group">
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all">
                                    <MapPin size={20} />
                                </div>
                                <span className="text-slate-500 text-sm font-bold uppercase tracking-tight group-hover:text-slate-900 transition-colors">{SITE_DATA.contact.address}</span>
                            </div>
                            <div className="flex gap-4 group">
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all">
                                    <Phone size={20} />
                                </div>
                                <div className="text-slate-500 text-sm font-black group-hover:text-slate-900 transition-colors">
                                    {SITE_DATA.contact.phones.map(p => <span key={p} className="block">{p}</span>)}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                             <h5 className="text-slate-900 font-black text-[10px] uppercase tracking-widest mb-4">Destek & WhatsApp</h5>
                             <div className="flex gap-4 group">
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all">
                                    <Mail size={20} />
                                </div>
                                <div className="text-slate-500 text-sm font-bold underline group-hover:text-slate-900 transition-colors">
                                    {SITE_DATA.contact.emails.map(e => <span key={e} className="block">{e}</span>)}
                                </div>
                            </div>
                            <div className="flex gap-4 group">
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all">
                                    <MessageCircle size={20} />
                                </div>
                                <span className="text-slate-900 font-black text-sm">{SITE_DATA.contact.whatsapp} (WHATSAPP DESTEK)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-200 text-slate-400 text-[9px] text-center font-black tracking-[0.5em] uppercase">
                    &copy; 2024 İKİ TEKNİK BİLİŞİM EĞİTİM MERKEZİ. TÜM HAKLARI SAKLIDIR.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
