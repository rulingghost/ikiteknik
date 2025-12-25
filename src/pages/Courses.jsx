import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Clock, Users, Star, CheckCircle, Search, Sparkles, TrendingUp } from 'lucide-react';
import { SITE_DATA } from '../constants';

const Courses = () => {
  const [activeTab, setActiveTab] = useState(0);
  const categories = SITE_DATA.education_page.categories;

  const categoryImages = {
    0: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
    1: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
    2: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    3: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80',
    4: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80',
    5: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80',
    6: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    7: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    8: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80'
  };

  return (
    <div className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-white to-rose-50 min-h-screen font-sans relative overflow-hidden">
      {/* Animated background blobs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Minimal Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
            <div className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-rose-500 to-rose-600 text-white text-[10px] font-bold tracking-widest uppercase mb-4 shadow-lg shadow-rose-500/30">
                Profesyonel Eğitimler
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Eğitim Programları</h1>
            <p className="text-slate-500 text-sm max-w-xl leading-relaxed">
                Kariyerinizde yükselmeniz için tasarlanmış, sektör standartlarında teknik eğitimler.
            </p>
        </motion.div>

        {/* Categories Tabs with 3D effect */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-200 pb-4">
            {categories.map((cat, idx) => (
                <motion.button
                    key={cat.id}
                    onClick={() => setActiveTab(idx)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-md ${
                        activeTab === idx
                        ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-xl shadow-slate-900/20'
                        : 'bg-white text-slate-500 hover:bg-slate-100'
                    }`}
                >
                    {cat.title}
                    {activeTab === idx && <motion.div 
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-rose-500"
                    />}
                </motion.button>
            ))}
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar / Info Card for Category with Image */}
            <div className="lg:col-span-4 space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div 
                      key={`desc-${activeTab}`}
                      initial={{ opacity: 0, x: -20, rotateY: -10 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      exit={{ opacity: 0, x: 20, rotateY: 10 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformStyle: "preserve-3d" }}
                      className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden relative group"
                  >
                      {/* Category Image */}
                      <div className="h-48 relative overflow-hidden">
                          <motion.img 
                            src={categoryImages[activeTab]}
                            alt={categories[activeTab].title}
                            className="w-full h-full object-cover"
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="absolute bottom-4 left-4 text-white"
                          >
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-3">
                                {categories[activeTab].icon}
                            </div>
                          </motion.div>
                      </div>
                      
                      <div className="p-8">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">{categories[activeTab].title}</h2>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            {categories[activeTab].description}
                        </p>
                        <div className="space-y-3">
                            <motion.div 
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-3 text-xs font-bold text-slate-700 bg-slate-50 p-3 rounded-xl cursor-pointer"
                            >
                                <Clock size={16} className="text-rose-500" />
                                <span>Süre: ~80 Saat</span>
                            </motion.div>
                            <motion.div 
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-3 text-xs font-bold text-slate-700 bg-slate-50 p-3 rounded-xl cursor-pointer"
                            >
                                <Users size={16} className="text-rose-500" />
                                <span>Kontenjan: 12 Kişi</span>
                            </motion.div>
                            <motion.div 
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-3 text-xs font-bold text-slate-700 bg-slate-50 p-3 rounded-xl cursor-pointer"
                            >
                                <Star size={16} className="text-rose-500" />
                                <span>Sertifika: MEB Onaylı</span>
                            </motion.div>
                        </div>
                      </div>
                  </motion.div>
                </AnimatePresence>
                
                <motion.div 
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-[2rem] relative overflow-hidden cursor-pointer shadow-xl"
                >
                    <div className="absolute inset-0 opacity-10">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Promo" />
                    </div>
                    <div className="relative z-10">
                        <motion.div
                          animate={{ rotate: [0, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Sparkles className="text-rose-400 mb-3" size={24} />
                        </motion.div>
                        <h3 className="text-lg font-bold mb-2">Erken Kayıt</h3>
                        <p className="text-slate-400 text-xs mb-4">Yeni dönem kayıtlarında %15 indirim fırsatı.</p>
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full bg-white text-slate-900 py-3 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-rose-50 transition-colors shadow-lg"
                        >
                            Bilgi Al
                        </motion.button>
                    </div>
                    <motion.div 
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-0 right-0 w-32 h-32 bg-rose-600/20 rounded-full blur-2xl -mr-10 -mt-10"
                    />
                </motion.div>
            </div>

            {/* Courses Grid with 3D cards */}
            <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={`courses-${activeTab}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid md:grid-cols-2 gap-4"
                  >
                    {categories[activeTab].courses.map((course, idx) => (
                        <motion.div
                            key={course}
                            initial={{ opacity: 0, y: 20, rotateX: -10 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ y: -5, rotateX: 5, scale: 1.02 }}
                            style={{ transformStyle: "preserve-3d" }}
                            className="bg-white p-6 rounded-[1.5rem] border border-slate-100 hover:border-rose-100 hover:shadow-2xl transition-all group cursor-pointer flex flex-col justify-between min-h-[180px] relative overflow-hidden"
                        >
                            <motion.div 
                              className="absolute inset-0 bg-gradient-to-br from-rose-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                              initial={false}
                            />
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="bg-slate-50 text-slate-400 text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wider group-hover:bg-rose-50 group-hover:text-rose-600 transition-colors">
                                        Kurs
                                    </span>
                                    <motion.div 
                                      whileHover={{ rotate: 45, scale: 1.2 }}
                                      className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-slate-900 group-hover:text-white transition-all shadow-md"
                                    >
                                        <ChevronRight size={14} />
                                    </motion.div>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-rose-600 transition-colors">
                                    {course}
                                </h3>
                                <p className="text-slate-400 text-[11px] line-clamp-2">
                                    Profesyonel düzeyde eğitim ve uygulama çalışmaları.
                                </p>
                            </div>
                            
                            <div className="mt-4 pt-4 border-t border-slate-50 flex items-center gap-2 relative z-10">
                                <motion.div
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  <CheckCircle size={12} className="text-green-500" />
                                </motion.div>
                                <span className="text-[10px] font-bold text-slate-500">Kayıtlar Devam Ediyor</span>
                            </div>
                        </motion.div>
                    ))}
                    
                    {/* 'More' Card with animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.05, rotateZ: 2 }}
                        className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-[1.5rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center gap-3 hover:border-rose-300 hover:bg-rose-50/50 transition-all cursor-pointer"
                    >
                        <motion.div 
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 shadow-lg"
                        >
                            <Search size={20} />
                        </motion.div>
                        <div>
                            <h3 className="text-sm font-bold text-slate-900">Aradığınız Eğitimi Bulamadınız mı?</h3>
                            <button className="text-rose-600 text-xs font-bold mt-2 hover:underline">
                                Bize Danışın
                            </button>
                        </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
