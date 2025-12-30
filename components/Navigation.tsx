import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Detect scroll to add shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4 border-b border-sage-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Area */}
          <div className="flex items-center cursor-pointer group" onClick={() => handleNavClick('/')}>
             <div className="p-2 bg-sage-50 rounded-full mr-3 border border-sage-100 group-hover:bg-gold-50 group-hover:border-gold-200 transition-colors">
                <Heart className="h-6 w-6 text-gold-500 fill-gold-100 group-hover:scale-110 transition-transform duration-300" />
             </div>
             <div>
                <span className="block font-serif text-2xl font-bold text-sage-900 tracking-tight leading-none group-hover:text-gold-600 transition-colors">Del Dolor al Propósito</span>
                <span className="block text-[10px] font-bold text-sage-400 uppercase tracking-[0.2em] mt-1">Acompañamiento & Fe</span>
             </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 items-center">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.path)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-sage-900 bg-sage-100'
                    : 'text-sage-600 hover:text-gold-600 hover:bg-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-sage-600 hover:bg-sage-50 hover:text-sage-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-sage-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.path)}
                className={`w-full text-left block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-sage-900 bg-sage-50 border border-sage-100'
                    : 'text-sage-600 hover:text-gold-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                    <span className={`mr-3 ${location.pathname === link.path ? 'text-gold-500' : 'text-sage-400'}`}>{link.icon}</span>
                    {link.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;