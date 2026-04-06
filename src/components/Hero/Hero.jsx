import { useEffect, useState } from 'react';
import { ArrowDown, Download, Mail, Github } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero} id="home">
      {/* Animated Background */}
      <div className={styles.background}>
        <div className={styles.gradientOrb}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
        <div className={styles.gridPattern}></div>
      </div>

      <div className="container">
        <div className={styles.content}>
          {/* Profile Image */}
          <div 
            className={`${styles.profileContainer} ${isLoaded ? styles.visible : ''}`}
            style={{ transitionDelay: '0.1s' }}
          >
            <div className={styles.profileImageWrapper}>
              <div className={styles.profileGlow}></div>
              <img 
                src="/Mohan.jpg" 
                alt="Mohan Rao Boddu" 
                className={styles.profileImage}
              />
              <div className={styles.profileFallback} style={{display: 'none'}}>
                <span>MR</span>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div 
            className={`${styles.badge} ${isLoaded ? styles.visible : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <span className={styles.badgeDot}></span>
            <span>Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 
            className={`${styles.name} ${isLoaded ? styles.visible : ''}`}
            style={{ transitionDelay: '0.3s' }}
          >
            MOHAN RAO BODDU
          </h1>

          {/* Title */}
          <h2 
            className={`${styles.title} ${isLoaded ? styles.visible : ''}`}
            style={{ transitionDelay: '0.4s' }}
          >
            Full Stack Developer
          </h2>

          {/* Tagline */}
          <p 
            className={`${styles.tagline} ${isLoaded ? styles.visible : ''}`}
            style={{ transitionDelay: '0.5s' }}
          >
            Building scalable, secure, and modern full stack web applications
          </p>

          {/* CTA Buttons */}
          <div 
            className={`${styles.ctaGroup} ${isLoaded ? styles.visible : ''}`}
            style={{ transitionDelay: '0.6s' }}
          >
            <button 
              className={`btn btn-secondary ${styles.ctaButton}`}
              onClick={scrollToProjects}
            >
              <Github size={18} />
              View Projects
            </button>
            <a 
              href="/Mohan%20Rao%20Resume.pdf"
              download
              className={`btn btn-secondary ${styles.ctaButton}`}
            >
              <Download size={18} />
              Download Resume
            </a>
            <button 
              className={`btn btn-secondary ${styles.ctaButton}`}
              onClick={scrollToContact}
            >
              <Mail size={18} />
              Contact Me
            </button>
          </div>

          {/* Tech Stack Preview */}
          <div 
            className={`${styles.techStack} ${isLoaded ? styles.visible : ''}`}
            style={{ transitionDelay: '0.7s' }}
          >
            <span className={styles.techLabel}>Tech Stack</span>
            <div className={styles.techItems}>
              {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'SQL'].map((tech, index) => (
                <span 
                  key={tech} 
                  className={styles.techItem}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Hero;
