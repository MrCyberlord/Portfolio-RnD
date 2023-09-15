import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header id="header" className={styles.headerClass}>
      <div className={styles.lineContainer}>
        <div className={styles.text1}>
          Hi!<span className={styles.handIcon}>👋</span>I am Aman Jain.
        </div>
        <div className={styles.text2}> I am a Front End Developer.</div>
        <div className={styles.text3}>
          {" "}
          I create interactive and responsive user interfaces.{" "}
        </div>
      </div>
    </header>
  );
};

export default Header;
