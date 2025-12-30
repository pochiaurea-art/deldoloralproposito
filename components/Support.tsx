
import React from 'react';
import { Heart, CreditCard, Smartphone, Gift } from 'lucide-react';

const Support: React.FC = () => {
  return (
    <div className="bg-sage-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-md mb-6">
            <Heart className="w-8 h-8 text-gold-500 fill-gold-100" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-sage-900 mb-6">Siembra en este Ministerio</h1>
          <p className="text-xl text-sage-700 max-w-2xl mx-auto font-light leading-relaxed">
            Todo el contenido que creo nace del deseo de servir y acompañar. Si ha sido de bendición para tu vida y deseas unirte a este propósito con tu generosidad, aquí tienes las formas de hacerlo.
          </p>
        </div>

        {/* Donation Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Option 1: ATH Móvil (Muy común si el usuario es de PR/Caribe por el código 939) */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-sage-100 hover:border-gold-300 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
                <div className="flex items-center mb-6">
                    <div className="p-3 bg-orange-100 text-orange-600 rounded-2xl mr-4">
                        <Smartphone className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-sage-900 font-serif">ATH Móvil</h3>
                </div>
                <p className="text-sage-600 mb-6">
                    La forma más rápida y directa de apoyar desde Puerto Rico.
                </p>
                <div className="bg-sage-50 p-4 rounded-xl text-center border border-sage-200">
                    <p className="text-sm text-sage-500 uppercase tracking-widest font-bold mb-1">Enviar a:</p>
                    <p className="text-2xl font-bold text-sage-900">939 451 4694</p>
                </div>
            </div>
          </div>

          {/* Option 2: PayPal */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-sage-100 hover:border-blue-300 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
                <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl mr-4">
                        <CreditCard className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-sage-900 font-serif">PayPal</h3>
                </div>
                <p className="text-sage-600 mb-6">
                    Para apoyo internacional de forma segura y sencilla.
                </p>
                
                {/* NOTA PARA EL USUARIO: Debes poner aquí tu enlace real de PayPal.Me si lo tienes, o tu correo de PayPal */}
                <a 
                    href="https://www.paypal.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full py-4 bg-[#0070BA] text-white font-bold text-center rounded-xl hover:bg-[#003087] transition-colors shadow-md"
                >
                    Donar vía PayPal
                </a>
            </div>
          </div>

        </div>

        {/* Biblical Context / Footer Message */}
        <div className="bg-sage-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <Gift className="w-12 h-12 text-gold-500 mx-auto mb-6 opacity-80" />
            <blockquote className="font-serif text-2xl italic mb-6 max-w-2xl mx-auto text-sage-100">
                "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre."
            </blockquote>
            <cite className="text-gold-400 font-bold not-italic tracking-wide block">— 2 Corintios 9:7</cite>
            
            <p className="mt-8 text-sage-300 text-sm">
                Gracias por ser parte de la familia de <strong>Del Dolor al Propósito</strong>. Tu apoyo nos permite seguir creando música y contenido para sanar corazones.
            </p>
        </div>

      </div>
    </div>
  );
};

export default Support;
