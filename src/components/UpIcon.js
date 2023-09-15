import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-regular-svg-icons";

import styles from "./UpIcon.module.css";

const UpIcon = () => {
  return (
    <Link to="header" smooth={true} offset={-70} duration={1000}>
      <FontAwesomeIcon icon={faCircleUp} className={styles.upIcon} />
    </Link>
  );
};

export default UpIcon;
