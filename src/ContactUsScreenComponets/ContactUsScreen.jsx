import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./ContactUsScreen.module.css";



const ContactUsScreen = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.tagline}
        style={{
          background: `linear-gradient(
            190deg,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.8)),
            url("./googlemk1.jpg")`,
          backgroundSize: "cover",
        }}
      >
        Follow Us On Social Media
        

        <div className={styles.buttonContainer}>
          <a
            href="https://www.instagram.com/dean_the_dogx/?hl=ha-ng"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Instagram
          </a>
          <a
            href="https://www.instagram.com/dean_the_dogx/?hl=ha-ng"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/dean_the_dogx/?hl=ha-ng"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Twitter
          </a>
        </div>
      </div>
      <h1 className="test" style={{ fontSize: "81px" }}>
  Contact Us
</h1>
      <div className={styles.formContainer}>
        <form action="https://formsubmit.co/1b140d237a9877998affcf7361f37057" method="POST">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            required
          /><br />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            required
          /><br />

          <label htmlFor="message">Message:</label><br />
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            className={styles.textarea}
            required
          ></textarea><br />

          <input type="hidden" name="_next" value="http://127.0.0.1:5500/client/index.html" />
          <button id="contact-us" type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsScreen;