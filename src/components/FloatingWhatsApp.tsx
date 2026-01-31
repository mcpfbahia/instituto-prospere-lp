import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/5571991337608"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Fale conosco no WhatsApp"
        >
            <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-xl hover:bg-green-600 transition-all hover:scale-110">
                <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-green-500 rounded-full z-0"
                />
                <MessageCircle className="w-7 h-7 text-white fill-current relative z-10" />
            </div>
        </a>
    );
};
