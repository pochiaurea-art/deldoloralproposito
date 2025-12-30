
export type SocialPlatform = 'instagram' | 'tiktok' | 'facebook';

export type TimeOfDay = 'morning' | 'noon' | 'night';

export interface DailySegment {
  id: string;
  title: string; // "Levántate con Alegría", etc.
  timeOfDay: TimeOfDay;
  platform: SocialPlatform;
  embedUrl: string; // Esta sigue siendo la IMAGEN de portada (Unsplash)
  videoUrl: string; // NUEVO: El enlace directo al video de TikTok
  caption: string;
}

export interface WeeklyContent {
  id: string;
  weekTitle: string; // Ahora actuará como "Título del Día"
  weekNumber: string; // Ahora actuará como "Día X"
  reflection: string;
  segments: DailySegment[]; // Reemplaza a 'posts'
}

export interface SocialPost {
  id: string;
  platform: SocialPlatform;
  embedUrl: string;
  caption: string;
}

export interface AlbumTrack {
  title: string;
  duration: string;
  url: string; // Ruta al archivo de audio específico
}

export interface Song {
  id: string;
  title: string;
  album: string;
  description: string;
  audioFile: string; // Archivo principal o por defecto
  tracks?: AlbumTrack[]; // NUEVO: Lista de canciones si es un álbum
  spotifyUrl?: string; 
  youtubeUrl?: string;
  coverImage: string;
  cardColor: string;
}

export interface Reflection {
  id: string;
  title: string;
  excerpt: string;
  fullText: string;
  date: string;
  image?: string;
}

export interface DailyVideo {
  id: string;
  title: string;
  date: string;
  topic: string;
  platform: SocialPlatform;
  thumbnailUrl: string;
  videoUrl: string;
}

export interface YoutubeResource {
  id: string;
  title: string;
  description: string;
  youtubeId: string; // El ID del video (ej: dQw4w9WgXcQ)
  category: string; // Flexible para "Ansiedad", "Depresión", etc.
  duration?: string;
  tag?: string; // Ej: "Sanidad Interior", "Ansiedad", "Propósito"
  curatorNote?: string; // Nota pastoral: "¿Por qué ver esto?"
  embeddable?: boolean; // NUEVO: Si es false, se abre en YouTube en lugar de embed
  embedParams?: string; // NUEVO: Parámetros extra como ?si=...
}

export enum ViewState {
  HOME = 'INICIO',
  WEEKLY = 'CAMINO_DIARIO', 
  ONE_MINUTE = 'UN_MINUTO',
  VIDEOS = 'VIDEOS', // Nueva sección
  MUSIC = 'MUSICA',
  REFLECTIONS = 'REFLEXIONES',
  ABOUT = 'SOBRE_MI',
  CONTACT = 'CONTACTO',
  SUPPORT = 'APOYAR'
}
