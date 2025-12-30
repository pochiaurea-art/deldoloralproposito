
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled upto given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-40 fade-in">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-gold-500 text-sage-900 shadow-lg hover:bg-gold-400 transition-all duration-300 transform hover:-translate-y-1 border border-gold-600/20"
            aria-label="Volver arriba"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
