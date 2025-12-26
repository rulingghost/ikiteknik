import React, { useState, memo, useMemo } from 'react';
import { ChevronRight, Clock, Users, Star, CheckCircle, Search, Sparkles } from 'lucide-react';
import { SITE_DATA } from '../constants';
import OptimizedImage from '../components/OptimizedImage';

const CourseCard = memo(({ course }) => (
    <div className="tilt-3d group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all flex flex-col h-full animate-slide-up">
        <div className="aspect-video relative overflow-hidden">
            <OptimizedImage 
                src={course.image} 
                width={400}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt={course.title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase border border-white/20">
                    {course.category}
                </span>
            </div>
            {course.isPopular && (
                <div className="absolute top-4 right-4 animate-float">
                    <span className="p-2 rounded-full bg-rose-600 text-white shadow-lg flex items-center justify-center">
                        <Sparkles size={14} />
                    </span>
                </div>
            )}
        </div>

        <div className="p-8 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors uppercase tracking-tight leading-tight">
                {course.title}
            </h3>
            <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed font-medium">
                {course.desc}
            </p>

            <div className="mt-auto space-y-4">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 border-t border-slate-50 pt-4">
                    <div className="flex items-center gap-1.5 text-rose-600">
                        <Clock size={14} />
                        <span>{course.duration || '~80 Saat'}</span>
                    </div>
                </div>
                <button className="btn-3d w-full bg-slate-900 text-white py-4 rounded-xl text-sm font-bold shadow-xl shadow-slate-900/10 active:scale-95 transition-all">
                    İncele
                </button>
            </div>
        </div>
    </div>
));

const Courses = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Flattening courses from categories in SITE_DATA for simpler filtering
    const allCourses = useMemo(() => {
        return SITE_DATA.education_page.categories.flatMap(cat => 
            cat.courses.map(courseName => ({
                id: `${cat.id}-${courseName}`,
                title: courseName,
                category: cat.title,
                desc: `${courseName} eğitimi ile teorik ve pratik bilgilerinizi profesyonel seviyeye taşıyın.`,
                image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3', // Placeholder
                duration: '~80 Saat',
                isPopular: Math.random() > 0.7
            }))
        );
    }, []);

    const filteredCourses = useMemo(() => {
        return allCourses.filter(course => {
            const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory, allCourses]);

    const categories = ['All', ...SITE_DATA.education_page.categories.map(c => c.title)];

    return (
        <div className="bg-slate-50 min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="max-w-3xl mb-16 animate-slide-up">
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none">
                        Eğitimlerimiz
                    </h1>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed">
                        Sektörün en güncel teknolojilerini uzman eğitmenlerimizden öğrenin, kariyerinizde fark yaratın.
                    </p>
                </div>

                {/* Filter & Search Bar */}
                <div className="flex flex-col lg:flex-row gap-6 mb-12 animate-fade-in stagger-1">
                    <div className="flex-1 relative group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-rose-600 transition-colors" size={20} />
                        <input 
                            type="text" 
                            placeholder="Eğitim ara..."
                            className="w-full pl-14 pr-6 py-5 bg-white rounded-3xl border border-slate-100 shadow-xl focus:ring-4 focus:ring-rose-500/10 focus:border-rose-200 outline-none transition-all font-bold text-slate-800 placeholder:text-slate-300"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-8 py-5 rounded-3xl font-black text-xs whitespace-nowrap transition-all uppercase tracking-widest shadow-xl border-2 ${
                                    selectedCategory === cat 
                                    ? 'bg-rose-600 text-white border-rose-500 shadow-rose-200' 
                                    : 'bg-white text-slate-500 hover:bg-slate-50 border-slate-50'
                                }`}
                            >
                                {cat === 'All' ? 'Tümü' : cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Courses Grid */}
                {filteredCourses.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-32 animate-fade-in">
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400 animate-float">
                            <Search size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Sonuç bulunamadı</h3>
                        <p className="text-slate-500">Aramanızla eşleşen bir eğitim bulamadık.</p>
                    </div>
                )}

                {/* CTA Section */}
                <div className="mt-32 tilt-3d bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl animate-slide-up">
                    <div className="absolute inset-0 opacity-10">
                        <OptimizedImage src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" width={1000} className="w-full h-full object-cover" alt="Support" />
                    </div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-tight">Geleceğini <span className="text-rose-500">Teknikle</span> Şekillendir</h2>
                        <p className="text-slate-400 mb-12 text-base md:text-xl font-medium leading-relaxed">
                            Hangi eğitimin size uygun olduğuna karar veremediyseniz uzman danışmanlarımızla hemen görüşebilirsiniz.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button className="btn-3d bg-rose-600 text-white px-12 py-5 rounded-3xl text-lg font-black uppercase tracking-widest shadow-2xl shadow-rose-500/30">
                                Şimdi Danışın
                            </button>
                            <button className="btn-3d bg-white/10 backdrop-blur-xl text-white border-2 border-white/10 px-12 py-5 rounded-3xl text-lg font-black uppercase tracking-widest shadow-2xl">
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
