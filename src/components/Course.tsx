import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Course.module.css';

const Course: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://strava-embeds.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.heading}>Ride Routes – Shut Up LEGS</h1>
        <p>On the day, you'll have two route options to choose from. Details for both rides are below.</p>

        {/* Start Location Section with Google Maps */}
        <section className={styles.route}>
          <h2>Start Location</h2>
          <p><strong>Meeting Point:</strong> Wheelbase Cycles, Staveley</p>
          <p>Both the Short Route and Long Route begin from the same location. Use the map below to find us:</p>
          
          {/* Google Maps Iframe */}
          <div className={styles.mapContainer}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2323.853359790079!2d-2.815177!3d54.37724060000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487c92e850fe4a0f%3A0x3b7a5d69f7d09488!2sWheelbase%20Cycles!5e0!3m2!1sen!2suk!4v1750417055178!5m2!1sen!2suk" 
              width="600" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Wheelbase Cycles - Route Start Location"
            />
          </div>
          
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)' }}>
            📍 Click on the map to get directions to our starting point
          </p>
        </section>

        {/* Short Route */}
        <section className={styles.route}>
          <h2>Short Route</h2>
          <p><strong>Distance:</strong> 8.25 miles | <strong>Elevation Gain:</strong> 434 feet</p>
          <p><strong>Estimated Time:</strong> ~2 hours depending on pace.</p>
          <p><strong>Start:</strong> Wheelbase Cycles, Staveley</p>
          <p>A scenic and relaxed ride through the beautiful Lake District — perfect for beginners and intermediate cyclists alike.</p>

          <div className={styles.embedContainer}>
            <div className="responsive-iframe">
              <div
                className="strava-embed-placeholder fadeIn"
                data-embed-type="route"
                data-embed-id="3341174526037101836"
                data-style="standard"
                data-slippy="true"
              />
            </div>
          </div>

          <div className={styles.routeLinks}>
            <a href="https://www.strava.com/routes/3341174526037101836" target="_blank" rel="noopener noreferrer">
              View Full Route on Strava
            </a>
            <a href="https://www.strava.com/routes/3341174526037101836.gpx" target="_blank" rel="noopener noreferrer">
              Download GPX File
            </a>
          </div>
        </section>

        {/* Long Route */}
        <section className={styles.route}>
          <h2>Long Route</h2>
          <p><strong>Distance:</strong> 62.32 miles | <strong>Elevation Gain:</strong> 6,281 feet</p>
          <p><strong>Estimated Time:</strong> 5–7 hours depending on fitness.</p>
          <p><strong>Start:</strong> Wheelbase Cycles, Staveley</p>
          <p>The full Shut Up LEGS experience — expect challenging climbs and epic views.</p>

          <div className={styles.embedContainer}>
            <div className="responsive-iframe">
              <div
                className="strava-embed-placeholder fadeIn"
                data-embed-type="route"
                data-embed-id="3335363735599423332"
                data-style="standard"
                data-slippy="true"
              />
            </div>
          </div>

          <div className={styles.routeLinks}>
            <a href="https://www.strava.com/routes/3335363735599423332" target="_blank" rel="noopener noreferrer">
              View Full Route on Strava
            </a>
            <a href="https://www.strava.com/routes/3335363735599423332.gpx" target="_blank" rel="noopener noreferrer">
              Download GPX File
            </a>
          </div>
        </section>

        {/* Back button */}
        <div className={styles.backButtonContainer}>
          <button className={styles.button} onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </div>
    </main>
  );
};

export default Course;