
import React from 'react';
import { SONGS_DATA } from '../constants';
import { Sparkles, Heart, Music, Youtube } from 'lucide-react';

const MusicSection: React.FC = () => {
  
  // Función mejorada: Genera la URL correcta para el iframe de YouTube
  // Soporta videos individuales Y listas de reproducción (álbumes completos)
  const getYoutubeEmbedSrc = (url: string | undefined) => {
    if (!url) return null;

    try {
        const urlObj = new URL(url);
        const videoId = urlObj.searchParams.get('v');
        const listId = urlObj.searchParams.get('list');

        // Caso 1: Es una lista de reproducción (con o sin video específico)
        // Esto permite que el usuario vea el álbum completo y pueda saltar canciones
        if (listId) {
            if (videoId) {
                return `https://www.youtube.com/embed/${videoId}?list=${listId}`;
            }
            return `https://www.youtube.com/embed/videoseries?list=${listId}`;
        }

        // Caso 2: Es un video individual normal (formato largo)
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }

        // Caso 3: Formato corto (youtu.be)
        if (url.includes('youtu.be/')) {
            const id = url.split('youtu.be/')[1]?.split('?')[0];
            return id ? `https://www.youtube.com/embed/${id}` : null;
        }

        return null;
    } catch (e) {
        return null;
    }
  };

  return (
    <div className="bg-sage-900 min-h-screen py-16 text-sage-100 relative overflow-hidden">
      {/* Decoraciones de Fondo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sage-800 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-600 rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-sage-800 rounded-full shadow-inner mb-6 border border-sage-700 text-gold-400 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            Música Original
          </div>
          <h2 className="text-3xl font-serif font-bold text-white sm:text-5xl mb-6">
            Melodías para el Alma
          </h2>
          <p className="text-xl text-sage-200 leading-relaxed font-light">
            Escucha una muestra aquí o disfruta de la experiencia completa en tu plataforma favorita.
          </p>
        </div>

        {/* Grid de Canciones/Álbumes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
          {SONGS_DATA.map((song) => {
             // Obtenemos la URL del embed calculada dinámicamente
             const youtubeEmbedSrc = getYoutubeEmbedSrc(song.youtubeUrl);

             return (
                <div 
                    key={song.id} 
                    className="group rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 flex flex-col bg-sage-800 backdrop-blur-sm fade-in-up border border-white/5 hover:border-white/10 hover:shadow-gold-500/10"
                    style={{
                        // Ajuste de contraste: Borde superior sólido y gradiente interno más sutil
                        borderTop: `4px solid ${song.cardColor}`,
                        background: `linear-gradient(160deg, ${song.cardColor}15 0%, #1f404b 100%)`
                    }}
                >
                    {/* Sección Superior: Reproductor (Prioridad: Spotify Embed -> YouTube Embed -> Imagen Estática) */}
                    <div className="p-6 pb-0">
                         {song.spotifyEmbedUrl ? (
                            // 1. Spotify Player
                            <iframe 
                                style={{borderRadius: '12px'}} 
                                src={song.spotifyEmbedUrl} 
                                width="100%" 
                                height="352" 
                                frameBorder="0" 
                                allowFullScreen 
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                loading="lazy"
                                className="shadow-lg border border-white/10"
                            ></iframe>
                         ) : youtubeEmbedSrc ? (
                            // 2. YouTube Player (Soporta Playlists ahora)
                            <div className="w-full aspect-square rounded-xl overflow-hidden shadow-lg relative border border-white/10 bg-black">
                                <iframe 
                                    width="100%" 
                                    height="100%" 
                                    src={youtubeEmbedSrc} 
                                    title={song.title} 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowFullScreen
                                    className="absolute inset-0"
                                ></iframe>
                            </div>
                         ) : (
                             // 3. Fallback (Solo Imagen)
                             <div className="w-full aspect-square rounded-xl overflow-hidden shadow-lg relative">
                                 <img src={song.coverImage} alt={song.title} className="w-full h-full object-cover" />
                                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                     <Music className="w-16 h-16 text-white/50" />
                                 </div>
                             </div>
                         )}
                    </div>
                
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-4">
                            <h3 className="text-white font-serif font-bold text-2xl mb-1 group-hover:text-gold-400 transition-colors">{song.title}</h3>
                            <p 
                                className="text-sm font-bold uppercase tracking-wider" 
                                style={{ color: song.cardColor }} // Usar el color vibrante para el subtítulo
                            >
                                {song.album}
                            </p>
                        </div>

                        <p className="text-sage-200 text-sm leading-relaxed italic mb-6 border-l-2 pl-4" style={{ borderColor: `${song.cardColor}50` }}>
                            "{song.description}"
                        </p>
                        
                        {/* Botones de Acción Externa */}
                        <div className="flex gap-3 mt-auto pt-4 border-t border-white/10">
                            {song.spotifyUrl && (
                                <a 
                                    href={song.spotifyUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center py-2.5 rounded-xl text-xs font-bold transition-all border border-green-500/50 bg-green-900/30 text-green-100 hover:bg-green-600 hover:text-white group/btn"
                                >
                                    <Music className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" /> 
                                    Abrir Spotify
                                </a>
                            )}

                            {song.youtubeUrl && (
                                <a 
                                    href={song.youtubeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center py-2.5 rounded-xl text-xs font-bold transition-all bg-red-600/20 text-red-100 border border-red-500/50 hover:bg-red-600 hover:text-white group/btn"
                                >
                                    <Youtube className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" /> 
                                    Ver en YouTube
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            );
          })}
        </div>

        <div className="mt-24 text-center fade-in-up">
            <div className="inline-block p-8 bg-sage-800 rounded-3xl border border-sage-700 max-w-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/20 rounded-full blur-2xl"></div>
                <Heart className="w-8 h-8 text-gold-500 mx-auto mb-4 relative z-10" />
                <p className="text-sage-200 text-lg font-serif italic relative z-10">
                    "Que estas melodías sean el abrazo que necesitas hoy. Recuerda que Dios no desperdicia ninguna nota de tu historia."
                </p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default MusicSection;