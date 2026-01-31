import { motion } from 'framer-motion';
import { Calendar, Star } from 'lucide-react';

export const Hero = () => {
    return (
        <section id="hero" className="relative md:h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50/95 via-gray-50/80 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 pt-28 pb-12 md:pt-32">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-3/4 lg:w-1/2 text-left space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 text-primary-700 font-semibold bg-primary-100/50 backdrop-blur-sm border border-primary-200 px-4 py-1.5 rounded-full"
                        >
                            <Star className="w-4 h-4 fill-primary-600 text-primary-600" />
                            <span className="text-sm tracking-wide uppercase text-primary-800">Referência em Lauro de Freitas</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] font-serif tracking-tight"
                        >
                            Sua melhor versão através da <span className="text-primary-700 italic">Estética Avançada.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-xl"
                        >
                            Protocolos exclusivos e tecnologia de ponta para realçar sua beleza natural com segurança e resultados visíveis.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-5 pt-4"
                        >
                            <a
                                href="https://wa.me/5571991337608"
                                className="group px-8 py-4 bg-primary-600 text-white rounded-full font-semibold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/30 flex items-center justify-center gap-2"
                            >
                                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Agendar Avaliação
                            </a>

                            <div className="flex items-center gap-4 px-6 py-4 bg-white/60 backdrop-blur-md rounded-full border border-white/50 shadow-sm">
                                <div className="flex -space-x-4">
                                    {[32, 44, 65].map((id, i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                                            <img
                                                src={`https://i.pravatar.cc/150?img=${id}`}
                                                alt="Paciente"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex text-yellow-400">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                                    </div>
                                    <span className="text-xs text-gray-700 font-semibold mt-0.5">
                                        5.0 no Google (200+ avaliações)
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
