import React from "react";
import styles from "./AboutMeAnimation.module.css";

const AboutMeAnimation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <div className={styles.square}></div>
      <div className={styles.triangle}></div>
    </div>
  );
};

export default AboutMeAnimation;
