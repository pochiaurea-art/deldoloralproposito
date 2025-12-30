import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Heart } from 'lucide-react';

// LAZY LOADING: Importamos los componentes solo cuando se necesitan
const WeeklyPath = lazy(() => import('./components/WeeklyPath'));
const MusicSection = lazy(() => import('./components/MusicSection'));
const Reflections = lazy(() => import('./components/Reflections'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
// const Support = lazy(() => import('./components/Support')); // Deshabilitado temporalmente
const OneMinuteSection = lazy(() => import('./components/OneMinuteSection'));
const YoutubeLibrary = lazy(() => import('./components/YoutubeLibrary'));
const Newsletter = lazy(() => import('./components/Newsletter')); // IMPORTAMOS EL COMPONENTE
const HomeSections = lazy(() => import('./components/HomeSections').then(module => ({ default: module.HomeSectionsWrapper })));

// Loading Component (Spinner elegante)
const PageLoader = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center fade-in">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-sage-100 border-t-gold-500 rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Heart className="w-6 h-6 text-sage-300 fill-sage-50" />
      </div>
    </div>
    <p className="mt-4 text-sage-500 font-serif italic animate-pulse">Cargando esperanza...</p>
  </div>
);

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-sage-900 bg-sage-50 selection:bg-gold-200 selection:text-sage-900">
      <Navigation />
      
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Ruta Principal */}
              <Route path="/" element={<HomeSections />} />
              
              {/* Rutas Internas */}
              <Route path="/camino-diario" element={<div className="fade-in-up"><WeeklyPath /></div>} />
              <Route path="/un-minuto" element={<div className="fade-in-up"><OneMinuteSection /></div>} />
              <Route path="/videos" element={<div className="fade-in-up"><YoutubeLibrary /></div>} />
              <Route path="/musica" element={<div className="fade-in-up"><MusicSection /></div>} />
              <Route path="/reflexiones" element={<div className="fade-in-up"><Reflections /></div>} />
              <Route path="/sobre-mi" element={<div className="fade-in-up"><About /></div>} />
              <Route path="/contacto" element={<div className="fade-in-up"><Contact /></div>} />
              {/* <Route path="/apoyar" element={<div className="fade-in-up"><Support /></div>} /> */}

              {/* Redirección por defecto */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Suspense>
      </main>

      {/* SUSCRIPCIÓN GLOBAL: Ahora aparece antes del footer en TODAS las páginas */}
      <Suspense fallback={null}>
          <Newsletter />
      </Suspense>

      <Footer />
      <ScrollToTop />
    </div>
  );
};