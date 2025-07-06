// src/components/MobileNavbar.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const MobileNavbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const NavLink = ({ to, label }: { to: string; label: string }) => (
    <Link
      to={to}
      className={`${styles.navLink} ${location.pathname === to ? styles.active : ''}`}
      onClick={closeMenu}
    >
      {label}
    </Link>
  );

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.navLeft}>
          <Link to="/" className={styles.navLogo}>
            <img src="/shut-up-legs.png" alt="Shut Up LEGS Logo" />
            Shut Up LEGS
          </Link>
        </div>

        <nav className={`${styles.navLinks} ${styles.desktopOnly}`}>
          <NavLink to="/" label="Home" />
          <NavLink to="/course" label="Ride Routes" />
          <NavLink to="/on-the-day" label="On the Day" />
          <NavLink to="/gallery" label="Gallery" />
          <NavLink to="/about" label="About Nathan" />
          <a
            href="https://www.justgiving.com/page/joanne-simmonett-1732654861856"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLink}
          >
            Donate
          </a>
        </nav>

        <div className={styles.navRight}>
          <a
            href="https://www.britishcycling.org.uk/events/details/321588/Shut-Up-Legs---A-ride-for-Nathan-Park"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.registerButton} ${styles.desktopOnly}`}
          >
            Register for Event
          </a>
          
          <button
            className={`${styles.menuToggle} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </header>

      {menuOpen && (
        <>
          <div className={styles.backdrop} onClick={closeMenu} />
          <nav className={`${styles.mobileMenu} ${styles.open}`}>
            <NavLink to="/" label="Home" />
            <NavLink to="/course" label="Ride Routes" />
            <NavLink to="/on-the-day" label="On the Day" />
            <NavLink to="/gallery" label="Gallery" />
            <NavLink to="/about" label="About Nathan" />
            <a
              href="https://www.justgiving.com/page/joanne-simmonett-1732654861856"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
            >
              Donate
            </a>
            
            {/* Social Media Links in Mobile Menu */}
            <div className={styles.mobileSocialSection}>
              <div className={styles.mobileSocialTitle}>Follow Us</div>
              <div className={styles.mobileSocialLinks}>
                <a
                  href="https://www.instagram.com/shut_up_legs.cc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mobileSocialLink}
                  onClick={closeMenu}
                  aria-label="Follow us on Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
                
                <a
                  href="https://strava.app.link/ZRMNUEI1MUb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mobileSocialLink}
                  onClick={closeMenu}
                  aria-label="Join our Strava group"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/>
                  </svg>
                  Strava Group
                </a>
              </div>
            </div>
            
            <a
              href="https://www.britishcycling.org.uk/events/details/321588/Shut-Up-Legs---A-ride-for-Nathan-Park"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.registerButton}
              onClick={closeMenu}
            >
              Register for Event
            </a>
          </nav>
        </>
      )}
    </>
  );
};

export default MobileNavbar;