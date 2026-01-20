import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin, MessageCircle, ChevronRight, ChevronDown } from 'lucide-react';
import { SITE_DATA } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Determine if it's a "Dark Mode" page (3D Services)
  // Now includes /uretim as the Production Home
  const isDarkPage = ['/uretim', '/3d-tarama', '/3d-modelleme', '/3d-baski', '/galeri', '/satis'].some(path => location.pathname.startsWith(path)) || location.pathname === '/uretim';
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // If on Gateway Page (Home), do not render Navbar
  if (location.pathname === '/') return null;

  // Define Navigation Sets
  const eduNavItems = [
    { label: 'Eğitimler', path: '/egitimlerimiz' },
    { label: 'Takvim', path: '/takvim' },
    { label: 'Öğrenci Çalışmaları', path: '/calismalar' },
    { label: 'Blog', path: '/makaleler' },
    { label: 'Kurumsal', path: '/hakkimizda' },
    { label: 'İletişim', path: '/iletisim' },
  ];

  const productionNavItems = [
    { label: '3D Tarama', path: '/3d-tarama' },
    { label: '3D Baskı', path: '/3d-baski' },
    { label: '3D Modelleme', path: '/3d-modelleme' },
    { label: 'Galeri', path: '/galeri' },
    { label: 'Mağaza', path: '/satis' },
  ];

  // Select active set
  const navItems = isDarkPage ? productionNavItems : eduNavItems;

  return (
    <header className="fixed w-full z-50 font-sans transition-colors duration-300">
      {/* Top Info Bar */}
      <div className={`hidden lg:block py-2 transition-all duration-500 ease-in-out ${
          scrolled ? 'translate-y-[-100%] opacity-0 h-0 p-0 pointer-events-none' : 'translate-y-0 opacity-100'
        } ${isDarkPage ? 'bg-[#0B0F19] text-white/70 border-b border-white/5' : 'bg-slate-900 text-white'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center text-[10px] font-medium tracking-wide">
          <div className="flex gap-6">
            <div className="flex items-center gap-2 hover:text-[#1877F2] transition-colors cursor-pointer">
              <MapPin size={12} />
              <span>{SITE_DATA?.address || 'İZMİR-2 CD. NO:43/16 KIZILAY / ANKARA'}</span>
            </div>
            <div className="flex items-center gap-2 hover:text-[#1877F2] transition-colors cursor-pointer">
              <Phone size={12} />
              <span>{SITE_DATA?.phone || '(0312) 231 31 35'}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
             {/* Socials logic remains same */}
             <div className="flex gap-4 opacity-80">
                <Facebook size={12} className="hover:text-[#1877F2] cursor-pointer transition-colors hover:scale-110" />
                <Instagram size={12} className="hover:text-[#1877F2] cursor-pointer transition-colors hover:scale-110" />
                <Youtube size={12} className="hover:text-[#1877F2] cursor-pointer transition-colors hover:scale-110" />
                <Linkedin size={12} className="hover:text-[#1877F2] cursor-pointer transition-colors hover:scale-110" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <nav 
        className={`transition-all duration-500 border-b ${
          scrolled 
            ? isDarkPage 
                ? 'bg-[#0B0F19]/90 backdrop-blur-md py-3 border-[#1877F2]/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)]' 
                : 'bg-white/80 backdrop-blur-md py-3 border-slate-200/50 shadow-lg' 
            : 'bg-transparent py-5 border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Logic */}
          <Link to={isDarkPage ? "/uretim" : "/egitim"} className="flex flex-col group shrink-0 relative z-50">
             {isDarkPage ? (
                 <div className="flex items-center gap-2">
                     <img src="/assets/images/3D3P.png" alt="3D3P Logo" className="h-10 w-auto" />
                     <div className="flex flex-col">
                        <span className="text-xl font-black text-white uppercase leading-none tracking-tighter">
                            3D3PRINTER
                        </span>
                        <span className="text-[10px] font-bold text-[#1877F2] tracking-[0.2em]">TECHNOLOGY</span>
                     </div>
                 </div>
             ) : (
                <>
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
                </>
             )}
          </Link>


          <div className="hidden xl:flex items-center gap-1">
            <div className={`flex items-center rounded-full px-4 py-2 border backdrop-blur-sm shadow-sm ${
                isDarkPage 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white/50 border-slate-100'
            }`}>
              {navItems.map((item) => (
                <Link 
                  key={item.label} 
                  to={item.path}
                  className={`relative px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 hover:text-[#1877F2] ${
                    location.pathname === item.path 
                      ? isDarkPage ? 'text-[#1877F2] bg-[#1877F2]/10' : 'text-rose-600 bg-rose-50'
                      : isDarkPage ? 'text-slate-300 hover:text-white' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${isDarkPage ? 'bg-[#1877F2]' : 'bg-rose-600'}`} />
                  )}
                </Link>
              ))}
              
              {/* Context Switcher Divider */}
              <div className={`w-px h-6 mx-2 ${isDarkPage ? 'bg-white/20' : 'bg-slate-200'}`}></div>

              {/* Context Switcher Button */}
              <Link
                to={isDarkPage ? '/egitim' : '/uretim'}
                className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded border transition-all ${
                     isDarkPage 
                     ? 'border-white/20 text-white hover:bg-white hover:text-black' 
                     : 'border-slate-200 text-slate-500 hover:border-rose-600 hover:text-rose-600'
                }`}
              >
                  {isDarkPage ? 'Eğitim Akademisi' : '3D Üretim Merkezi'}
              </Link>
            </div>
            
            <Link 
              to="/teklif-al"
              className={`ml-4 px-6 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-lg active:scale-95 transition-all duration-300 flex items-center gap-2 ${
                  isDarkPage
                  ? 'bg-[#1877F2] hover:bg-white hover:text-[#0B0F19] text-white shadow-[#1877F2]/20'
                  : 'bg-slate-900 hover:bg-rose-600 text-white hover:shadow-rose-600/30'
              }`}
            >
              Hızlı Teklif <ChevronRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`xl:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                isDarkPage
                ? 'bg-white/10 text-white hover:bg-white/20'
                : 'bg-slate-50 text-slate-900 hover:bg-slate-100'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500 xl:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm z-50 shadow-2xl transition-transform duration-500 ease-out xl:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ${isDarkPage ? 'bg-[#0B0F19] border-l border-white/10' : 'bg-white'}`}
      >
        <div className="h-full flex flex-col p-8 overflow-y-auto">
            <div className="mb-10 pt-2 flex items-center justify-between">
                <span className={`text-xs font-bold uppercase tracking-widest ${isDarkPage ? 'text-slate-500' : 'text-slate-400'}`}>Menü</span>
                {isDarkPage && <img src="/assets/images/3D3P.png" className="h-6 w-auto opacity-50" alt="" />}
            </div>
            
            <div className="flex flex-col gap-2">
                {navItems.map((item, i) => (
                    <Link 
                        key={item.label}
                        to={item.path} 
                        className={`text-lg font-bold p-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                            location.pathname === item.path 
                            ? isDarkPage ? 'bg-[#1877F2]/10 text-[#1877F2]' : 'bg-rose-50 text-rose-600'
                            : isDarkPage ? 'text-slate-300 hover:bg-white/5' : 'text-slate-800 hover:bg-rose-50'
                        }`}
                        onClick={() => setIsOpen(false)}
                        style={{ transitionDelay: `${i * 0.05}s` }}
                    >
                        {item.label}
                        <ChevronRight size={16} className={`transition-transform duration-300 ${isDarkPage ? 'text-[#1877F2]' : 'text-rose-400'} ${location.pathname === item.path ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                    </Link>
                ))}
            </div>

            <div className={`mt-auto pt-8 border-t space-y-4 ${isDarkPage ? 'border-white/10' : 'border-slate-100'}`}>
                <Link
                    to={isDarkPage ? '/egitim' : '/uretim'}
                    onClick={() => setIsOpen(false)}
                    className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 border ${
                        isDarkPage ? 'border-white/20 text-white' : 'border-slate-200 text-slate-500'
                    }`}
                >
                    {isDarkPage ? 'Eğitim Akademisine Geç' : '3D Üretim Merkezine Geç'}
                </Link>

                <Link 
                    to="/teklif-al"
                    onClick={() => setIsOpen(false)}
                    className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-all ${
                        isDarkPage ? 'bg-[#1877F2] text-white' : 'bg-slate-900 text-white'
                    }`}
                >
                    Hızlı Teklif Al
                </Link>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
