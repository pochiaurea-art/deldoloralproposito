import React, { useState } from 'react';
import { Mail, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    // ==============================================================
    // 📧 INSTRUCCIONES PARA ACTIVAR SUSCRIPCIONES REALES:
    // 1. Ve a https://formspree.io/ y regístrate gratis.
    // 2. Crea un nuevo formulario ("New Form") llamado "Newsletter".
    // 3. Copia la URL que te dan (ej: https://formspree.io/f/tu_codigo).
    // 4. Pégala abajo entre las comillas en lugar del texto de ejemplo.
    // ==============================================================
    
    // 👇👇 PEGA AQUÍ TU URL DE FORMSPREE 👇👇
    const FORMSPREE_URL: string = "https://formspree.io/f/TU_CODIGO_AQUI"; 

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email) return;
        setStatus("loading");

        // Validación simple para ver si el usuario ya configuró la URL
        if (FORMSPREE_URL.includes("TU_CODIGO_AQUI") || FORMSPREE_URL === "") {
            console.warn("⚠️ AVISO: Debes pegar tu URL de Formspree en el código para que esto funcione realmente.");
            // Simulación visual para el usuario mientras configura
            setTimeout(() => {
                setStatus("success");
                setEmail("");
            }, 1500);
            return;
        }

        try {
            const response = await fetch(FORMSPREE_URL, {
                method: "POST",
                body: JSON.stringify({ email }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("success");
                setEmail("");
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <section id="newsletter" className="bg-sage-900 py-16 relative overflow-hidden border-t border-sage-800/50">
            {/* Abstract bg */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <div className="inline-block p-3 bg-sage-800 rounded-full mb-6 animate-bounce-slow">
                    <Mail className="w-6 h-6 text-gold-400" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-white mb-4">Únete a nuestra comunidad</h2>
                <p className="text-sage-200 mb-8 max-w-xl mx-auto">
                    Recibe cada semana una palabra de aliento, las nuevas canciones y recursos para fortalecer tu autoestima y tu fe. Sin spam, solo esperanza.
                </p>
                
                {status === "success" ? (
                    <div className="max-w-lg mx-auto bg-green-900/50 border border-green-500/50 rounded-xl p-6 text-green-100 flex items-center justify-center animate-pulse">
                        <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
                        <span className="font-semibold">¡Gracias por suscribirte!</span>
                    </div>
                ) : (
                    <form 
                        className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto relative" 
                        onSubmit={handleSubmit}
                    >
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Tu correo electrónico" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={status === "loading"}
                            className="flex-1 px-5 py-3 rounded-xl text-sage-900 bg-white/95 backdrop-blur focus:outline-none focus:ring-2 focus:ring-gold-500 placeholder:text-sage-400 transition-all disabled:opacity-70"
                        />
                        <button 
                            type="submit"
                            disabled={status === "loading"}
                            className="px-8 py-3 bg-gold-500 text-sage-900 font-bold rounded-xl hover:bg-gold-400 transition-colors shadow-lg hover:shadow-gold-500/30 flex items-center justify-center min-w-[140px] disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                "Suscribirme"
                            )}
                        </button>
                    </form>
                )}

                {status === "error" && (
                    <p className="text-red-300 mt-4 text-sm flex items-center justify-center">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        Hubo un error al enviar. Por favor intenta de nuevo.
                    </p>
                )}

                <p className="text-xs text-sage-500 mt-4">Respetamos tu privacidad y cuidamos tus datos.</p>
            </div>
        </section>
    );
};

export default Newsletter;