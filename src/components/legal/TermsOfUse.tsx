import React from 'react';
import styles from '../../styles/LegalPage.module.css';

const TermsOfUse: React.FC = () => {
  return (
    <main className={styles.page}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.heading}>Terms of Use</h1>
        <div className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString('en-GB')}</div>
        
        <section className={styles.section}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Shut Up LEGS website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Event Participation</h2>
          <p>
            Participation in the Shut Up LEGS memorial cycling event is subject to the following conditions:
          </p>
          <ul>
            <li>You must be registered through British Cycling's official registration system</li>
            <li>You participate at your own risk and responsibility</li>
            <li>You must follow all safety guidelines and instructions provided by event organisers</li>
            <li>You must have appropriate insurance coverage for cycling activities</li>
            <li>Minimum age requirements and parental consent may apply</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Health and Safety</h2>
          <p>
            By participating in our cycling event, you acknowledge that:
          </p>
          <ul>
            <li>Cycling involves inherent risks and dangers</li>
            <li>You are in good physical condition and able to participate safely</li>
            <li>You will wear appropriate safety equipment, including a helmet</li>
            <li>You will follow the Highway Code and local traffic laws</li>
            <li>You will not participate under the influence of alcohol or drugs</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Liability and Insurance</h2>
          <p>
            The Shut Up LEGS organising committee:
          </p>
          <ul>
            <li>Acts as facilitators for this memorial event</li>
            <li>Does not accept liability for accidents, injuries, or losses during the event</li>
            <li>Strongly recommends participants have personal insurance coverage</li>
            <li>Requires all participants to register through British Cycling for insurance coverage</li>
          </ul>
          <p>
            <strong>Participants ride entirely at their own risk.</strong>
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Website Use</h2>
          <p>You agree to use our website only for lawful purposes and in a way that does not:</p>
          <ul>
            <li>Infringe upon the rights of others</li>
            <li>Restrict or inhibit anyone else's use of the website</li>
            <li>Attempt to gain unauthorised access to our systems</li>
            <li>Transmit any harmful or malicious code</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. Intellectual Property</h2>
          <p>
            All content on this website, including text, images, logos, and design elements, is protected by copyright and other intellectual property rights. You may not reproduce, distribute, or create derivative works without our express written permission.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Photography and Media</h2>
          <p>
            By participating in the event, you consent to:
          </p>
          <ul>
            <li>Photography and video recording during the event</li>
            <li>Use of your image for promotional purposes related to the memorial event</li>
            <li>Sharing of event photos and stories on our website and social media</li>
          </ul>
          <p>
            If you do not wish to be photographed, please inform the event organisers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Fundraising</h2>
          <p>
            This event is organised to raise funds for the Great North Air Ambulance Service (GNAAS):
          </p>
          <ul>
            <li>All donations are processed through JustGiving</li>
            <li>Donations are made directly to GNAAS, not to the event organisers</li>
            <li>We cannot provide tax advice regarding charitable donations</li>
            <li>Donation receipts are provided by JustGiving/GNAAS</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>9. Event Changes and Cancellation</h2>
          <p>
            We reserve the right to:
          </p>
          <ul>
            <li>Modify event details, routes, or timing for safety reasons</li>
            <li>Cancel the event due to weather, safety concerns, or other circumstances</li>
            <li>Refuse participation to anyone who does not meet safety requirements</li>
          </ul>
          <p>
            In case of cancellation, we will make reasonable efforts to notify participants through our website and email communications.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Data Protection</h2>
          <p>
            Your personal information is processed in accordance with our{' '}
            <a href="/privacy-policy" style={{color: '#FFD700'}}>Privacy Policy</a>.
            By using our website and participating in our event, you consent to the collection and use of your information as described.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. Disclaimer</h2>
          <p>
            This website and the information contained herein are provided "as is" without warranty of any kind. We make no representations or warranties regarding the accuracy, completeness, or suitability of the information provided.
          </p>
        </section>

        <section className={styles.section}>
          <h2>12. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms or your use of our website will be subject to the exclusive jurisdiction of the English courts.
          </p>
        </section>

        <section className={styles.section}>
          <h2>13. Changes to Terms</h2>
          <p>
            We may update these terms from time to time. Any changes will be posted on this page with an updated "last modified" date. Your continued use of the website after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section className={styles.section}>
          <h2>14. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Use, please contact us at:
          </p>
          <div className={styles.contactInfo}>
            <p>Email: info@shut-up-legs.cc</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>15. Memorial Event Context</h2>
          <p>
            This event is organised in loving memory of Nathan Park. We ask all participants to respect the memorial nature of this event and to ride in the spirit of friendship, community, and remembrance that Nathan embodied.
          </p>
          <p style={{textAlign: 'center', fontStyle: 'italic', color: '#FFD700', marginTop: '2rem'}}>
            "Forever riding ahead of us. 🚴‍♂️"
          </p>
        </section>
      </div>
    </main>
  );
};

export default TermsOfUse;