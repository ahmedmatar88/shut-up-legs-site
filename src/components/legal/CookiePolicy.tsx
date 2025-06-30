import React from 'react';
import { CookieConsentManager } from '../../utils/cookieConsent';
import styles from '../../styles/LegalPage.module.css';

const CookiePolicy: React.FC = () => {
  const reopenCookieSettings = () => {
    CookieConsentManager.clearConsent();
    window.location.reload();
  };

  return (
    <main className={styles.page}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.heading}>Cookie Policy</h1>
        <div className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString('en-GB')}</div>
        
        <section className={styles.section}>
          <h2>1. What are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul>
            <li><strong>Essential functionality:</strong> To ensure our website works properly</li>
            <li><strong>Performance:</strong> To understand how visitors use our website</li>
            <li><strong>Preferences:</strong> To remember your cookie consent choices</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Types of Cookies We Use</h2>
          
          <div className={styles.cookieType}>
            <h3>Necessary Cookies</h3>
            <p><strong>Purpose:</strong> Essential for the website to function properly</p>
            <p><strong>Duration:</strong> Session and persistent</p>
            <p><strong>Examples:</strong> Cookie consent preferences, form security tokens</p>
            <p><em>These cookies cannot be disabled as they are essential for the website to work.</em></p>
          </div>

          <div className={styles.cookieType}>
            <h3>Analytics Cookies (Optional)</h3>
            <p><strong>Purpose:</strong> Help us understand how visitors interact with our website</p>
            <p><strong>Duration:</strong> Up to 26 months</p>
            <p><strong>Provider:</strong> Google Analytics</p>
            <p><strong>Examples:</strong> _ga, _ga_*, _gid</p>
            <p><em>You can opt out of these cookies in your cookie preferences.</em></p>
          </div>

          <div className={styles.cookieType}>
            <h3>Marketing Cookies (Optional)</h3>
            <p><strong>Purpose:</strong> Used to track visitors across websites for advertising purposes</p>
            <p><strong>Duration:</strong> Varies</p>
            <p><strong>Note:</strong> Currently not used, but reserved for future marketing activities</p>
            <p><em>You can opt out of these cookies in your cookie preferences.</em></p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>4. Third-Party Cookies</h2>
          <p>Some cookies are set by third-party services that appear on our website:</p>
          
          <div className={styles.thirdParty}>
            <h3>Google Maps</h3>
            <p>We use Google Maps to show event locations. Google may set cookies to provide this service.</p>
            <p><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></p>
          </div>

          <div className={styles.thirdParty}>
            <h3>Google reCAPTCHA</h3>
            <p>We use reCAPTCHA to protect our forms from spam. Google may set cookies for this service.</p>
            <p><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></p>
          </div>

          <div className={styles.thirdParty}>
            <h3>Strava</h3>
            <p>We embed Strava route maps. Strava may set cookies when you interact with these embeds.</p>
            <p><a href="https://www.strava.com/legal/privacy" target="_blank" rel="noopener noreferrer">Strava Privacy Policy</a></p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>5. Managing Your Cookie Preferences</h2>
          <p>You can manage your cookie preferences in several ways:</p>
          
          <div className={styles.manageOptions}>
            <h3>Our Cookie Settings</h3>
            <p>You can change your cookie preferences at any time by clicking the button below:</p>
            <button onClick={reopenCookieSettings} className={styles.cookieButton}>
              Manage Cookie Preferences
            </button>
          </div>

          <div className={styles.manageOptions}>
            <h3>Browser Settings</h3>
            <p>You can also control cookies through your browser settings:</p>
            <ul>
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact us at info@shut-up-legs.cc.
          </p>
        </section>
      </div>
    </main>
  );
};

export default CookiePolicy;