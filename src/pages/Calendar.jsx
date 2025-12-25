import React from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalIcon, Clock, ArrowRight, User, MapPin, Award } from 'lucide-react';

const Calendar = () => {
    const events = [
        {
            date: { d: '15', m: 'Ocak' },
            title: '3DS Max Mimari Görselleştirme',
            time: '18:30 - 21:30',
            days: 'Pazartesi - Çarşamba',
            quota: 4,
            status: 'active',
            instructor: 'Ahmet Yılmaz',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80',
            instructorImg: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100'
        },
        {
            date: { d: '22', m: 'Ocak' },
            title: 'SolidWorks İleri Seviye',
            time: '19:00 - 22:00',
            days: 'Salı - Perşembe',
            quota: 2,
            status: 'active',
            instructor: 'Mehmet Demir',
            image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80',
            instructorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100'
        },
        {
            date: { d: '05', m: 'Şubat' },
            title: 'Revit Architecture',
            time: '09:00 - 13:00',
            days: 'Hafta Sonu',
            quota: 8,
            status: 'upcoming',
            instructor: 'Ayşe Kaya',
            image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
            instructorImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100'
        },
        {
            date: { d: '12', m: 'Şubat' },
            title: 'AutoCAD Temel Eğitim',
            time: '18:30 - 21:30',
            days: 'Pazartesi - Çarşamba',
            quota: 0,
            status: 'full',
            instructor: 'Can Öztürk',
            image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80',
            instructorImg: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100'
        },
        {
            date: { d: '20', m: 'Şubat' },
            title: 'Python Programlama',
            time: '19:00 - 22:00',
            days: 'Çarşamba - Cuma',
            quota: 6,
            status: 'active',
            instructor: 'Zeynep Arslan',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80',
            instructorImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100'
        },
        {
            date: { d: '28', m: 'Şubat' },
            title: 'Grafik Tasarım Bootcamp',
            time: '10:00 - 17:00',
            days: 'Cumartesi',
            quota: 10,
            status: 'upcoming',
            instructor: 'Burak Yıldız',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80',
            instructorImg: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=100'
        }
    ];

  return (
    <div className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-white to-indigo-50 min-h-screen font-sans relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 0] }}
        transition={{ duration: 30, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12"
        >
            <div>
                <div className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-[10px] font-bold tracking-widest uppercase mb-2 shadow-lg">Canlı Dersler</div>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Eğitim Takvimi</h1>
                <p className="text-slate-500 text-sm mt-2">Yaklaşan eğitim programları ve kayıt bilgileri</p>
            </div>
            <div className="text-right hidden md:block">
                <p className="text-slate-500 text-xs font-medium">Toplam <span className="font-bold text-slate-900">{events.length}</span> aktif sınıf planlandı.</p>
            </div>
        </motion.div>

        {/* Calendar List with Images */}
        <div className="grid gap-6 max-w-5xl mx-auto">
            {events.map((evt, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20, rotateX: -10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5, rotateX: 2, scale: 1.01 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className={`group bg-white rounded-[1.5rem] border border-slate-100 flex flex-col md:flex-row gap-6 items-stretch overflow-hidden ${evt.status === 'full' ? 'opacity-60' : 'hover:border-indigo-100 hover:shadow-2xl transition-all shadow-lg'}`}
                >
                    {/* Course Image */}
                    <div className="md:w-48 h-48 md:h-auto relative overflow-hidden shrink-0">
                        <motion.img 
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            src={evt.image}
                            className="w-full h-full object-cover" 
                            alt={evt.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        
                        {/* Date Badge on Image */}
                        <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="absolute top-4 left-4 w-16 h-16 bg-white rounded-2xl flex flex-col items-center justify-center shadow-xl"
                        >
                            <span className="text-2xl font-black leading-none text-slate-900">{evt.date.d}</span>
                            <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400">{evt.date.m}</span>
                        </motion.div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{evt.title}</h3>
                            <div className="flex flex-wrap gap-3 text-xs font-medium text-slate-500 mb-4">
                                 <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg">
                                     <Clock size={14} className="text-indigo-500" /> {evt.days} / {evt.time}
                                 </div>
                                 {evt.status !== 'full' && (
                                    <motion.div 
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="flex items-center gap-1.5 bg-rose-50 px-3 py-1.5 rounded-lg text-rose-600"
                                    >
                                        <User size={14} /> {evt.quota} Kişilik Yer Kaldı
                                    </motion.div>
                                 )}
                            </div>
                            
                            {/* Instructor */}
                            <div className="flex items-center gap-3 mb-4">
                                <motion.div 
                                    whileHover={{ scale: 1.1 }}
                                    className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg"
                                >
                                    <img src={evt.instructorImg} className="w-full h-full object-cover" alt={evt.instructor} />
                                </motion.div>
                                <div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase">Eğitmen</div>
                                    <div className="text-sm font-bold text-slate-900">{evt.instructor}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action */}
                    <div className="shrink-0 p-6 flex items-center">
                        {evt.status === 'full' ? (
                            <span className="px-6 py-3 rounded-xl bg-slate-100 text-slate-400 text-xs font-bold uppercase tracking-wider cursor-not-allowed">
                                Kontenjan Dolu
                            </span>
                        ) : (
                            <motion.button 
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-xs font-bold uppercase tracking-wider hover:from-indigo-700 hover:to-indigo-800 transition-all flex items-center gap-2 shadow-xl shadow-indigo-500/30"
                            >
                                Kayıt Ol <ArrowRight size={14} />
                            </motion.button>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Bottom CTA with Images */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-2 gap-6"
        >
            {/* Info Card */}
            <motion.div 
                whileHover={{ scale: 1.02, rotateY: 5 }}
                style={{ transformStyle: "preserve-3d" }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-transparent rounded-bl-full opacity-50" />
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600"
                        >
                            <Award size={24} />
                        </motion.div>
                        <h3 className="text-lg font-bold text-slate-900">Sertifika Programları</h3>
                    </div>
                    <p className="text-slate-500 text-sm mb-6">Tüm eğitimlerimiz sonunda MEB onaylı sertifika verilmektedir.</p>
                    <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        className="text-indigo-600 text-xs font-bold flex items-center gap-2 hover:gap-3 transition-all"
                    >
                        Detaylı Bilgi <ArrowRight size={14} />
                    </motion.button>
                </div>
            </motion.div>

            {/* Contact Card with Image */}
            <motion.div 
                whileHover={{ scale: 1.02, rotateY: -5 }}
                style={{ transformStyle: "preserve-3d" }}
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[2rem] text-white relative overflow-hidden shadow-2xl"
            >
                <div className="absolute inset-0 opacity-10">
                    <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Contact" />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center"
                        >
                            <MapPin size={24} className="text-rose-400" />
                        </motion.div>
                        <h3 className="text-lg font-bold">Bize Ulaşın</h3>
                    </div>
                    <p className="text-slate-400 text-sm mb-6">Eğitimler hakkında detaylı bilgi almak için.</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-white text-slate-900 py-3 rounded-xl font-bold text-sm hover:bg-rose-50 transition-colors shadow-lg"
                    >
                        İletişime Geç
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default Calendar;
