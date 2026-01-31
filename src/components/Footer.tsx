import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="text-2xl font-bold font-serif mb-6 tracking-tight">
                            Instituto <span className="text-primary-500">Prospere</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6 font-light">
                            Saúde integrativa e estética avançada com foco em resultados naturais e duradouros. Sua melhor versão com segurança e cuidado.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors group">
                                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors group">
                                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors group">
                                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Contato</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-1" />
                                <span>
                                    Av. Luiz Tarquínio Pontes, 1904,<br />
                                    MAG Empresarial, Lauro de Freitas - BA.
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                                <a href="https://wa.me/5571991337608" className="hover:text-primary-500 transition-colors">
                                    (71) 99133-7608
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                                <a href="mailto:contato@institutoprospere.com.br" className="hover:text-primary-500 transition-colors">
                                    contato@institutoprospere.com.br
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
                        <ul className="space-y-3">
                            {['Início', 'Sobre Nós', 'Serviços', 'Depoimentos', 'Agendar Consulta'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors hover:translate-x-1 inline-block duration-200">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Instituto Prospere. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
