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
const GetQuote = lazy(() => import('./pages/GetQuote'));

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
const RouteScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <RouteScrollToTop />
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
              <Route path="/teklif-al" element={<GetQuote />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        
        <ScrollToTop />

        {/* Fixed WhatsApp Support Button */}

      </div>
    </Router>
  );
}

export default App;
