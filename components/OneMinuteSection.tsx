import React, { useState } from 'react';
import { DAILY_VIDEOS_DATA } from '../constants';
import { DailyVideo } from '../types';
import { Clock, Filter, Instagram, Facebook, Video } from 'lucide-react';

const CATEGORIES = [
  "El amor de Dios",
  "El poder de la esperanza",
  "El poder de las palabras",
  "Sana tú primero",
  "Romper ciclos generacionales",
  "El poder de la gratitud",
  "Gracias mamá",
  "Del dolor al propósito",
  "Víctima o victorioso",
  "El poder de los pensamientos"
];

const OneMinuteSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  
  const [videos] = useState<DailyVideo[]>(DAILY_VIDEOS_DATA);

  const filteredVideos = activeCategory === "Todos" 
    ? videos 
    : videos.filter(video => video.topic === activeCategory);

  const getEmbedInfo = (url: string, platform: string) => {
    try {
      if (!url) return null;

      if (platform === 'instagram') {
        const match = url.match(/(?:instagram\.com|instagr\.am)\/(?:reel|p)\/([a-zA-Z0-9_-]+)/);
        if (match && match[1]) {
           return {
             type: 'iframe',
             src: `https://www.instagram.com/reel/${match[1]}/embed/` 
           };
        }
      } 
      
      if (platform === 'facebook') {
        let cleanUrl = url.split('?')[0];
        if (cleanUrl.includes('/reel/') && !cleanUrl.endsWith('/')) {
            cleanUrl += '/';
        }
        return {
            type: 'iframe',
            // Sin autoplay para mostrar la portada original (cover) de Facebook
            src: `https://www.facebook.com/plugins/video.php?height=1000&width=562&href=${encodeURIComponent(cleanUrl)}&show_text=false&t=0`
        };
      }

      if (platform === 'tiktok') {
        const match = url.match(/video\/(\d+)/);
        if (match && match[1]) {
             return {
                 type: 'iframe',
                 src: `https://www.tiktok.com/embed/v2/${match[1]}`
             };
        }
      }
    } catch (e) {
      console.error("Error parsing video URL", e);
    }
    return null;
  };

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="bg-sage-50 py-16 mb-12 border-b border-sage-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-6">
                <Clock className="w-8 h-8 text-gold-500" />
            </div>
            <h1 className="text-4xl font-serif font-bold text-sage-900 mb-4">Un Minuto de Esperanza</h1>
            <p className="text-xl text-sage-600 max-w-2xl mx-auto font-light leading-relaxed mb-4">
                A veces 60 segundos bastan para cambiar la perspectiva de tu día. 
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filtros */}
        <div className="flex flex-col items-center mb-12">
            <div className="flex items-center text-sage-400 text-sm mb-4 uppercase tracking-wider font-semibold">
                <Filter className="w-4 h-4 mr-2" /> Filtrar por tema
            </div>
            <div className="flex flex-wrap justify-center gap-3">
                <button 
                    onClick={() => setActiveCategory("Todos")}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                        activeCategory === "Todos"
                        ? "bg-sage-900 text-white border-sage-900 shadow-md transform scale-105"
                        : "bg-white text-sage-600 border-sage-200 hover:border-gold-400 hover:text-sage-900"
                    }`}
                >
                    Todos
                </button>
                
                {CATEGORIES.map((cat) => (
                    <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
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

        {/* Grilla de Videos */}
        {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredVideos.map((video) => {
                    const embedInfo = getEmbedInfo(video.videoUrl, video.platform);

                    return (
                        <div 
                            key={video.id} 
                            className="relative aspect-[9/16] bg-black rounded-2xl shadow-md overflow-hidden border border-sage-100 hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* IFRAME: Siempre visible para mostrar la portada real de Facebook */}
                            {embedInfo?.type === 'iframe' ? (
                                <iframe 
                                    src={embedInfo.src} 
                                    className="w-full h-full absolute inset-0 z-0"
                                    allowFullScreen={true}
                                    loading="lazy" 
                                    scrolling="no"
                                    style={{border: 'none', overflow: 'hidden'}}
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    title={video.title}
                                ></iframe>
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-sage-100 text-sage-400 absolute inset-0 z-0">
                                    <Video className="w-12 h-12 opacity-50" />
                                </div>
                            )}

                            {/* CAPA DE TEXTO SUPERPUESTA */}
                            {/* 'pointer-events-none' es CRUCIAL: permite que los clics pasen a través del texto y lleguen al video para darle Play */}
                            <div className="absolute inset-0 z-10 pointer-events-none">
                                {/* Gradientes para mejorar legibilidad */}
                                <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black/50 to-transparent opacity-60" />
                                <div className="absolute bottom-0 inset-x-0 h-3/5 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />

                                {/* Icono de Red Social */}
                                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md rounded-full p-1.5 shadow-sm border border-white/10">
                                    {video.platform === 'instagram' && <Instagram className="w-4 h-4 text-white" />}
                                    {video.platform === 'facebook' && <Facebook className="w-4 h-4 text-white" />}
                                    {video.platform === 'tiktok' && <Video className="w-4 h-4 text-white" />}
                                </div>

                                {/* Contenido (Texto) en la parte inferior */}
                                <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col items-start">
                                    {/* Etiqueta Amarilla */}
                                    <span className="inline-block bg-gold-500 text-sage-900 text-[10px] font-bold px-2 py-1 uppercase tracking-wider mb-2 rounded-sm shadow-sm">
                                        {video.topic}
                                    </span>
                                    
                                    {/* Título Blanco */}
                                    <h3 className="font-serif font-bold text-white text-lg leading-tight drop-shadow-md line-clamp-3">
                                        {video.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        ) : (
            <div className="text-center py-20 bg-sage-50 rounded-3xl border border-sage-100">
                <div className="inline-block p-4 bg-white rounded-full shadow-sm mb-4">
                    <Video className="w-8 h-8 text-sage-300" />
                </div>
                <h3 className="text-lg font-serif font-bold text-sage-900">No hay videos disponibles</h3>
                <p className="text-sage-500 mt-2">Intenta seleccionar otra categoría.</p>
                <button 
                    onClick={() => setActiveCategory("Todos")}
                    className="mt-6 px-6 py-2 bg-sage-200 text-sage-800 rounded-lg hover:bg-sage-300 transition-colors text-sm font-medium"
                >
                    Ver todos
                </button>
            </div>
        )}
        
        {/* Redes sociales */}
        <div className="mt-20">
            <p className="text-center text-sage-500 text-sm italic mb-6">Sigue viendo más contenido en mis redes sociales</p>
            
            <div className="flex flex-wrap justify-center gap-4">
                <a 
                    href="https://www.instagram.com/rorrodriguez25/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-white border border-sage-200 text-sage-600 rounded-xl hover:border-pink-300 hover:bg-pink-50 hover:text-pink-700 transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                    <Instagram className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span>Ver en Instagram</span>
                </a>

                <a 
                    href="https://www.facebook.com/profile.php?id=100009517063605" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-white border border-sage-200 text-sage-600 rounded-xl hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                    <Facebook className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span>Ver en Facebook</span>
                </a>

                <a 
                    href="https://www.tiktok.com/@ror_rodriguez?is_from_webapp=1&sender_device=pc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-white border border-sage-200 text-sage-600 rounded-xl hover:border-gray-400 hover:bg-gray-100 hover:text-black transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                    <Video className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span>Ver en TikTok</span>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OneMinuteSection;