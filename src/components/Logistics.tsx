import React from 'react';
import styles from '../styles/Logistics.module.css';

const OnTheDay: React.FC = () => {
  return (
    <main className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.heading}>On the Day</h1>
        <p className={styles.intro}>
          Everything you need to know for the day of the ride
        </p>

        <section className={styles.infoSection}>
          <h2>Registration & Location</h2>
          <p>
            Registration opens at <strong>8am</strong> at <strong>Wheelbase Cycles in Staveley</strong>. 
            As you have registered on-line all you will need to do is pick up your registration pack.
          </p>
          
          {/* Google Maps Iframe */}
          <div className={styles.mapContainer}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2323.853359790079!2d-2.815177!3d54.37724060000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487c92e850fe4a0f%3A0x3b7a5d69f7d09488!2sWheelbase%20Cycles!5e0!3m2!1sen!2suk!4v1750417055178!5m2!1sen!2suk" 
              width="600" 
              height="450" 
              style={{border: 0}} 
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Wheelbase Cycles Location"
            ></iframe>
          </div>
          
          <p style={{marginTop: '1rem', fontSize: '0.9rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)'}}>
            📍 Click on the map to get directions to Wheelbase Cycles, Staveley
          </p>
        </section>

        <section className={styles.infoSection}>
          <h2>Start Times</h2>
          <p>
            Cyclists completing the <strong>Long Route</strong> will start at <strong>8.30am</strong> and 
            cyclists completing the <strong>Short Route</strong> are able to start anytime between <strong>9.00am and 10.00am</strong>.
          </p>
          <p style={{marginTop: '1rem', color: '#FFD700'}}>
            <strong>Both routes start from Wheelbase Cycles (see map above)</strong>
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

export default OnTheDay;