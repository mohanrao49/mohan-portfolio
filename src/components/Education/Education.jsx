import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
import styles from './Education.module.css';

const Education = () => {

  const education = [
    {
      type: 'degree',
      title: 'B.Tech in Information Technology',
      institution: 'Anil Neerukonda Institute of Technology and Sciences',
      location: 'Visakhapatnam, India',
      period: '2021 - 2027',
      grade: 'CGPA: 8.85',
      icon: <GraduationCap size={24} />
    },
    {
      type: 'certification',
      title: 'Full Stack Development Certification',
      institution: 'NxtWave',
      location: 'Online',
      period: '2024 - Present',
      description: 'Comprehensive training in Full stack development, Python & SQL',
      icon: <Award size={24} />
    }
  ];

  return (
    <section className="section" id="education">
      <div className="container">
        <RevealOnScroll>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic background and professional certifications
          </p>
        </RevealOnScroll>

        <div className={styles.timeline}>
          {education.map((item, index) => (
            <RevealOnScroll 
              key={item.title}
              delay={0.15 * (index + 1)}
              className={styles.timelineItem}
            >
              <div className={styles.timelineMarker}>
                <div className={styles.markerIcon}>{item.icon}</div>
                {index !== education.length - 1 && <div className={styles.timelineLine}></div>}
              </div>
              
              <div className={styles.timelineContent}>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className={`${styles.badge} ${styles[item.type]}`}>
                      {item.type === 'degree' ? 'Degree' : 'Certification'}
                    </span>
                  </div>
                  
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.institution}>{item.institution}</p>
                  
                  <div className={styles.meta}>
                    <span className={styles.metaItem}>
                      <Calendar size={14} />
                      {item.period}
                    </span>
                    <span className={styles.metaItem}>
                      <MapPin size={14} />
                      {item.location}
                    </span>
                  </div>
                  
                  {item.grade && (
                    <div className={styles.grade}>{item.grade}</div>
                  )}
                  
                  {item.description && (
                    <p className={styles.description}>{item.description}</p>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
