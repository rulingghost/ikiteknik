import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, CheckCircle, GraduationCap, Building2, Phone, Globe, ChevronRight, TrendingUp, Zap, Heart } from 'lucide-react';
import { SITE_DATA } from '../constants';

const About = () => {
    const teamImages = [
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300',
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300',
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
    ];

    const facilityImages = [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80',
    ];

    return (
        <div className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen font-sans relative overflow-hidden">
            {/* Animated background */}
            <motion.div 
                animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 0] }}
                transition={{ duration: 25, repeat: Infinity }}
                className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-rose-200/20 to-orange-200/20 rounded-full blur-3xl"
            />
            
            <div className="container mx-auto px-6 relative z-10">
                
                {/* Hero with Images */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white text-[10px] font-bold tracking-widest uppercase mb-4 shadow-lg">
                            Hakkımızda
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Geleceği Birlikte <br/> <span className="text-rose-600">İnşa Ediyoruz.</span>
                        </h1>
                        <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                            2008 yılından bu yana Ankara'nın kalbinde, teknolojinin ve tasarımın sınırlarını zorlayan nesiller yetiştiriyor, hayallerinizi mesleğe dönüştürüyoruz.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 max-w-md mb-8">
                             <motion.div 
                                whileHover={{ scale: 1.05, rotateY: 5 }}
                                style={{ transformStyle: "preserve-3d" }}
                                className="bg-white p-4 rounded-xl border border-slate-100 shadow-lg cursor-pointer"
                             >
                                 <motion.div 
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-2xl font-black text-slate-900 mb-1"
                                 >
                                    15+
                                 </motion.div>
                                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Yıllık Tecrübe</div>
                             </motion.div>
                             <motion.div 
                                whileHover={{ scale: 1.05, rotateY: -5 }}
                                style={{ transformStyle: "preserve-3d" }}
                                className="bg-white p-4 rounded-xl border border-slate-100 shadow-lg cursor-pointer"
                             >
                                 <motion.div 
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                    className="text-2xl font-black text-slate-900 mb-1"
                                 >
                                    5000+
                                 </motion.div>
                                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mezun Öğrenci</div>
                             </motion.div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-rose-600 to-rose-700 text-white px-8 py-3 rounded-xl text-sm font-bold shadow-xl shadow-rose-500/30 flex items-center gap-2"
                        >
                            Daha Fazla Bilgi <ChevronRight size={16} />
                        </motion.button>
                    </motion.div>
                    
                    {/* Image Grid */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div 
                                whileHover={{ scale: 1.05, rotateZ: 2 }}
                                className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl"
                            >
                                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Team 1" />
                            </motion.div>
                            <motion.div 
                                whileHover={{ scale: 1.05, rotateZ: -2 }}
                                className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl mt-8"
                            >
                                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Team 2" />
                            </motion.div>
                        </div>
                        
                        {/* Floating Badge */}
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-slate-50"
                        >
                            <div className="flex items-center gap-4">
                                <motion.div 
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="bg-rose-50 p-3 rounded-xl text-rose-600"
                                >
                                    <Award size={24} />
                                </motion.div>
                                <div>
                                    <div className="font-bold text-slate-900 text-sm">Kalite Ödüllü</div>
                                    <div className="text-[10px] text-slate-400">Eğitim Merkezi</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Features / Mission Grid with Images */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10, rotateX: 5 }}
                        style={{ transformStyle: "preserve-3d" }}
                        className="bg-white rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-2xl transition-all overflow-hidden group cursor-pointer"
                     >
                         <div className="h-32 relative overflow-hidden">
                             <motion.img 
                                whileHover={{ scale: 1.1 }}
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                                className="w-full h-full object-cover" 
                                alt="Mission" 
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                         </div>
                         <div className="p-8">
                            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                                <Target size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Misyonumuz</h3>
                            <p className="text-slate-500 text-xs leading-relaxed">
                               Bilişim ve tasarım dünyasındaki yenilikleri yakından takip ederek, öğrencilerimize uluslararası standartlarda eğitim sunmak.
                            </p>
                         </div>
                     </motion.div>

                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ y: -10, rotateX: 5 }}
                        style={{ transformStyle: "preserve-3d" }}
                        className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] border border-slate-700 shadow-lg hover:shadow-2xl transition-all text-white relative overflow-hidden group cursor-pointer"
                     >
                         <div className="h-32 relative overflow-hidden">
                             <motion.img 
                                whileHover={{ scale: 1.1 }}
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" 
                                className="w-full h-full object-cover opacity-30" 
                                alt="Vision" 
                             />
                         </div>
                         <div className="p-8 relative z-10">
                            <div className="w-10 h-10 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6">
                                <Globe size={20} />
                            </div>
                            <h3 className="text-lg font-bold mb-3">Vizyonumuz</h3>
                            <p className="text-slate-400 text-xs leading-relaxed">
                               Türkiye'nin teknoloji ve tasarım alanındaki lider eğitim kurumu olmak ve global standartları yakalamak.
                            </p>
                         </div>
                         <motion.div 
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"
                         />
                     </motion.div>

                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ y: -10, rotateX: 5 }}
                        style={{ transformStyle: "preserve-3d" }}
                        className="bg-white rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-2xl transition-all overflow-hidden group cursor-pointer"
                     >
                         <div className="h-32 relative overflow-hidden">
                             <motion.img 
                                whileHover={{ scale: 1.1 }}
                                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80" 
                                className="w-full h-full object-cover" 
                                alt="Values" 
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                         </div>
                         <div className="p-8">
                            <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                                <CheckCircle size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Değerlerimiz</h3>
                            <ul className="space-y-2">
                                {['Öğrenci Odaklılık', 'Sürekli Gelişim', 'Etik Değerler', 'Yenilikçilik'].map((item, i) => (
                                    <motion.li 
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        className="flex items-center gap-2 text-slate-500 text-xs font-semibold"
                                    >
                                        <motion.div 
                                            animate={{ scale: [1, 1.3, 1] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                            className="w-1.5 h-1.5 rounded-full bg-green-500"
                                        /> 
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                         </div>
                     </motion.div>
                </div>

                {/* Facilities Gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">Modern Tesislerimiz</h2>
                    <p className="text-slate-500 text-sm text-center mb-8">Son teknoloji ekipmanlarla donatılmış eğitim ortamları</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {facilityImages.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05, rotateZ: i % 2 === 0 ? 2 : -2 }}
                                className="aspect-square rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                            >
                                <img src={img} className="w-full h-full object-cover" alt={`Facility ${i + 1}`} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Team Section with Photos */}
                <div className="bg-white rounded-[2rem] p-10 border border-slate-100 text-center shadow-xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-xl font-bold text-slate-900 mb-2">Eğitmen Kadromuz</h2>
                        <p className="text-slate-500 text-sm mb-8">Sektörün içinden gelen uzmanlarla çalışıyoruz.</p>
                    </motion.div>
                    
                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                        {teamImages.map((img, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.1, y: -10 }}
                                className="flex flex-col items-center gap-2 group cursor-pointer"
                            >
                                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white group-hover:ring-rose-500 transition-all">
                                     <img src={img} alt={`Instructor ${i + 1}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "2rem" }}
                                    className="h-1 bg-rose-500 rounded-full"
                                />
                            </motion.div>
                        ))}
                        <motion.button 
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-20 h-20 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all shadow-lg"
                        >
                            <ChevronRight size={24} />
                        </motion.button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center gap-8 text-center"
                    >
                        {[
                            { icon: <Heart size={20} />, value: '98%', label: 'Memnuniyet' },
                            { icon: <TrendingUp size={20} />, value: '85%', label: 'İstihdam' },
                            { icon: <Zap size={20} />, value: '100+', label: 'Şirket Ortağı' }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="flex flex-col items-center gap-2"
                            >
                                <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center">
                                    {stat.icon}
                                </div>
                                <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default About;
