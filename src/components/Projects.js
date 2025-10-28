import React, { useState } from 'react';
import projectPhoto from '../assets/img/Captura de pantalla 2025-07-04 160941.png';
import project2Photo from '../assets/img/redsocial.jpg';
import project3Photo from '../assets/img/clinica1.png';
import project4Photo from '../assets/img/barberia.jpeg';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiCsharp, SiDotnet, SiLaravel, SiMysql, SiPhp, SiJquery, SiMicrosoftsqlserver, SiNestjs, SiExpress, SiRazorpay } from 'react-icons/si';
import { FaGithub, FaExternalLinkAlt, FaCode, FaJs, FaHtml5, FaCss3, FaBootstrap, FaTypo3, FaReact, FaNodeJs } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0, // MODIFICADO de 0.3 a 0.1 para mejor detección en dispositivos móviles y desplazamiento rápido
    triggerOnce: true
  });

  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "GESTOR PARA DESPACHO DE MERCADERIA",
      description: "Sistema integral de gestión de despachos desarrollado como proyecto académico integrador. La aplicación permite administrar el ciclo completo de pedidos desde su recepción hasta la entrega, incluyendo control de inventarios, seguimiento de órdenes, y generación de reportes. Implementado con arquitectura MVC en ASP.NET Core, base de datos SQL Server y una interfaz responsiva con Bootstrap, demostrando competencias en desarrollo empresarial y gestión de sistemas logísticos.",
      image: projectPhoto,
      technologies: [
        { name: "C#", icon: SiCsharp, color: "#178600" },
        { name: "ASP.NET Core", icon: SiDotnet, color: "#512BD4" },
        { name: "SQL Server", icon: SiMicrosoftsqlserver, color: "#CC2927" },
        { name: "Entity Framework Core", icon: FaCode, color: "#1572B6" },
        { name: "HTML", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS", icon: FaCss3, color: "#1573b622" },
        { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
        { name: "Razor", icon: SiRazorpay, color: "#7952B3" }
      ],
      githubUrl: "https://github.com/DFacundoBarrios/Sistema-gestion-despachos",
      liveUrl: null,
      category: "Backend"
    },
    {
      id: 2,
      title: "APP BARBERIA LA MAQUINA SA",
      description: "Desarrollo de una API robusta enfocada en la gestión de la agenda y la clientela para una barbería. El sistema permite el control de Clientes, Turnos y la visualización de la agenda semanal para optimizar el tiempo. Construido en .NET (C# y ASP.NET Core) y Razor para la interfaz del usuario ",
      image: project4Photo,
      technologies: [
        { name: "C#", icon: SiCsharp, color: "#178600" },
        { name: "ASP.NET Core", icon: SiDotnet, color: "#512BD4" },
        { name: "SQL Server", icon: SiMicrosoftsqlserver, color: "#CC2927" },
        { name: "Entity Framework Core", icon: FaCode, color: "#1572B6" },
        { name: "HTML", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS", icon: FaCss3, color: "#1572B6" },
        { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
        { name: "Razor", icon: SiRazorpay, color: "#7952B3" }
      ],
      githubUrl: "https://github.com/DFacundoBarrios/gestor-turnos-lamaquina",
      liveUrl: null,
      category: "Backend"
    },
    {
      id: 3,
      title: "DEMO RED SOCIAL",
      description: "Demo funcional de una red social desarrollada durante un curso Full Stack. La aplicación permite a los usuarios registrarse, crear posts, interactuar con contenido mediante likes y comentarios, y gestionar sus perfiles personales. Implementada con Laravel como backend robusto y una interfaz intuitiva en el frontend, demostrando competencias en desarrollo web completo y arquitectura de aplicaciones sociales. Tecnologias utilizadas. Backend: Laravel 9, MySQL, PHP 8, Eloquent ORM. Frontend: HTML5, CSS3, JavaScript, Bootstrap 5, jQuery.",
      image: project2Photo,
      technologies: [
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "HTML", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS", icon: FaCss3, color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
        { name: "jQuery", icon: SiJquery, color: "#0769AD" }
      ],
      githubUrl: "https://github.com/DFacundoBarrios/red-social-demo",
      liveUrl: null,
      category: "Full Stack"
    },
    {
      id: 4,
      title: "SISTEMA DE GESTIÓN DE TURNOS CLÍNICOS",
      description: "Plataforma web full stack desarrollada colaborativamente como proyecto final de carrera. Características principales: sistema de reserva de turnos para pacientes, gestión de agenda médica con disponibilidad horaria, panel administrativo con dashboard de métricas, notificaciones automáticas, y gestión de historiales. Stack técnico: React con TypeScript para una UI moderna y tipada, NestJS como framework backend con arquitectura modular, y MySQL para persistencia de datos. El proyecto refleja experiencia en desarrollo colaborativo, implementación de APIs RESTful, y diseño de sistemas multi-rol para entornos de salud.",
      image: project3Photo,
      technologies: [
        { name: "HTML", icon: FaHtml5, color: "#178600" },
        { name: "CSS", icon: FaCss3, color: "#1572B6" },
        { name: "TypeScrypt", icon: FaTypo3, color: "#F7DF1E" },
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Node.js", icon: FaNodeJs, color: "#83CD29ff" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Nest.js", icon: SiNestjs, color: "#E0234Eff" },
        { name: "Express", icon: SiExpress, color: "#000000ff" }
      ],
      liveUrl: null,
      category: "Full Stack"
    }
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
    <section id="proyectos" className="projects">
      <div className="container">
        <motion.div
          ref={ref}
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="projects-header" variants={itemVariants}>
            <h2 className="section-title">
              <span className="text-gradient">Mis</span> Proyectos
            </h2>
            <p className="section-subtitle">
              Explora algunos de los proyectos que he desarrollado utilizando diferentes tecnologías
            </p>
          </motion.div>

          <motion.div className="projects-grid" variants={itemVariants}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${activeProject === index ? 'active' : ''}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveProject(index)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-category">{project.category}</div>
                  </div>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">
                    {activeProject === index ? project.longDescription : project.description}
                  </p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech.name}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        style={{ '--tech-color': tech.color }}
                      >
                        <tech.icon />
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>

                  <div className="project-links">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                      Ver Código
                    </motion.a>

                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link live"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    )}
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="projects-cta" variants={itemVariants}>
            <p>¿Te gusta alguno de mis proyectos? No dudes en contactarme, estoy disponible</p>
            <motion.button
              className="btn btn-primary"
              onClick={() => document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contáctame
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;