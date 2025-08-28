import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/contexts/ThemeContext';
import { translations } from '@/data/translations';

const Projects = () => {
  const { language } = useTheme();
  const t = translations[language];

  const projects = [
    {
      title: language === 'pt' ? 'Plataforma de Saúde Mental' : 'Mental Health Platform',
      description: language === 'pt' 
        ? 'Ecossistema completo com app Android, API Java e dashboard web para mapeamento de bem-estar mental em empresas.'
        : 'Complete ecosystem with Android app, Java API and web dashboard for mental wellness mapping in companies.',
      technologies: ['Java', 'Spring Boot', 'Kotlin', 'Jetpack Compose', 'React', 'PostgreSQL'],
      company: 'Sofittek',
      period: language === 'pt' ? 'Mar 2025 - Atual' : 'Mar 2025 - Present',
      status: language === 'pt' ? 'Em Desenvolvimento' : 'In Development',
      type: 'Full-Stack',
      gradient: 'from-emerald-400 to-cyan-400',
      image: '/src/assets/mental-health-platform.svg',
     // liveUrl: '',
     // githubUrl: ''
    },
    {
      title: language === 'pt' ? 'Back Office Financeiro iFood' : 'iFood Financial Back Office',
      description: language === 'pt'
        ? 'Sistema front-end robusto para parceiros do iFood gerenciarem suas operações financeiras com integração Oracle.'
        : 'Robust front-end system for iFood partners to manage their financial operations with Oracle integration.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Oracle Data Modeler'],
      company: 'iFood',
      period: language === 'pt' ? 'Abr - Set 2024' : 'Apr - Sep 2024',
      status: language === 'pt' ? 'Concluído' : 'Completed',
      type: 'Front-End',
      gradient: 'from-orange-400 to-pink-400',
      image: '/src/assets/ifood-backoffice.svg',
      liveUrl: 'https://github.com/mthsilva98/projeto-ifoodr',
      githubUrl: 'https://github.com/mthsilva98/projeto-ifood'
    },
    {
      title: language === 'pt' ? 'Sistema Fintech FIAP' : 'FIAP Fintech System',
      description: language === 'pt'
        ? 'Plataforma financeira completa com gestão de contas, despesas, receitas, metas e investimentos desenvolvida academicamente.'
        : 'Complete financial platform with account, expense, revenue, goal and investment management developed academically.',
      technologies: ['Java', 'JSP', 'Servlets', 'SQL Developer', 'JavaScript', 'Bootstrap'],
      company: 'FIAP',
      period: language === 'pt' ? 'Fev - Dez 2024' : 'Feb - Dec 2024',
      status: language === 'pt' ? 'Concluído' : 'Completed',
      type: 'Full-Stack',
      gradient: 'from-purple-400 to-indigo-400',
      image: '/src/assets/fiap-fintech.svg',
      liveUrl: 'https://github.com/mthsilva98/fintech',
      githubUrl: 'https://github.com/mthsilva98/fintech'
    },
    {
      title: language === 'pt' ? 'Transformação de dados' : 'Data transformation',
      description: language === 'pt'
        ? 'Este projeto realiza a extração de dados de um PDF, salva as informações em um arquivo CSV, compacta o arquivo gerado e substitui abreviações encontradas nos dados.'
        : 'This project extracts data from a PDF, saves the information to a CSV file, compresses the generated file, and replaces abbreviations found in the data.',
      technologies: ['Java'],
      company: language === 'pt' ? 'Projeto Pessoal' : 'Personal Project',
      period: '2024',
      status: language === 'pt' ? 'Concluído' : 'Completed',
      type: 'Front-End',
      gradient: 'from-blue-400 to-purple-400',
      image: '/src/assets/extracao.svg',
      liveUrl: 'https://github.com/mthsilva98/transformacao_de_dados',
      githubUrl: 'https://github.com/mthsilva98/transformacao_de_dados'
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={cardVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              {t.projectsTitle}
            </h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {language === 'pt' 
                ? 'Uma seleção dos meus projetos mais significativos, demonstrando experiência em desenvolvimento full-stack e front-end.'
                : 'A selection of my most significant projects, demonstrating experience in full-stack and front-end development.'
              }
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="relative glass p-6 rounded-xl hover:shadow-elegant transition-all duration-300 overflow-hidden"
              >
                {/* Project Image */}
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline" className={`bg-gradient-to-r ${project.gradient} text-white border-0`}>
                        {project.type}
                      </Badge>
                      <Badge variant="secondary">
                        {project.company}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.period}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="w-9 h-9 p-0 hover:bg-primary/10"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="w-9 h-9 p-0 hover:bg-primary/10"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Status */}
                <div className="flex items-center mb-4">
                  <div className={`w-2 h-2 rounded-full mr-2 ${
                    project.status.includes(language === 'pt' ? 'Concluído' : 'Completed') 
                      ? 'bg-green-500' 
                      : project.status.includes(language === 'pt' ? 'Desenvolvimento' : 'Development')
                      ? 'bg-yellow-500'
                      : 'bg-blue-500'
                  }`}></div>
                  <span className="text-sm text-muted-foreground">
                    {language === 'pt' ? 'Status:' : 'Status:'} {project.status}
                  </span>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">
                    {language === 'pt' ? 'Tecnologias:' : 'Technologies:'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
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

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-6">
                  <Button
                    className="flex-1 gradient-primary text-white hover:shadow-glow"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t.viewProject}
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      {t.viewCode}
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={cardVariants}
            className="text-center"
          >
            <div className="glass p-6 rounded-xl max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {language === 'pt' 
                  ? '💼 Interessado em colaborar?' 
                  : '💼 Interested in collaborating?'
                }
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === 'pt'
                  ? 'Estou sempre aberto a novos projetos e oportunidades de crescimento.'
                  : 'I am always open to new projects and growth opportunities.'
                }
              </p>
              <Button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="gradient-primary text-white hover:shadow-elegant"
              >
                {language === 'pt' ? 'Vamos Conversar' : "Let's Talk"}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;