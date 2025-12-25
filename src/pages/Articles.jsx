import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowUpRight, Tag, BookOpen, Mail, Clock, User, TrendingUp } from 'lucide-react';

const Articles = () => {
    const articles = [
        {
            id: 1,
            title: "Yapay Zeka Ve Tasarımın Geleceği",
            category: "Teknoloji",
            readTime: "5 dk",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
            excerpt: "Generative AI araçlarının mimari ve endüstriyel tasarıma etkileri neler olacak?",
            author: "Ahmet Yılmaz",
            date: "15 Aralık 2026"
        },
        {
            id: 2,
            title: "3DS Max 2024 Yenilikleri",
            category: "3D Tasarım",
            readTime: "3 dk",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
            excerpt: "Autodesk'in en popüler modelleme yazılımı yeni sürümüyle neler sunuyor?",
            author: "Mehmet Demir",
            date: "12 Aralık 2026"
        },
        {
            id: 3,
            title: "Mühendislikte Simülasyon Önemi",
            category: "Mühendislik",
            readTime: "7 dk",
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
            excerpt: "Ansys kullanarak ürün geliştirme süreçlerini nasıl hızlandırabilirsiniz?",
            author: "Ayşe Kaya",
            date: "10 Aralık 2026"
        },
        {
            id: 4,
            title: "BIM Teknolojisi ve Revit",
            category: "Mimari",
            readTime: "6 dk",
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
            excerpt: "Yapı Bilgi Modellemesi (BIM) inşaat sektörünü nasıl dönüştürüyor?",
            author: "Can Öztürk",
            date: "8 Aralık 2026"
        },
        {
            id: 5,
            title: "AutoCAD İpuçları ve Püf Noktaları",
            category: "CAD",
            readTime: "4 dk",
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
            excerpt: "Profesyonellerin kullandığı AutoCAD kısayolları ve teknikleri.",
            author: "Zeynep Arslan",
            date: "5 Aralık 2026"
        },
        {
            id: 6,
            title: "SolidWorks ile Ürün Tasarımı",
            category: "Tasarım",
            readTime: "8 dk",
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
            excerpt: "Endüstriyel ürün tasarımında SolidWorks'ün gücünü keşfedin.",
            author: "Burak Yıldız",
            date: "3 Aralık 2026"
        },
        {
            id: 7,
            title: "Grafik Tasarımda Trend Renkler",
            category: "Grafik",
            readTime: "5 dk",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
            excerpt: "2026 yılında grafik tasarımda öne çıkan renk paletleri ve kullanım alanları.",
            author: "Elif Şahin",
            date: "1 Aralık 2026"
        },
        {
            id: 8,
            title: "Python ile Otomasyon",
            category: "Programlama",
            readTime: "10 dk",
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
            excerpt: "Python kullanarak günlük işlerinizi nasıl otomatikleştirebilirsiniz?",
            author: "Emre Kılıç",
            date: "28 Kasım 2026"
        }
    ];

  return (
    <div className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-white to-orange-50 min-h-screen font-sans relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        animate={{ scale: [1, 1.4, 1], x: [0, 100, 0] }}
        transition={{ duration: 30, repeat: Infinity }}
        className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-rose-200/20 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-end mb-12"
        >
            <div>
                <div className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white text-[10px] font-bold tracking-widest uppercase mb-2 shadow-lg">Blog</div>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Makaleler & Haberler</h1>
                <p className="text-slate-500 text-sm mt-2">Sektördeki son gelişmeler ve eğitim içerikleri</p>
            </div>
            <div className="hidden md:flex gap-2">
                {['Tümü', 'Teknoloji', 'Tasarım', 'Kariyer'].map((tag, i) => (
                    <motion.button 
                        key={tag}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-4 py-2 rounded-xl bg-white text-slate-500 text-xs font-bold border border-slate-200 hover:border-orange-300 hover:bg-orange-50 transition-all shadow-md"
                    >
                        {tag}
                    </motion.button>
                ))}
            </div>
        </motion.div>

        {/* Featured Article (Large) */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.01, rotateY: 2 }}
            style={{ transformStyle: "preserve-3d" }}
            className="mb-8 col-span-1 lg:col-span-2 group cursor-pointer relative rounded-[2rem] overflow-hidden shadow-2xl"
        >
             <div className="h-[500px] relative">
                <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={articles[0].image} 
                    alt={articles[0].title} 
                    className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
             </div>
             <div className="absolute bottom-0 left-0 p-10 text-white max-w-2xl">
                 <motion.span 
                    whileHover={{ scale: 1.1 }}
                    className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-[10px] font-bold uppercase mb-4 border border-white/20 shadow-lg"
                 >
                     {articles[0].category}
                 </motion.span>
                 <h2 className="text-4xl font-bold mb-3 leading-tight">{articles[0].title}</h2>
                 <p className="text-white/90 text-base line-clamp-2 mb-6">{articles[0].excerpt}</p>
                 <div className="flex items-center gap-6 text-sm">
                     <div className="flex items-center gap-2">
                         <User size={16} />
                         <span>{articles[0].author}</span>
                     </div>
                     <div className="flex items-center gap-2">
                         <Clock size={16} />
                         <span>{articles[0].readTime}</span>
                     </div>
                     <div className="flex items-center gap-2">
                         <BookOpen size={16} />
                         <span>{articles[0].date}</span>
                     </div>
                 </div>
             </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {articles.slice(1).map((art, i) => (
                <motion.div 
                    key={art.id}
                    initial={{ opacity: 0, y: 20, rotateX: -10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -10, rotateX: 5, scale: 1.02 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="bg-white rounded-[1.5rem] border border-slate-100 shadow-lg hover:shadow-2xl transition-all group cursor-pointer flex flex-col h-full overflow-hidden"
                >
                    <div className="aspect-video overflow-hidden relative bg-slate-100">
                        <motion.img 
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            src={art.image} 
                            alt={art.title} 
                            className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[8px] font-black text-slate-900 uppercase shadow-lg"
                        >
                           {art.category}
                        </motion.div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-sm font-bold text-slate-900 mb-2 leading-tight group-hover:text-rose-600 transition-colors">{art.title}</h3>
                        <p className="text-slate-400 text-[11px] line-clamp-3 mb-4 flex-1">{art.excerpt}</p>
                        <div className="flex items-center gap-3 text-[10px] text-slate-400 font-bold mb-3">
                            <div className="flex items-center gap-1">
                                <User size={10} />
                                <span>{art.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock size={10} />
                                <span>{art.readTime}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center border-t border-slate-50 pt-3">
                             <span className="text-[10px] text-slate-400">{art.date}</span>
                             <motion.div 
                                whileHover={{ scale: 1.2, rotate: 45 }}
                                className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all shadow-md"
                             >
                                 <ArrowUpRight size={12} />
                             </motion.div>
                        </div>
                    </div>
                </motion.div>
            ))}
            
            {/* Newsletter CTA Card */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, rotateZ: 2 }}
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-[1.5rem] flex flex-col justify-center items-center text-center text-white relative overflow-hidden shadow-2xl"
            >
                <div className="absolute inset-0 opacity-10">
                    <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Newsletter" />
                </div>
                <motion.div 
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-rose-500 relative z-10"
                >
                    <Mail size={20} />
                </motion.div>
                <h3 className="font-bold mb-2 text-sm relative z-10">Bültene Abone Olun</h3>
                <p className="text-xs text-slate-400 mb-4 relative z-10">En yeni makalelerden haberdar olun.</p>
                <div className="w-full relative z-10">
                    <input type="email" placeholder="E-posta adresi" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-rose-500 transition-colors placeholder:text-slate-600" />
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute right-1 top-1 bg-white text-slate-900 p-1.5 rounded-lg hover:bg-rose-500 hover:text-white transition-colors shadow-lg"
                    >
                        <ArrowUpRight size={12} />
                    </motion.button>
                </div>
                <motion.div 
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-0 right-0 w-32 h-32 bg-rose-500/20 rounded-full blur-2xl"
                />
            </motion.div>
        </div>

        {/* Trending Topics */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl"
        >
            <div className="flex items-center gap-3 mb-6">
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                    <TrendingUp className="text-rose-600" size={24} />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900">Popüler Konular</h3>
            </div>
            <div className="flex flex-wrap gap-3">
                {['AutoCAD', 'SolidWorks', 'Python', '3DS Max', 'Revit', 'Grafik Tasarım', 'Web Tasarım', 'Yapay Zeka', 'BIM', 'CAD/CAM'].map((topic, i) => (
                    <motion.button
                        key={topic}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-slate-50 hover:bg-rose-50 text-slate-700 hover:text-rose-600 rounded-xl text-xs font-bold transition-all border border-slate-100 hover:border-rose-200 shadow-sm"
                    >
                        #{topic}
                    </motion.button>
                ))}
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Articles;
