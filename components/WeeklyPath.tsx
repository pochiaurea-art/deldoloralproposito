
import React, { useState } from 'react';
import { WEEKLY_DATA } from '../constants';
import { Video, Sun, Moon, Coffee, Utensils, Play, MessageCircle, ExternalLink, X } from 'lucide-react';

// Sub-componente para gestionar la miniatura de forma robusta
// Simplificado: Ahora confía plenamente en la imagen de fallback (Unsplash) proporcionada en la data
// Esto evita errores de CORS o URLs rotas al intentar fetchear miniaturas de TikTok
const SmartThumbnail = ({ fallbackImage, altText }: { fallbackImage: string, altText: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="w-full h-full relative bg-sage-200 flex items-center justify-center overflow-hidden">
        {/* Loading Spinner - Visible mientras carga la imagen */}
        {!isLoaded && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center z-0">
               <Sun className="w-8 h-8 text-sage-300 animate-spin" />
            </div>
        )}

        {/* Fallback Visual si la imagen falla completamente (raro con Unsplash) */}
        {hasError && (
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-sage-200 z-20">
                 <Video className="w-12 h-12 text-sage-300/50" />
             </div>
        )}

        {/* La Imagen Principal */}
        {!hasError && (
            <img 
                src={fallbackImage} 
                alt={altText}
                onLoad={() => setIsLoaded(true)}
                onError={() => setHasError(true)}
                className={`relative z-10 w-full h-full object-cover transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} group-hover/card:scale-105`} 
            />
        )}
    </div>
  );
};

