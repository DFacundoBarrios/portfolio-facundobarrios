import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope,FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';
import emailjs from '@emailjs/browser';

emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);


const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      'service_9d7uo1d',      // Del paso 2
      'template_3rcsmva',     // Del paso 3
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }
    );
    
    setFormData({ name: '', email: '', message: '' });
    toast.success("¡Mensaje enviado correctamente! Te responderé pronto 🚀");
    
  } catch (error) {
    console.error('Error:', error);
    toast.error("Error al enviar el mensaje. Intenta nuevamente 😔");
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      link: 'https://wa.me/5493492339430'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      link: 'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRQBzMwMBRGgvTnTTVhLzPjZSqnvCSqjnvjdDfwhNFgntDTNxjKjCRgnXPlBGlgNxHgXWP'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      link: 'https://github.com/DFacundoBarrios'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/facundobarrios27/'
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
        duration: 0.4
      }
    }
  };

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <motion.div
          ref={ref}
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="contact-header" variants={itemVariants}>
            <h2 className="section-title">
              <span className="text-gradient">Contacto</span>
            </h2>
          </motion.div>

          <div className="contact-grid">
            <motion.div className="contact-info" variants={itemVariants}>
              <h3>Información de Contacto</h3>
              <p>
                Estoy disponible para discutir oportunidades laborales,
                proyectos freelance o cualquier consulta relacionada con desarrollo web.
              </p>

              <div className="contact-items">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item"
                    whileHover={{ scale: 1.05, x: 10 }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="contact-icon">
                      <info.icon />
                    </div>
                    <div className="contact-details">
                      <h4>{info.title}</h4>
                      <p>{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

            </motion.div>

            <motion.div className="contact-form-container" variants={itemVariants}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nombre *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensaje *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Dejame tu mensaje"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 👇 AQUÍ ESTÁ EL TOASTCONTAINER QUE TE FALTABA */}
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ zIndex: 9999 }}
      />
    </section>
  );
};

export default Contact;