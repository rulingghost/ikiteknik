import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Calendar from './pages/Calendar';
import StudentWorks from './pages/StudentWorks';
import Articles from './pages/Articles';
import About from './pages/About';
import PearsonVue from './pages/PearsonVue';
import Contact from './pages/Contact';
import StubPage from './pages/StubPage';
import { MessageCircle } from 'lucide-react';
import { SITE_DATA } from './constants';

// Scroll to top on every route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="antialiased bg-slate-50 text-slate-900 font-['Inter'] selection:bg-rose-500 selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/egitimlerimiz" element={<Courses />} />
            <Route path="/takvim" element={<Calendar />} />
            <Route path="/calismalar" element={<StudentWorks />} />
            <Route path="/makaleler" element={<Articles />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/pearson" element={<PearsonVue />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Fixed WhatsApp Support Button - Smaller */}
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
};

export default App;
