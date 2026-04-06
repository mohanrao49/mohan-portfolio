import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [ 'Python', 'JavaScript']
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'HTML', 'CSS', 'Bootstrap']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js']
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'SQL']
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Vercel', 'Render', 'Netlify', 'VS Code', 'JWT Authentication']
    }
  ];

  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <RevealOnScroll>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies I work with to bring ideas to life
          </p>
        </RevealOnScroll>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, categoryIndex) => (
            <RevealOnScroll 
              key={category.title}
              delay={0.1 * (categoryIndex + 1)}
              className={styles.categoryCard}
            >
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillsTags}>
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skill} 
                    className={styles.skillTag}
                    style={{ animationDelay: `${0.1 * skillIndex}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
