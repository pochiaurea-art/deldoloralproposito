import React, { useState } from 'react';
import { YOUTUBE_RESOURCES_DATA } from '../constants';
import { Youtube, Filter, PlayCircle, Clock, Heart, Sparkles, ExternalLink } from 'lucide-react';

const CATEGORIES = ["Todos", "Ansiedad", "Perdón"];

const YoutubeLibrary: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const filteredVideos = activeCategory === "Todos" 
    ? YOUTUBE_RESOURCES_DATA 
    : YOUTUBE_RESOURCES_DATA.filter(video => video.category === activeCategory);

  // Función manejadora del clic
  const handleVideoClick = (video: typeof YOUTUBE_RESOURCES_DATA[0]) => {
     if (video.embeddable === false) {
         // Si no es embeddable, abrir en nueva pestaña
         window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank');
     } else {
         // Si es embeddable, reproducir inline
         setPlayingVideoId(video.id);
     }
  };

  return (
    <div className="bg-sage-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Pastoral */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-6 border border-sage-100">
             <Youtube className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-sage-900 mb-4">Biblioteca de Fe</h1>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto font-light leading-relaxed">
             Una selección cuidada de prédicas, testimonios y enseñanzas que han edificado, sanado y fortalecido la fe. Aquí no encontrarás ruido, sino contenido cristocéntrico y seguro, escogido para acompañar tu proceso real.
          </p>
        </div>

        {/* Guía de Inicio (Orientación) */}
        <div className="max-w-2xl mx-auto bg-white/60 rounded-xl p-4 mb-10 text-center border border-sage-200/50 backdrop-blur-sm">
            <p className="text-sage-700 text-sm flex items-center justify-center flex-wrap gap-2">
                <span className="flex items-center"><Sparkles className="w-4 h-4 text-gold-500 mr-2" /> <span className="font-semibold mr-1">Explora:</span></span> 
                <span><span className="text-gold-600 font-bold">Ansiedad</span> o <span className="text-gold-600 font-bold">Perdón</span>.</span>
            </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-col items-center mb-12">
            <div className="flex items-center text-sage-400 text-xs mb-3 uppercase tracking-wider font-bold">
                <Filter className="w-3 h-3 mr-2" /> Explora por temas
            </div>
            <div className="flex flex-wrap justify-center gap-3">
                {CATEGORIES.map((cat) => (
                    <button 
                        key={cat}
                        onClick={() => { setActiveCategory(cat); setPlayingVideoId(null); }}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                            activeCategory === cat
                            ? "bg-sage-900 text-white border-sage-900 shadow-md transform scale-105"
                            : "bg-white text-sage-600 border-sage-200 hover:border-gold-400 hover:text-sage-900"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        {/* Grid de Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
                <div key={video.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-sage-100 flex flex-col group relative">
                    
                    {/* Badge de "Selección" (Tag Emocional) */}
                    {video.tag && (
                        <div className="absolute top-3 left-3 z-20 bg-gold-400 text-sage-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm border border-gold-300/50">
                            {video.tag}
                        </div>
                    )}

                    {/* Área del Video o Miniatura */}
                    <div className="relative aspect-video bg-black group-hover:shadow-inner">
                        {playingVideoId === video.id && video.embeddable !== false ? (
                            <iframe 
                                key={video.youtubeId}
                                src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`} 
                                title={video.title}
                                className="w-full h-full absolute inset-0"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <button 
                                onClick={() => handleVideoClick(video)}
                                className="w-full h-full relative cursor-pointer group/image"
                            >
                                <img 
                                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`} 
                                    alt={video.title} 
                                    className="w-full h-full object-cover opacity-90 group-hover/image:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover/image:bg-black/10 transition-colors flex items-center justify-center">
                                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/50 group-hover/image:scale-110 transition-transform shadow-xl">
                                        {video.embeddable === false ? (
                                            <ExternalLink className="w-10 h-10 text-white" />
                                        ) : (
                                            <PlayCircle className="w-10 h-10 text-white fill-white" />
                                        )}
                                    </div>
                                </div>
                                {/* Duration Badge */}
                                {video.duration && (
                                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center">
                                        <Clock className="w-3 h-3 mr-1" /> {video.duration}
                                    </div>
                                )}
                            </button>
                        )}
                    </div>

                    {/* Información */}
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-2">
                            <span className="inline-block text-sage-400 text-[10px] font-bold uppercase tracking-wider">
                                {video.category}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-sage-900 font-serif mb-3 leading-tight group-hover:text-gold-600 transition-colors">
                            {video.title}
                        </h3>
                        
                        <p className="text-sage-600 text-sm leading-relaxed mb-4 flex-grow">
                            {video.description}
                        </p>

                        {/* Nota Pastoral de Curaduría */}
                        {video.curatorNote && (
                            <div className="mt-2 mb-5 bg-sage-50 p-3 rounded-lg border-l-2 border-gold-400">
                                <p className="text-xs text-sage-600 italic flex items-start">
                                    <Heart className="w-3 h-3 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>{video.curatorNote}</span>
                                </p>
                            </div>
                        )}
                        
                        <button 
                            onClick={() => handleVideoClick(video)}
                            className="text-sage-900 text-sm font-bold flex items-center mt-auto hover:text-gold-600 transition-colors border-t border-sage-100 pt-4"
                        >
                            {video.embeddable === false ? (
                                <>Ver en YouTube <ExternalLink className="w-4 h-4 ml-2" /></>
                            ) : (
                                <><PlayCircle className="w-4 h-4 mr-2" /> Ver Mensaje Completo</>
                            )}
                        </button>
                    </div>
                </div>
            ))}
        </div>

        {filteredVideos.length === 0 && (
            <div className="text-center py-20">
                <p className="text-sage-500">No hay videos en esta categoría por el momento.</p>
            </div>
        )}

      </div>
    </div>
  );
};

export default YoutubeLibrary;