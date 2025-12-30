import React from 'react';
import { Mail, Instagram, Facebook, Phone, Music, Video } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-sage-50 min-h-[calc(100vh-80px)] py-16 flex items-center justify-center">
      <div className="max-w-xl w-full px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-sage-900">Estemos en Contacto</h2>
          <p className="mt-4 text-lg text-sage-700">
            Si necesitas una palabra de aliento, tienes alguna duda o quieres compartir tu testimonio, escríbeme o llámame.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl shadow-sage-200/50 border border-sage-100">
            <div className="flex flex-col space-y-4">
                
                {/* Email */}
                <a href="mailto:rorrodriguez25@gmail.com" className="flex items-center p-4 bg-sage-50 rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-sage-100 hover:border-sage-200">
                    <div className="bg-sage-100 p-3 rounded-full group-hover:bg-sage-200 transition-colors text-sage-700">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div className="ml-4 overflow-hidden">
                        <p className="text-sm text-sage-500">Correo Electrónico</p>
                        <p className="text-lg font-semibold text-sage-800 truncate">rorrodriguez25@gmail.com</p>
                    </div>
                </a>

                {/* Teléfono */}
                <a href="tel:+19394514694" className="flex items-center p-4 bg-sage-50 rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-sage-100 hover:border-sage-200">
                    <div className="bg-sage-100 p-3 rounded-full group-hover:bg-sage-200 transition-colors text-sage-700">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                        <p className="text-sm text-sage-500">Teléfono / WhatsApp</p>
                        <p className="text-lg font-semibold text-sage-800">939 451 4694</p>
                    </div>
                </a>

                <div className="grid grid-cols-2 gap-4 mt-2">
                    <a href="https://www.instagram.com/rorrodriguez25/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 bg-sage-50 rounded-xl shadow-sm hover:shadow-md transition-shadow hover:bg-white border border-sage-100 group">
                        <Instagram className="w-8 h-8 mb-2 text-sage-600 group-hover:text-pink-600 transition-colors" />
                        <span className="font-medium text-sage-700">Instagram</span>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100009517063605" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 bg-sage-50 rounded-xl shadow-sm hover:shadow-md transition-shadow hover:bg-white border border-sage-100 group">
                        <Facebook className="w-8 h-8 mb-2 text-sage-600 group-hover:text-blue-600 transition-colors" />
                        <span className="font-medium text-sage-700">Facebook</span>
                    </a>
                    <a href="https://www.tiktok.com/@ror_rodriguez?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 bg-sage-50 rounded-xl shadow-sm hover:shadow-md transition-shadow hover:bg-white border border-sage-100 group">
                        <Video className="w-8 h-8 mb-2 text-sage-600 group-hover:text-black transition-colors" />
                        <span className="font-medium text-sage-700">TikTok</span>
                    </a>
                    <a href="https://open.spotify.com/artist/4Cgb0HeAfzJOqBGgzwWnPg" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 bg-sage-50 rounded-xl shadow-sm hover:shadow-md transition-shadow hover:bg-white border border-sage-100 group">
                        <Music className="w-8 h-8 mb-2 text-sage-600 group-hover:text-green-600 transition-colors" />
                        <span className="font-medium text-sage-700">Spotify</span>
                    </a>
                </div>

            </div>

            <div className="mt-8 text-center">
                <p className="text-sm text-sage-400">
                    Respondo personalmente a todos los mensajes, ten paciencia si tardo un poco.
                </p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;