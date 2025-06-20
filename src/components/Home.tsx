import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import Modal from './Modal/RegisterInterestModal';

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <img src="/shut-up-legs.png" alt="Shut Up LEGS Logo" className={styles.logo} />

        {/* Deadline notice at the top */}
        <div className={styles.urgencyBadge}>
          <span className={styles.urgencyText}>Registration Deadline</span>
          <span className={styles.urgencyDate}>Sunday 31st August • 5pm</span>
        </div>

        <h1 className={styles.heading}>
          A Ride in Memory of&nbsp;<span style={{ whiteSpace: 'nowrap' }}>Nathan Park</span><br />
          The Lake District<br />
          6th September 2025
        </h1>

        <p className={styles.subtitle}>
          Join us for a memorable cycling event through the stunning Lake District, 
          celebrating Nathan's life while raising funds for the Great North Air Ambulance Service.
        </p>

        {/* Separated registration section */}
        <div className={styles.registrationSection}>
          <a
            className={styles.primaryButton}
            href="https://www.britishcycling.org.uk/events/details/321588/Shut-Up-Legs---A-ride-for-Nathan-Park"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.primaryButtonIcon}>🚴‍♂️</span>
            <span className={styles.primaryButtonText}>
              <span className={styles.primaryButtonMain}>Register for Event</span>
              <span className={styles.primaryButtonSub}>Official British Cycling Registration</span>
            </span>
            <span className={styles.primaryButtonArrow}>→</span>
          </a>
          
          <p className={styles.registrationNote}>
            Secure your place for this special memorial ride
          </p>
        </div>

        {/* Secondary Actions */}
        <div className={styles.secondaryActions}>
          <h3 className={styles.sectionTitle}>Explore More</h3>
          
          <div className={styles.buttonGrid}>
            <button
              className={styles.button}
              onClick={() => window.location.href = '/about'}
            >
              <span className={styles.buttonIcon}>💛</span>
              <span>About Nathan</span>
            </button>
            
            <button
              className={styles.button}
              onClick={() => window.location.href = '/course'}
            >
              <span className={styles.buttonIcon}>🗺️</span>
              <span>View Routes</span>
            </button>

            <button
              className={styles.button}
              onClick={() => window.location.href = '/on-the-day'}
            >
              <span className={styles.buttonIcon}>📅</span>
              <span>Event Info</span>
            </button>

            <button
              className={styles.button}
              onClick={() => setShowModal(true)}
            >
              <span className={styles.buttonIcon}>📧</span>
              <span>Newsletter</span>
            </button>

            <a
              className={styles.button}
              href="https://www.justgiving.com/page/joanne-simmonett-1732654861856"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.buttonIcon}>❤️</span>
              <span>Donate</span>
            </a>
          </div>
        </div>

        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </div>
    </main>
  );
};

export default Home;