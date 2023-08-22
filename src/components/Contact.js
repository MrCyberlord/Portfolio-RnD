import React from "react";
import styles from "./Contact.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const email = "amanjain2691@gmail.com";
  const phoneNumber = "+91 8087491938";

  return (
    <section id="contact" className={styles.contactSection}>
      <h1>Contact details</h1>
      <div className={styles.card}>
        <h3 className={styles.contactPrompt}>Click below to get in touch</h3>
        <div className={styles.nestedCard}>
          <p className={styles.contactItem}>
            <a href={`mailto:${email}`}>
              <FontAwesomeIcon icon={faEnvelope} /> {email}
            </a>
          </p>
        </div>
        <div className={styles.nestedCard}>
          <p className={styles.contactItem}>
            <a href={`tel:${phoneNumber}`}>
              <FontAwesomeIcon icon={faPhone} /> {phoneNumber}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
