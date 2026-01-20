import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { SITE_DATA } from './constants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy load all pages for faster initial load
const Home = lazy(() => import('./pages/Home'));
const Courses = lazy(() => import('./pages/Courses'));
const About = lazy(() => import('./pages/About'));
const StudentWorks = lazy(() => import('./pages/StudentWorks'));
const Articles = lazy(() => import('./pages/Articles'));
const Contact = lazy(() => import('./pages/Contact'));
const Calendar = lazy(() => import('./pages/Calendar'));
const PearsonVue = lazy(() => import('./pages/PearsonVue'));
const Scanning3D = lazy(() => import('./pages/Scanning3D'));
const Modeling3D = lazy(() => import('./pages/Modeling3D'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-rose-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-slate-600 font-medium">Yükleniyor...</p>
    </div>
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="antialiased bg-slate-50 text-slate-900 font-['Inter'] selection:bg-rose-500 selection:text-white">
        <Navbar />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/egitimlerimiz" element={<Courses />} />
              <Route path="/hakkimizda" element={<About />} />
              <Route path="/calismalar" element={<StudentWorks />} />
              <Route path="/makaleler" element={<Articles />} />
              <Route path="/iletisim" element={<Contact />} />
              <Route path="/takvim" element={<Calendar />} />
              <Route path="/pearson" element={<PearsonVue />} />
              <Route path="/3d-tarama" element={<Scanning3D />} />
              <Route path="/3d-modelleme" element={<Modeling3D />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        
        <ScrollToTop />

        {/* Fixed WhatsApp Support Button */}
        <a 
          href={`https://wa.me/${SITE_DATA.contact.whatsapp.replace(/[^0-9]/g, '')}`} 
          target="_blank" 
          rel="noreferrer"
          className="fixed bottom-6 right-6 bg-[#25d366] text-white p-3 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all z-50 flex items-center gap-2 group"
        >
          <MessageCircle size={20} />
          <span className="hidden group-hover:block text-xs font-bold whitespace-nowrap pr-2">WhatsApp</span>
          <span className="absolute inset-0 bg-green-400/20 rounded-full animate-ping group-hover:hidden" />
        </a>
      </div>
    </Router>
  );
}

export default App;
