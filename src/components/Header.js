import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHand } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header id="header" className={styles.headerClass}>
      <div className={styles.lineContainer}>
        <div>
          Hi! <FontAwesomeIcon icon={faHand} className={styles.handIcon} />I am
          Aman Jain.
        </div>
        <div className={styles.text}> I am a Front End Developer.</div>
        <div> I create interactive and responsive user interfaces. </div>
      </div>
    </header>
  );
};

export default Header;
