import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

import styles from "./Footer.module.css";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  const email = "amanjain2691@gmail.com";
  const phoneNumber = "+91 8087491938";

  return (
    <footer className={styles.footer}>
      <div className={styles.iconContainer}>
        <a
          href="https://twitter.com/MrCyberlord"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.linkedin.com/in/theamanjain/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href={`tel:${phoneNumber}`}>
          <FontAwesomeIcon icon={faSquarePhone} />
        </a>
        <a href={`mailto:${email}`}>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div className={styles.copyright}>Copyright © 2023 Aman Jain</div>
    </footer>
  );
};

export default Footer;
