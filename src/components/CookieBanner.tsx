import React, { useState, useEffect } from 'react';
import { CookieConsentManager } from '../utils/cookieConsent';
import styles from '../styles/CookieBanner.module.css';

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    if (!CookieConsentManager.hasConsent()) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    CookieConsentManager.setConsent({
      necessary: true,
      analytics: true,
      marketing: true
    });
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    CookieConsentManager.setConsent({
      necessary: true,
      analytics: false,
      marketing: false
    });
    setShowBanner(false);
  };

  const savePreferences = () => {
    CookieConsentManager.setConsent(preferences);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.backdrop}>
      {!showPreferences ? (
        <div className={styles.banner}>
          <div className={styles.content}>
            <h3 className={styles.title}>🍪 We use cookies</h3>
            <p className={styles.description}>
              We use cookies to enhance your experience. This includes necessary cookies for the site to function, and optional cookies for analytics.
            </p>
            <div className={styles.actions}>
              <button onClick={acceptAll} className={styles.acceptAll}>
                Accept All
              </button>
              <button onClick={() => setShowPreferences(true)} className={styles.customize}>
                Customise
              </button>
              <button onClick={acceptNecessary} className={styles.reject}>
                Necessary Only
              </button>
            </div>
            <a href="/privacy-policy" className={styles.policyLink}>
              Read our Privacy Policy
            </a>
          </div>
        </div>
      ) : (
        <div className={styles.modal}>
          <h2 className={styles.modalTitle}>Cookie Preferences</h2>
          
          <div className={styles.cookieCategory}>
            <label className={styles.categoryHeader}>
              <input 
                type="checkbox" 
                checked={true} 
                disabled 
                className={styles.checkbox}
              />
              <div>
                <strong>Necessary Cookies</strong>
                <p>Essential for the website to function properly. Cannot be disabled.</p>
              </div>
            </label>
          </div>

          <div className={styles.cookieCategory}>
            <label className={styles.categoryHeader}>
              <input 
                type="checkbox" 
                checked={preferences.analytics}
                onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                className={styles.checkbox}
              />
              <div>
                <strong>Analytics Cookies</strong>
                <p>Help us understand how visitors interact with our website.</p>
              </div>
            </label>
          </div>

          <div className={styles.cookieCategory}>
            <label className={styles.categoryHeader}>
              <input 
                type="checkbox" 
                checked={preferences.marketing}
                onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                className={styles.checkbox}
              />
              <div>
                <strong>Marketing Cookies</strong>
                <p>Used to track visitors and display relevant advertisements.</p>
              </div>
            </label>
          </div>

          <div className={styles.modalActions}>
            <button onClick={savePreferences} className={styles.save}>
              Save Preferences
            </button>
            <button onClick={() => setShowPreferences(false)} className={styles.back}>
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieBanner;