import { motion } from 'framer-motion';
import { HeartPulse, Sparkles, Activity, ShieldCheck } from 'lucide-react';

const services = [
    {
        Icon: HeartPulse,
        title: 'Saúde Integrativa',
        description: 'Tratamentos que visam o equilíbrio do corpo e da mente, focando na causa raiz dos problemas.'
    },
    {
        Icon: Sparkles,
        title: 'Estética Avançada',
        description: 'Protocolos minimamente invasivos para realçar sua beleza com resultados naturais.'
    },
    {
        Icon: Activity,
        title: 'Longevidade Saudável',
        description: 'Estratégias para otimizar sua vitalidade e promover um envelhecimento com qualidade.'
    },
    {
        Icon: ShieldCheck,
        title: 'Tecnologia de Ponta',
        description: 'Equipamentos modernos e técnicas certificadas para garantir sua segurança e satisfação.'
    }
];

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary-600 font-semibold tracking-wider uppercase text-sm"
                    >
                        Nossas Especialidades
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6 font-serif"
                    >
                        Soluções completas para sua saúde e autoestima
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg"
                    >
                        Do cuidado preventivo aos procedimentos estéticos mais avançados, oferecemos tudo o que você precisa em um só lugar.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
                        >
                            <div className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                                <service.Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
