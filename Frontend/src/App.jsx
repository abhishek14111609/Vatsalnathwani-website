import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Preloader from './components/layout/Preloader';
import CustomCursor from './components/layout/CustomCursor';
import SmoothScroll from './components/layout/SmoothScroll';
import PageTransition from './components/layout/PageTransition';

import Home from './pages/Home';
import About from './pages/About';
import Ventures from './pages/Ventures';
import VentureDetail from './pages/VentureDetail';
import Journey from './pages/Journey';
import Media from './pages/Media';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  return (
    <>
      <Preloader onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <>
          <div className="noise-overlay" />
          <CustomCursor />
          <SmoothScroll />
          <Navbar />

          <PageTransition location={location.pathname}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/ventures" element={<Ventures />} />
              <Route path="/ventures/:slug" element={<VentureDetail />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/media" element={<Media />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Legal type="privacy" />} />
              <Route path="/terms" element={<Legal type="terms" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>

          <Footer />
          <Toaster position="top-right" />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppContent />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
