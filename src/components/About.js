import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa'; 
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    {
      icon: FaGraduationCap,
      title: 'Educación',
      description: 'Tecnicatura Superior en Programación (UTN - FRRa)'
    },
    { 
      icon: FaLaptopCode,
      title: 'Educación complementaria',
      description: 'Curso completo FullStack con PHP y Laravel'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="sobre-mi" className="about">
      <div className="container">
        <motion.div
          ref={ref}
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="about-header" variants={itemVariants}>
            <h2 className="section-title">
              <span className="text-gradient">SOBRE</span> MÍ
            </h2>
            <p className="section-subtitle">
              Conoce más sobre mi formación, experiencia y objetivos profesionales
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <h3>MI HISTORIA</h3>
              <p>
               Me encuentro en la etapa final de mi tesis para la Tecnicatura Superior en Programación. Mi perfil combina una fuerte vocación por el Desarrollo Backend con experiencia práctica en el área IT gestionando servidores y sistemas. Actualmente aplico mis conocimientos del ecosistema .NET (C#) en soluciones reales, como el desarrollo de aplicaciones de gestión. Busco dar el salto definitivo al desarrollo de software, aportando mi visión integral de la infraestructura, mi enfoque en la resolución de problemas y mi entusiasmo por construir arquitecturas robustas.
              </p>
            </motion.div>

            <motion.div className="about-features" variants={itemVariants}>
              <div className="features-grid">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="feature-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="feature-icon">
                      <feature.icon />
                    </div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 