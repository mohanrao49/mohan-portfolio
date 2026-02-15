import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`${styles.navigation} ${isScrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <div className={styles.navContent}>
            {/* Logo */}
            <a href="#home" className={styles.logo} onClick={(e) => handleNavClick(e, '#home')}>
              MR
            </a>

            {/* Desktop Navigation */}
            <div className={styles.desktopNav}>
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className={styles.navLink}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={styles.mobileMenuButton}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileNavLinks}>
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
