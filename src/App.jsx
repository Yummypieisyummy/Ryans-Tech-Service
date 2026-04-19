import Header from './components/Header';
import Hero from './pages/Hero';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2026 Ryan's Tech Service. Western PA.</p>
      </footer>
    </div>
  );
}

export default App;
