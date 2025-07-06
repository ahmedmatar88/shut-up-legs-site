import React from 'react';
import { CookieConsentManager } from '../utils/cookieConsent';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const reopenCookieSettings = () => {
    CookieConsentManager.clearConsent();
    window.location.reload();
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Social Media Section */}
        <div className={styles.socialSection}>
          <h3 className={styles.sectionTitle}>Follow Us</h3>
          <div className={styles.socialLinks}>
            <a 
              href="https://www.instagram.com/shut_up_legs.cc" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Follow us on Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
            
            <a 
              href="https://strava.app.link/ZRMNUEI1MUb" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Join our Strava group"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/>
              </svg>
              <span>Strava Group</span>
            </a>
          </div>
        </div>

        {/* Legal Links */}
        <div className={styles.legalSection}>
          <a href="/privacy-policy">Privacy Policy</a>
          <span>•</span>
          <a href="/cookie-policy">Cookie Policy</a>
          <span>•</span>
          <a href="/terms">Terms of Use</a>
          <span>•</span>
          <button onClick={reopenCookieSettings} className={styles.cookieButton}>
            Cookie Settings
          </button>
        </div>

        {/* Copyright - simplified structure */}
        <div className={styles.copyright}>
          <p>© {currentYear} Shut Up LEGS Memorial Ride. All rights reserved.</p>
          <p>In loving memory of Nathan Park 💛</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;