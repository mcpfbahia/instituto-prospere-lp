import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Jamile Nascimento',
        text: 'Profissionais de excelência! O atendimento é humanizado e os resultados superaram minhas expectativas. Me senti acolhida do início ao fim.',
        stars: 5,
    },
    {
        name: 'Cláudia Araújo',
        text: 'Ambiente sofisticado e equipe muito atenciosa. Fiz meu tratamento estético e estou amando o resultado. Recomendo de olhos fechados!',
        stars: 5,
    },
    {
        name: 'Dinessence',
        text: 'A melhor clínica de saúde integrativa de Lauro de Freitas. O cuidado com o paciente é impressionante. Parabéns a toda a equipe!',
        stars: 5,
    }
];

export const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">Depoimentos</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">O que dizem nossos pacientes</h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-gray-50 p-8 rounded-2xl relative border border-gray-100 hover:shadow-lg transition-shadow"
                        >
                            <Quote className="w-10 h-10 text-primary-100 absolute top-6 right-6" />
                            <div className="flex gap-1 mb-4">
                                {[...Array(t.stars)].map((_, starIndex) => (
                                    <Star key={starIndex} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-600 italic mb-6 relative z-10">"{t.text}"</p>
                            <div className="border-t border-gray-200 pt-4">
                                <div className="font-bold text-gray-900">{t.name}</div>
                                <div className="text-xs text-primary-600 font-medium mt-1">Paciente Verificado</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
