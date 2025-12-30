import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sage-900 text-sage-300 py-12 border-t border-sage-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <p className="font-serif text-2xl text-sage-50 mb-4 font-bold tracking-tight">Del Dolor al Propósito</p>
        <p className="text-center text-sm max-w-md mx-auto mb-8 text-sage-400">
            Un espacio de fe, música y dignidad humana.
            <br />
            "Porque en Él vivimos, nos movemos y somos."
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
           <a href="https://www.instagram.com/rorrodriguez25/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">Instagram</a>
           <a href="https://open.spotify.com/artist/4Cgb0HeAfzJOqBGgzwWnPg" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">Spotify</a>
           <a href="https://www.facebook.com/profile.php?id=100009517063605" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">Facebook</a>
           <a href="https://www.tiktok.com/@ror_rodriguez?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">TikTok</a>
        </div>
        <div className="mt-8 pt-8 border-t border-sage-800 w-full text-center text-xs text-sage-500">
            &copy; {new Date().getFullYear()} Del Dolor al Propósito. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;