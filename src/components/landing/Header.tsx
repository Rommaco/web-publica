'use client';

import React, { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Detectar sección activa basada en scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'caracteristicas', 'planes', 'testimonios', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-green-800 backdrop-blur-sm border-b border-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center">
              <img 
                src="/logo/color catledan.svg" 
                alt="CATLEDAN Logo" 
                className="h-12 w-auto"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#inicio" 
              className={`relative font-medium text-lg transition-all duration-300 ${
                activeSection === 'inicio' 
                  ? 'text-white' 
                  : 'text-white hover:text-green-200'
              }`}
            >
              Inicio
              {activeSection === 'inicio' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white animate-pulse"></div>
              )}
            </a>
            <a 
              href="#caracteristicas" 
              className={`relative font-medium text-lg transition-all duration-300 ${
                activeSection === 'caracteristicas' 
                  ? 'text-white' 
                  : 'text-white hover:text-green-200'
              }`}
            >
              Características
              {activeSection === 'caracteristicas' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white animate-pulse"></div>
              )}
            </a>
            <a 
              href="#planes" 
              className={`relative font-medium text-lg transition-all duration-300 ${
                activeSection === 'planes' 
                  ? 'text-white' 
                  : 'text-white hover:text-green-200'
              }`}
            >
              Planes
              {activeSection === 'planes' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white animate-pulse"></div>
              )}
            </a>
            <a 
              href="#testimonios" 
              className={`relative font-medium text-lg transition-all duration-300 ${
                activeSection === 'testimonios' 
                  ? 'text-white' 
                  : 'text-white hover:text-green-200'
              }`}
            >
              Testimonios
              {activeSection === 'testimonios' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white animate-pulse"></div>
              )}
            </a>
            <a 
              href="#contacto" 
              className={`relative font-medium text-lg transition-all duration-300 ${
                activeSection === 'contacto' 
                  ? 'text-white' 
                  : 'text-white hover:text-green-200'
              }`}
            >
              Contacto
              {activeSection === 'contacto' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white animate-pulse"></div>
              )}
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="md" 
              className="hidden sm:inline-flex text-white hover:text-green-200 hover:bg-white/10 text-lg transform hover:scale-105 transition-all duration-300"
            >
              Iniciar Sesión
            </Button>
            <Button 
              variant="secondary" 
              size="md" 
              className="hidden md:inline-flex bg-white text-green-800 hover:bg-green-50 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Comenzar Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-700">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#inicio" 
                className="text-white hover:text-green-200 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </a>
              <a 
                href="#caracteristicas" 
                className="text-white hover:text-green-200 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Características
              </a>
              <a 
                href="#planes" 
                className="text-white hover:text-green-200 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Planes
              </a>
              <a 
                href="#testimonios" 
                className="text-white hover:text-green-200 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonios
              </a>
              <a 
                href="#contacto" 
                className="text-white hover:text-green-200 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </a>
              <div className="px-4 py-2 space-y-2">
                <Button 
                  variant="ghost" 
                  size="md" 
                  className="w-full text-white hover:text-green-200 hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
                >
                  Iniciar Sesión
                </Button>
                <Button 
                  variant="secondary" 
                  size="md" 
                  className="w-full bg-white text-green-800 hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Comenzar Gratis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
