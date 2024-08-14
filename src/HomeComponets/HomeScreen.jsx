import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./HomeScreen.module.css";



const HomeScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tagline}
      style={{
        background: `
          url("./bakery2.png")`,
        backgroundSize: "cover",
      }}
      >
        The Freshest Baked Goods In Provo
      </div>
      <div className={styles.subTagline}>
        Check Out Our Delicious Menue
      </div>
      <Link to="/menue" className={styles.button}>
        Menue
      </Link>
      <div
        className={styles.learnMoreContainer}
        style={{
          background: `linear-gradient(
            190deg,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.8)),
            url("./homepage2.jpg")`,
            backgroundSize: "cover",
        }}
      >
        <div>Learn More About Us</div>
        <Link to="/aboutus" className={styles.button1}>
          About Us
        </Link>
      </div>
   
      <div className={styles.followJourney}>
        FOLLOW OUR JOURNEY
      </div>
      <div className={styles.imagesContainer}>
        <img 
          src="/img1.png" 
          alt="Instagram Image" 
          className={styles.image} 
        />
        <img 
          src="/img2.png" 
          alt="Instagram Image" 
          className={styles.image} 
        />
        <img 
          src="/img4.png" 
          alt="Instagram Image" 
          className={styles.image} 
        />
      </div>
    </div>
  );
};

export default HomeScreen;




