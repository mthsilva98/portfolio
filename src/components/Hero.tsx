import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { translations } from '@/data/translations';
import developerPhoto from '@/assets/PERFIL.jpg';
import techBg from '@/assets/tech-bg.jpg';

const Hero = () => {
  const { language } = useTheme();
  const t = translations[language];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mthsilva98', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/matheussilva98/', label: 'LinkedIn' }
    // removido: { icon: Mail, href: 'mailto:mthsilva1998@gmail.com', label: 'Email' }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // caminho do PDF no /public
  const cvFile = '/Matheus_Silva_De_Souza.pdf';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={techBg} alt="Tech Background" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/60"></div>
        <div className="tech-grid absolute inset-0 opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center space-x-2 text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" />
                <span>{t.heroLocation}</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Matheus Silva</span>
                <span className="block gradient-text">{t.heroTitle}</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              {t.heroSubtitle}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="gradient-primary text-white hover:shadow-elegant transition-all duration-300"
                onClick={scrollToContact}
              >
                {t.contactMe}
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
                asChild
              >
                <a
                  href={cvFile}
                  download="Matheus_Silva_De_Souza.pdf"
                  type="application/pdf"
                  className="inline-flex items-center"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {t.downloadCV}
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex space-x-4"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-smooth group"
                >
                  <link.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="sr-only">{link.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Animated Ring */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"></motion.div>

              {/* Glow Effect */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl"></div>

              {/* Profile Image */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden glass border-4 border-primary/20">
                <img src={developerPhoto} alt="Matheus Silva" className="w-full h-full object-cover" />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-elegant"
              >
                &lt;/&gt;
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-success rounded-full flex items-center justify-center text-white font-bold shadow-elegant"
              >
                ⚡
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
