import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './FooterScreen.module.css';

const FooterScreen = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    if (!email) {
      alert('Please enter an email address');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5555/signup', { email });
      setEmail('');
      alert(response.data);
    } catch (error) {
      console.error('There was an error signing up!', error);
      alert('There was an error signing up. Please try again.');
    }
  };

  return (
    <div className={styles.footer}>
      <div className={styles.newsletter}>
        <h4>Sign up for our Newsletter</h4>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.emailInput}
        />
        <button
          className={styles.subscribeButton}
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
      <div className={styles.links}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/menu" className={styles.link}>Menu</Link>
        <Link to="/aboutus" className={styles.link}>About Us</Link>
        <Link to="/contactus" className={styles.link}>Contact Us</Link>
      </div>
      <div className={styles.socialMedia}>
        <a href="https://www.instagram.com/dean_the_dogx/?hl=ha-ng" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>Instagram</a>
        <a href="https://www.instagram.com/dean_the_dogx/?hl=ha-ng" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>Facebook</a>
        <a href="https://www.instagram.com/dean_the_dogx/?hl=ha-ng" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>Twitter</a>
      </div>
      <div className={styles.copyRight}>
        <p>(801)555-5555</p>
        <p>123 Fake Street, Provo Utah 84606</p>
        &copy; {new Date().getFullYear()} Your Bakery Cafe. All rights reserved.
      </div>
    </div>
  );
};

export default FooterScreen;
