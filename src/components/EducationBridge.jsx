import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight } from 'lucide-react';

const EducationBridge = ({ title, desc, linkText, linkTo }) => {
    return (
        <section className="py-16 bg-gradient-to-r from-blue-900 to-slate-900 border-y border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-start gap-6">
                        <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 shrink-0">
                            <GraduationCap size={32} className="text-rose-400" />
                        </div>
                        <div>
                            <span className="text-rose-400 font-bold uppercase tracking-widest text-xs mb-2 block">İkiteknik Eğitim</span>
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{title}</h3>
                            <p className="text-slate-300 max-w-xl leading-relaxed">
                                {desc}
                            </p>
                        </div>
                    </div>
                    
                    <Link to={linkTo} className="group flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-rose-500 hover:text-white transition-all shadow-lg hover:shadow-rose-500/30 whitespace-nowrap">
                        {linkText}
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default EducationBridge;
