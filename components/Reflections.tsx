
import React from 'react';
import { REFLECTIONS_DATA } from '../constants';
import { Calendar, User } from 'lucide-react';

const Reflections: React.FC = () => {
  return (
    <div className="bg-sage-100 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 border-b border-sage-200 pb-8">
          <h2 className="text-3xl font-serif font-bold text-sage-900">Palabras para el Camino</h2>
          <p className="mt-4 text-lg text-sage-700">
            Reflexiones breves para recordarte que tu historia tiene sentido y que Dios sigue obrando en medio del proceso.
          </p>
        </div>

        <div className="space-y-16">
          {REFLECTIONS_DATA.map((reflection) => (
            <article key={reflection.id} className="flex flex-col bg-white p-8 rounded-3xl shadow-sm border border-sage-200/50">
              {reflection.image && (
                <div className="rounded-2xl overflow-hidden mb-6 shadow-md h-64">
                  <img src={reflection.image} alt={reflection.title} className="w-full h-full object-cover" />
                </div>
              )}
              
              <div className="flex items-center text-sm text-sage-500 mb-3 space-x-4">
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-1 text-gold-600" /> {reflection.date}</span>
                <span className="flex items-center"><User className="w-4 h-4 mr-1 text-gold-600" /> Pastoral</span>
              </div>

              <h3 className="text-2xl font-bold text-sage-800 mb-4 font-serif">
                {reflection.title}
              </h3>
              
              <div className="prose prose-sage prose-lg text-sage-700">
                <p className="mb-4 font-medium italic text-sage-800 bg-sage-50 p-4 rounded-lg border-l-4 border-gold-400">
                    "{reflection.excerpt}"
                </p>
                <p className="leading-relaxed">
                  {reflection.fullText}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reflections;
