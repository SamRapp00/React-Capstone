import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./MenueScreen.module.css";

const MenueScreen = () => {
  const [randomOrder, setRandomOrder] = useState("");

  const orders = ["Sourdough Loaf", "Rye Toast", "White Bread"];

  const generateRandomOrder = () => {
    const randomIndex = Math.floor(Math.random() * orders.length);
    const order = orders[randomIndex];
    console.log("Generated order:", order); // Debugging log
    setRandomOrder(order);
  };

  useEffect(() => {
    console.log("Random order state updated:", randomOrder); // Debugging log
  }, [randomOrder]);

  return (
    <div className={styles.container}>
      <div className={styles.menuContainer}>
        <img 
          src="/Menue1.png" 
          alt="First Menu" 
          className={styles.menuImage} 
        />
        <img 
          src="/Menue2.png" 
          alt="Second Menu" 
          className={styles.menuImage} 
        />
      </div>
      <button className={styles.button} onClick={generateRandomOrder}>
        Get Random Order
      </button>
      {randomOrder && (
        <div className={styles.randomOrderText}>{randomOrder}</div>
      )}
    </div>
  );
};

export default MenueScreen;