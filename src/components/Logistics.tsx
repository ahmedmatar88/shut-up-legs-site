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
          
          <p style={{marginTop: '1.5rem'}}>
            <a 
              href="https://www.wheelbase.co.uk/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{color: '#FFD700', textDecoration: 'none', fontWeight: 'bold'}}
            >
              Visit Wheelbase website →
            </a>
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

        <section className={styles.infoSection}>
          <h2>Rider Information & Safety</h2>
          
          <h3 style={{color: '#FFD700', fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '1rem'}}>Safety Requirements</h3>
          <p>
            <strong style={{color: '#FFD700'}}>Cycling helmets must be worn</strong> during the event by all participants.
          </p>
          
          <p>
            The routes take place on <strong>open public roads</strong>. All riders must obey the usual rules of the road. 
            Some of the roads are narrow, so please be respectful of other road users. We ask that you do not ride in 
            large groups that will hinder other road users.
          </p>
          
          <h3 style={{color: '#FFD700', fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '1rem'}}>Emergency Procedures</h3>
          <p>
            If there is an incident on your route, please <strong>call the emergency services first</strong> if they are required. 
            If possible, please call one of our emergency numbers (these will be given to you at registration) and we will 
            assist if possible.
          </p>
          
          <p>
            If you aren't able to finish the route and return home without coming back to Wheelbase, 
            <strong style={{color: '#FFD700'}}> please let us know</strong> so we don't send out the search and rescue party to find you!
          </p>
        </section>

        <section className={styles.infoSection}>
          <h2>After the Ride - Drinks & Social</h2>
          <p>
            After completing your ride, join us at <strong>Indie Craft Beer</strong> from <strong>4pm onwards</strong> for drinks 
            and a chance to catch up with fellow riders. Share your stories from the ride, raise a glass to Nathan's memory, 
            and enjoy some well-deserved refreshments in great company.
          </p>
          
          <p style={{marginTop: '1.5rem', marginBottom: '1rem'}}>
            <strong>Location:</strong> Indie Craft Beer, Kendal
          </p>
          
          {/* Indie Craft Beer Google Maps Iframe */}
          <div className={styles.mapContainer}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2326.6395675669555!2d-2.748375186712691!3d54.32800310070746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487c8de7056c160b%3A0x68d04d165533ae3!2sIndie%20Craft%20Beer!5e0!3m2!1sen!2suk!4v1751141092298!5m2!1sen!2suk" 
              width="600" 
              height="450" 
              style={{border: 0}} 
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Indie Craft Beer - After Ride Meetup Location"
            />
          </div>
          
          <p style={{marginTop: '1rem', fontSize: '0.9rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)'}}>
            📍 Click on the map to get directions to Indie Craft Beer
          </p>
          
          <p style={{marginTop: '1.5rem'}}>
            <a 
              href="https://www.indiecraftbeer.co.uk" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{color: '#FFD700', textDecoration: 'none', fontWeight: 'bold'}}
            >
              Visit Indie Craft Beer's website →
            </a>
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