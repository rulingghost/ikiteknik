import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';

// Direct imports for reliable loading in local dev
import Login from './admin/pages/Login';
import AdminLayout from './admin/layouts/AdminLayout';
import Dashboard from './admin/pages/Dashboard';
import GalleryManager from './admin/pages/GalleryManager';
import ProductManager from './admin/pages/ProductManager';
import Submissions from './admin/pages/Submissions';
import ArticleManager from './admin/pages/ArticleManager';
import CourseManager from './admin/pages/CourseManager';
import EventManager from './admin/pages/EventManager';

// Lazy load public pages
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
const Printing3D = lazy(() => import('./pages/Printing3D'));
const Gallery3D = lazy(() => import('./pages/Gallery3D'));
const Store = lazy(() => import('./pages/Store'));
const GetQuote = lazy(() => import('./pages/GetQuote'));
const EducationHome = lazy(() => import('./pages/EducationHome'));
const ProductionHome = lazy(() => import('./pages/ProductionHome'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-rose-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-slate-600 font-medium">Yükleniyor...</p>
    </div>
  </div>
);

const RouteScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const MainLayout = () => {
  const location = useLocation();
  const isGateway = location.pathname === '/';

  return (
    <div className="antialiased bg-slate-50 text-slate-900 font-['Inter'] selection:bg-rose-500 selection:text-white pb-16 md:pb-0">
      {!isGateway && <Navbar />}
      <main>
        <Outlet />
      </main>
      {location.pathname !== '/login' && !location.pathname.startsWith('/admin') && <Footer />}
      {location.pathname !== '/login' && !location.pathname.startsWith('/admin') && <MobileActionBar />}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <RouteScrollToTop />
          <Toaster position="top-right" />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Public Routes */}
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/egitim" element={<EducationHome />} />
                <Route path="/uretim" element={<ProductionHome />} />
                <Route path="/egitimlerimiz" element={<Courses />} />
                <Route path="/hakkimizda" element={<About />} />
                <Route path="/calismalar" element={<StudentWorks />} />
                <Route path="/makaleler" element={<Articles />} />
                <Route path="/iletisim" element={<Contact />} />
                <Route path="/takvim" element={<Calendar />} />
                <Route path="/pearson" element={<PearsonVue />} />
                <Route path="/3d-tarama" element={<Scanning3D />} />
                <Route path="/3d-modelleme" element={<Modeling3D />} />
                <Route path="/3d-baski" element={<Printing3D />} />
                <Route path="/galeri" element={<Gallery3D />} />
                <Route path="/satis" element={<Store />} />
                <Route path="/teklif-al" element={<GetQuote />} />
              </Route>

              {/* Admin Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="galeri" element={<GalleryManager />} />
                <Route path="satis" element={<ProductManager />} />
                <Route path="mesajlar" element={<Submissions />} />
                <Route path="makaleler" element={<ArticleManager />} />
                <Route path="egitimler" element={<CourseManager />} />
                <Route path="takvim" element={<EventManager />} />
              </Route>

              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
