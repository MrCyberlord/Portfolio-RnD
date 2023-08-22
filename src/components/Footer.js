import React from "react";
import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCircleUp } from "@fortawesome/free-regular-svg-icons";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.iconContainer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className={styles.icon1} />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon2} />
        </a>
        <a
          href="https://www.instagram.com/mrcyberlord/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className={styles.icon3} />
        </a>
      </div>
      <Link to="header" smooth={true} offset={-70} duration={1000}>
        <FontAwesomeIcon icon={faCircleUp} className={styles.upIcon} />
      </Link>
    </footer>
  );
};

export default Footer;
