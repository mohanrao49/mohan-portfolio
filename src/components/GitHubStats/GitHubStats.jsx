import { useEffect, useState } from 'react';
import { Github, GitCommit, GitBranch, Star, Users } from 'lucide-react';
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
import styles from './GitHubStats.module.css';

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const userResponse = await fetch('https://api.github.com/users/mohanrao49');
        const reposResponse = await fetch('https://api.github.com/users/mohanrao49/repos?per_page=100');
        
        if (userResponse.ok && reposResponse.ok) {
          const userData = await userResponse.json();
          const reposData = await reposResponse.json();
          
          const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
          const totalForks = reposData.reduce((acc, repo) => acc + repo.forks_count, 0);
          
          setStats({
            repos: userData.public_repos,
            followers: userData.followers,
            following: userData.following,
            stars: totalStars,
            forks: totalForks
          });
        }
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    { icon: <Github size={24} />, label: 'Repositories', value: stats?.repos || 0 },
    { icon: <Star size={24} />, label: 'Total Stars', value: stats?.stars || 0 },
    { icon: <GitBranch size={24} />, label: 'Total Forks', value: stats?.forks || 0 },
    { icon: <Users size={24} />, label: 'Followers', value: stats?.followers || 0 }
  ];

  return (
    <section className="section section-alt" id="github-stats">
      <div className="container">
        <RevealOnScroll>
          <h2 className="section-title">GitHub Activity</h2>
          <p className="section-subtitle">
            My open source contributions and coding statistics
          </p>
        </RevealOnScroll>

        <div className={styles.statsGrid}>
          {statCards.map((stat, index) => (
            <RevealOnScroll 
              key={stat.label}
              delay={0.1 * (index + 1)}
              className={styles.statCard}
            >
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statValue}>
                {loading ? (
                  <span className={styles.skeleton}></span>
                ) : (
                  stat.value.toLocaleString()
                )}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Contribution Graph Placeholder */}
        <RevealOnScroll delay={0.3} className={styles.contributionSection}>
          <h3 className={styles.contributionTitle}>Contribution Graph</h3>
          <div className={styles.contributionGraph}>
            <img 
              src="https://ghchart.rshah.org/667eea/mohanrao49" 
              alt="GitHub Contribution Graph"
              className={styles.contributionImage}
            />
          </div>
          <p className={styles.contributionNote}>
            View my complete contribution history on{' '}
            <a 
              href="https://github.com/mohanrao49" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.contributionLink}
            >
              GitHub
            </a>
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default GitHubStats;
