import React from 'react';
import styles from '../styles/Logistics.module.css';

const Logistics: React.FC = () => {
  return (
    <main className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.heading}>On the Day</h1>
        <p className={styles.intro}>
          Everything you need to know for the day of the ride
        </p>

        <section className={styles.infoSection}>
          <h2>Registration</h2>
          <p>
            Registration opens at <strong>8am</strong> at <strong>Wheelbase Cycles in Staveley</strong>. 
            As you have registered on-line all you will need to do is pick up your registration pack.
          </p>
        </section>

        <section className={styles.infoSection}>
          <h2>Start</h2>
          <p>
            Cyclists completing the <strong>Long Route</strong> will start at <strong>8.30am</strong> and 
            cyclists completing the <strong>Short Route</strong> are able to start anytime between <strong>9.00am and 10.00am</strong>.
          </p>
        </section>

        <section className={styles.infoSection}>
          <h2>Refreshments</h2>
          <p>
            There is a feed station at <strong>Finsthwait Village Hall</strong> for those riding the Long Route 
            and a smaller feed station at <strong>St Cuthberts Church</strong> for those riding the Short Route.
          </p>
        </section>

        <div className={styles.backButtonContainer}>
          <button 
            className={styles.button} 
            onClick={() => window.location.href = '/'}
          >
            Back to Home
          </button>
        </div>
      </div>
    </main>
  );
};

export default Logistics;