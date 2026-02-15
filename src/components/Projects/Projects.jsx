import { useEffect, useState } from 'react';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
import styles from './Projects.module.css';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const featuredProjects = [
    {
      name: 'Civic Connect',
      description: 'A comprehensive civic issue reporting platform that enables citizens to report and track community issues. Features include real-time status updates, location-based reporting, and administrative dashboards.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth'],
      github: 'https://github.com/mohanrao49/issue-reporting',
      demo: 'https://issue-reporting-pi.vercel.app',
      featured: true
    },
    {
      name: 'Skill Bartering Platform',
      description: 'A full-stack web application that connects users to exchange skills and services. Features user authentication, skill matching algorithm, messaging system, and rating mechanism.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'SQL', 'JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/mohanrao49/Skill_Bartering',
      demo: 'https://skillbarteringswap.netlify.app',
      featured: true
    }
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/mohanrao49/repos?sort=updated&per_page=6');
        if (response.ok) {
          const data = await response.json();
          setRepos(data.filter(repo => !repo.fork));
        }
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="section" id="projects">
      <div className="container">
        <RevealOnScroll>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing my best work and technical expertise
          </p>
        </RevealOnScroll>

        {/* Featured Projects */}
        <div className={styles.featuredGrid}>
          {featuredProjects.map((project, index) => (
            <RevealOnScroll 
              key={project.name}
              delay={0.1 * (index + 1)}
              className={styles.featuredCard}
            >
              <div className={styles.cardGlow}></div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <span className={styles.featuredBadge}>Featured</span>
                </div>
                <h3 className={styles.projectTitle}>{project.name}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.technologies.map(tech => (
                    <span key={tech} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <div className={styles.cardActions}>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-secondary ${styles.actionButton}`}
                  >
                    <Github size={18} />
                    View Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-secondary ${styles.actionButton}`}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* GitHub Repos */}
        <RevealOnScroll delay={0.3} className={styles.githubSection}>
          <h3 className={styles.githubTitle}>More on GitHub</h3>
          
          {loading ? (
            <div className={styles.loadingGrid}>
              {[...Array(6)].map((_, i) => (
                <div key={i} className={styles.skeletonCard}></div>
              ))}
            </div>
          ) : (
            <div className={styles.reposGrid}>
              {repos.map((repo, index) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.repoCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.repoHeader}>
                    <Github size={20} className={styles.repoIcon} />
                    <h4 className={styles.repoName}>{repo.name}</h4>
                  </div>
                  <p className={styles.repoDescription}>
                    {repo.description || 'No description available'}
                  </p>
                  <div className={styles.repoStats}>
                    <span className={styles.stat}>
                      <Star size={14} />
                      {repo.stargazers_count}
                    </span>
                    <span className={styles.stat}>
                      <GitFork size={14} />
                      {repo.forks_count}
                    </span>
                    <span className={styles.repoLanguage}>
                      {repo.language || 'Various'}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}

          <div className={styles.githubCta}>
            <a 
              href="https://github.com/mohanrao49"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Github size={18} />
              View All Projects on GitHub
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Projects;
