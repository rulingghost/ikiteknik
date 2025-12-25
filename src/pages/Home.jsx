import React, { useState, useEffect } from 'react';
import { ChevronRight, Calendar, Phone, MessageCircle, Users, Award, MapPin, Target } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SITE_DATA } from '../constants';

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  useEffect(() => {
    const timer = setInterval(() => {
        setCurrent(prev => (prev + 1) % SITE_DATA.slider.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-white to-rose-50 min-h-[85vh] flex flex-col justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-rose-200/20 to-blue-200/20 rounded-full blur-3xl"
        />
        <motion.div 
            animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [90, 0, 90]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                {/* Main Content Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onMouseMove={handleMouseMove}
                    style={{ 
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d"
                    }}
                    className="lg:col-span-8 bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-slate-900/10 border border-white/50 flex flex-col justify-center relative overflow-hidden group"
                >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                        }} />
                    </div>
                    
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="text-9xl font-black text-slate-900 tracking-tighter leading-none"
                        >
                            2026
                        </motion.div>
                    </div>
                    
                    <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
                        <motion.span 
                            key={`badge-${current}`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-rose-500 to-rose-600 text-white text-[10px] font-bold tracking-widest uppercase mb-4 w-fit shadow-lg shadow-rose-500/30"
                        >
                            {SITE_DATA.slider[current].badge}
                        </motion.span>
                        <motion.h1 
                            key={`title-${current}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight leading-tight max-w-2xl"
                        >
                            {SITE_DATA.slider[current].title}
                        </motion.h1>
                        <motion.p 
                            key={`desc-${current}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-slate-500 text-sm md:text-base font-medium max-w-lg mb-8 leading-relaxed"
                        >
                            {SITE_DATA.slider[current].sub}
                        </motion.p>
                        
                        <div className="flex gap-4">
                             <motion.button 
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-rose-600 to-rose-700 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-xl shadow-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/40 transition-all"
                             >
                                 Hemen Başvur
                             </motion.button>
                             <motion.button 
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-slate-100 text-slate-700 px-6 py-3 rounded-xl text-sm font-bold hover:bg-slate-200 transition-colors shadow-lg"
                             >
                                 Detaylı Bilgi
                             </motion.button>
                        </div>
                    </div>

                    {/* Slider Dots */}
                    <div className="absolute bottom-8 right-8 flex gap-2" style={{ transform: "translateZ(30px)" }}>
                        {SITE_DATA.slider.map((_, i) => (
                            <motion.button 
                                key={i}
                                onClick={() => setCurrent(i)}
                                whileHover={{ scale: 1.2 }}
                                className={`h-1.5 rounded-full transition-all ${current === i ? 'w-6 bg-rose-600' : 'w-2 bg-slate-300'}`}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Right Side Cards */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    {/* Education Calendar Mini with Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ scale: 1.02, rotateY: 5 }}
                        style={{ transformStyle: "preserve-3d" }}
                        className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-[2rem] p-8 flex-1 flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all border border-slate-700"
                    >
                        <div className="absolute inset-0 opacity-10">
                            <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Calendar" />
                        </div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <motion.div 
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                    className="p-3 bg-white/10 backdrop-blur-sm rounded-xl w-fit"
                                >
                                    <Calendar size={20} className="text-rose-400" />
                                </motion.div>
                                <motion.div 
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="text-white/40 group-hover:text-white transition-colors"
                                >
                                    <ChevronRight />
                                </motion.div>
                            </div>
                            <h3 className="text-xl font-bold mb-1">Eğitim Takvimi</h3>
                            <p className="text-slate-400 text-xs">Yeni dönem kayıtları başladı.</p>
                        </div>
                        <motion.div 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -bottom-4 -right-4 w-32 h-32 bg-rose-500/20 rounded-full blur-2xl"
                        />
                    </motion.div>

                    {/* Stats with animated counter */}
                    <motion.div 
                         initial={{ opacity: 0, x: 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: 0.2 }}
                         whileHover={{ scale: 1.02, rotateY: -5 }}
                         style={{ transformStyle: "preserve-3d" }}
                         className="bg-white rounded-[2rem] p-8 flex-1 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-center relative overflow-hidden group"
                    >
                         <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-100 to-transparent rounded-bl-full opacity-50" />
                         <motion.h4 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", delay: 0.5 }}
                            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-800 mb-2"
                         >
                            15+ Yıl
                         </motion.h4>
                         <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-4">Tecrübe & Güven</p>
                         <div className="flex -space-x-3">
                            {[1,2,3,4].map(i => (
                                <motion.div 
                                    key={i}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                    whileHover={{ scale: 1.2, zIndex: 10 }}
                                    className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-slate-200 to-slate-300 shadow-lg"
                                />
                            ))}
                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1 }}
                                whileHover={{ scale: 1.2 }}
                                className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-slate-900 to-slate-700 text-white flex items-center justify-center text-[10px] font-bold shadow-lg"
                            >
                                +5k
                            </motion.div>
                         </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  );
};

const FeatureCard = ({ title, icon, desc, delay }) => (
    <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        whileHover={{ y: -10, rotateX: 5, scale: 1.02 }}
        style={{ transformStyle: "preserve-3d" }}
        className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden group"
    >
        <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-rose-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            initial={false}
        />
        <motion.div 
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl flex items-center justify-center text-slate-900 mb-4 relative z-10 shadow-md"
        >
            {icon}
        </motion.div>
        <h3 className="text-base font-bold text-slate-900 mb-2 relative z-10">{title}</h3>
        <p className="text-slate-500 text-xs leading-relaxed font-medium relative z-10">{desc}</p>
    </motion.div>
);

const Home = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <Hero />
            
            {/* Features Grid - Minimalist */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row justify-between items-end mb-10"
                    >
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Neden İki Teknik?</h2>
                            <p className="text-slate-500 text-sm">Kaliteli eğitimin adresi.</p>
                        </div>
                        <Link to="/hakkimizda" className="text-rose-600 text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all group">
                            Tüm Detaylar 
                            <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                                <ChevronRight size={14} />
                            </motion.div>
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FeatureCard 
                            title="Uzman Kadro" 
                            icon={<Users size={18} />} 
                            desc="Alanında uzman, sektör deneyimi yüksek eğitmenler."
                            delay={0.1}
                        />
                        <FeatureCard 
                            title="Sertifikalı Eğitim" 
                            icon={<Award size={18} />} 
                            desc="M.E.B. onaylı ve uluslararası geçerli sertifikalar."
                            delay={0.2}
                        />
                        <FeatureCard 
                            title="Modern Sınıflar" 
                            icon={<MapPin size={18} />} 
                            desc="Son teknoloji laboratuvar ve ekipmanlar."
                            delay={0.3}
                        />
                         <FeatureCard 
                            title="Kariyer Desteği" 
                            icon={<Target size={18} />} 
                            desc="Eğitim sonrası staj ve iş bulma desteği."
                            delay={0.4}
                        />
                    </div>
                </div>
            </section>

             {/* 3D Technology Showcase */}
             <section className="py-24 relative overflow-hidden">
                <motion.div 
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 40, repeat: Infinity }}
                    className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl"
                />
                
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-3">Teknoloji Yığınımız</h2>
                        <p className="text-slate-500 text-sm">Sektörün en güncel ve talep gören yazılımlarında eğitim veriyoruz</p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        {[
                            { name: '3DS Max', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400&w=300', color: 'from-cyan-500 to-blue-600' },
                            { name: 'AutoCAD', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400&w=300', color: 'from-red-500 to-rose-600' },
                            { name: 'SolidWorks', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400&w=300', color: 'from-orange-500 to-amber-600' },
                            { name: 'Python', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400&w=300', color: 'from-blue-500 to-indigo-600' },
                            { name: 'Revit', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400&w=300', color: 'from-green-500 to-emerald-600' },
                            { name: 'ANSYS', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400&w=300', color: 'from-purple-500 to-violet-600' },
                            { name: 'Photoshop', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=400&w=300', color: 'from-blue-600 to-cyan-600' },
                            { name: 'Illustrator', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=400&w=300', color: 'from-orange-600 to-yellow-600' },
                        ].map((tech, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30, rotateY: -20 }}
                                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -15, rotateY: 10, rotateX: 5, scale: 1.05 }}
                                style={{ transformStyle: "preserve-3d" }}
                                className="group cursor-pointer"
                            >
                                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                                    <div className="aspect-square relative">
                                        <motion.img 
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            src={tech.img}
                                            className="w-full h-full object-cover"
                                            alt={tech.name}
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-60 group-hover:opacity-80 transition-opacity`} />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.h3 
                                                style={{ transform: "translateZ(50px)" }}
                                                className="text-white text-xl font-black tracking-tight drop-shadow-2xl"
                                            >
                                                {tech.name}
                                            </motion.h3>
                                        </div>
                                    </div>
                                    <motion.div 
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        className="h-1 bg-white origin-left"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
             </section>

             {/* 3D Course Preview Cards */}
             <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                    }} />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-white mb-3">Popüler Eğitimlerimiz</h2>
                        <p className="text-slate-400 text-sm">En çok tercih edilen kurslarımız</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: '3DS Max Mimari Görselleştirme',
                                img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80',
                                students: '250+',
                                duration: '80 Saat',
                                level: 'Başlangıç-İleri'
                            },
                            {
                                title: 'SolidWorks Mekanik Tasarım',
                                img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80',
                                students: '180+',
                                duration: '60 Saat',
                                level: 'Orta-İleri'
                            },
                            {
                                title: 'Python Programlama',
                                img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80',
                                students: '320+',
                                duration: '100 Saat',
                                level: 'Başlangıç-İleri'
                            }
                        ].map((course, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                whileHover={{ y: -20, rotateX: 10, scale: 1.03 }}
                                style={{ transformStyle: "preserve-3d" }}
                                className="bg-white/5 backdrop-blur-sm rounded-[2rem] overflow-hidden border border-white/10 hover:border-white/20 transition-all group cursor-pointer"
                            >
                                <div className="aspect-video relative overflow-hidden">
                                    <motion.img 
                                        whileHover={{ scale: 1.15 }}
                                        transition={{ duration: 0.6 }}
                                        src={course.img}
                                        className="w-full h-full object-cover"
                                        alt={course.title}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-white text-lg font-bold mb-2">{course.title}</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-black text-white mb-1">{course.students}</div>
                                            <div className="text-[10px] text-slate-400 uppercase">Öğrenci</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-black text-white mb-1">{course.duration}</div>
                                            <div className="text-[10px] text-slate-400 uppercase">Süre</div>
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-rose-400 mb-1">{course.level}</div>
                                            <div className="text-[10px] text-slate-400 uppercase">Seviye</div>
                                        </div>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full mt-6 bg-white text-slate-900 py-3 rounded-xl font-bold text-sm hover:bg-rose-50 transition-colors"
                                    >
                                        Detayları Gör
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
             </section>

             {/* Interactive 3D Stats */}
             <section className="py-24 relative">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { value: '15+', label: 'Yıllık Deneyim', icon: '🏆', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80' },
                            { value: '5000+', label: 'Mezun Öğrenci', icon: '🎓', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80' },
                            { value: '50+', label: 'Farklı Kurs', icon: '📚', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80' },
                            { value: '%95', label: 'İstihdam Oranı', icon: '💼', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80' }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
                                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.1, rotateY: 10, y: -10 }}
                                style={{ transformStyle: "preserve-3d" }}
                                className="relative group cursor-pointer"
                            >
                                <div className="aspect-square rounded-[2rem] overflow-hidden relative">
                                    <motion.img 
                                        whileHover={{ scale: 1.2 }}
                                        src={stat.img}
                                        className="w-full h-full object-cover"
                                        alt={stat.label}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-800/80 group-hover:from-rose-600/80 group-hover:to-rose-700/80 transition-all duration-500" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                                        <motion.div 
                                            animate={{ rotate: [0, 10, -10, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="text-5xl mb-4"
                                            style={{ transform: "translateZ(30px)" }}
                                        >
                                            {stat.icon}
                                        </motion.div>
                                        <div className="text-4xl font-black mb-2" style={{ transform: "translateZ(20px)" }}>{stat.value}</div>
                                        <div className="text-xs font-bold uppercase tracking-wider" style={{ transform: "translateZ(10px)" }}>{stat.label}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
             </section>

             {/* Categories - Compact List with Images */}
             <section className="py-16 bg-white border-y border-slate-100">
                <div className="container mx-auto px-6">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                         <h2 className="text-2xl font-bold text-slate-900 mb-2">Eğitim Kategorileri</h2>
                         <p className="text-slate-500 text-sm">Uzmanlaşmak istediğiniz alanı seçin.</p>
                    </motion.div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {SITE_DATA.education_page.categories.map((cat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <Link 
                                    to="/egitimlerimiz" 
                                    className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group text-center relative overflow-hidden"
                                >
                                    <motion.div 
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-12 h-12 bg-gradient-to-br from-slate-50 to-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:from-rose-50 group-hover:to-rose-100 group-hover:text-rose-600 transition-all shadow-md group-hover:shadow-lg"
                                    >
                                        {cat.icon}
                                    </motion.div>
                                    <span className="text-xs font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{cat.title}</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
             </section>

             {/* References - Corporate Logos */}
             <section className="py-16 bg-white border-y border-slate-100">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Kurumsal Referanslarımız</h2>
                        <p className="text-slate-500 text-sm">Güvenilir kurumlarla çalışıyoruz</p>
                    </motion.div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            { name: 'ASELSAN', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=300' },
                            { name: 'TUSAŞ', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=300' },
                            { name: 'ROKETSAN', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=300' },
                            { name: 'HAVELSAN', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=300' },
                            { name: 'STM', img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=300' },
                            { name: 'BAYKAR', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=300' },
                        ].map((company, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="aspect-square bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer shadow-md hover:shadow-xl border border-slate-100 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                                    <img src={company.img} className="w-full h-full object-cover" alt={company.name} />
                                </div>
                                <div className="relative z-10 text-center">
                                    <div className="text-2xl font-black text-slate-900 mb-2">{company.name}</div>
                                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Kurumsal Partner</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
             </section>

             {/* Success Stories */}
             <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Başarı Hikayeleri</h2>
                        <p className="text-slate-500 text-sm">Mezunlarımızın kariyerlerindeki başarıları</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                name: 'Ahmet Yılmaz',
                                role: 'Senior 3D Artist',
                                company: 'Ubisoft',
                                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300',
                                quote: '3DS Max eğitimi sayesinde hayallerimi gerçekleştirdim.',
                                bg: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80'
                            },
                            {
                                name: 'Ayşe Kaya',
                                role: 'Mechanical Engineer',
                                company: 'TUSAŞ',
                                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
                                quote: 'SolidWorks ve ANSYS eğitimleri kariyerime yön verdi.',
                                bg: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80'
                            },
                            {
                                name: 'Mehmet Demir',
                                role: 'Full Stack Developer',
                                company: 'Microsoft',
                                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
                                quote: 'Yazılım eğitimi ile teknoloji dünyasına adım attım.',
                                bg: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80'
                            }
                        ].map((story, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20, rotateX: -10 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                whileHover={{ y: -10, rotateX: 5, scale: 1.02 }}
                                style={{ transformStyle: "preserve-3d" }}
                                className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all"
                            >
                                <div className="h-32 relative overflow-hidden">
                                    <img src={story.bg} className="w-full h-full object-cover" alt={story.name} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                                <div className="p-6 -mt-12 relative z-10">
                                    <motion.div 
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-white shadow-xl mb-4 mx-auto"
                                    >
                                        <img src={story.image} className="w-full h-full object-cover" alt={story.name} />
                                    </motion.div>
                                    <h3 className="text-lg font-bold text-slate-900 text-center mb-1">{story.name}</h3>
                                    <p className="text-xs font-bold text-rose-600 text-center mb-1">{story.role}</p>
                                    <p className="text-[10px] text-slate-400 text-center mb-4">{story.company}</p>
                                    <p className="text-slate-500 text-xs text-center italic leading-relaxed">"{story.quote}"</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
             </section>

             {/* Facility Gallery */}
             <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Modern Tesislerimiz</h2>
                        <p className="text-slate-500 text-sm">Son teknoloji ekipmanlarla donatılmış eğitim ortamları</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
                            'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
                            'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
                            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80',
                            'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80',
                            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
                            'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80',
                            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
                        ].map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.05, rotateZ: i % 2 === 0 ? 3 : -3 }}
                                className="aspect-square rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                            >
                                <img src={img} className="w-full h-full object-cover" alt={`Facility ${i + 1}`} />
                            </motion.div>
                        ))}
                    </div>
                </div>
             </section>

             {/* Testimonials */}
             <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Öğrencilerimiz Ne Diyor?</h2>
                        <p className="text-slate-500 text-sm">Gerçek deneyimler, gerçek sonuçlar</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            {
                                name: 'Zeynep Arslan',
                                course: 'Grafik Tasarım',
                                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100',
                                text: 'Eğitmenler çok deneyimli ve sabırlı. Sıfırdan başladım, şimdi freelance olarak çalışıyorum.'
                            },
                            {
                                name: 'Burak Yıldız',
                                course: 'AutoCAD',
                                image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=100',
                                text: 'Pratik ağırlıklı eğitim sayesinde hemen işe başlayabildim. Kesinlikle tavsiye ederim.'
                            },
                            {
                                name: 'Elif Şahin',
                                course: 'Web Tasarım',
                                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
                                text: 'Küçük sınıf mevcutları sayesinde bireysel ilgi gördüm. Çok memnunum.'
                            },
                            {
                                name: 'Emre Kılıç',
                                course: 'Python',
                                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
                                text: 'Güncel müfredat ve gerçek projelerle öğrendim. Şimdi yazılım geliştirici olarak çalışıyorum.'
                            }
                        ].map((testimonial, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <motion.div 
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-100 shadow-md"
                                    >
                                        <img src={testimonial.image} className="w-full h-full object-cover" alt={testimonial.name} />
                                    </motion.div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900">{testimonial.name}</h4>
                                        <p className="text-xs text-slate-400">{testimonial.course}</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed italic">"{testimonial.text}"</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
             </section>

             {/* Footer CTA - Minimal with Image */}
             <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.01 }}
                        className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
                    >
                         <div className="absolute inset-0 opacity-10">
                             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Team" />
                         </div>
                         <div className="relative z-10 max-w-xl mx-auto">
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl font-bold mb-6"
                            >
                                Geleceğinizi Şekillendirin
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-slate-400 mb-8 text-sm leading-relaxed"
                            >
                                Size en uygun eğitim programını belirlemek için hemen bizimle iletişime geçin.
                            </motion.p>
                            <div className="flex justify-center gap-4">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link to="/iletisim" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-xl text-sm font-bold transition-colors shadow-xl shadow-rose-500/20 inline-block">
                                        İletişime Geç
                                    </Link>
                                </motion.div>
                            </div>
                         </div>
                         <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 right-0 p-10 opacity-5"
                         >
                             <Phone size={200} />
                         </motion.div>
                    </motion.div>
                </div>
             </section>
        </div>
    );
};

export default Home;
