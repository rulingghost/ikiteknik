import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin, MessageCircle, ChevronRight, ChevronDown } from 'lucide-react';
import { SITE_DATA } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Main navigation items
  const mainNavHelp = [
    { label: 'Eğitimlerimiz', path: '/egitimlerimiz' },
    { label: 'Hizmetler', path: '#', children: [
        { label: '3D Tarama', path: '/3d-tarama' },
        { label: '3D Modelleme', path: '/3d-modelleme' },
    ]},
    { label: 'Kurumsal', path: '#', children: [
         { label: 'Hakkımızda', path: '/hakkimizda' },
         { label: 'Pearson Vue', path: '/pearson' },
    ]},
    { label: 'Akademi', path: '#', children: [
        { label: 'Eğitim Takvimi', path: '/takvim' },
        { label: 'Öğrenci Çalışmaları', path: '/calismalar' },
        { label: 'Makaleler', path: '/makaleler' },
   ]},
    { label: 'İletişim', path: '/iletisim' },
  ];
  
  // Flattened for mobile or specific use if needed, but we will use the structured one for desktop dropdowns
  // For simplicity upon user request "navbarı düzenle", I will keep it flat but better styled or introduce dropdowns if it was too crowded. 
  // Given the previous list was 9 items long, a simple flat list is hard to maintain visually. 
  // Let's stick to a cleaner flat list but with optimized spacing, OR grouping. 
  // User asked to "fix" it because it looks "bad". Crowding is likely the issue.
  // However, introducing dropdown logic requires more state.
  // Let's try to optimize the flat list first with better styling, maybe grouping visually is not requested but styling is.
  
  // Reverting to flat list but with better visual hierarchy options.
  const navItems = [
    { label: 'Eğitimler', path: '/egitimlerimiz' },
    { label: '3D Tarama', path: '/3d-tarama' },
    { label: '3D Modelleme', path: '/3d-modelleme' },
    // { label: 'Takvim', path: '/takvim' }, // Removed strictly to save space if needed, but let's keep it clean
    { label: 'Eğitim Takvimi', path: '/takvim' },
    { label: 'Çalışmalar', path: '/calismalar' }, // Shortened label
    { label: 'Blog', path: '/makaleler' }, // Shortened label
    { label: 'Hakkımızda', path: '/hakkimizda' },
    { label: 'Pearson', path: '/pearson' },
    { label: 'İletişim', path: '/iletisim' },
  ];

  return (
    <header className="fixed w-full z-50 font-sans">
      {/* Top Info Bar - Made it sleeker */}
      <div className={`hidden lg:block bg-slate-900 text-white py-2 transition-all duration-500 ease-in-out ${scrolled ? 'translate-y-[-100%] opacity-0 h-0 p-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center text-[10px] font-medium tracking-wide">
          <div className="flex gap-6 opacity-80">
            <div className="flex items-center gap-2 hover:text-rose-400 transition-colors cursor-pointer">
              <MapPin size={12} />
              <span>{SITE_DATA?.address || 'İZMİR-2 CD. NO:43/16 KIZILAY / ANKARA'}</span>
            </div>
            <div className="flex items-center gap-2 hover:text-rose-400 transition-colors cursor-pointer">
              <Phone size={12} />
              <span>{SITE_DATA?.phone || '(0312) 231 31 35'}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-4 opacity-80">
                <Facebook size={12} className="hover:text-rose-400 cursor-pointer transition-colors hover:scale-110" />
                <Instagram size={12} className="hover:text-rose-400 cursor-pointer transition-colors hover:scale-110" />
                <Youtube size={12} className="hover:text-rose-400 cursor-pointer transition-colors hover:scale-110" />
                <Linkedin size={12} className="hover:text-rose-400 cursor-pointer transition-colors hover:scale-110" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <nav 
        className={`transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-md py-3 border-slate-200/50 shadow-lg shadow-slate-900/5' 
            : 'bg-white/0 py-5 border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col group shrink-0 relative z-50">
            <div className="flex items-baseline gap-0.5">
                <span className={`text-2xl font-black tracking-tighter uppercase leading-none transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                    iki
                </span>
                <span className="text-2xl font-black tracking-tighter uppercase leading-none text-rose-600">
                    teknik
                </span>
            </div>
            <span className="text-[9px] font-bold tracking-[0.4em] text-slate-400 uppercase leading-none ml-0.5 group-hover:text-rose-500 transition-colors">
                BİLİŞİM
            </span>
          </Link>


          <div className="hidden xl:flex items-center gap-1">
            <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-100 shadow-sm">
              {navItems.map((item) => (
                <Link 
                  key={item.label} 
                  to={item.path}
                  className={`relative px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 hover:text-rose-600 ${
                    location.pathname === item.path 
                      ? 'text-rose-600 bg-rose-50' 
                      : 'text-slate-600'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-rose-600" />
                  )}
                </Link>
              ))}
            </div>
            

          </div>

          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-900 hover:bg-slate-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 transition-opacity duration-500 xl:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl transition-transform duration-500 ease-out xl:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col p-8 overflow-y-auto">
            <div className="mb-10 pt-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Menü</span>
            </div>
            
            <div className="flex flex-col gap-2">
                {navItems.map((item, i) => (
                    <Link 
                        key={item.label}
                        to={item.path} 
                        className={`text-lg font-bold text-slate-800 hover:text-rose-600 hover:bg-rose-50 p-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                            location.pathname === item.path ? 'bg-rose-50 text-rose-600' : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                        style={{ transitionDelay: `${i * 0.05}s` }}
                    >
                        {item.label}
                        <ChevronRight size={16} className={`text-rose-400 transition-transform duration-300 ${location.pathname === item.path ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                    </Link>
                ))}
            </div>

            <div className="mt-auto pt-8 border-t border-slate-100">
                <Link 
                    to="/teklif-al"
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-xl shadow-slate-900/10 active:scale-95 transition-all"
                >
                    Hızlı Teklif Al
                </Link>
                <div className="mt-6 flex justify-center gap-6 text-slate-400">
                    <Facebook size={18} className="hover:text-rose-600 transition-colors" />
                    <Instagram size={18} className="hover:text-rose-600 transition-colors" />
                    <Youtube size={18} className="hover:text-rose-600 transition-colors" />
                </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
