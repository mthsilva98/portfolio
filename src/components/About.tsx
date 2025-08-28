import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Award } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { translations } from '@/data/translations';

const About = () => {
  const { language } = useTheme();
  const t = translations[language];

  const stats = [
    {
      icon: Briefcase,
      value: "2+",
      label: language === 'pt' ? "Anos de Experiência" : "Years Experience"
    },
    {
      icon: Code2,
      value: "5+",
      label: language === 'pt' ? "Projetos Completos" : "Projects Completed"
    },
    {
      icon: GraduationCap,
      value: "FIAP",
      label: language === 'pt' ? "Formação Acadêmica" : "Academic Background"
    },
    {
      icon: Award,
      value: "Java",
      label: language === 'pt' ? "Especialidade" : "Specialization"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-secondary/30">
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
              {t.aboutTitle}
            </h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.aboutText}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {language === 'pt' ? 'Formação Atual' : 'Current Education'}
                </h3>
                <div className="glass p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">
                        {language === 'pt' 
                          ? 'Tecnólogo em Análise e Desenvolvimento de Sistemas'
                          : 'Technology in Systems Analysis and Development'
                        }
                      </h4>
                      <p className="text-muted-foreground">FIAP - {language === 'pt' ? 'Conclusão: Dezembro 2025' : 'Completion: December 2025'}</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">
                        {language === 'pt' ? 'Certificações Alura' : 'Alura Certifications'}
                      </h4>
                      <p className="text-muted-foreground">
                        Spring Boot, Java OOP, IA, Kotlin, JavaScript, Linux, Git, SQL
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="glass p-6 rounded-xl text-center group hover:shadow-elegant transition-all duration-300"
                  >
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass p-6 rounded-xl space-y-3"
              >
                <h3 className="font-semibold text-foreground mb-4">
                  {language === 'pt' ? 'Informações de Contato' : 'Contact Information'}
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email:</span>
                    <span className="text-primary">mthsilva1998@gmail.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{language === 'pt' ? 'Telefone:' : 'Phone:'}:</span>
                    <span className="text-primary">+55 13 99660-4715</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{language === 'pt' ? 'Localização:' : 'Location:'}:</span>
                    <span className="text-primary">{language === 'pt' ? 'São Paulo, Brasil' : 'São Paulo, Brazil'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{language === 'pt' ? 'Idiomas:' : 'Languages:'}:</span>
                    <span className="text-primary">
                      {language === 'pt' ? 'Português, Inglês' : 'Portuguese, English'}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;