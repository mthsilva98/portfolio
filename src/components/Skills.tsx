import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Database, Wrench } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { translations } from '@/data/translations';

const Skills = () => {
  const { language } = useTheme();
  const t = translations[language];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // 👉 Edite aqui suas skills (sem barra de progresso)
  const categories: Array<{
    key: keyof typeof t['skillCategories'];
    icon: React.ElementType;
    items: string[];
  }> = [
    { key: 'languages', icon: Code2, items: ['Java', 'JavaScript', 'Kotlin', 'SQL'] },
    { key: 'frameworks', icon: Layers, items: ['Spring Boot', 'React', 'Angular', 'Jetpack Compose', 'Bootstrap'] },
    { key: 'databases', icon: Database, items: ['PostgreSQL', 'Oracle', 'MySQL', 'SQL Server'] },
    { key: 'tools', icon: Wrench, items: ['Git', 'IntelliJ IDEA', 'Android Studio', 'VS Code'] },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="space-y-12"
        >
          {/* Título da seção */}
          <motion.div variants={item} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
              {t.skillsTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'pt'
                ? 'Minhas principais competências técnicas desenvolvidas através de experiência prática e aprendizado contínuo.'
                : 'My main technical competencies developed through hands-on experience and continuous learning.'}
            </p>
            <div className="w-20 h-1 gradient-primary mx-auto mt-4 rounded-full" />
          </motion.div>

          {/* Cards de skills (sem progress bar) */}
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map(({ key, icon: Icon, items }, idx) => (
              <motion.div
                key={String(key)}
                variants={item}
                whileHover={{ scale: 1.01 }}
                className="glass rounded-2xl p-6 hover:shadow-elegant transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl gradient-primary grid place-items-center text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {t.skillCategories[key]}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
