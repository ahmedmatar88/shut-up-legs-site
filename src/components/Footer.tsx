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