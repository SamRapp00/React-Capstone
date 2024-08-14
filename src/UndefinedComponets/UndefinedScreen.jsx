import React from 'react'
import styles from './UndefinedScreen.module.css'; // Assuming you have a CSS module for styling

const UndefinedScreen = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.tagline}
        style={{
          background: `url("./dog1.png")`,
          backgroundSize: "cover",
        }}
      >
        This Page Does Not Exist
      </div>
    </div>
  );
};

export default UndefinedScreen;