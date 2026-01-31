import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', href: '#hero' },
        { name: 'Sobre', href: '#sobre' },
        { name: 'Serviços', href: '#services' },
        { name: 'Depoimentos', href: '#testimonials' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-900 font-serif tracking-tight">
                    Instituto <span className="text-primary-700">Prospere</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/5571991337608"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg shadow-primary-500/20"
                    >
                        <Phone size={18} />
                        <span>Agendar Consulta</span>
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-600 font-medium py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://wa.me/5571991337608"
                                className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <Phone size={18} />
                                <span>Agendar Consulta</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
