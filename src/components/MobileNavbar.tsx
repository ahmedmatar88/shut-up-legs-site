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