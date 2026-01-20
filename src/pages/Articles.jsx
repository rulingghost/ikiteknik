import React, { useState } from 'react';
import { FileText, ArrowUpRight, Tag, BookOpen, Mail, Clock, User, TrendingUp, X } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import SEO from '../components/SEO';

const Articles = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);

    const articles = [
        {
            id: 1,
            title: "Yapay Zeka Ve Tasarımın Geleceği",
            category: "Teknoloji",
            readTime: "5 dk",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
            excerpt: "Generative AI araçlarının mimari ve endüstriyel tasarıma etkileri neler olacak?",
            content: "Yapay zeka teknolojileri tasarım dünyasını kökten değiştiriyor. Midjourney, DALL-E gibi araçlar konsept aşamasını hızlandırırken, yapay zeka destekli CAD yazılımları, tasarımcılara daha önce hayal bile edilemeyen optimizasyon olanakları sunuyor. Gelecekte tasarımcıların rolü, bu araçları yöneten 'küratörler' olmaya evrilecek.",
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
            content: "3DS Max 2024, özellikle modelleme hızını artıran yeni Boolean modifier'ı ve geliştirilmiş Retopology araçlarıyla dikkat çekiyor. Renk yönetimi (OCIO) desteği sayesinde artık renderlar farklı platformlarda çok daha tutarlı görünüyor.",
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
            content: "Sanal prototipleme, fiziksel test maliyetlerini %70'e kadar düşürebiliyor. Ansys Discovery gibi gerçek zamanlı simülasyon araçları, mühendislerin tasarım kararlarını anında test etmesine olanak tanıyor.",
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
            content: "BIM sadece 3D modelleme değil, bir veri yönetimi sürecidir. Revit ile oluşturulan akıllı modeller, projenin maliyetinden enerji verimliliğine kadar her aşamasında bilgi sağlar.",
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
            content: "Dynamic Blocks kullanarak çizim hızınızı ikiye katlayabilirsiniz. Ayrıca Sheet Set Manager, büyük projelerde pafta yönetimini inanılmaz derecede kolaylaştırır.",
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
            content: "SolidWorks'ün yüzey modelleme araçları, ergonomik ve estetik ürünler tasarlamak için sınırsız özgürlük sunar. Montaj analizleri ile üretim hatalarını sıfıra indirin.",
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
            content: "Bu yıl canlı ve cesur renkler ön planda. Özellikle dijital sanatta neon tonlar ve siberpunk estetiği, kurumsal kimliklerde ise daha dingin pastel tonlar tercih ediliyor.",
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
            content: "Tekrarlayan işleriniz için Python scriptleri yazmak sandığınızdan daha kolay. Dosya isimlendirme, veri temizleme ve rapor oluşturma süreçlerini saniyeler içinde halledebilirsiniz.",
            author: "Emre Kılıç",
            date: "28 Kasım 2026"
        }
    ];

  return (
    <div className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-white to-rose-50 min-h-screen font-sans relative overflow-hidden">
        <SEO 
            title="Blog & Makaleler" 
            description="ikiteknik Bilişim blog sayfası. 3D tasarım, mühendislik yazılımları, sektörel gelişmeler ve teknoloji haberleri hakkında güncel makaleler ve ipuçları."
            keywords="teknoloji blogu, 3d tarama blog, muhendislik makaleleri, cad cam blog, egitim makaleleri, 3ds max ipuclari"
        />
      {/* Animated background */}
      <div 
        className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-rose-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse-slow"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div 
          className="flex justify-between items-end mb-12 animate-fade-in"
        >
            <div>
                <div className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-rose-500 to-rose-600 text-white text-[10px] font-bold tracking-widest uppercase mb-2 shadow-lg">Blog</div>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Makaleler & Haberler</h1>
                <p className="text-slate-500 text-sm mt-2">Sektördeki son gelişmeler ve eğitim içerikleri</p>
            </div>
            <div className="hidden md:flex gap-2">
                {['Tümü', 'Teknoloji', 'Tasarım', 'Kariyer'].map((tag, i) => (
                    <button 
                        key={tag}
                        className="px-4 py-2 rounded-xl bg-white text-slate-500 text-xs font-bold border border-slate-200 hover:border-rose-300 hover:bg-rose-50 hover:-translate-y-1 active:scale-95 transition-all shadow-md animate-slide-up"
                        style={{ animationDelay: `${i * 0.1}s` }}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>

        {/* Featured Article (Large) */}
        <div
            onClick={() => setSelectedArticle(articles[0])}
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
                    className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-[10px] font-bold uppercase mb-4 border border-white/20 shadow-lg hover:scale-110 transition-transform"
                 >
                     {articles[0].category}
                 </span>
                 <h2 className="text-4xl font-bold mb-3 leading-tight group-hover:text-rose-400 transition-colors">{articles[0].title}</h2>
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
                    onClick={() => setSelectedArticle(art)}
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

        {/* Article Detail Modal */}
        {selectedArticle && (
            <div 
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in"
                onClick={() => setSelectedArticle(null)}
            >
                <div 
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-slide-up shadow-2xl relative"
                >
                    <button 
                        onClick={() => setSelectedArticle(null)}
                        className="absolute top-6 right-6 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-900 shadow-lg hover:bg-rose-600 hover:text-white transition-all z-20"
                    >
                        <X size={20} />
                    </button>
                    
                    <div className="relative h-[400px]">
                        <OptimizedImage src={selectedArticle.image} className="w-full h-full object-cover" alt={selectedArticle.title} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                            <span className="inline-block px-3 py-1 bg-rose-600 text-white rounded-lg text-xs font-bold uppercase mb-4 shadow-lg">
                                {selectedArticle.category}
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
                                {selectedArticle.title}
                            </h2>
                            <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm font-medium">
                                <div className="flex items-center gap-2">
                                    <User size={18} className="text-rose-400" />
                                    <span>{selectedArticle.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={18} className="text-rose-400" />
                                    <span>{selectedArticle.readTime} okuma süresi</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BookOpen size={18} className="text-rose-400" />
                                    <span>{selectedArticle.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-8 md:p-12">
                        <div className="prose prose-lg prose-slate max-w-none">
                            <p className="lead text-xl font-medium text-slate-600 mb-8 border-l-4 border-rose-500 pl-6 italic">
                                {selectedArticle.excerpt}
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                {selectedArticle.content || "Bu makalenin detaylı içeriği hazırlanmaktadır. Lütfen daha sonra tekrar ziyaret ediniz."}
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Neden Önemli?</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                            </p>
                        </div>
                        
                        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                                    <User size={24} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">{selectedArticle.author}</div>
                                    <div className="text-xs text-slate-500">Uzman Eğitmen & Yazar</div>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="btn-3d px-6 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-lg shadow-slate-900/10">
                                    Paylaş
                                </button>
                                <button className="btn-3d px-6 py-3 bg-rose-50 text-rose-600 rounded-xl text-sm font-bold border border-rose-100">
                                    Kaydet
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default Articles;
