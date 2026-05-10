import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './pages/Hero';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import './index.css';

function MainPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const targetSection = location.state?.scrollTo;
    if (!targetSection) {
      return;
    }
    const element = document.getElementById(targetSection);
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth',
      });
    }
    navigate('/', { replace: true, state: {} });
  }, [location.state, navigate]);

  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <footer className="bg-gray-900 text-white py-8 text-center">
          <p>&copy; 2026 Ryan's Tech Service. Western PA.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
