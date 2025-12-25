import React from 'react';
import { Home, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const StubPage = ({ title }) => {
    return (
        <div className="bg-[#0f172a] min-h-screen">
            <div className="relative pt-48 pb-24 bg-[#0b1222] border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 to-transparent" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic"
                    >
                        {title}
                    </motion.h1>
                    <div className="flex items-center justify-center gap-3 text-slate-500 text-xs font-black tracking-widest uppercase">
                        <Home size={14} className="text-rose-500" />
                        <span>Anasayfa</span>
                        <ChevronRight size={14} />
                        <span className="text-white">{title}</span>
                    </div>
                </div>
            </div>
            
            <div className="container mx-auto px-6 py-40 text-center">
                <div className="inline-block p-1 bg-white/5 rounded-3xl mb-12">
                     <div className="glass px-10 py-20 rounded-[2rem] border-rose-500/20">
                        <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Bu Sayfa Çok Yakında Hizmetinizde</h2>
                        <p className="text-slate-400 text-lg font-medium italic">"{title} sayfamız güncel içeriklerimizle birlikte yayına hazırlanmaktadır."</p>
                        <div className="w-16 h-1 bg-rose-500 mx-auto mt-10 rounded-full" />
                     </div>
                </div>
            </div>
        </div>
    );
};

export default StubPage;
