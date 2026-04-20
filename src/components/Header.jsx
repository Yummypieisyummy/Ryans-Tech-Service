import { useState } from 'react';
import Button from '../ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="mx-auto px-6 py-4 flex items-center justify-around gap-8">
        <h1 className="text-3xl font-bold text-gray-900">Ryan's Tech Service</h1>
        
        <Button
          variant="icon"
          size="md"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>

        <ul className={`absolute left-0 right-0 top-full bg-white border-b border-gray-200 flex-col gap-4 px-6 py-4 items-center justify-center md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0 md:gap-8 md:items-center md:justify-start ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <li>
            <Button
              variant="textOnly"
              size="lg"
              onClick={() => scrollToSection('home')}
            >
              Home
            </Button>
          </li>
          <li>
            <Button
              variant="textOnly"
              size="lg"
              onClick={() => scrollToSection('services')}
            >
              Services
            </Button>
          </li>
          <li>
            <Button
              variant="textOnly"
              size="lg"
              onClick={() => scrollToSection('about')}
            >
              About
            </Button>
          </li>
          <li>
            <Button
              variant="textOnly"
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
