import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./AboutUsScreen.module.css";


const AboutUsScreen = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.fullscreen}
        style={{
          background: `linear-gradient(
            190deg,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.8)),
            url("./aboutus1.jpg")`,
          backgroundSize: "cover",
        }}
      >
        
        <h3 className={styles.text1}>
          Our head chef, Raf, has been baking for over 25 years, perfecting the art of making delicious and beautiful baked goods. With a passion for quality and a dedication to the craft, he has honed his skills in various prestigious kitchens around the world.
        </h3>
           
        
      </div>
    </div>
  );
};

export default AboutUsScreen;