import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TOPICS_DATA, WEEKLY_DATA, SONGS_DATA, REFLECTIONS_DATA, YOUTUBE_RESOURCES_DATA } from '../constants';
import { ChevronRight, ArrowRight, Scroll, Crown, Key, Wheat, PlayCircle } from 'lucide-react';
import Hero from './Hero';

// Wrapper para exportar todo junto
export const HomeSectionsWrapper: React.FC = () => {
    return (
        <div className="fade-in">
            <Hero />
            <BiblicalStories />
            <TopicGrid />
            <FeaturedContent />
            {/* Newsletter se movió a App.tsx para que sea global */}
        </div>
    );
};

export const TopicGrid: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-sage-900">Recursos por Temas</h2>
          <p className="mt-3 text-sage-600 max-w-2xl mx-auto">Explora el contenido organizado según lo que tu corazón necesita hoy.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOPICS_DATA.map((topic) => (
            <button
              key={topic.id}
              onClick={() => navigate(topic.path)}
              className="group flex flex-col items-center p-8 bg-sage-50 rounded-2xl border border-sage-100 hover:border-gold-300 hover:shadow-lg hover:shadow-gold-500/10 transition-all duration-300 text-center transform hover:-translate-y-1"
            >
              <div className="p-4 bg-white rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300 border border-sage-100">
                {topic.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-sage-900 mb-2">{topic.title}</h3>
              <p className="text-sm text-sage-600 leading-relaxed">{topic.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export const BiblicalStories: React.FC = () => {
    return (
        <section className="py-20 bg-sage-900 text-sage-50 relative overflow-hidden">
             {/* Decorative Background */}
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-gold-500 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-sage-400 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-2 bg-sage-800 rounded-full mb-4 border border-sage-700 text-gold-400">
                        <Scroll className="w-5 h-5 mr-2" />
                        <span className="text-sm font-medium uppercase tracking-wider">Fundamento Bíblico</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                        Espejos de Esperanza
                    </h2>
                    <p className="text-lg text-sage-200 max-w-2xl mx-auto font-light leading-relaxed">
                        No eres el primero en pasar por el fuego. La Biblia está llena de historias donde el dolor no fue el final, sino el transporte hacia el destino.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Story 1: José */}
                    <div className="bg-sage-800/50 backdrop-blur-sm rounded-3xl p-8 border border-sage-700 hover:border-gold-500/50 transition-colors duration-300 group flex flex-col">
                        <div className="flex items-start mb-6">
                            <div className="p-4 bg-sage-900 rounded-2xl border border-sage-600 text-gold-400 group-hover:text-gold-300 group-hover:scale-110 transition-transform">
                                <Key className="w-8 h-8" />
                            </div>
                            <div className="ml-6">
                                <h3 className="text-2xl font-serif font-bold text-white mb-1">José</h3>
                                <p className="text-sage-400 text-sm font-medium">De la Prisión al Palacio</p>
                            </div>
                        </div>
                        <p className="text-sage-200 leading-relaxed mb-6 flex-grow">
                            Traicionado por su familia y encarcelado injustamente. Parecía el fin, pero Dios usó cada injusticia para posicionarlo donde salvaría a una nación.
                        </p>
                        <blockquote className="border-l-2 border-gold-500 pl-4 italic text-gold-100 font-serif text-sm">
                            "Vosotros pensasteis mal contra mí, mas Dios lo encaminó a bien..." 
                            <span className="block text-xs text-gold-500/80 mt-2 not-italic font-sans">- Génesis 50:20</span>
                        </blockquote>
                    </div>

                    {/* Story 2: Rut */}
                    <div className="bg-sage-800/50 backdrop-blur-sm rounded-3xl p-8 border border-sage-700 hover:border-gold-500/50 transition-colors duration-300 group flex flex-col">
                        <div className="flex items-start mb-6">
                            <div className="p-4 bg-sage-900 rounded-2xl border border-sage-600 text-gold-400 group-hover:text-gold-300 group-hover:scale-110 transition-transform">
                                <Wheat className="w-8 h-8" />
                            </div>
                            <div className="ml-6">
                                <h3 className="text-2xl font-serif font-bold text-white mb-1">Rut</h3>
                                <p className="text-sage-400 text-sm font-medium">Del Vacío a la Plenitud</p>
                            </div>
                        </div>
                        <p className="text-sage-200 leading-relaxed mb-6 flex-grow">
                            Viuda, extranjera y en la ruina. Cuando todo parecía perdido, su lealtad la llevó a un campo donde encontró redención y se convirtió en antepasada de Reyes.
                        </p>
                        <blockquote className="border-l-2 border-gold-500 pl-4 italic text-gold-100 font-serif text-sm">
                            "Tu pueblo será mi pueblo, y tu Dios mi Dios."
                            <span className="block text-xs text-gold-500/80 mt-2 not-italic font-sans">- Rut 1:16</span>
                        </blockquote>
                    </div>

                    {/* Story 3: David */}
                    <div className="bg-sage-800/50 backdrop-blur-sm rounded-3xl p-8 border border-sage-700 hover:border-gold-500/50 transition-colors duration-300 group flex flex-col">
                        <div className="flex items-start mb-6">
                            <div className="p-4 bg-sage-900 rounded-2xl border border-sage-600 text-gold-400 group-hover:text-gold-300 group-hover:scale-110 transition-transform">
                                <Crown className="w-8 h-8" />
                            </div>
                            <div className="ml-6">
                                <h3 className="text-2xl font-serif font-bold text-white mb-1">David</h3>
                                <p className="text-sage-400 text-sm font-medium">De la Cueva al Trono</p>
                            </div>
                        </div>
                        <p className="text-sage-200 leading-relaxed mb-6 flex-grow">
                            Antes de ser Rey, fue fugitivo. En la soledad de la cueva y la persecución nacieron los Salmos que hoy consuelan al mundo. Su dolor pulió su corazón.
                        </p>
                        <blockquote className="border-l-2 border-gold-500 pl-4 italic text-gold-100 font-serif text-sm">
                            "En mi angustia invoqué a Jehová... Él oyó mi voz."
                            <span className="block text-xs text-gold-500/80 mt-2 not-italic font-sans">- Salmo 18:6</span>
                        </blockquote>
                    </div>

                </div>
            </div>
        </section>
    );
};

export const FeaturedContent: React.FC = () => {
  const navigate = useNavigate();
  const latestDay = WEEKLY_DATA[0];
  const latestSong = SONGS_DATA[0];
  const latestReflection = REFLECTIONS_DATA[0];
  const latestVideo = YOUTUBE_RESOURCES_DATA[0];

  return (
    <section className="py-16 bg-sage-50 border-y border-sage-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
            <div>
                <h2 className="text-3xl font-serif font-bold text-sage-900">Lo Más Reciente</h2>
                <p className="mt-2 text-sage-600">Novedades en el camino.</p>
            </div>
            <button onClick={() => navigate('/camino-diario')} className="hidden sm:flex items-center text-gold-600 font-semibold hover:text-gold-700 transition-colors">
                Ver todo <ArrowRight className="ml-2 w-4 h-4" />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Daily Path */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer" onClick={() => navigate('/camino-diario')}>
                <div className="h-48 bg-sage-200 relative overflow-hidden">
                    <img src={latestDay.segments[0].embedUrl} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" alt="" />
                    <div className="absolute top-4 left-4 bg-gold-400 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        Camino Diario
                    </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-sage-900 font-serif mb-2 line-clamp-2 group-hover:text-gold-600 transition-colors">{latestDay.weekTitle}</h3>
                    <p className="text-sage-600 text-sm mb-4 line-clamp-3 flex-1">{latestDay.reflection}</p>
                    <div className="mt-auto text-sage-800 font-semibold text-sm flex items-center group-hover:text-gold-600">
                        Ver rutina de hoy <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                </div>
            </div>

             {/* Card 2: Latest Reflection */}
             <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer" onClick={() => navigate('/reflexiones')}>
                <div className="h-48 bg-sage-800 relative overflow-hidden">
                    <img src={latestReflection.image} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="" />
                    <div className="absolute top-4 left-4 bg-sage-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        Reflexión
                    </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-sage-900 font-serif mb-2 line-clamp-2 group-hover:text-gold-600 transition-colors">{latestReflection.title}</h3>
                    <p className="text-sage-600 text-sm mb-4 line-clamp-3 flex-1">{latestReflection.excerpt}</p>
                    <div className="mt-auto text-sage-800 font-semibold text-sm flex items-center group-hover:text-gold-600">
                        Leer artículo <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                </div>
            </div>

            {/* Card 3: Featured Video */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer" onClick={() => navigate('/videos')}>
                <div className="h-48 bg-black relative overflow-hidden group">
                    <img 
                        src={`https://img.youtube.com/vi/${latestVideo.youtubeId}/maxresdefault.jpg`} 
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300" 
                        alt={latestVideo.title} 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <PlayCircle className="w-12 h-12 text-white opacity-90 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        Video
                    </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-sage-900 font-serif mb-2 line-clamp-2 group-hover:text-gold-600 transition-colors">{latestVideo.title}</h3>
                    <p className="text-sage-600 text-sm mb-4 line-clamp-3 flex-1">{latestVideo.description}</p>
                    <div className="mt-auto text-sage-800 font-semibold text-sm flex items-center group-hover:text-gold-600">
                        Ver video <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                </div>
            </div>

            {/* Card 4: Latest Music */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border-t-4 border-gold-400">
                <div className="p-8 flex-1 flex flex-col justify-center items-center text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 shadow-lg ring-4 ring-sage-50">
                        <img src={latestSong.coverImage} className="w-full h-full object-cover" alt="" />
                    </div>
                    <h3 className="text-lg font-bold text-sage-900 font-serif mb-1">Canción Destacada</h3>
                    <p className="text-xl text-gold-600 font-serif italic mb-4">"{latestSong.title}"</p>
                    <p className="text-sage-600 text-sm mb-6 line-clamp-3">{latestSong.description}</p>
                    <button onClick={() => navigate('/musica')} className="px-6 py-2 bg-sage-900 text-white rounded-full text-sm font-medium hover:bg-gold-500 hover:text-sage-900 transition-all shadow-lg shadow-sage-900/20 transform hover:-translate-y-0.5">
                        Escuchar ahora
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};