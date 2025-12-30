

import { WeeklyContent, Song, Reflection, ViewState, DailyVideo, YoutubeResource } from './types';
import { Music, BookOpen, Heart, User, Mail, Sun, Clock, Youtube } from 'lucide-react';
import React from 'react';

// ==========================================
// 🧭 MENÚ DE NAVEGACIÓN
// ==========================================
export const NAV_LINKS = [
  { id: ViewState.HOME, label: 'Inicio', icon: <Heart className="w-4 h-4" />, path: '/' },
  { id: ViewState.WEEKLY, label: 'Camino Diario', icon: <Sun className="w-4 h-4" />, path: '/camino-diario' }, 
  { id: ViewState.ONE_MINUTE, label: 'Un Minuto de Esperanza', icon: <Clock className="w-4 h-4" />, path: '/un-minuto' },
  { id: ViewState.VIDEOS, label: 'Videos y Mensajes', icon: <Youtube className="w-4 h-4" />, path: '/videos' }, 
  { id: ViewState.MUSIC, label: 'Música', icon: <Music className="w-4 h-4" />, path: '/musica' },
  { id: ViewState.REFLECTIONS, label: 'Reflexiones', icon: <BookOpen className="w-4 h-4" />, path: '/reflexiones' },
  { id: ViewState.ABOUT, label: 'Sobre Mí', icon: <User className="w-4 h-4" />, path: '/sobre-mi' },
  { id: ViewState.CONTACT, label: 'Contacto', icon: <Mail className="w-4 h-4" />, path: '/contacto' },
];

// ==========================================
// 🏠 SECCIÓN DE TÓPICOS
// ==========================================
export const TOPICS_DATA = [
  { 
    id: 'diario', 
    title: 'Rutina Diaria', 
    description: 'Levántate, almuerza y acuéstate con Dios.', 
    icon: <Sun className="w-8 h-8 text-gold-500" />,
    path: '/camino-diario'
  },
  { 
    id: 'esperanza', 
    title: 'Dosis de Esperanza', 
    description: 'Videos cortos para levantar el ánimo.', 
    icon: <Clock className="w-8 h-8 text-gold-500" />,
    path: '/un-minuto'
  },
  { 
    id: 'youtube', 
    title: 'Mensajes Profundos', 
    description: 'Prédicas, testimonios y estudios bíblicos.', 
    icon: <Youtube className="w-8 h-8 text-gold-500" />, 
    path: '/videos'
  },
  { 
    id: 'musica', 
    title: 'Música y Paz', 
    description: 'Melodías para acompañar el silencio.', 
    icon: <Music className="w-8 h-8 text-gold-500" />,
    path: '/musica'
  },
];

// ==========================================
// 📅 CAMINO DIARIO (ANTES SEMANAL)
// ==========================================
export const WEEKLY_DATA: WeeklyContent[] = [
  {
    id: 'd1', 
    weekNumber: 'Día 1',
    weekTitle: 'Deja que Dios sea Tu Compañero de Jornada',
    reflection: 'Desde que abres los ojos por la mañana hasta que los cierras por la noche, Dios camina contigo. Él es tu guía al despertar, tu sustento en medio del día y tu descanso al anochecer. No importa lo que enfrentes, no estás solo. Cuando haces de Su presencia tu prioridad, cada momento del día se llena de propósito, paz y poder. Con Dios a tu lado, cada jornada se convierte en una oportunidad para crecer, confiar y descansar en su amor eterno.',
    segments: [
      { 
        id: 's1-m', 
        timeOfDay: 'morning', 
        title: 'Levántate con Alegría', 
        platform: 'tiktok', 
        caption: '☀️ Antes de oír al mundo... quiero oír a Dios. 📖 Salmo 143:8 Su misericordia me despierta. Su voz me dirige.', 
        embedUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop', 
        videoUrl: 'https://www.tiktok.com/@ror_rodriguez/photo/7582924794035735821?is_from_webapp=1&sender_device=pc&web_id=7558450472173422094' 
      },
      { 
        id: 's1-n', 
        timeOfDay: 'noon', 
        title: 'Almuerza con Fe', 
        platform: 'tiktok', 
        caption: '🍽️ Dios puede hacer mucho más de lo que estás pidiendo hoy. 📖 Efesios 3:20 No limites a un Dios ilimitado. Él está obrando en ti.', 
        embedUrl: 'https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=600&auto=format&fit=crop', 
        videoUrl: 'https://www.tiktok.com/@ror_rodriguez/photo/7580782249902198029?is_from_webapp=1&sender_device=pc&web_id=7558450472173422094' 
      },
      { 
        id: 's1-ng', 
        timeOfDay: 'night', 
        title: 'Acuéstate con Dios', 
        platform: 'tiktok', 
        caption: 'Entrega tus cargas antes de dormir. Descansa en Su paz, mañana será otro día.', 
        embedUrl: 'https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?q=80&w=600&auto=format&fit=crop', 
        videoUrl: 'https://www.tiktok.com/@ror_rodriguez/photo/7586456781908348173?is_from_webapp=1&sender_device=pc' 
      },
    ]
  }
];

