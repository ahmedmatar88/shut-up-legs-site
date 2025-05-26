// src/components/MobileNavbar.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const MobileNavbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

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
    <header className={styles.navbar}>
      <Link to="/" className={styles.navLogo}>
        <img src="/shut-up-legs.png" alt="Shut Up LEGS Logo" />
        Shut Up LEGS
      </Link>

      <nav className={styles.navLinks}>
        <NavLink to="/" label="Home" />
        <NavLink to="/course" label="Ride Routes" />
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

      <button
        className={`${styles.menuToggle} ${menuOpen ? styles.open : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <nav className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <NavLink to="/" label="Home" />
        <NavLink to="/course" label="Ride Routes" />
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

      {menuOpen && <div className={styles.backdrop} onClick={closeMenu} />}
    </header>
  );
};

export default MobileNavbar;
