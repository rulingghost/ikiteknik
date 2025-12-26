import React from 'react';
import { FileText, ArrowUpRight, Tag, BookOpen, Mail, Clock, User, TrendingUp } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const Articles = () => {
    const articles = [
        {
            id: 1,
            title: "Yapay Zeka Ve Tasarımın Geleceği",
            category: "Teknoloji",
            readTime: "5 dk",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
            excerpt: "Generative AI araçlarının mimari ve endüstriyel tasarıma etkileri neler olacak?",
            author: "Ahmet Yılmaz",
            date: "15 Aralık 2026"
        },
        {
            id: 2,
            title: "3DS Max 2024 Yenilikleri",
            category: "3D Tasarım",
            readTime: "3 dk",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
            excerpt: "Autodesk'in en popüler modelleme yazılımı yeni sürümüyle neler sunuyor?",
            author: "Mehmet Demir",
            date: "12 Aralık 2026"
        },
        {
            id: 3,
            title: "Mühendislikte Simülasyon Önemi",
            category: "Mühendislik",
            readTime: "7 dk",
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
            excerpt: "Ansys kullanarak ürün geliştirme süreçlerini nasıl hızlandırabilirsiniz?",
            author: "Ayşe Kaya",
            date: "10 Aralık 2026"
        },
        {
            id: 4,
            title: "BIM Teknolojisi ve Revit",
            category: "Mimari",
            readTime: "6 dk",
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
            excerpt: "Yapı Bilgi Modellemesi (BIM) inşaat sektörünü nasıl dönüştürüyor?",
            author: "Can Öztürk",
            date: "8 Aralık 2026"
        },
        {
            id: 5,
            title: "AutoCAD İpuçları ve Püf Noktaları",
            category: "CAD",
            readTime: "4 dk",
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
            excerpt: "Profesyonellerin kullandığı AutoCAD kısayolları ve teknikleri.",
            author: "Zeynep Arslan",
            date: "5 Aralık 2026"
        },
        {
            id: 6,
            title: "SolidWorks ile Ürün Tasarımı",
            category: "Tasarım",
            readTime: "8 dk",
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
            excerpt: "Endüstriyel ürün tasarımında SolidWorks'ün gücünü keşfedin.",
            author: "Burak Yıldız",
            date: "3 Aralık 2026"
        },
        {
            id: 7,
            title: "Grafik Tasarımda Trend Renkler",
            category: "Grafik",
            readTime: "5 dk",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
            excerpt: "2026 yılında grafik tasarımda öne çıkan renk paletleri ve kullanım alanları.",
            author: "Elif Şahin",
            date: "1 Aralık 2026"
        },
        {
            id: 8,
            title: "Python ile Otomasyon",
            category: "Programlama",
            readTime: "10 dk",
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
            excerpt: "Python kullanarak günlük işlerinizi nasıl otomatikleştirebilirsiniz?",
            author: "Emre Kılıç",
            date: "28 Kasım 2026"
        }
    ];

  return (
    <div className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-white to-orange-50 min-h-screen font-sans relative overflow-hidden">
      {/* Animated background */}
      <div 
        className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-rose-200/20 rounded-full blur-3xl animate-pulse-slow"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div 
          className="flex justify-between items-end mb-12 animate-fade-in"
        >
            <div>
                <div className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white text-[10px] font-bold tracking-widest uppercase mb-2 shadow-lg">Blog</div>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Makaleler & Haberler</h1>
                <p className="text-slate-500 text-sm mt-2">Sektördeki son gelişmeler ve eğitim içerikleri</p>
            </div>
            <div className="hidden md:flex gap-2">
                {['Tümü', 'Teknoloji', 'Tasarım', 'Kariyer'].map((tag, i) => (
                    <button 
                        key={tag}
                        className="px-4 py-2 rounded-xl bg-white text-slate-500 text-xs font-bold border border-slate-200 hover:border-orange-300 hover:bg-orange-50 hover:-translate-y-1 active:scale-95 transition-all shadow-md animate-slide-up"
                        style={{ animationDelay: `${i * 0.1}s` }}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>

        {/* Featured Article (Large) */}
        <div
            className="mb-8 col-span-1 lg:col-span-2 group cursor-pointer relative rounded-[2rem] overflow-hidden shadow-2xl animate-fade-in hover:scale-[1.01] transition-transform duration-500"
            style={{ transformStyle: "preserve-3d" }}
        >
             <div className="h-[500px] relative">
                <OptimizedImage 
                    src={articles[0].image} 
                    alt={articles[0].title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
             </div>
             <div className="absolute bottom-0 left-0 p-10 text-white max-w-2xl">
                 <span 
                    className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-[10px] font-bold uppercase mb-4 border border-white/20 shadow-lg hover:scale-110 transition-transform cursor-pointer"
                 >
                     {articles[0].category}
                 </span>
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
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {articles.slice(1).map((art, i) => (
                <div 
                    key={art.id}
                    className="bg-white rounded-[1.5rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all group cursor-pointer animate-slide-up flex flex-col h-full overflow-hidden"
                    style={{ animationDelay: `${i * 0.1}s`, transformStyle: "preserve-3d" }}
                >
                    <div className="aspect-video overflow-hidden relative bg-slate-100">
                        <OptimizedImage 
                            src={art.image} 
                            alt={art.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div 
                            className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[8px] font-black text-slate-900 uppercase shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                           {art.category}
                        </div>
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
                             <div 
                                className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white group-hover:rotate-45 transition-all shadow-md"
                             >
                                 <ArrowUpRight size={12} />
                             </div>
                        </div>
                    </div>
                </div>
            ))}
            
            {/* Newsletter CTA Card */}
            <div 
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-[1.5rem] flex flex-col justify-center items-center text-center text-white relative overflow-hidden shadow-2xl animate-scale-in hover:scale-105 hover:rotate-2 transition-all"
            >
                <div className="absolute inset-0 opacity-10">
                    <OptimizedImage src="https://images.unsplash.com/photo-1557804506-669a67965ba0" className="w-full h-full object-cover" alt="Newsletter" />
                </div>
                <div 
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-rose-500 relative z-10 animate-spin-slow"
                >
                    <Mail size={20} />
                </div>
                <h3 className="font-bold mb-2 text-sm relative z-10">Bültene Abone Olun</h3>
                <p className="text-xs text-slate-400 mb-4 relative z-10">En yeni makalelerden haberdar olun.</p>
                <div className="w-full relative z-10">
                    <input type="email" placeholder="E-posta adresi" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-rose-500 transition-colors placeholder:text-slate-600" />
                    <button 
                        className="absolute right-1 top-1 bg-white text-slate-900 p-1.5 rounded-lg hover:bg-rose-500 hover:text-white hover:scale-110 active:scale-90 transition-all shadow-lg"
                    >
                        <ArrowUpRight size={12} />
                    </button>
                </div>
                <div 
                    className="absolute bottom-0 right-0 w-32 h-32 bg-rose-500/20 rounded-full blur-2xl animate-pulse-slow"
                />
            </div>
        </div>

        {/* Trending Topics */}
        <div
            className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl animate-fade-in"
        >
            <div className="flex items-center gap-3 mb-6">
                <div
                    className="animate-spin-slow"
                >
                    <TrendingUp className="text-rose-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Popüler Konular</h3>
            </div>
            <div className="flex flex-wrap gap-3">
                {['AutoCAD', 'SolidWorks', 'Python', '3DS Max', 'Revit', 'Grafik Tasarım', 'Web Tasarım', 'Yapay Zeka', 'BIM', 'CAD/CAM'].map((topic, i) => (
                    <button
                        key={topic}
                        className="px-4 py-2 bg-slate-50 hover:bg-rose-50 text-slate-700 hover:text-rose-600 rounded-xl text-xs font-bold transition-all border border-slate-100 hover:border-rose-200 shadow-sm hover:-translate-y-1 hover:scale-110 active:scale-95 animate-scale-in"
                        style={{ animationDelay: `${i * 0.05}s` }}
                    >
                        #{topic}
                    </button>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
