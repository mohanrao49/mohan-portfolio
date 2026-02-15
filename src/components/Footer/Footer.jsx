import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/mohanrao49'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/boddumohanrao'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:boddumohanrao.23.it@anits.edu.in'
    }
  ];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* Brand */}
          <div className={styles.brand}>
            <h3 className={styles.brandName}>Mohan Rao Boddu</h3>
            <p className={styles.brandTagline}>
              Full Stack Developer crafting digital experiences
            </p>
          </div>

          {/* Navigation */}
          <nav className={styles.navigation}>
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href}
                className={styles.navLink}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className={styles.socialLinks}>
            {socialLinks.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            {currentYear} Mohan Rao Boddu. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Made with <Heart size={14} className={styles.heart} /> and lots of coffee
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        className={styles.scrollTop}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
