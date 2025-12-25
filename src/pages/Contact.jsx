import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Facebook, MessageCircle, Clock, Navigation } from 'lucide-react';
import { SITE_DATA } from '../constants';

const Contact = () => {
  const officeImages = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80',
  ];

  const teamPhotos = [
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150',
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=150',
  ];

  return (
    <div className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-white to-green-50 min-h-screen font-sans relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header with Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl mb-12"
        >
             <div className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white text-[10px] font-bold tracking-widest uppercase mb-2 shadow-lg">İletişim</div>
             <h1 className="text-3xl font-bold text-slate-900 mb-2">Bize Ulaşın</h1>
             <p className="text-slate-500 text-sm">Eğitimler hakkında detaylı bilgi almak veya ziyaret etmek için.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
             
             {/* Info Cards */}
             <div className="space-y-6">
                 <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="bg-white rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all overflow-hidden"
                 >
                     <div className="h-48 relative overflow-hidden">
                        <motion.img 
                            whileHover={{ scale: 1.1 }}
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
                            className="w-full h-full object-cover" 
                            alt="Office Building" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute bottom-4 left-4"
                        >
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white shadow-xl">
                                <MapPin size={24} />
                            </div>
                        </motion.div>
                     </div>
                     <div className="p-8">
                         <h3 className="text-lg font-bold text-slate-900 mb-3">Merkez Ofis</h3>
                         <p className="text-slate-500 text-sm leading-relaxed mb-6">{SITE_DATA.contact.address}</p>
                         <motion.button
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 text-rose-600 text-xs font-bold hover:gap-3 transition-all"
                         >
                            <Navigation size={14} />
                            Yol Tarifi Al
                         </motion.button>
                     </div>
                 </motion.div>

                 <div className="grid sm:grid-cols-2 gap-4">
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ y: -5, rotateZ: 2 }}
                        className="bg-white p-6 rounded-[1.5rem] border border-slate-100 flex flex-col items-center text-center gap-3 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                     >
                         <motion.div 
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shadow-md"
                         >
                             <Phone size={20} />
                         </motion.div>
                         <h4 className="text-sm font-bold text-slate-900">Telefon</h4>
                         <p className="text-slate-500 text-xs font-medium">{SITE_DATA.contact.phones[0]}</p>
                     </motion.div>
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ y: -5, rotateZ: -2 }}
                        className="bg-white p-6 rounded-[1.5rem] border border-slate-100 flex flex-col items-center text-center gap-3 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                     >
                         <motion.div 
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shadow-md"
                         >
                             <Mail size={20} />
                         </motion.div>
                         <h4 className="text-sm font-bold text-slate-900">E-Posta</h4>
                         <p className="text-slate-500 text-xs font-medium lowercase">info@ikiteknik.com</p>
                     </motion.div>
                 </div>

                 {/* Office Hours */}
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-[1.5rem] text-white relative overflow-hidden shadow-xl"
                 >
                    <div className="absolute inset-0 opacity-10">
                        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Office" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            >
                                <Clock className="text-rose-400" size={24} />
                            </motion.div>
                            <h4 className="text-sm font-bold">Çalışma Saatleri</h4>
                        </div>
                        <div className="space-y-2 text-xs">
                            <div className="flex justify-between">
                                <span className="text-slate-400">Hafta İçi:</span>
                                <span className="font-bold">09:00 - 18:00</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Cumartesi:</span>
                                <span className="font-bold">10:00 - 16:00</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Pazar:</span>
                                <span className="font-bold text-rose-400">Kapalı</span>
                            </div>
                        </div>
                    </div>
                 </motion.div>
             </div>

             {/* Form */}
             <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.01 }}
                className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-2xl relative overflow-hidden"
             >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-100 to-transparent rounded-bl-full opacity-50" />
                 
                 <div className="relative z-10">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Mesaj Gönderin</h3>
                    <p className="text-slate-500 text-xs mb-6">Size en kısa sürede dönüş yapacağız.</p>
                    
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Adınız</label>
                                <motion.input 
                                    whileFocus={{ scale: 1.02 }}
                                    type="text" 
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-rose-500 focus:bg-white transition-all text-slate-900 shadow-sm" 
                                    placeholder="İsim" 
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Soyadınız</label>
                                <motion.input 
                                    whileFocus={{ scale: 1.02 }}
                                    type="text" 
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-rose-500 focus:bg-white transition-all text-slate-900 shadow-sm" 
                                    placeholder="Soyisim" 
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">E-Posta</label>
                            <motion.input 
                                whileFocus={{ scale: 1.02 }}
                                type="email" 
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-rose-500 focus:bg-white transition-all text-slate-900 shadow-sm" 
                                placeholder="ornek@email.com" 
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Konu</label>
                            <motion.select 
                                whileFocus={{ scale: 1.02 }}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-rose-500 focus:bg-white transition-all text-slate-900 shadow-sm"
                            >
                                <option>Genel Bilgi</option>
                                <option>Kayıt Olmak İstiyorum</option>
                                <option>Eğitim Takvimi</option>
                                <option>Kurumsal Eğitim</option>
                            </motion.select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Mesajınız</label>
                            <motion.textarea 
                                whileFocus={{ scale: 1.02 }}
                                rows={4} 
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-rose-500 focus:bg-white transition-all resize-none text-slate-900 shadow-sm" 
                                placeholder="Sorunuzu buraya yazın..." 
                            />
                        </div>
                        
                        <motion.button 
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            type="button" 
                            className="w-full py-4 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-rose-500/30"
                        >
                            Gönder <Send size={16} />
                        </motion.button>
                    </form>
                 </div>
             </motion.div>
        </div>

        {/* Office Gallery */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
        >
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Ofisimizden Görüntüler</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {officeImages.map((img, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.05, rotateZ: i % 2 === 0 ? 3 : -3 }}
                        className="aspect-square rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                    >
                        <img src={img} className="w-full h-full object-cover" alt={`Office ${i + 1}`} />
                    </motion.div>
                ))}
            </div>
        </motion.div>

        {/* Social & Team */}
        <div className="grid md:grid-cols-2 gap-6">
            {/* Social Media */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl"
            >
                <h3 className="text-lg font-bold text-slate-900 mb-6">Sosyal Medyada Biz</h3>
                <div className="grid grid-cols-2 gap-4">
                    {[
                        { icon: <Facebook size={24} />, name: 'Facebook', color: 'from-blue-600 to-blue-700', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=100' },
                        { icon: <Instagram size={24} />, name: 'Instagram', color: 'from-pink-600 to-purple-600', img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=100' },
                        { icon: <Linkedin size={24} />, name: 'LinkedIn', color: 'from-blue-700 to-blue-800', img: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=100' },
                        { icon: <MessageCircle size={24} />, name: 'WhatsApp', color: 'from-green-600 to-green-700', img: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&q=80&w=100' },
                    ].map((social, i) => (
                        <motion.button
                            key={social.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className={`bg-gradient-to-br ${social.color} text-white p-4 rounded-xl flex flex-col items-center gap-2 shadow-lg hover:shadow-xl transition-all relative overflow-hidden`}
                        >
                            <div className="absolute inset-0 opacity-20">
                                <img src={social.img} className="w-full h-full object-cover" alt={social.name} />
                            </div>
                            <div className="relative z-10">
                                {social.icon}
                            </div>
                            <span className="text-xs font-bold relative z-10">{social.name}</span>
                        </motion.button>
                    ))}
                </div>
            </motion.div>

            {/* Quick Contact Team */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[2rem] text-white relative overflow-hidden shadow-2xl"
            >
                <div className="absolute inset-0 opacity-10">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Team" />
                </div>
                <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-4">Danışma Ekibimiz</h3>
                    <p className="text-slate-400 text-xs mb-6">Size yardımcı olmak için buradayız!</p>
                    <div className="flex -space-x-4 mb-6">
                        {teamPhotos.map((photo, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: i * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.2, zIndex: 10 }}
                                className="w-12 h-12 rounded-full border-4 border-slate-900 overflow-hidden shadow-xl"
                            >
                                <img src={photo} className="w-full h-full object-cover" alt={`Team ${i + 1}`} />
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4, type: "spring" }}
                            className="w-12 h-12 rounded-full border-4 border-slate-900 bg-white text-slate-900 flex items-center justify-center text-xs font-bold shadow-xl"
                        >
                            +5
                        </motion.div>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-white text-slate-900 py-3 rounded-xl font-bold text-sm hover:bg-rose-50 transition-colors shadow-lg"
                    >
                        Hemen Ara
                    </motion.button>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
