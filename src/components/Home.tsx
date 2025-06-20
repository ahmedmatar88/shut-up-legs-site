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

        <h1 className={styles.heading}>
          A Ride in Memory of&nbsp;<span style={{ whiteSpace: 'nowrap' }}>Nathan Park</span><br />
          The Lake District<br />
          6th September 2025
        </h1>

        <div className={styles.registrationNotice}>
          <p>
            <strong>Planning to join us for the ride?</strong> Please register for the event by clicking the <strong>"Register for Event"</strong> button below. Registration will close at <strong>5pm on Sunday 31st August</strong>.
          </p>
        </div>

        <div className={styles.buttonGroup}>
          
          <button
            className={styles.button}
            onClick={() => window.location.href = '/about'}
          >
            About Nathan Park
          </button>
          
          <button
            className={styles.button}
            onClick={() => window.location.href = '/course'}
          >
            View the Routes
          </button>

          <button
            className={styles.button}
            onClick={() => window.location.href = '/on-the-day'}
          >
            On the Day
          </button>

          <a
            className={styles.button}
            href="https://www.britishcycling.org.uk/events/details/321588/Shut-Up-Legs---A-ride-for-Nathan-Park"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register for Event
          </a>

          <button
            className={styles.button}
            onClick={() => setShowModal(true)}
          >
            Sign up to Newsletter
          </button>

          <a
            className={styles.button}
            href="https://www.justgiving.com/page/joanne-simmonett-1732654861856"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate to Charity
          </a>
        </div>

        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </div>
    </main>
  );
};

export default Home;