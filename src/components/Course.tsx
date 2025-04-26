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
        <p>On the day, you'll have two route options to choose from:</p>

        {/* Short Route */}
        <section className={styles.route}>
          <h2>Short Route</h2>
          <p><strong>Distance:</strong> 8.25 miles | <strong>Elevation Gain:</strong> 434 feet</p>
          <p><strong>Estimated Time:</strong> ~2 hours depending on pace.</p>
          <p>A scenic, rolling ride through the Lakes – perfect for intermediate cyclists.</p>

          <div className={styles.embedContainer}>
            <div
              className="strava-embed-placeholder"
              data-embed-type="route"
              data-embed-id="3341174526037101836"
              data-style="standard"
              data-slippy="true"
            ></div>
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
          <p>The full Shut Up LEGS experience — expect challenging climbs and epic views.</p>

          <div className={styles.embedContainer}>
            <div
              className="strava-embed-placeholder"
              data-embed-type="route"
              data-embed-id="3335363735599423332"
              data-style="standard"
              data-slippy="true"
            ></div>
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
