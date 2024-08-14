import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeadderScreen.module.css';

const HeadderScreen = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoStrip}>
        <img src="/logo1.png" alt="Logo" className={styles.logoImage} />
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/menue" className={styles.navLink}>Menu</Link>
        <Link to="/aboutus" className={styles.navLink}>Our Story</Link>
        <Link to="/contactus" className={styles.navLink}>Contact Us</Link>
      </nav>
    </header>
  );
};

export default HeadderScreen;
