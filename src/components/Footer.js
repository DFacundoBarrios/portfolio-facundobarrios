import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinksFooter = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/facundobarrios_/?next=%2F',
      icon: FaInstagram
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/facundobarrios27/',
      icon: FaLinkedin
    }
  ];

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
    {
      name: 'Email',
      url: 'mailto:faqbarrios23@gmail.com',
      icon: FaEnvelope
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Facundo Barrios</h3>
            <p>Desarrollador Full Stack Junior</p>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4>Contacto</h4>
            <p>faqbarrios23@gmail.com</p>
            <p>Rafaela, Santa Fe</p>
            <p>Argentina</p>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4>Redes Sociales</h4>
            <div className="social-links">
              {socialLinksFooter.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="footer-divider"></div>
          <p>
            © {currentYear} Facundo Barrios. 
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 