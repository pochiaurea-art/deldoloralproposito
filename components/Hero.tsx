
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Music, BookOpen } from 'lucide-react';

const HERO_SLIDES = [
  {
    text: "Vengan a mí todos los que están cansados y agobiados, y yo les daré descanso.",
    reference: "Mateo 11:28",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=800&auto=format&fit=crop"
  },
  {
    text: "Porque yo sé los pensamientos que tengo acerca de vosotros, pensamientos de paz, y no de mal.",
    reference: "Jeremías 29:11",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=800&auto=format&fit=crop"
  },
  {
    text: "El sana a los quebrantados de corazón, y venda sus heridas.",
    reference: "Salmos 147:3",
    image: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?q=80&w=800&auto=format&fit=crop"
  },
  {
    text: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo.",
    reference: "Isaías 41:10",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000); // Cambia cada 6 segundos
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-sage-800 to-sage-600 pb-16 pt-12 md:pb-24 lg:pb-32 text-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold-500 rounded-full mix-blend-overlay blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sage-400 rounded-full mix-blend-overlay blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left z-10">
            {/* Badge actualizado */}
            <div className="inline-flex items-center rounded-full border border-sage-500 bg-sage-900/50 backdrop-blur-sm px-4 py-1.5 text-sm text-sage-50 mb-6 shadow-sm">
              <span className="mr-2">💛</span>
              <span className="font-medium tracking-wide">Un refugio para tu alma, sin juicios</span>
            </div>
            
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl mb-6 leading-tight">
              Del Dolor al Propósito
            </h1>
            
            <div className="mb-8">
                <p className="font-serif text-xl sm:text-2xl text-gold-300 italic mb-4 leading-relaxed font-medium drop-shadow-sm">
                "Dios puede usar tu dolor y situaciones difíciles para conducirte a tu destino en Él."
                </p>
                
                {/* Versículo de apoyo al slogan */}
                <div className="relative pl-4 border-l-2 border-sage-400/50 ml-2 lg:ml-0 text-left">
                    <p className="text-sage-100 font-light text-sm sm:text-base leading-relaxed opacity-90">
                        "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su <strong className="text-gold-200 font-serif">propósito</strong> son llamados."
                    </p>
                    <div className="flex items-center mt-1 text-xs font-bold text-gold-400 uppercase tracking-widest">
                        <BookOpen className="w-3 h-3 mr-1" /> Romanos 8:28
                    </div>
                </div>
            </div>
            
            {/* Párrafo Principal Actualizado */}
            <div className="mx-auto lg:mx-0 mt-6 max-w-2xl text-lg text-sage-100 leading-relaxed font-light mb-10 space-y-4">
              <p>
                Aquí no estás solo. Este es un espacio seguro donde el dolor no es ignorado, sino abrazado con fe y compasión. Donde las lágrimas no son señal de derrota, sino parte del camino hacia tu sanidad.
              </p>
              <p>
                A través de música, reflexiones, oración y acompañamiento espiritual, te ayudamos a reencontrarte con la esperanza y recordar que tu historia no termina en el dolor. <span className="text-gold-200 font-medium">Dios está escribiendo algo nuevo… y tú sigues siendo parte de Su propósito.</span>
              </p>
            </div>
            
            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 items-start">
              <button 
                onClick={() => navigate('/camino-diario')}
                className="inline-flex items-center justify-center rounded-xl bg-gold-500 px-6 py-3 text-base font-bold text-sage-900 shadow-lg shadow-gold-900/20 hover:bg-gold-400 transition-all duration-200 hover:-translate-y-1 w-full sm:w-auto"
              >
                Comenzar el Día
                <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
              </button>

              <button 
                onClick={() => navigate('/musica')}
                className="inline-flex items-center justify-center rounded-xl bg-transparent border border-sage-300 px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-all duration-200 w-full sm:w-auto"
              >
                <Music className="mr-2 h-5 w-5 text-gold-300" />
                Música para el alma
              </button>
            </div>
          </div>

          {/* Carrusel Hero (Versículos) */}
          <div className="flex-1 relative w-full flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-sage-900/50 aspect-[4/5] lg:aspect-square w-full max-w-md border-4 border-sage-500/30 group">
              
              {HERO_SLIDES.map((slide, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {/* Imagen de fondo */}
                  <img 
                    src={slide.image} 
                    alt="Imagen inspiracional" 
                    className="object-cover w-full h-full opacity-90 transition-transform duration-[10000ms] ease-linear transform scale-100 group-hover:scale-110"
                  />
                  
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sage-900/90 via-sage-800/20 to-transparent mix-blend-multiply"></div>
                  
                  {/* Texto del Versículo */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white flex flex-col justify-end h-full">
                    <blockquote className="font-serif text-xl sm:text-2xl italic mb-4 text-gold-100 drop-shadow-md leading-relaxed">
                      "{slide.text}"
                    </blockquote>
                    <cite className="text-sage-200 text-sm font-bold uppercase tracking-widest not-italic flex items-center">
                      <div className="h-0.5 w-6 bg-gold-500 mr-2"></div>
                      {slide.reference}
                    </cite>
                  </div>
                </div>
              ))}

              {/* Indicadores de slide */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? 'w-6 bg-gold-500' : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Ver versículo ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