// ==========================================
// 🎵 MÚSICA
// ==========================================
export const SONGS_DATA: Song[] = [
  {
    id: 'gloria_redentor',
    title: 'Gloria al Redentor',
    album: 'Sencillo',
    description: 'Una canción que nace de lo que verdaderamente significa la Navidad: la certeza de que Cristo nace y habita en nuestro corazón cada día.',
    // Eliminado spotifyEmbedUrl para forzar el uso de YouTube Embed y evitar error
    spotifyUrl: 'https://open.spotify.com/album/5xeYwa101k1N6LWSEvMXZA', 
    youtubeUrl: 'https://www.youtube.com/watch?v=egy015VCUks',
    coverImage: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&w=800&auto=format&fit=crop',
    // Color actualizado para mejor contraste (Dorado Intenso)
    cardColor: '#eab308' 
  },
  {
    id: 'nunca_sola',
    title: 'Nunca Estás Sola',
    album: 'Sencillo',
    description: 'Un recordatorio musical de que en los momentos de silencio y soledad, Su presencia sigue contigo abrazando tu proceso.',
    spotifyUrl: 'https://open.spotify.com/album/7ECYFTuulxzNoKWc0GaP6q',
    // URL Corregida: Se eliminó '&list=...' para que se muestre como video único
    youtubeUrl: 'https://www.youtube.com/watch?v=V_fABEiJmwU', 
    coverImage: 'https://images.unsplash.com/photo-1499209974431-2771e8608f63?q=80&w=800&auto=format&fit=crop', 
    // Color actualizado para mejor contraste (Rosa Vivo)
    cardColor: '#ec4899' 
  },
  {
    id: 'plan_perfecto',
    title: 'Tu Plan Perfecto en Mí',
    album: 'Disco / Álbum',
    description: 'Un recordatorio musical de que, aunque no entendamos el proceso, Dios tiene un diseño perfecto y un propósito que se cumple en su tiempo.',
    // ELIMINADO spotifyEmbedUrl para usar YouTube (Lista completa) y evitar límite de 30s de Spotify
    spotifyUrl: 'https://open.spotify.com/album/4k6zuSTPLV3XDrraeAGfGC',
    youtubeUrl: 'https://www.youtube.com/watch?v=cfcv9sQ6z6Q&list=OLAK5uy_nJIBRBuL6h1N9mTa2671Fl3PRWsyt4I2s', 
    coverImage: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=800&auto=format&fit=crop', 
    // Color actualizado para mejor contraste (Cyan Vivo)
    cardColor: '#06b6d4' 
  }
];

