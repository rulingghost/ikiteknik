import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Lock, ShieldCheck, AlertCircle, FileText, ChevronRight, Award, CheckCircle2, Users, Clock } from 'lucide-react';

const PearsonVue = () => {
  const certImages = [
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80',
  ];

  const examRoomImages = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
  ];

  return (
    <div className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-white to-emerald-50 min-h-screen font-sans relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        animate={{ scale: [1, 1.4, 1], x: [0, -50, 0] }}
        transition={{ duration: 30, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header with Images */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-[10px] font-bold tracking-widest uppercase mb-4 shadow-lg">Yetkili Sınav Merkezi</div>
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                    Pearson Vue <br/> <span className="text-rose-600">Sınav Merkezi</span>
                </h1>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                    İki Teknik Bilişim, uluslararası geçerliliği olan sertifika sınavları için yetkili Pearson Vue test merkezidir. Kariyerinizi küresel standartlarda belgeleyin.
                </p>
                <div className="flex gap-4">
                     <motion.button 
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:from-slate-800 hover:to-slate-700 transition-all shadow-xl flex items-center gap-2"
                     >
                        Sınav Kuralları <ChevronRight size={14} />
                     </motion.button>
                     <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-all shadow-lg"
                     >
                        İletişime Geç
                     </motion.button>
                </div>
            </motion.div>
            
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
                        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Exam Center 1" />
                    </motion.div>
                    <motion.div 
                        whileHover={{ scale: 1.05, rotateZ: -2 }}
                        className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl mt-8"
                    >
                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Exam Center 2" />
                    </motion.div>
                </div>
                
                {/* Floating Badge */}
                <motion.div 
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-2xl border border-slate-50"
                >
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-3 shadow-lg"
                        >
                            <BadgeCheck size={32} />
                        </motion.div>
                        <div className="font-bold text-slate-900 text-sm">Resmi Yetkili</div>
                        <div className="text-[10px] text-slate-400">Test Merkezi</div>
                    </div>
                </motion.div>
            </motion.div>
        </div>

        {/* Steps with Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[ 
                { icon: <Lock size={20} />, title: 'Güvenli Ortam', desc: 'Kamera ve biyometrik kontrol sistemleri ile güvenli sınav odaları.', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80' },
                { icon: <FileText size={20} />, title: 'Kolay Kayıt', desc: 'Pearson Vue web sitesi üzerinden kolayca randevu oluşturun.', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80' },
                { icon: <ShieldCheck size={20} />, title: 'Anında Sonuç', desc: 'Sınav bitiminde geçici sonuç belgenizi anında teslim alın.', img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80' }
            ].map((step, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20, rotateX: -10 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -10, rotateX: 5, scale: 1.02 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="bg-white rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-2xl transition-all overflow-hidden group cursor-pointer"
                >
                    <div className="h-32 relative overflow-hidden">
                        <motion.img 
                            whileHover={{ scale: 1.1 }}
                            src={step.img}
                            className="w-full h-full object-cover" 
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
                </motion.div>
            ))}
        </div>

        {/* Certification Gallery */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
        >
            <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">Sertifika Programları</h2>
            <p className="text-slate-500 text-sm text-center mb-8">Uluslararası geçerliliği olan sertifikalar</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {certImages.map((img, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.05, y: -10 }}
                        className="aspect-video rounded-2xl overflow-hidden shadow-xl cursor-pointer relative group"
                    >
                        <img src={img} className="w-full h-full object-cover" alt={`Cert ${i + 1}`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            className="absolute bottom-3 left-3 text-white text-xs font-bold"
                        >
                            Sertifika {i + 1}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>

        {/* Exam Rooms */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
        >
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Sınav Odalarımız</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {examRoomImages.map((img, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                        whileHover={{ scale: 1.03, rotateY: 5 }}
                        style={{ transformStyle: "preserve-3d" }}
                        className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                    >
                        <img src={img} className="w-full h-full object-cover" alt={`Room ${i + 1}`} />
                    </motion.div>
                ))}
            </div>
        </motion.div>

        {/* Important Info with Image Background */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            className="bg-rose-50 border border-rose-100 rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-xl"
        >
            <div className="absolute inset-0 opacity-5">
                <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Rules" />
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                 <div className="shrink-0">
                     <motion.div 
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-rose-600 shadow-lg"
                     >
                         <AlertCircle size={24} />
                     </motion.div>
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
                             <motion.li 
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-2 text-slate-600 text-sm font-medium"
                             >
                                 <motion.div
                                    animate={{ scale: [1, 1.3, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                                    className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0"
                                 />
                                 {rule}
                             </motion.li>
                         ))}
                     </ul>
                 </div>
            </div>
        </motion.div>

        {/* Stats */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-[2rem] p-10 border border-slate-100 shadow-xl"
        >
            <div className="grid md:grid-cols-3 gap-8 text-center">
                {[
                    { icon: <Users size={24} />, value: '10,000+', label: 'Başarılı Sınav' },
                    { icon: <Award size={24} />, value: '50+', label: 'Farklı Sertifika' },
                    { icon: <CheckCircle2 size={24} />, value: '%98', label: 'Memnuniyet' }
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, type: "spring" }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="flex flex-col items-center gap-3"
                    >
                        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                            {stat.icon}
                        </div>
                        <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                ))}
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default PearsonVue;
