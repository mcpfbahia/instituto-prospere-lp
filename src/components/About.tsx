import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
    return (
        <section id="sobre" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
                                alt="Equipe Instituto Prospere"
                                className="w-full h-[600px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-100 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -z-10"></div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
                            Sobre Nós
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif leading-tight">
                            Excelência e Cuidado <span className="text-primary-700 italic">Integrativo</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            No Instituto Prospere, acreditamos que a verdadeira beleza nasce do equilíbrio. Nossa abordagem une a ciência da saúde integrativa com a arte da estética avançada para proporcionar resultados que vão além da superfície.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Com uma equipe liderada por especialistas e um ambiente acolhedor em Lauro de Freitas, oferecemos tratamentos personalizados que respeitam sua individualidade e promovem bem-estar duradouro.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                'Equipe multidisciplinar qualificada',
                                'Tecnologia de última geração',
                                'Atendimento humanizado e personalizado',
                                'Ambiente sofisticado e acolhedor'
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary-600 shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://wa.me/5571991337608"
                            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all hover:scale-105 shadow-lg"
                        >
                            Conheça Nossa História
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
