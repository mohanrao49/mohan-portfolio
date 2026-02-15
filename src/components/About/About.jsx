import { Code2, Database, Globe, Shield } from 'lucide-react';
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
import styles from './About.module.css';

const About = () => {
  const highlights = [
    {
      icon: <Code2 size={24} />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with React.js and modern CSS'
    },
    {
      icon: <Database size={24} />,
      title: 'Backend Development',
      description: 'Creating robust APIs and server-side solutions with Node.js and Express.js'
    },
    {
      icon: <Globe size={24} />,
      title: 'Full Stack Solutions',
      description: 'End-to-end application development from database to deployment'
    },
    {
      icon: <Shield size={24} />,
      title: 'Secure Authentication',
      description: 'Implementing JWT-based authentication and authorization systems'
    }
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <RevealOnScroll>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about creating impactful digital experiences
          </p>
        </RevealOnScroll>

        <div className={styles.content}>
          <RevealOnScroll delay={0.1} className={styles.textContent}>
            <p className={styles.lead}>
              I am a motivated <span className="text-gradient">Full Stack Developer</span> with expertise 
              in building scalable web applications using modern technologies. My passion lies in 
              creating efficient, secure, and user-friendly solutions that solve real-world problems.
            </p>
            <p className={styles.description}>
              With hands-on experience in <strong>React.js</strong>, <strong>Node.js</strong>, 
              <strong> Express.js</strong>, <strong>MongoDB</strong>, and <strong>SQL</strong>, I specialize 
              in developing end-to-end applications with robust REST APIs and secure authentication systems. 
              I am committed to writing clean, maintainable code and continuously learning new technologies 
              to stay at the forefront of web development.
            </p>
            <p className={styles.description}>
              My approach combines technical excellence with creative problem-solving, ensuring that 
              every project I work on delivers exceptional value and user experience.
            </p>
          </RevealOnScroll>

          <div className={styles.highlights}>
            {highlights.map((item, index) => (
              <RevealOnScroll 
                key={item.title}
                delay={0.1 * (index + 1)}
                className={styles.highlightCard}
              >
                <div className={styles.iconWrapper}>
                  {item.icon}
                </div>
                <h3 className={styles.highlightTitle}>{item.title}</h3>
                <p className={styles.highlightDescription}>{item.description}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
