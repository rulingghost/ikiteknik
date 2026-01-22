import React from 'react';
import { Calendar as CalIcon, Clock, ArrowRight, User, MapPin, Award } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useData } from '../context/DataContext';

const Calendar = () => {
    const { events: dbEvents, loading } = useData();

    const staticEvents = [
        {
            id: '3ds-max',
            date: { d: '15', m: 'Ocak' },
            title: '3DS Max Mimari Görselleştirme',
            time: '18:30 - 21:30',
            days: 'Pazartesi - Çarşamba',
            quota: 4,
            status: 'active',
            instructor: 'Ahmet Yılmaz',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
            instructorImg: 'https://images.unsplash.com/photo-1560250097-0b93528c311a'
        },
        {
            id: 'solidworks-advanced',
            date: { d: '22', m: 'Ocak' },
            title: 'SolidWorks İleri Seviye',
            time: '19:00 - 22:00',
            days: 'Salı - Perşembe',
            quota: 2,
            status: 'active',
            instructor: 'Mehmet Demir',
            image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789',
            instructorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
        }
    ];

    const mappedDbEvents = dbEvents.map(evt => ({
        ...evt,
        id: evt.id.toString(),
        date: { 
            d: new Date(evt.event_date).getDate().toString(), 
            m: new Date(evt.event_date).toLocaleString('tr-TR', { month: 'long' }) 
        },
        instructorImg: evt.instructor_img || 'https://images.unsplash.com/photo-1560250097-0b93528c311a'
    }));

    const events = [...mappedDbEvents, ...staticEvents];


  return (
    <div className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-white to-rose-50 min-h-screen font-sans relative overflow-hidden">
        <SEO 
            title="Eğitim Takvimi" 
            description="ikiteknik Bilişim eğitim takvimi. Yaklaşan AutoCAD, SolidWorks, 3DS Max ve Yazılım kurslarının başlangıç tarihleri, kontenjan durumu ve ders programları."
            keywords="egitim takvimi, kurs takvimi, ankara kurs tarihleri, autocad kursu ne zaman, solidworks kurs baslangic"
        />
      {/* Animated background */}
      <div 
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-rose-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse-slow"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div 
          className="flex flex-col md:flex-row justify-between items-end mb-12 animate-fade-in"
        >
            <div>
                <div className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-rose-500 to-rose-600 text-white text-[10px] font-bold tracking-widest uppercase mb-2 shadow-lg">Canlı Dersler</div>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Eğitim Takvimi</h1>
                <p className="text-slate-500 text-sm mt-2">Yaklaşan eğitim programları ve kayıt bilgileri</p>
            </div>
            <div className="text-right hidden md:block">
                <p className="text-slate-500 text-xs font-medium">Toplam <span className="font-bold text-slate-900">{events.length}</span> aktif sınıf planlandı.</p>
            </div>
        </div>

        {/* Calendar List with Images */}
        <div className="grid gap-6 max-w-5xl mx-auto">
            {events.map((evt, idx) => (
                <div
                    key={idx}
                    className={`group bg-white rounded-[1.5rem] border border-slate-100 flex flex-col md:flex-row gap-6 items-stretch overflow-hidden animate-slide-up ${evt.status === 'full' ? 'opacity-60' : 'hover:border-rose-100 hover:shadow-2xl hover:-translate-y-1 transition-all shadow-lg'}`}
                    style={{ animationDelay: `${idx * 0.1}s`, transformStyle: "preserve-3d" }}
                >
                    {/* Course Image */}
                    <div className="md:w-48 h-48 md:h-auto relative overflow-hidden shrink-0">
                        <OptimizedImage 
                            src={evt.image}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            alt={evt.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        
                        {/* Date Badge on Image */}
                        <div 
                            className="absolute top-4 left-4 w-16 h-16 bg-white rounded-2xl flex flex-col items-center justify-center shadow-xl hover:scale-110 hover:rotate-6 transition-transform"
                        >
                            <span className="text-2xl font-black leading-none text-slate-900">{evt.date.d}</span>
                            <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400">{evt.date.m}</span>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors">{evt.title}</h3>
                            <div className="flex flex-wrap gap-3 text-xs font-medium text-slate-500 mb-4">
                                 <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg">
                                     <Clock size={14} className="text-rose-500" /> {evt.days} / {evt.time}
                                 </div>
                                 {evt.status !== 'full' && (
                                    <div 
                                        className="flex items-center gap-1.5 bg-green-50 px-3 py-1.5 rounded-lg text-green-600 animate-pulse"
                                    >
                                        <User size={14} /> {evt.quota} Kişilik Yer Kaldı
                                    </div>
                                 )}
                            </div>
                            
                            {/* Instructor */}
                            <div className="flex items-center gap-3 mb-4">
                                <div 
                                    className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg hover:scale-110 transition-transform"
                                >
                                    <OptimizedImage src={evt.instructorImg} className="w-full h-full object-cover" alt={evt.instructor} />
                                </div>
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
                            <Link 
                                to={`/iletisim?subject=kayit&course=${evt.id}`}
                                className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 text-white text-xs font-bold uppercase tracking-wider hover:from-rose-700 hover:to-rose-800 hover:scale-105 hover:translate-x-1 active:scale-95 transition-all flex items-center gap-2 shadow-xl shadow-rose-500/30"
                            >
                                Kayıt Ol <ArrowRight size={14} />
                            </Link>
                        )}
                    </div>
                </div>
            ))}
        </div>

        {/* Bottom CTA with Images */}
        <div
            className="mt-16 grid md:grid-cols-2 gap-6 animate-fade-in"
        >
            {/* Info Card */}
            <div 
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden hover:scale-[1.02] hover:rotate-1 transition-all duration-300"
                style={{ transformStyle: "preserve-3d" }}
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-100 to-transparent rounded-bl-full opacity-50" />
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div
                            className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 animate-spin-slow"
                        >
                            <Award size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">Sertifika Programları</h3>
                    </div>
                    <p className="text-slate-500 text-sm mb-6">Tüm eğitimlerimiz sonunda MEB onaylı sertifika verilmektedir.</p>
                    <Link
                        to="/egitimlerimiz"
                        className="text-rose-600 text-xs font-bold flex items-center gap-2 hover:gap-3 transition-all"
                    >
                        Detaylı Bilgi <ArrowRight size={14} />
                    </Link>
                </div>
            </div>

            {/* Contact Card with Image */}
            <div 
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[2rem] text-white relative overflow-hidden shadow-2xl hover:scale-[1.02] hover:-rotate-1 transition-all duration-300"
                style={{ transformStyle: "preserve-3d" }}
            >
                <div className="absolute inset-0 opacity-10">
                    <OptimizedImage src="https://images.unsplash.com/photo-1556761175-b413da4baf72" className="w-full h-full object-cover" alt="Contact" />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div
                            className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center animate-pulse"
                        >
                            <MapPin size={24} className="text-rose-400" />
                        </div>
                        <h3 className="text-lg font-bold">Bize Ulaşın</h3>
                    </div>
                    <p className="text-slate-400 text-sm mb-6">Eğitimler hakkında detaylı bilgi almak için.</p>
                    <Link
                        to="/iletisim"
                        className="w-full bg-white text-slate-900 py-3 rounded-xl font-bold text-sm hover:bg-rose-50 hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center justify-center"
                    >
                        İletişime Geç
                    </Link>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Calendar;
