import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { translations } from '@/data/translations';

const Contact = () => {
  const { language } = useTheme();
  const t = translations[language];

  const contactInfo = [
    { icon: Mail,  label: 'Email', value: 'mthsilva1998@gmail.com', href: 'mailto:mthsilva1998@gmail.com' },
    { icon: Phone, label: language === 'pt' ? 'Telefone' : 'Phone', value: '+55 13 99660-4715', href: 'tel:+5513996604715' },
    { icon: MapPin, label: language === 'pt' ? 'Localização' : 'Location', value: language === 'pt' ? 'São Paulo - SP, Brasil' : 'São Paulo - SP, Brazil', href: '#' },
  ];

  const socialLinks = [
    { icon: Github,   label: 'GitHub',   href: 'https://github.com/mthsilva98',             color: 'hover:text-gray-600' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/matheussilva98/', color: 'hover:text-blue-600' },
  ];

  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Título */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">{t.contactTitle}</h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{t.contactSubtitle}</p>
          </motion.div>

          {/* Duas colunas: esquerda infos / direita redes sociais */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Esquerda: informações de contato */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground">
                {language === 'pt' ? 'Vamos nos conectar!' : "Let's connect!"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'pt'
                  ? 'Estou sempre interessado em discutir novas oportunidades, projetos inovadores ou simplesmente trocar ideias sobre tecnologia. Entre em contato!'
                  : 'I am always interested in discussing new opportunities, innovative projects or simply exchanging ideas about technology. Get in touch!'}
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="glass p-4 rounded-lg group hover:shadow-elegant transition-all duration-300"
                  >
                    {info.href !== '#' ? (
                      <a href={info.href} className="flex items-center space-x-3">
                        <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                          <info.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{info.label}</p>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center text-white">
                          <info.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{info.label}</p>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Direita: redes sociais (no lugar do formulário) */}
            <motion.div variants={itemVariants}>
              <div className="glass p-6 rounded-xl h-full flex flex-col justify-center">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  {language === 'pt' ? 'Redes Sociais' : 'Social Media'}
                </h4>

                <p className="text-muted-foreground mb-6">
                  {language === 'pt'
                    ? 'Siga-me ou mande uma mensagem por aqui também.'
                    : 'Follow me or drop me a message here as well.'}
                </p>

                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link, i) => (
                    <motion.a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-14 h-14 glass rounded-2xl grid place-items-center text-primary ${link.color} transition-all duration-300 hover:shadow-glow`}
                      aria-label={link.label}
                    >
                      <link.icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
