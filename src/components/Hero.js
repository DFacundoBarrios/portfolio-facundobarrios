import React from 'react';
import profilePhoto from '../assets/img/FOTO CV.jpeg';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'; 
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#sobre-mi');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/DFacundoBarrios',
      icon: FaGithub
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/facundobarrios27/',
      icon: FaLinkedin
    },
  ];

  return (
    <section id="inicio" className="hero">
      <div className="hero-bg">
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hola, soy <span className="text-gradient">Facundo</span>
            </motion.h1>

            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Desarrollador Full Stack Junior
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Estudiante avanzado de la Tecnicatura Superior en Programación (UTN – FRRa),
              con una sólida inclinación y enfoque principal en el Desarrollo Backend. Cuento con conocimientos y experiencia práctica con .NET (C#) para construir APIs robustas y escalables.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="btn btn-primary"
                onClick={scrollToAbout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conoce más sobre mí
              </motion.button>

              <motion.button
                className="btn btn-secondary"
                onClick={() => document.querySelector('#proyectos').scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver proyectos
              </motion.button>
            </motion.div>

          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            

            {/* Bloque de enlaces sociales - CORREGIDO */}
            <motion.div
              className="social-links-hero"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon; // La clave de la corrección
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="scroll-btn"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
          >
            <FaArrowDown />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;