const WeeklyPath: React.FC = () => {
  // Estado para controlar qué video se está reproduciendo actualmente
  const [playingSegmentId, setPlayingSegmentId] = useState<string | null>(null);

  const getIconForTime = (time: 'morning' | 'noon' | 'night') => {
    switch(time) {
        case 'morning': return <Coffee className="w-5 h-5" />;
        case 'noon': return <Utensils className="w-5 h-5" />;
        case 'night': return <Moon className="w-5 h-5" />;
    }
  };

  const getColorForTime = (time: 'morning' | 'noon' | 'night') => {
    switch(time) {
        case 'morning': return 'text-orange-500 bg-orange-100 border-orange-200';
        case 'noon': return 'text-gold-600 bg-gold-100 border-gold-200';
        case 'night': return 'text-indigo-500 bg-indigo-100 border-indigo-200';
    }
  };

  // Función para extraer el ID del video de TikTok desde la URL (soporta /video/ y /photo/)
  const getTikTokId = (url: string) => {
    try {
        const match = url.match(/(?:video|photo)\/(\d+)/);
        return match ? match[1] : null;
    } catch (e) {
        return null;
    }
  };

  const handleSegmentClick = (segmentId: string, url: string) => {
    const videoId = getTikTokId(url);
    if (videoId) {
        // Si es un video válido de TikTok, lo reproducimos aquí
        setPlayingSegmentId(segmentId);
    } else {
        // Si no (es un link genérico o a perfil), abrimos en nueva pestaña
        window.open(url, '_blank');
    }
  };

  return (
    <div className="bg-sage-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4">
             <Sun className="w-8 h-8 text-gold-500" />
          </div>
          <h2 className="text-base font-semibold text-sage-600 uppercase tracking-wide">Construyendo hábitos de fe</h2>
          <h1 className="mt-2 text-3xl font-serif font-bold leading-8 tracking-tight text-sage-900 sm:text-5xl">
            Tu Camino Diario
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-sage-700 mx-auto font-light">
            Conéctate con el propósito de Dios tres veces al día. Sigue esta rutina para mantener tu corazón en paz y tu mente enfocada.
          </p>
        </div>

        <div className="space-y-24">
          {WEEKLY_DATA.map((day) => (
            <div key={day.id} className="relative">
              
              {/* Day Container */}
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-sage-100 relative overflow-hidden">
                 {/* Decorative background element */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>

                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12">
                    
                    {/* Header del Día (Izquierda en desktop) */}
                    <div className="lg:w-1/3 mb-10 lg:mb-0 lg:sticky lg:top-24">
                        <div className="inline-block bg-sage-900 text-gold-400 font-bold font-serif px-4 py-1.5 rounded-full text-sm mb-4 shadow-md">
                            {day.weekNumber}
                        </div>
                        <h3 className="text-3xl font-bold text-sage-900 font-serif mb-4 leading-tight">{day.weekTitle}</h3>
                        
                         {/* Pastoral Reflection Block */}
                         <div className="bg-sage-50 rounded-2xl p-6 border-l-4 border-gold-400 relative mb-6">
                            <MessageCircle className="absolute top-4 right-4 text-sage-200 w-6 h-6" />
                            <h4 className="text-sage-800 font-semibold mb-2 text-xs uppercase tracking-wider">Reflexión de hoy:</h4>
                            <p className="text-sage-700 italic leading-relaxed text-base">
                                "{day.reflection}"
                            </p>
                        </div>
                    </div>

                    {/* Timeline de 3 momentos (Derecha en desktop) */}
                    <div className="lg:w-2/3 relative">
                        {/* Linea vertical conectora */}
                        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-sage-100 hidden sm:block"></div>

                        <div className="space-y-8">
                            {day.segments.map((segment) => {
                                const isPlaying = playingSegmentId === segment.id;
                                const tiktokId = getTikTokId(segment.videoUrl);

                                return (
                                <div key={segment.id} className="relative flex flex-col sm:flex-row items-start group">
                                    
                                    {/* Icono de tiempo */}
                                    <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center shadow-sm ${getColorForTime(segment.timeOfDay)} mb-4 sm:mb-0 sm:mr-6 transition-transform ${!isPlaying ? 'group-hover:scale-110' : ''} duration-300`}>
                                        {getIconForTime(segment.timeOfDay)}
                                    </div>

                                    {/* Card de contenido */}
                                    <div className={`flex-1 w-full bg-white rounded-2xl border border-sage-100 shadow-sm transition-all duration-300 overflow-hidden ${isPlaying ? 'ring-4 ring-gold-100' : 'hover:shadow-lg group/card cursor-pointer'}`}>
                                        
                                        {isPlaying && tiktokId ? (
                                            // VISTA DE REPRODUCTOR (EMBED)
                                            <div className="relative bg-black w-full flex flex-col animate-fade-in">
                                                <div className="flex justify-between items-center p-3 bg-sage-900 text-white">
                                                    <span className="text-xs font-bold uppercase tracking-wider flex items-center">
                                                        <Video className="w-3 h-3 mr-2" /> Reproduciendo TikTok
                                                    </span>
                                                    <button 
                                                        onClick={(e) => { e.stopPropagation(); setPlayingSegmentId(null); }}
                                                        className="p-1 hover:bg-white/20 rounded-full transition-colors"
                                                        title="Cerrar video"
                                                    >
                                                        <X className="w-5 h-5" />
                                                    </button>
                                                </div>
                                                <div className="relative w-full aspect-[9/16] sm:aspect-auto sm:h-[550px]"> 
                                                    <iframe 
                                                        src={`https://www.tiktok.com/embed/v2/${tiktokId}`}
                                                        className="absolute inset-0 w-full h-full"
                                                        frameBorder="0"
                                                        allowFullScreen
                                                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                                    ></iframe>
                                                </div>
                                            </div>
                                        ) : (
                                            // VISTA NORMAL (TARJETA)
                                            <div 
                                                className="flex flex-col sm:flex-row w-full items-stretch"
                                                onClick={() => handleSegmentClick(segment.id, segment.videoUrl)}
                                            >
                                                {/* Thumbnail / Video Placeholder - Dimensiones mejoradas */}
                                                <div className="w-full sm:w-72 h-64 sm:h-auto sm:min-h-[16rem] bg-sage-200 relative overflow-hidden flex-shrink-0">
                                                    {/* Usamos el componente simplificado sin fetch automatico */}
                                                    <SmartThumbnail 
                                                        fallbackImage={segment.embedUrl}
                                                        altText={segment.title}
                                                    />
                                                    
                                                    {/* Overlay con icono Play */}
                                                    <div className="absolute inset-0 bg-black/10 group-hover/card:bg-black/20 transition-colors flex items-center justify-center z-10">
                                                        <div className="bg-white/30 backdrop-blur-sm p-4 rounded-full border border-white/60 shadow-lg group-hover/card:scale-110 transition-transform">
                                                            {tiktokId ? <Play className="w-8 h-8 text-white fill-white" /> : <ExternalLink className="w-8 h-8 text-white" />}
                                                        </div>
                                                    </div>

                                                    {/* Social Badge */}
                                                    <div className="absolute bottom-3 right-3 z-20 bg-black/70 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded-full capitalize flex items-center border border-white/20">
                                                        <Video className="w-3 h-3 mr-1" />
                                                        {segment.platform}
                                                    </div>
                                                </div>

                                                {/* Texto */}
                                                <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
                                                    <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                                                        segment.timeOfDay === 'morning' ? 'text-orange-500' :
                                                        segment.timeOfDay === 'noon' ? 'text-gold-600' : 'text-indigo-500'
                                                    }`}>
                                                        {segment.timeOfDay === 'morning' ? 'Mañana' : segment.timeOfDay === 'noon' ? 'Mediodía' : 'Noche'}
                                                    </div>
                                                    <h4 className="text-xl md:text-2xl font-serif font-bold text-sage-900 mb-3 group-hover/card:text-gold-600 transition-colors leading-tight">
                                                        {segment.title}
                                                    </h4>
                                                    <p className="text-sage-600 text-sm md:text-base leading-relaxed mb-6">
                                                        {segment.caption}
                                                    </p>
                                                    <span className="inline-flex items-center text-sm font-bold text-sage-900 group-hover/card:text-gold-600 transition-colors mt-auto">
                                                        {tiktokId ? (
                                                            <>Reproducir video <Play className="w-4 h-4 ml-2 fill-current" /></>
                                                        ) : (
                                                            <>Abrir en TikTok <ExternalLink className="w-4 h-4 ml-2" /></>
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            )})}
                        </div>
                    </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default WeeklyPath;
