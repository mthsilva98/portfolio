export const translations = {
  pt: {
    // Navigation
    about: "Sobre",
    experience: "Experiência", 
    skills: "Habilidades",
    projects: "Projetos",
    contact: "Contato",
    
    // Hero Section
    heroTitle: "Desenvolvedor Back-End",
    heroSubtitle: "Apaixonado por tecnologia, focado em entregar soluções inovadoras end-to-end",
    heroLocation: "São Paulo - SP, Brasil",
    downloadCV: "Download CV",
    contactMe: "Fale Comigo",
    
    // About Section
    aboutTitle: "Sobre Mim",
    aboutText: "Estudante de Análise e Desenvolvimento de Sistemas com experiência prática entregando software ponta a ponta. Atuo com linguagens como Java, Kotlin, JavaScript e SQL, com foco em microsserviços, análise de código e modelagem de dados. Busco desafios onde eu possa gerar impacto técnico e de produto. Disponível para trabalho presencial, remoto ou híbrido.",
    // Experience Section
    experienceTitle: "Experiência Profissional",
    experiences: [
      {
        title: "Desenvolvimento Full-Stack - Plataforma de Saúde Mental",
        company: "Sofittek",
        period: "Março 2025 - Atual",
        description: "Ecossistema com app Android para questionários de bem-estar, API Java para cálculo de indicadores e dashboard web para mapeamento mental",
        technologies: ["Java", "Spring Boot", "Kotlin", "Jetpack Compose", "React", "PostgreSQL"]
      },
      {
        title: "Desenvolvimento Front-End - Back Office Financeiro",
        company: "iFood",
        period: "Abril 2024 - Setembro 2024", 
        description: "Front-end de sistema para parceiros do iFood com modelagem de dados Oracle",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Oracle Data Modeler"]
      },
      {
        title: "Soldado",
        company: "Exército Brasileiro",
        period: "Janeiro 2017 - Janeiro 2018",
        description: "Administração e Garantia da Lei e da Ordem",
        technologies: ["Excel"]
      },
      {
        title: "Estagiário",
        company: "EMTU",
        period: "Janeiro 2014 - Janeiro 2015",
        description: "Administração",
        technologies: ["Excel","Word"]
      }

    ],
    
    // Skills Section
    skillsTitle: "Habilidades Técnicas",
    skillCategories: {
      languages: "Linguagens",
      frameworks: "Frameworks",
      databases: "Bancos de Dados",
      tools: "Ferramentas"
    },
    
    // Projects Section
    projectsTitle: "Projetos em Destaque",
    viewProject: "Ver Projeto",
    viewCode: "Ver Código",
    
    // Contact Section
    contactTitle: "Vamos Trabalhar Juntos",
    contactSubtitle: "Entre em contato para discutir seu próximo projeto",
    nameField: "Nome",
    emailField: "Email",
    messageField: "Mensagem",
    sendMessage: "Enviar Mensagem",
    
    // Footer
    footerText: "Desenvolvido por Matheus Silva",
    allRightsReserved: "Todos os direitos reservados."
  },
  
  en: {
    // Navigation
    about: "About",
    experience: "Experience",
    skills: "Skills", 
    projects: "Projects",
    contact: "Contact",
    
    // Hero Section
    heroTitle: " Back-end Developer",
    heroSubtitle: "Passionate about technology, focused on delivering innovative end-to-end solutions",
    heroLocation: "São Paulo - SP, Brazil",
    downloadCV: "Download CV",
    contactMe: "Contact Me",
    
    // About Section
    aboutTitle: "About Me",
    aboutText: "Systems Analysis and Development student with hands-on experience delivering end-to-end software. I work with languages ​​such as Java, Kotlin, JavaScript, and SQL, focusing on microservices, code analysis, and data modeling. I seek challenges where I can generate technical and product impact. Available for on-site, remote, or hybrid work.",
    
    // Experience Section
    experienceTitle: "Professional Experience",
    experiences: [
      {
        title: "Full-Stack Development - Mental Health Platform",
        company: "Sofittek",
        period: "March 2025 - Present",
        description: "Ecosystem with Android app for wellness questionnaires, Java API for indicator calculation and web dashboard for mental mapping",
        technologies: ["Java", "Spring Boot", "Kotlin", "Jetpack Compose", "React", "PostgreSQL"]
      },
      {
        title: "Front-End Development - Financial Back Office",
        company: "iFood", 
        period: "April 2024 - September 2024",
        description: "Front-end system for iFood partners with Oracle data modeling",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Oracle Data Modeler"]
      },
      {
        title: "Soldier",
        company: "Brazilian army",
        period: "January 2017 - January 2018",
        description: "administration and guarantee of law and order",
        technologies: ["Execel"]
      },
      {
        title: "Trainee",
        company: "EMTU",
        period: "January 2014 - January 2015",
        description: "Administration",
        technologies: ["Excel","Word"]
      }
    ],
    
    // Skills Section
    skillsTitle: "Technical Skills",
    skillCategories: {
      languages: "Languages",
      frameworks: "Frameworks", 
      databases: "Databases",
      tools: "Tools"
    },
    
    // Projects Section
    projectsTitle: "Featured Projects",
    viewProject: "View Project",
    viewCode: "View Code",
    
    // Contact Section
    contactTitle: "Let's Work Together",
    contactSubtitle: "Get in touch to discuss your next project",
    nameField: "Name",
    emailField: "Email", 
    messageField: "Message",
    sendMessage: "Send Message",
    
    // Footer
    footerText: "Developed by Matheus Silva",
    allRightsReserved: "All rights reserved."
  }
};

export type TranslationKey = keyof typeof translations.pt;