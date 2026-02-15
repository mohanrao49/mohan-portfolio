import { useState } from 'react';
import { Mail, Send, User, MessageSquare, CheckCircle } from 'lucide-react';
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <RevealOnScroll>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let us work together
          </p>
        </RevealOnScroll>

        <div className={styles.contactWrapper}>
          <RevealOnScroll delay={0.1} className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Let us connect</h3>
            <p className={styles.infoDescription}>
              I am always open to discussing new projects, creative ideas, or 
              opportunities to be part of your vision. Feel free to reach out!
            </p>
            
            <div className={styles.contactMethods}>
              <a 
                href="mailto:boddumohanrao.23.it@anits.edu.in"
                className={styles.contactMethod}
              >
                <div className={styles.methodIcon}>
                  <Mail size={20} />
                </div>
                <div className={styles.methodDetails}>
                  <span className={styles.methodLabel}>Email</span>
                  <span className={styles.methodValue}>boddumohanrao.23.it@anits.edu.in</span>
                </div>
              </a>
            </div>

            <div className={styles.availability}>
              <span className={styles.availabilityDot}></span>
              <span className={styles.availabilityText}>
                Currently available for freelance work
              </span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2} className={styles.formContainer}>
            {isSubmitted ? (
              <div className={styles.successMessage}>
                <CheckCircle size={48} className={styles.successIcon} />
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    <User size={16} />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="John Doe"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    <Mail size={16} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="john@example.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    <MessageSquare size={16} />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={styles.textarea}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button 
                  type="submit" 
                  className={`${styles.submitButton} btn btn-primary`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className={styles.spinner}></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;
