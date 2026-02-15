import { Trophy, Medal, Award } from 'lucide-react';
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
import styles from './Achievements.module.css';

const Achievements = () => {

  const achievements = [
    {
      title: 'Smart India Hackathon Internal Hackathon',
      position: '1st Prize (Winner)',
      description: 'Secured first place in the internal hackathon round, demonstrating innovative problem-solving and technical excellence.',
      icon: <Trophy size={28} />,
      color: 'gold'
    },
    {
      title: 'Miracle Citizen Hackathon',
      position: '2nd Prize',
      description: 'Achieved second place by developing a creative solution that addressed real-world civic challenges effectively.',
      icon: <Medal size={28} />,
      color: 'bronze'
    },
    {
      title: 'GeeksforGeeks Vibe Coding Hackathon',
      position: '2nd Prize',
      description: 'Won second prize for developing an innovative application with clean code architecture and modern technologies.',
      icon: <Award size={28} />,
      color: 'bronze'
    }
  ];

  return (
    <section className="section section-alt" id="achievements">
      <div className="container">
        <RevealOnScroll>
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">
            Recognition for excellence in hackathons and competitions
          </p>
        </RevealOnScroll>

        <div className={styles.achievementsGrid}>
          {achievements.map((achievement, index) => (
            <RevealOnScroll 
              key={achievement.title}
              delay={0.15 * (index + 1)}
              className={styles.achievementCard}
            >
              <div className={`${styles.iconWrapper} ${styles[achievement.color]}`}>
                {achievement.icon}
              </div>
              
              <div className={styles.content}>
                <span className={`${styles.position} ${styles[achievement.color]}`}>
                  {achievement.position}
                </span>
                <h3 className={styles.title}>{achievement.title}</h3>
                <p className={styles.description}>{achievement.description}</p>
              </div>

              <div className={styles.glow}></div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
