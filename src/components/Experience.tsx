import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/contexts/ThemeContext';
import { translations } from '@/data/translations';

const Experience = () => {
  const { language } = useTheme();
  const t = translations[language];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              {t.experienceTitle}
            </h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 gradient-primary transform md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {t.experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 gradient-primary rounded-full transform md:-translate-x-2 z-10 shadow-glow"></div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass p-6 rounded-xl hover:shadow-elegant transition-all duration-300"
                    >
                      {/* Company Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="text-primary bg-primary/10">
                          {experience.company}
                        </Badge>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {experience.period}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {experience.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Technologies */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-foreground">
                          {language === 'pt' ? 'Tecnologias:' : 'Technologies:'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                            >
                              {tech}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <div className="glass p-6 rounded-xl max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {language === 'pt' 
                  ? '🚀 Sempre em busca de novos desafios!' 
                  : '🚀 Always looking for new challenges!'
                }
              </h3>
              <p className="text-muted-foreground">
                {language === 'pt'
                  ? 'Estou aberto a oportunidades que me permitam crescer e contribuir com soluções inovadoras.'
                  : 'I am open to opportunities that allow me to grow and contribute with innovative solutions.'
                }
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;