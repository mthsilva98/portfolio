import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { translations } from '@/data/translations';

const Footer = () => {
  const { language } = useTheme();
  const t = translations[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Só GitHub e LinkedIn (email removido daqui)
  const socialLinks = [
    { icon: Github, href: 'https://github.com/mthsilva98', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/matheussilva98/', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: t.about, href: '#about' },
    { name: t.experience, href: '#experience' },
    { name: t.skills, href: '#skills' },
    { name: t.projects, href: '#projects' },
    { name: t.contact, href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-background border-t border-border/20">
      {/* Scroll to Top Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2"
      >
        <Button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full gradient-primary text-white shadow-elegant hover:shadow-glow transition-all duration-300 group"
        >
          <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
        </Button>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MS</span>
              </div>
              <div>
                <h3 className="font-bold text-xl gradient-text">Matheus Silva</h3>
                <p className="text-muted-foreground text-sm">{t.heroTitle}</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-md">
              {language === 'pt'
                ? 'Transformando ideias em soluções digitais inovadoras. Sempre em busca de novos desafios e oportunidades de crescimento.'
                : 'Transforming ideas into innovative digital solutions. Always looking for new challenges and growth opportunities.'}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground">
              {language === 'pt' ? 'Links Rápidos' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info (mantido) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground">
              {language === 'pt' ? 'Contato' : 'Contact'}
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 mthsilva1998@gmail.com</p>
              <p>📱 +55 13 99660-4715</p>
              <p>📍 {language === 'pt' ? 'São Paulo, Brasil' : 'São Paulo, Brazil'}</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-border/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-muted-foreground">
            <span>
              {language === 'pt' ? 'Desenvolvido por Matheus Silva' : 'Developed by Matheus Silva'}
            </span>
            <span className="text-sm">
              © {new Date().getFullYear()} {t.allRightsReserved}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-5 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
