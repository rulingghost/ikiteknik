import React from 'react';

const References3D = () => {
    // Using text for brands to maintain clean style, or we could use logos if available. 
    // Given the 'industrial' theme, simple bold text often works well or monochrome logos.
    const brands = [
        "ASELSAN", "TUSAŞ", "ROKETSAN", "FORD OTOSAN", "TOGG", "VESTEL", "ARÇELİK", "FNSS", "HAVELSAN", "TEI"
    ];

    return (
        <section className="py-16 bg-[#0F1420] border-y border-white/5">
            <div className="container mx-auto px-6">
                <p className="text-center text-slate-500 font-bold text-xs uppercase tracking-[0.3em] mb-10">
                    Sektörün Liderleriyle Çalışıyoruz
                </p>
                
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
                    {brands.map((brand, i) => (
                        <span key={i} className="text-xl md:text-2xl font-black text-white cursor-default select-none hover:text-[#1877F2] transition-colors">
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default References3D;
