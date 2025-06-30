import React from 'react';
import styles from '../../styles/LegalPage.module.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className={styles.page}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.heading}>Privacy Policy</h1>
        <div className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString('en-GB')}</div>
        
        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            Welcome to the Shut Up LEGS memorial cycling event website. We are committed to protecting your privacy and being transparent about how we collect, use, and protect your personal information.
          </p>
          <p>
            This privacy policy explains how we handle your personal data when you visit our website or register for our event.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Data Controller</h2>
          <p>
            The data controller responsible for your personal information is the Shut Up LEGS organising committee. You can contact us at:
          </p>
          <div className={styles.contactInfo}>
            <p>Email: info@shut-up-legs.cc</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>3. Information We Collect</h2>
          <h3>Information you provide directly:</h3>
          <ul>
            <li><strong>Newsletter signup:</strong> Name and email address when you subscribe to our newsletter</li>
            <li><strong>Event registration:</strong> Personal details required for British Cycling registration (handled by British Cycling)</li>
            <li><strong>Donations:</strong> Information processed by JustGiving (see their privacy policy)</li>
          </ul>
          
          <h3>Information collected automatically:</h3>
          <ul>
            <li><strong>Website usage:</strong> Pages visited, time spent, device information (if analytics cookies are enabled)</li>
            <li><strong>Cookies:</strong> See our Cookie Policy for detailed information</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. How We Use Your Information</h2>
          <p>We use your personal information for the following purposes:</p>
          <ul>
            <li><strong>Newsletter:</strong> To send you updates about the event and related cycling activities</li>
            <li><strong>Event organisation:</strong> To coordinate the memorial ride and ensure participant safety</li>
            <li><strong>Charity fundraising:</strong> To support our fundraising efforts for Great North Air Ambulance Service</li>
            <li><strong>Website improvement:</strong> To understand how our website is used and improve user experience (with your consent)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Legal Basis for Processing</h2>
          <p>We process your personal data under the following legal bases:</p>
          <ul>
            <li><strong>Consent:</strong> For newsletter subscriptions and optional cookies</li>
            <li><strong>Legitimate interests:</strong> For event organisation and safety purposes</li>
            <li><strong>Legal obligation:</strong> Where required by law for event safety and insurance</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. Data Sharing</h2>
          <p>We may share your information with:</p>
          <ul>
            <li><strong>British Cycling:</strong> For official event registration and insurance</li>
            <li><strong>Service providers:</strong> Companies that help us run our website and send emails</li>
            <li><strong>Emergency services:</strong> If required for participant safety during the event</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>
        </section>

        <section className={styles.section}>
          <h2>7. Your Rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Rectification:</strong> Correct inaccurate personal data</li>
            <li><strong>Erasure:</strong> Request deletion of your personal data</li>
            <li><strong>Restrict processing:</strong> Limit how we use your data</li>
            <li><strong>Data portability:</strong> Receive your data in a portable format</li>
            <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
            <li><strong>Withdraw consent:</strong> Where processing is based on consent</li>
          </ul>
          <p>To exercise these rights, contact us at info@shut-up-legs.cc</p>
        </section>

        <section className={styles.section}>
          <h2>8. Data Retention</h2>
          <p>We keep your personal information for:</p>
          <ul>
            <li><strong>Newsletter subscribers:</strong> Until you unsubscribe</li>
            <li><strong>Event participants:</strong> For 7 years after the event for insurance and legal purposes</li>
            <li><strong>Website analytics:</strong> Maximum 26 months (Google Analytics default)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>9. Cookies</h2>
          <p>
            Our website uses cookies to improve your experience. For detailed information about our use of cookies, please see our{' '}
            <a href="/cookie-policy" style={{color: '#FFD700'}}>Cookie Policy</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Third-Party Services</h2>
          <p>Our website integrates with several third-party services:</p>
          <ul>
            <li><strong>Google Maps:</strong> For location information (Google Privacy Policy applies)</li>
            <li><strong>Google reCAPTCHA:</strong> For form security (Google Privacy Policy applies)</li>
            <li><strong>Strava:</strong> For route information (Strava Privacy Policy applies)</li>
            <li><strong>British Cycling:</strong> For event registration (British Cycling Privacy Policy applies)</li>
            <li><strong>JustGiving:</strong> For donations (JustGiving Privacy Policy applies)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>11. Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section className={styles.section}>
          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any significant changes by updating the "last updated" date at the top of this policy.
          </p>
        </section>

        <section className={styles.section}>
          <h2>13. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our data practices, please contact us at:
          </p>
          <div className={styles.contactInfo}>
            <p>Email: info@shut-up-legs.cc</p>
          </div>
          <p>
            You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) if you believe we have not handled your personal data properly.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;