// ==========================================
// ✍️ REFLEXIONES
// ==========================================
export const REFLECTIONS_DATA: Reflection[] = [
  {
    id: 'r1',
    title: 'No eres tus errores',
    date: '29 de diciembre de 2025',
    excerpt: 'A menudo nos juzgamos por nuestras caídas, pero la mirada de Jesús se enfoca en nuestra capacidad de levantarnos.',
    fullText: 'Vivimos en una sociedad que nos etiqueta por nuestros fallos. Si fallaste en un proyecto, "eres un fracasado". Si terminaste una relación, "no sabes amar". Pero la lógica del Reino es distinta. Jesús no miró a Pedro solo como el que lo negó, sino como la piedra sobre la que edificaría su iglesia. Tus errores son parte de tu historia, no tu identidad completa. Eres amado, eres perdonado y siempre tienes una nueva oportunidad para empezar de nuevo.',
    image: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=800&auto=format&fit=crop' 
  },
  {
    id: 'r2',
    title: 'La paciencia todo lo alcanza',
    date: '26 de diciembre de 2025',
    excerpt: 'En un mundo de inmediatez, aprender a esperar es un acto de fe y de amor propio.',
    fullText: 'Queremos respuestas ya. Queremos sanar ya. Queremos que el dolor desaparezca ahora mismo. Pero los procesos del alma, como los de la naturaleza, tienen sus tiempos. La oruga no se convierte en mariposa por fuerza, sino por proceso. Ten paciencia contigo mismo. Dios no tiene prisa, Él está trabajando en tu interior incluso cuando parece que nada sucede.',
    image: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?q=80&w=800&auto=format&fit=crop'
  }
];

// ==========================================
// 📺 YOUTUBE VIDEO LIBRARY (NUEVO)
// ==========================================
export const YOUTUBE_RESOURCES_DATA: YoutubeResource[] = [
  {
    id: 'ansiedad_1',
    title: 'Cuando la ansiedad ataca (Dr. Charles Stanley)',
    description: 'Aprende a identificar y vencer los ataques de ansiedad confiando en Dios.',
    youtubeId: '3dGrJLTREu0',
    category: 'Ansiedad',
    duration: '26 min',
    tag: 'Ansiedad',
    embeddable: true
  },
  {
    id: 'ansiedad_2',
    title: 'La Paz De Dios (Dr. Charles Stanley)',
    description: 'Encuentra esa paz sobrenatural que guarda tu corazón en tiempos difíciles.',
    youtubeId: 'QsXQOjb17ro',
    category: 'Ansiedad',
    duration: '26 min',
    tag: 'Ansiedad',
    embeddable: true
  },
  {
    id: 'ansiedad_3',
    title: 'Cómo manejar la ansiedad (Dr. Charles Stanley)',
    description: 'Pasos bíblicos y prácticos para no dejar que la ansiedad controle tu vida.',
    youtubeId: 'T8hk22K97aE',
    category: 'Ansiedad',
    duration: '26 min',
    tag: 'Ansiedad',
    embeddable: true
  },
  {
    id: 'ansiedad_4',
    title: 'La cura para la ansiedad (Dr. Charles Stanley)',
    description: 'La receta divina para calmar una mente preocupada y agitada.',
    youtubeId: 'PpoVxkn1aAM',
    category: 'Ansiedad',
    duration: '26 min',
    tag: 'Ansiedad',
    embeddable: true
  },
  {
    id: 'ansiedad_5',
    title: 'Libertad de la ansiedad (Dr. Charles Stanley)',
    description: 'Descubre la libertad que Cristo ofrece frente al miedo y la preocupación.',
    youtubeId: 'IX98yNm7qds',
    category: 'Ansiedad',
    duration: '26 min',
    tag: 'Ansiedad',
    embeddable: true
  },
  {
    id: 'y_stanley_1',
    title: 'Cómo manejar la ansiedad (Versión Extendida)',
    description: 'Una enseñanza profunda y completa sobre cómo enfrentar nuestras preocupaciones.',
    youtubeId: 'rrCITmgECcg',
    category: 'Ansiedad',
    duration: '52 min',
    tag: 'Ansiedad',
    embeddable: true
  },
  {
    id: 'perdon_1',
    title: 'El perdón: La llave de la libertad',
    description: 'Descubre cómo el perdón rompe las cadenas del rencor y trae paz a tu alma.',
    youtubeId: 'oPTj7GkEkhI',
    category: 'Perdón',
    duration: '27 min',
    tag: 'Perdonar',
    embeddable: true
  },
  {
    id: 'perdon_2',
    title: 'Pasos para otorgar el perdón',
    description: 'Guía práctica y bíblica para aprender a perdonar a quienes nos han herido.',
    youtubeId: 'z5boKmTdip0',
    category: 'Perdón',
    duration: '26 min',
    tag: 'Perdonar',
    embeddable: true
  },
  {
    id: 'perdon_3',
    title: 'El costo de no perdonar',
    description: 'Entiende las consecuencias espirituales y emocionales de aferrarse al dolor.',
    youtubeId: 'wPyDWbrtBSw',
    category: 'Perdón',
    duration: '26 min',
    tag: 'Perdonar',
    embeddable: true
  },
  {
    id: 'perdon_4',
    title: 'Perdonando lo imperdonable',
    description: 'Cómo encontrar la fuerza en Dios para perdonar las heridas más profundas.',
    youtubeId: 'Su0wG9Zbdy4',
    category: 'Perdón',
    duration: '26 min',
    tag: 'Perdonar',
    embeddable: true
  },
  {
    id: 'perdon_5',
    title: 'La decisión de perdonar',
    description: 'El perdón no es un sentimiento, es una decisión que libera tu corazón.',
    youtubeId: 'Nf7Fd3heNdo',
    category: 'Perdón',
    duration: '26 min',
    tag: 'Perdonar',
    embeddable: true
  },
  {
    id: 'perdon_6',
    title: 'Libertad total a través del perdón',
    description: 'Experimenta la plenitud de vida que viene cuando decides soltar el pasado.',
    youtubeId: 'uxl_Pv5Py_U',
    category: 'Perdón',
    duration: '26 min',
    tag: 'Perdonar',
    embeddable: true
  }
];

// ==========================================
// ⏱️ UN MINUTO DE ESPERANZA (VIDEOS DIARIOS)
// ==========================================
export const DAILY_VIDEOS_DATA: DailyVideo[] = [
  {
    id: 'v20',
    title: 'Antes de que hicieras algo... Dios ya te amaba',
    date: 'Reciente',
    topic: 'El amor de Dios',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.facebook.com/reel/25961835866757717/'
  },
  {
    id: 'v22',
    title: 'El amor de Dios no falla',
    date: 'Reciente',
    topic: 'El amor de Dios',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1499209974431-2771e8608f63?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/1562346155093682/'
  },
  {
    id: 'v23',
    title: 'Jesús no vino a visitarte... vino a quedarse contigo',
    date: 'Reciente',
    topic: 'El amor de Dios',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/725002414011016/'
  },
  {
    id: 'v24',
    title: 'Si hubieras sido el único en la tierra... Jesús habría venido igual',
    date: 'Reciente',
    topic: 'El amor de Dios',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/1303899611496548/'
  },
  {
    id: 'v21',
    title: 'Dios no solo dijo que te amaba... lo demostró',
    date: 'Reciente',
    topic: 'El amor de Dios',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544098485-2a2ed6da40cf?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.facebook.com/reel/879623994542620/'
  },
  {
    id: 'v2',
    title: 'Tus palabras también te afectan a ti',
    date: '18 Dic, 2025',
    topic: 'El poder de las palabras',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/1736375297031022'
  },
  {
    id: 'v1',
    title: 'Tú eres el llamado a hablar bendición sobre tu familia',
    date: 'Reciente',
    topic: 'El poder de las palabras',
    platform: 'facebook', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/1218126540252289' 
  },
  {
    id: 'v3',
    title: 'Aunque duela habla palabras de bendición',
    date: 'Reciente',
    topic: 'El poder de las palabras',
    platform: 'facebook', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/897368676302222' 
  },
  {
    id: 'v4',
    title: 'Tus palabras construyen o destruyen a quienes amas',
    date: 'Reciente',
    topic: 'El poder de las palabras',
    platform: 'facebook', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1499209974431-2771e8608f63?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/1600031014482283' 
  },
  {
    id: 'v5',
    title: 'Dios quiere que sanes para que ayudes a otros a sanar',
    date: 'Reciente',
    topic: 'Sana tú primero',
    platform: 'facebook', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/731729723310322' 
  },
  {
    id: 'v6',
    title: 'Para sanar completamente es necesario perdonar',
    date: 'Reciente',
    topic: 'Sana tú primero',
    platform: 'facebook', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/2236228986861023' 
  },
  {
    id: 'v7',
    title: 'Tus hijos necesitan ver tu proceso de sanidad para aprender a sanar',
    date: 'Reciente',
    topic: 'Sana tú primero',
    platform: 'facebook', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/849816164534681/' 
  },
  {
    id: 'v8',
    title: 'Lo que no sanas lo repites y heredas a tu descendencia',
    date: 'Reciente',
    topic: 'Sana tú primero',
    platform: 'facebook', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1475483768296-6163e08872a1?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/888570366925435' 
  },
  {
    id: 'v9',
    title: 'Sana tú primero y hereda sanidad a los más que amas',
    date: 'Reciente',
    topic: 'Sana tú primero',
    platform: 'facebook', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/835037935824995' 
  },
  {
    id: 'v10',
    title: 'Rompe con lo que te rompió',
    date: 'Reciente',
    topic: 'Romper ciclos generacionales',
    platform: 'facebook', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/866048069284632' 
  },
  {
    id: 'v11',
    title: 'Puedes empezar una nueva historia familiar',
    date: 'Reciente',
    topic: 'Romper ciclos generacionales',
    platform: 'facebook', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/3911989228945561' 
  },
  {
    id: 'v12',
    title: 'Tus decisiones de hoy pueden dejar un legado generacional',
    date: 'Reciente',
    topic: 'Romper ciclos generacionales',
    platform: 'facebook', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/858672163199145' 
  },
  {
    id: 'v13',
    title: 'Contigo se puede romper el ciclo de dolor generacional',
    date: 'Reciente',
    topic: 'Romper ciclos generacionales',
    platform: 'facebook', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/857166010145818' 
  },
  {
    id: 'v14',
    title: 'No viniste a repetir tu historia familiar viniste a cambiarla',
    date: 'Reciente',
    topic: 'Romper ciclos generacionales',
    platform: 'facebook', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/1377538717496724' 
  },
  {
    id: 'v15',
    title: 'Tu esperanza debe venir de lo que nunca cambia el amor de Dios',
    date: 'Reciente',
    topic: 'El poder de la esperanza',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1504192010706-dd7f93892c39?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/2402522306854216'
  },
  {
    id: 'v16',
    title: 'Tu esperanza se renueva cuando entiendes que todo obra para tu bien en las manos de Dios',
    date: 'Reciente',
    topic: 'El poder de la esperanza',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1628135805565-d6d1d4f40776?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/4228366654103035'
  },
  {
    id: 'v17',
    title: 'Lo que te roba la esperanza hoy Dios lo puede convertir en el inicio de tu victoria',
    date: 'Reciente',
    topic: 'El poder de la esperanza',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/1255942616371731'
  },
  {
    id: 'v18',
    title: 'No pierdas la esperanza porque estás siendo formado en las dificultades',
    date: 'Reciente',
    topic: 'El poder de la esperanza',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1492305175278-c4e4e1344708?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.facebook.com/reel/2393650577719336'
  },
  {
    id: 'v19',
    title: 'La esperanza no se pierde se elige',
    date: 'Archivo',
    topic: 'El poder de la esperanza',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/1304674085005137'
  },
  {
    id: 'v25',
    title: "Mamá Dios no se ha olvidado de ti",
    date: 'Reciente',
    topic: 'Gracias mamá',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/2021730871994834/'
  },
  {
    id: 'v26',
    title: "Mamá no fuiste perfecta pero diste todo lo que tenias",
    date: 'Reciente',
    topic: 'Gracias mamá',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1616885375492-493433575975?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/1790130908319482/'
  },
  {
    id: 'v27',
    title: "Mamá aunque no te lo digan, tú marcaste sus vidas",
    date: 'Reciente',
    topic: 'Gracias mamá',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1525385652636-928d39414da3?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/1089297676231269/'
  },
  {
    id: 'v28',
    title: "Mamá no pierdas la fe por ese hijo, sigue orando",
    date: 'Reciente',
    topic: 'Gracias mamá',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.facebook.com/reel/2060708648093119/'
  },
  {
    id: 'v29',
    title: "Mamá puede que la relación con tu hijo esté rota pero a su tiempo se restaurará",
    date: 'Reciente',
    topic: 'Gracias mamá',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1596920806899-2321287c2c98?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.facebook.com/reel/4154562611525722/'
  },
  {
    id: 'v30',
    title: "La verdadera gratitud se demuestra cuando aún te falta",
    date: 'Reciente',
    topic: 'El poder de la gratitud',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1505243542579-da5adfe8338f?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.facebook.com/reel/758588307204073/'
  },
  {
    id: 'v31',
    title: "No siempre entenderás lo que Dios permite... pero aún así puedes agradecerle",
    date: 'Reciente',
    topic: 'El poder de la gratitud',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.facebook.com/reel/749080634858571/'
  },
  {
    id: 'v32',
    title: "Hoy, en vez de quejarte, cuenta tus bendiciones y agradece",
    date: 'Reciente',
    topic: 'El poder de la gratitud',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1499209974431-2771e8608f63?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.facebook.com/reel/1362625005239304/'
  },
  {
    id: 'v33',
    title: "Hoy, suelta la queja... y elige agradecer",
    date: 'Reciente',
    topic: 'El poder de la gratitud',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1560252159-c1b72d27f258?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.facebook.com/reel/1774679396554057/'
  },
  {
    id: 'v34',
    title: "A veces, lo que parece destrucción es solo Dios refinándote",
    date: 'Reciente',
    topic: 'Del dolor al propósito',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1599689018260-845244517b6a?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.facebook.com/reel/982567500747459/'
  },
  {
    id: 'v35',
    title: "Dios no solo abre puertas... también cierra las que ya no llevan a tu propósito",
    date: 'Reciente',
    topic: 'Del dolor al propósito',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.facebook.com/reel/24817353944600148/'
  },
  {
    id: 'v36',
    title: "En lo que sales de esto... vive, aprende y sigue agradeciendo",
    date: 'Reciente',
    topic: 'Del dolor al propósito',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.facebook.com/reel/1553089255831191/'
  },
  {
    id: 'v37',
    title: "El dolor no es tu destino pero puede ser el puente que te lleva a el",
    date: 'Reciente',
    topic: 'Del dolor al propósito',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.facebook.com/reel/25275406415428323/'
  },
  {
    id: 'v38',
    title: "Tu dolor no fue en vano, Dios lo usas para llevarte a tu propósito",
    date: 'Reciente',
    topic: 'Del dolor al propósito',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.facebook.com/reel/1227941942507037/'
  },
  {
    id: 'v39',
    title: "Somos más que vencedores por medio de Aquel que nos amó",
    date: 'Reciente',
    topic: 'Víctima o victorioso',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.facebook.com/reel/1132428329059262/'
  },
  {
    id: 'v40',
    title: "La autocompasión te estanca y mantiene atado al dolor",
    date: 'Reciente',
    topic: 'Víctima o victorioso',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1531303435785-3c5345d58d5c?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/1612327866412462/'
  },
  {
    id: 'v41',
    title: "Ser herido no te hace vencido",
    date: 'Reciente',
    topic: 'Víctima o victorioso',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/1166874311438475/'
  },
  {
    id: 'v42',
    title: "No peleas por victoria, peleas desde la victoria",
    date: 'Reciente',
    topic: 'Víctima o victorioso',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop', 
    videoUrl: 'https://www.facebook.com/reel/1181655750684989/'
  },
  {
    id: 'v43',
    title: "No cambiarás tu vida si no cambias tu forma de pensar",
    date: 'Reciente',
    topic: 'El poder de los pensamientos',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1494178270175-e96de2971df9?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.facebook.com/reel/1353969236235895/'
  },
  {
    id: 'v44',
    title: "Tu mente puede ser el lugar donde pierdes... o donde comienzas a avanzar",
    date: 'Reciente',
    topic: 'El poder de los pensamientos',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.facebook.com/reel/1360853215752958/'
  },
  {
    id: 'v45',
    title: "No creas en las mentiras que el enemigo sembró...cree en las promesas de Dios",
    date: 'Reciente',
    topic: 'El poder de los pensamientos',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.facebook.com/reel/819708570639780/'
  },
  {
    id: 'v46',
    title: "¿Quién te dijo que no podías? No creas estas mentiras",
    date: 'Reciente',
    topic: 'El poder de los pensamientos',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3a4?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.facebook.com/reel/1161686692067709/'
  },
  {
    id: 'v47',
    title: "No puedes controlar todo lo que te pasa... pero sí puedes decidir la actitud ante lo que te pasa",
    date: 'Reciente',
    topic: 'El poder de los pensamientos',
    platform: 'facebook',
    thumbnailUrl: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.facebook.com/reel/582850378253589/'
  }
];
