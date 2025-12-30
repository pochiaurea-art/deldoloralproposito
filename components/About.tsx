
import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

const PHOTO_NAMES = ["foto1", "foto2", "foto3"];

const About: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Efecto para rotar las imágenes automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % PHOTO_NAMES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-sage-50 min-h-screen py-16 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-sage-100">
          <div className="md:flex">
            
            {/* Image Side (Galería Rotativa) */}
            <div className="md:w-5/12 bg-sage-800 relative h-[460px] md:h-auto md:min-h-[600px] overflow-hidden group">
              
              {/* Carrusel de Imágenes Simple */}
              {PHOTO_NAMES.map((name, index) => {
                const isActive = index === currentImageIndex;
                return (
                    <div 
                        key={name}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ zIndex: isActive ? 10 : 0 }}
                    >
                        <img 
                            src={`/assets/images/${name}.jpg`}
                            alt={`ROR Rodríguez foto ${index + 1}`}
                            className="w-full h-full object-cover object-top origin-top opacity-90 mix-blend-normal scale-105 group-hover:scale-110 transition-transform duration-[10000ms]"
                        />
                    </div>
                );
              })}

              {/* Overlay Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900 via-sage-900/40 to-transparent z-20 pointer-events-none"></div>
              
              {/* Indicadores */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-30">
                {PHOTO_NAMES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex ? 'bg-gold-500 w-6' : 'bg-white/50 hover:bg-white'
                        }`}
                        aria-label={`Ver foto ${index + 1}`}
                    />
                ))}
              </div>

              <div className="absolute bottom-8 left-0 right-0 p-8 md:p-12 pb-12 md:pb-16 z-20 pointer-events-none">
                <div className="text-white">
                  <div className="w-12 h-1 md:w-16 bg-gold-500 mb-4 md:mb-6 shadow-lg shadow-gold-500/50"></div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2 md:mb-4 drop-shadow-md">ROR Rodríguez</h2>
                  <p className="text-sage-200 text-base md:text-lg tracking-wide drop-shadow-sm">Redención • Oración • Restauración</p>
                </div>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="md:w-7/12 p-8 md:p-16 flex flex-col justify-center">
              <div className="flex items-center space-x-2 text-gold-600 mb-6 font-semibold uppercase tracking-wider text-xs">
                <ShieldCheck className="w-5 h-5" />
                <span>Un Refugio Seguro</span>
              </div>
              
              <h3 className="text-3xl font-bold text-sage-900 mb-8 font-serif">Hola, bienvenido a casa.</h3>
              
              <div className="space-y-6 text-sage-700 text-lg leading-relaxed font-light">
                <p>
                  Mi nombre es <strong className="text-sage-900 font-serif">ROR Rodríguez</strong>.
                </p>

                <div className="bg-sage-50 p-5 rounded-xl border border-sage-100 my-4 text-base">
                    <p className="mb-3">
                        <strong className="text-gold-600 font-serif">ROR</strong> son las iniciales de mi nombre de nacimiento: <strong className="text-sage-900">Roberto Omar Rivera</strong>.
                    </p>
                    <p className="mb-3">
                         ¿Por qué Rodríguez? Aunque llevo con respeto el apellido de mi padre, elegí abrazar públicamente el de mi madre. Fue ella la figura más presente en mi crianza y quien caminó cada paso de mi infancia conmigo. Llevar su nombre en este ministerio es mi forma de honrar su entrega y su influencia en quien soy hoy.
                    </p>
                    <p className="mt-4 pt-4 border-t border-sage-200/50 text-sage-600 italic text-sm">
                        Pero Dios le dio un nuevo significado a estas siglas: <strong className="text-gold-600 not-italic">Redención, Oración y Restauración.</strong>
                    </p>
                </div>

                <p>
                  No llegué aquí desde la teoría, sino desde el proceso. Desde preguntas sin respuestas, momentos de dolor, silencios largos y etapas difíciles. En ese camino aprendí algo que sostiene todo lo que comparto hoy:
                </p>

                <p className="p-6 rounded-2xl border-l-4 border-gold-400 italic text-sage-800 font-serif text-xl bg-sage-50/50 shadow-sm">
                   "Dios puede usar tu dolor y situaciones difíciles para conducirte a tu destino en Él."
                </p>
                
                <p>
                  Por eso este espacio existe. No para corregirte, exigirte ni imponerte una fe rígida. Sino para acompañarte mientras caminas, tal como estás.
                </p>

                <p>
                  Creo en una fe con los pies en la tierra y el corazón sostenido en Dios. Una fe que no niega el dolor, pero tampoco se queda en él. A través de la música, las reflexiones y el caminar semana a semana, mi deseo es ofrecer un refugio seguro donde puedas reconciliarte contigo mismo, reconocer tu dignidad intacta y descubrir que tu historia —aun con lo que ha dolido— sigue teniendo sentido.
                </p>

                <div className="pt-4 border-t border-sage-100 mt-6">
                    <p className="font-medium text-sage-900 font-serif text-xl">
                    Aquí no hay prisas. No hay presiones. No hay comparaciones.
                    </p>
                    <p className="mt-2 text-gold-600 font-medium">
                        Solo la esperanza de que, paso a paso, Dios sigue obrando, incluso ahora.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
