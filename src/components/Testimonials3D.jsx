import React from 'react';
import { Quote, Star } from 'lucide-react';

const reviews = [
    {
        name: "Ahmet Yılmaz",
        company: "Yılmaz Makine",
        comment: "Endüstriyel parçalarımızın tersine mühendislik işlemlerinde 3D3P ekibi harika bir iş çıkardı. Hassasiyet beklentimizin çok üzerindeydi.",
        stars: 5
    },
    {
        name: "Selin Demir",
        company: "Artech Mimarlık",
        comment: "Prototip baskılarımız için SLA teknolojisini kullandık. Yüzey kalitesi kusursuzdu, maketlerimizde zımpara yapmamıza bile gerek kalmadı.",
        stars: 5
    },
    {
        name: "Mehmet Özkan",
        company: "TOGG (Tedarikçi)",
        comment: "Acil parça ihtiyacımızda FDM baskı hizmetiyle 24 saatte çözüm sundular. Hız ve iletişim konusunda çok başarılılar.",
        stars: 5
    },
    {
        name: "Canan Yıldız",
        company: "Medikal Tasarım",
        comment: "Kişiye özel protez tasarımlarımızda 3D tarama hizmetinden faydalandık. Süreç çok profesyoneldi.",
        stars: 5
    }
];

const Testimonials3D = () => {
    return (
        <section className="py-24 bg-[#0B0F19] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[#1877F2] font-black text-xs uppercase tracking-[0.2em] mb-4 block">Müşteri Deneyimleri</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                        MEMNUNİYET <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1877F2] to-cyan-400">HİKAYELERİ</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-[#151E32] p-8 rounded-2xl border border-white/5 relative group hover:-translate-y-2 transition-transform duration-300">
                            <Quote className="absolute top-6 right-6 text-white/5 group-hover:text-[#1877F2]/20 transition-colors" size={40} />
                            
                            <div className="flex gap-1 mb-6 text-yellow-500">
                                {[...Array(review.stars)].map((_, s) => (
                                    <Star key={s} size={14} fill="currentColor" />
                                ))}
                            </div>
                            
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                                "{review.comment}"
                            </p>
                            
                            <div>
                                <h4 className="text-white font-bold text-sm tracking-wide">{review.name}</h4>
                                <span className="text-[#1877F2] text-xs font-bold uppercase tracking-wider block mt-1">{review.company}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials3D;
