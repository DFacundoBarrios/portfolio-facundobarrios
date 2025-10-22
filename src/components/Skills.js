import React from 'react';
import { color, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub,
  FaDatabase, FaServer, FaCode, FaLaptopCode, 
  FaGit
} from 'react-icons/fa';
import { SiCsharp, SiDotnet, SiLaravel, SiMicrosoftsqlserver, SiMysql, SiPhp, SiPostman, SiTrello, SiTypescript} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: "Frontend",
      description: "Tecnologías y habilidades fundamentales para el desarrollo web moderno",
      skills: [
        { name: "HTML", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS", icon: FaCss3Alt,  color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
        { name: "React", icon: FaReact, color: "#61DAFB" }
      ]
    },
    {
      title: "Backend",
      description: "Tecnologías y frameworks para el desarrollo del lado del servidor",
      skills: [
        { name: "C#", icon: SiCsharp, color: "#239120"},
        { name: ".NET", icon: SiDotnet, color: "#512BD4"},
        { name: "PHP", icon: SiPhp, color: "#777BB4"},
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20"},
        
      ]
    },
    {
      title: "Bases de datos",
      skills: [
        { name: "SQL Server", icon: SiMicrosoftsqlserver, color: "#bf2323ff"},
        { name: "MySQL", icon: SiMysql, color: "#2e8cabff"},

        
      ]
    },
    {
      tittle: "Herramientas",
      description: "Herramientas y plataformas esenciales para el desarrollo y la colaboración",
      skills: [
        { name: "Git", icon: FaGit, color: "#802c08ff" },
        { name: "GitHub", icon: FaGithub, color:"#000000ff"},
        { name: "Postman", icon: SiPostman, color: "#fd790eff" },
        { name: "Trello", icon: SiTrello, color: "#000000ff"}

      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="habilidades" className="skills">
      <div className="container">
        <motion.div
          ref={ref}
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="skills-header" variants={itemVariants}>
            <h2 className="section-title">
              <span className="text-gradient">Mis</span> Habilidades
            </h2>
            <p className="section-subtitle">
              Tecnologías y herramientas que utilizo para crear aplicaciones web modernas
            </p>
          </motion.div>

          <div className="skills-categories">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="skill-category"
                variants={itemVariants}
              >
                <div className="category-header">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>

                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="skill-icon" style={{ color: skill.color }}>
                        <skill.icon />
                      </div>
                      <div className="skill-info">
                        <h4>{skill.name}</h4>
                      </div>
                    </motion.div>
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