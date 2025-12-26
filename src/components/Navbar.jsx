import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin, MessageCircle, ChevronRight } from 'lucide-react';
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
    <header className="fixed w-full z-50 font-medium">
      {/* Top Info Bar */}
      <div className={`hidden lg:block bg-slate-100 border-b border-slate-200 py-2 transition-all duration-300 ${scrolled ? 'opacity-0 pointer-events-none h-0 p-0 overflow-hidden translate-y-[-100%]' : 'opacity-100 translate-y-0'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center text-[9px] font-bold tracking-widest text-slate-500">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={10} className="text-rose-600" />
              <span>{SITE_DATA?.address || 'İZMİR-2 CD. NO:43/16 KIZILAY / ANKARA'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={10} className="text-rose-600" />
              <span>{SITE_DATA?.phone || '(0312) 231 31 35'}</span>
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
            <span className="text-xl font-black tracking-tighter transition-colors uppercase leading-none text-slate-900 group-hover:text-rose-600">ikiteknik</span>
            <span className="text-[9px] font-black tracking-[0.3em] transition-colors uppercase leading-none text-rose-600 group-hover:text-slate-900">BİLİŞİM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link 
                  key={item.label} 
                  to={item.path}
                  className="group relative py-2"
                >
                  <span className={`text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-300 ${
                    location.pathname === item.path ? 'text-rose-600' : 'text-slate-500 group-hover:text-slate-900'
                  }`}>
                    {item.label}
                  </span>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-rose-600 transition-all duration-300 ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>
            <Link 
              to="/iletisim"
              className="btn-3d bg-slate-900 text-white px-8 py-3.5 rounded-xl text-[10px] font-black tracking-widest uppercase shadow-xl shadow-slate-900/10 active:scale-95 transition-all"
            >
              Hemen Başla
            </Link>
          </div>

          <button className="xl:hidden text-slate-900 hover:scale-110 active:scale-90 transition-transform" onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-[60] flex flex-col p-8 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button className="absolute top-6 right-6 text-slate-900 hover:rotate-90 hover:scale-110 active:scale-90 transition-all" onClick={() => setIsOpen(false)}>
          <X size={28} />
        </button>
        <div className="flex flex-col gap-6 mt-16">
          <Link to="/" className="text-2xl font-black text-rose-600 mb-4 hover:translate-x-2 transition-transform" onClick={() => setIsOpen(false)}>ANASAYFA</Link>
          {navItems.map((item, i) => (
            <div
              key={item.label}
              className={`transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <Link 
                to={item.path} 
                className="text-xl font-bold text-slate-800 hover:text-rose-600 uppercase flex items-center justify-between group border-b border-slate-100 pb-2" 
                onClick={() => setIsOpen(false)}
              >
                <span>{item.label}</span>
                <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-rose-600" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
