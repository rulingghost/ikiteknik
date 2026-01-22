import React, { memo, useEffect, useState } from 'react';
import { Phone, MessageCircle, FileText, GraduationCap } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { SITE_DATA } from '../constants';

const MobileActionBar = memo(() => {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Context awareness
    const is3DPage = ['/uretim', '/3d-tarama', '/3d-modelleme', '/3d-baski', '/galeri', '/satis', '/teklif-al'].some(path => location.pathname.startsWith(path)) || location.pathname === '/uretim';
    const isQuotePage = location.pathname === '/teklif-al';
    const isGateway = location.pathname === '/';

    // Hide on scroll down, show on scroll up
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    if(isQuotePage || isGateway) return null; // Don't show on quote wizard or gateway to avoid clutter

    // Dynamic Styles based on theme
    const bgClass = is3DPage ? 'bg-[#0B0F19]/90 border-t border-[#1877F2]/30 text-white' : 'bg-white/95 border-t border-slate-200 text-slate-700';
    const activeColor = is3DPage ? 'text-[#1877F2]' : 'text-rose-600';

    const whatsappMessage = is3DPage 
        ? "Merhaba, 3D hizmetleriniz hakkında bilgi almak istiyorum."
        : "Merhaba, eğitimleriniz hakkında bilgi almak istiyorum.";

    const whatsappLink = `https://wa.me/${SITE_DATA?.contact?.whatsapp?.replace(/\s/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className={`md:hidden fixed bottom-0 left-0 w-full z-50 transition-transform duration-300 backdrop-blur-lg ${isVisible ? 'translate-y-0' : 'translate-y-full'} ${bgClass}`}>
            <div className="grid grid-cols-4 h-16 items-center items-stretch pb-safe">
                <a href={`tel:${SITE_DATA?.contact?.phones?.[0]?.replace(/\s/g, '')}`} className="flex flex-col items-center justify-center gap-1 active:bg-black/5">
                    <Phone size={20} />
                    <span className="text-[10px] font-bold">Ara</span>
                </a>
                
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={`flex flex-col items-center justify-center gap-1 active:bg-black/5 ${activeColor}`}>
                    <MessageCircle size={20} />
                    <span className="text-[10px] font-bold">WhatsApp</span>
                </a>

                {is3DPage ? (
                    <Link to="/teklif-al" className="flex flex-col items-center justify-center gap-1 active:bg-black/5 relative overflow-hidden">
                        <div className="absolute inset-x-2 top-2 bottom-2 bg-[#1877F2] rounded-lg -z-10 opacity-20 animate-pulse"></div>
                        <FileText size={20} className="text-[#1877F2]" />
                        <span className="text-[10px] font-bold text-[#1877F2]">Teklif Al</span>
                    </Link>
                ) : (
                    <Link to="/egitimlerimiz" className="flex flex-col items-center justify-center gap-1 active:bg-black/5">
                        <GraduationCap size={20} />
                        <span className="text-[10px] font-bold">Eğitimler</span>
                    </Link>
                )}

                <a href={SITE_DATA?.maps_url || '#'} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1 active:bg-black/5">
                    <span className="text-xl">📍</span>
                    <span className="text-[10px] font-bold">Konum</span>
                </a>
            </div>
        </div>
    );
});

export default MobileActionBar;
