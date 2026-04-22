import { useState, useEffect } from 'react';
import Button from '../ui/button';
import heroBg from '../assets/hero.jpg';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a tiny delay to ensure the browser registers the initial hidden state
    // before triggering the animation.
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative bg-cover bg-center bg-no-repeat py-20 md:py-32 w-full"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Light overlay to ensure the dark text is readable */}
      <div className="absolute inset-0 bg-white/70"></div>
      
      <div 
        className={`relative z-10 mx-auto px-6 max-w-7xl transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}
      >
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
          Ryan's Tech Service
        </h2>
        <h3 className="text-3xl md:text-4xl text-gray-900 mb-12 text-center">
          Computer repair and support, right at you door.
        </h3>
        <div className="flex flex-col items-center">
          <p className="text-xl text-gray-600 mb-8 max-w-2xl text-center">
             Hi! I'm Ryan!
          </p>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl text-center">
            I am a computer science graduate looking to start a local business providing computer repair, technical support, and software development services in Western PA. Whether your PC is acting up, you need a new one set up, or something just isn't working the way it should, I'll come to you and fix it.
          </p>
          <Button
            onClick={() => scrollToSection('contact')}
            size="lg"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
