import React, { useState, memo, useMemo } from 'react';
import { ChevronRight, Clock, Users, Star, CheckCircle, Search, Sparkles, Filter, Code, Monitor, PenTool, Layout, Box } from 'lucide-react';
import { SITE_DATA } from '../constants';
import OptimizedImage from '../components/OptimizedImage';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useData } from '../context/DataContext';

const CourseCard = memo(({ course }) => (
    <div className="tilt-3d group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full animate-slide-up">
        <div className="aspect-video relative overflow-hidden">
            <OptimizedImage 
                src={course.image} 
                width={400}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt={course.title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase border border-white/20 shadow-lg">
                    {course.category}
                </span>
            </div>

            {/* Popular Badge */}
            {course.isPopular && (
                <div className="absolute top-4 right-4 animate-float">
                    <span className="w-8 h-8 rounded-full bg-rose-600 text-white shadow-lg shadow-rose-500/40 flex items-center justify-center">
                        <Sparkles size={14} />
                    </span>
                </div>
            )}
        </div>

        <div className="p-8 flex flex-col flex-1 relative">
            {/* Decorative background blur */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[4rem] -z-10 group-hover:bg-rose-50 transition-colors duration-500" />

            <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-rose-600 transition-colors uppercase tracking-tight leading-tight">
                {course.title}
            </h3>
            <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed font-medium">
                {course.desc}
            </p>

            <div className="mt-auto space-y-5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 border-t border-slate-100 pt-5 group-hover:border-rose-100 transition-colors">
                    <div className="flex items-center gap-2 text-rose-600 bg-rose-50 px-3 py-1.5 rounded-lg">
                        <Clock size={14} />
                        <span>{course.duration || '~80 Saat'}</span>
                    </div>
                </div>
                
                <Link 
                    to="/iletisim"
                    className="btn-3d w-full bg-slate-900 text-white py-4 rounded-xl text-sm font-bold shadow-xl shadow-slate-900/10 active:scale-95 transition-all flex items-center justify-center gap-2 group-hover:bg-rose-600 group-hover:shadow-rose-500/30"
                >
                    Hemen Başvur <ChevronRight size={16} />
                </Link>
            </div>
        </div>
    </div>
));

const Courses = () => {
    const { courses: dbCourses, loading } = useData();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Helper to get random image based on category theme
    const getCategoryImage = (catId) => {
        const images = {
            'yazilim': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
            'tasarim': 'https://images.unsplash.com/photo-1626785774573-4b799314346d',
            'muhendislik': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
            'other': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3'
        };
        return images[catId] || images['other'];
    };

    const allCourses = useMemo(() => {
        const staticList = SITE_DATA.education_page.categories.flatMap(cat => 
            cat.courses.map(courseName => ({
                id: `${cat.id}-${courseName}`,
                title: courseName,
                category: cat.title,
                desc: `${courseName} eğitimi ile teorik ve pratik bilgilerinizi profesyonel seviyeye taşıyın. Sektörel projelerle deneyim kazanın.`,
                image: getCategoryImage(cat.id),
                duration: '~80 Saat',
                isPopular: Math.random() > 0.7
            }))
        );

        const dbList = dbCourses.map(course => ({
            ...course,
            id: course.id.toString(),
            isPopular: course.is_popular
        }));

        return [...dbList, ...staticList];
    }, [dbCourses]);

    const filteredCourses = useMemo(() => {
        return allCourses.filter(course => {
            const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory, allCourses]);


    const categories = ['All', ...SITE_DATA.education_page.categories.map(c => c.title)];

    return (
        <div className="bg-slate-50 min-h-screen pt-32 pb-24 font-sans relative overflow-hidden">
            <SEO 
                title="Eğitimlerimiz" 
                description="Kariyerinize yön verecek profesyonel eğitimler: AutoCAD, SolidWorks, Revit, 3DS Max, Yazılım ve daha fazlası. Uygulamalı ve sertifikalı kurslar."
                keywords="egitim, kurs, ankara kurs, teknik egitim, yazilim kursu, autocad, solidworks, mimari egitim"
            />
             {/* Animated background elements */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-rose-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="max-w-4xl mb-16 animate-slide-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 rounded-full border border-rose-100 mb-6 w-fit">
                        <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
                        <span className="text-rose-600 text-xs font-bold tracking-widest uppercase">Kariyer Odaklı Eğitimler</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic leading-none">
                        Eğitim <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600">Kataloğu</span>
                    </h1>
                    <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                        Sektörün en güncel teknolojilerini uzman eğitmenlerimizden öğrenin. 
                        Teorik bilgiyi pratik projelerle pekiştirin.
                    </p>
                </div>

                {/* Filter & Search Bar */}
                <div className="flex flex-col xl:flex-row gap-8 mb-16 animate-fade-in stagger-1">
                    {/* Search */}
                    <div className="xl:w-1/3 relative group z-20">
                        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                            <Search className="text-slate-400 group-focus-within:text-rose-600 transition-colors" size={22} />
                        </div>
                        <input 
                            type="text" 
                            placeholder="Eğitim, teknoloji veya konu ara..."
                            className="w-full pl-16 pr-6 py-6 bg-white rounded-[2rem] border border-slate-100 shadow-xl focus:ring-4 focus:ring-rose-500/10 focus:border-rose-200 outline-none transition-all font-bold text-slate-800 placeholder:text-slate-300 text-lg"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="absolute top-1/2 right-6 -translate-y-1/2 hidden group-focus-within:block animate-fade-in">
                            <span className="text-[10px] font-bold text-slate-300 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">ESC to clear</span>
                        </div>
                    </div>

                    {/* Filters - Flex Wrap Pills */}
                    <div className="flex-1">
                        <div className="flex flex-wrap gap-3">
                            {categories.map((cat, i) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-5 py-3 rounded-xl text-xs font-bold transition-all duration-300 border hover:-translate-y-1 active:scale-95 shadow-sm
                                    ${selectedCategory === cat 
                                        ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20 scale-105' 
                                        : 'bg-white text-slate-500 border-slate-200 hover:border-rose-300 hover:text-rose-600 hover:bg-rose-50'
                                    }`}
                                >
                                    {cat === 'All' ? 'Tümü' : cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Courses Grid */}
                {filteredCourses.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {filteredCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-32 animate-fade-in bg-white rounded-[3rem] border border-slate-100 shadow-xl mb-24">
                        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-300 animate-float">
                            <Filter size={40} />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-3">Sonuç bulunamadı</h3>
                        <p className="text-slate-500 font-medium mb-8">"{searchTerm}" araması için uygun eğitim bulunamadı.</p>
                        <button 
                            onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                            className="text-rose-600 font-bold hover:underline"
                        >
                            Filtreleri Temizle
                        </button>
                    </div>
                )}

                {/* CTA Section */}
                <div className="mt-32 tilt-3d bg-gradient-to-br from-slate-900 to-slate-800 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl animate-slide-up">
                    <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                        <OptimizedImage src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" width={1000} className="w-full h-full object-cover grayscale" alt="Support" />
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-20 left-20 w-32 h-32 bg-rose-500/20 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow stagger-1" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
                            <Sparkles size={16} className="text-yellow-400" />
                            <span className="text-white text-xs font-bold tracking-widest uppercase">Kariyer Danışmanlığı</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-tight">
                            Geleceğini <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Bizimle</span> Şekillendir
                        </h2>
                        
                        <p className="text-slate-300 mb-12 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                            Hangi eğitimin size uygun olduğuna karar veremediyseniz, uzman eğitim danışmanlarımız size ücretsiz rehberlik etsin.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link 
                                to="/iletisim"
                                className="btn-3d bg-white text-slate-900 px-12 py-5 rounded-3xl text-lg font-black uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
                            >
                                Şimdi Danışın <ChevronRight size={20} />
                            </Link>
                            <button className="btn-3d bg-white/10 backdrop-blur-xl text-white border-2 border-white/10 px-12 py-5 rounded-3xl text-lg font-black uppercase tracking-widest shadow-2xl hover:bg-white/20 transition-colors">
                                Katalog İndir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
