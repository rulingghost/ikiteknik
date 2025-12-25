import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin, MessageCircle, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_DATA } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Eğitimlerimiz', path: '/egitimlerimiz' },
    { label: 'Eğitim Takvimi', path: '/takvim' },
    { label: 'Öğrenci Çalışmaları', path: '/calismalar' },
    { label: 'Makaleler', path: '/makaleler' },
    { label: 'Hakkımızda', path: '/hakkimizda' },
    { label: 'Pearson Vue', path: '/pearson' },
    { label: 'İletişim', path: '/iletisim' },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300 font-medium">
      {/* Top Info Bar */}
      <div className={`hidden lg:block bg-slate-100 border-b border-slate-200 py-2 transition-opacity duration-300 ${scrolled ? 'opacity-0 pointer-events-none h-0 p-0 overflow-hidden' : 'opacity-100'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center text-[9px] font-bold tracking-widest text-slate-500">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={10} className="text-rose-600" />
              <span>İZMİR-2 CD. NO:43/16 KIZILAY / ANKARA</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={10} className="text-rose-600" />
              <span>(0312) 231 31 35</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-rose-600 italic lowercase">Takip Edin:</span>
            <div className="flex gap-3">
                <Facebook size={10} className="hover:text-rose-600 cursor-pointer transition-colors" />
                <Instagram size={10} className="hover:text-rose-600 cursor-pointer transition-colors" />
                <Youtube size={10} className="hover:text-rose-600 cursor-pointer transition-colors" />
                <Linkedin size={10} className="hover:text-rose-600 cursor-pointer transition-colors" />
                <MessageCircle size={10} className="text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl py-2 border-b border-slate-200/50 shadow-sm' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex flex-col group shrink-0">
            {/* Always dark text for light theme */}
            <span className="text-xl font-black tracking-tighter transition-colors uppercase leading-none text-slate-900 group-hover:text-rose-600">İKİ TEKNİK</span>
            <span className="text-[9px] font-black tracking-[0.3em] transition-colors uppercase leading-none text-rose-600 group-hover:text-slate-900">BİLİŞİM</span>
          </Link>

          <div className="hidden xl:flex gap-6 items-center">
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link 
                  to={item.path} 
                  className={`text-[11px] font-bold tracking-tight transition-all uppercase relative group ${
                    location.pathname === item.path 
                    ? 'text-rose-600' 
                    : 'text-slate-700 hover:text-rose-600'
                  }`}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                  >
                    {item.label}
                  </motion.span>
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-rose-600 transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              </motion.div>
            ))}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-rose-600 text-white px-6 py-2.5 rounded-full text-[10px] font-black transition-all shadow-md shadow-rose-500/20 uppercase tracking-widest hover:bg-rose-700"
            >
              KAYIT OL
            </motion.button>
          </div>

          <button className="xl:hidden text-slate-900" onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8"
          >
            <button className="absolute top-6 right-6 text-slate-900" onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>
            <div className="flex flex-col gap-6 mt-16">
              <Link to="/" className="text-2xl font-black text-rose-600 mb-4" onClick={() => setIsOpen(false)}>ANASAYFA</Link>
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link 
                    to={item.path} 
                    className="text-xl font-bold text-slate-800 hover:text-rose-600 uppercase flex items-center justify-between group border-b border-slate-100 pb-2" 
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-rose-600" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
