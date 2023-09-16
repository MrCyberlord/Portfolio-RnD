import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBars,
  faEnvelope,
  faHouse,
  faLaptopCode,
  faScrewdriver,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navList}>
      <div className={isOpen ? styles.showMenu : ""}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div className={isOpen ? styles.showMenu : styles.regularNavbar}>
          <li>
            <Link
              to="header"
              smooth={true}
              offset={-70}
              duration={1200}
              onClick={closeMenu}
            >
              <FontAwesomeIcon icon={faHouse} /> Home
            </Link>
          </li>
          <li>
            <Link
              to="about-me"
              smooth={true}
              offset={-50}
              duration={1000}
              onClick={closeMenu}
            >
              <FontAwesomeIcon icon={faAddressCard} /> About Me
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              offset={-50}
              duration={1000}
              onClick={closeMenu}
            >
              <FontAwesomeIcon icon={faScrewdriver} /> Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              offset={-50}
              duration={1000}
              onClick={closeMenu}
            >
              <FontAwesomeIcon icon={faLaptopCode} /> Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-50}
              duration={1000}
              onClick={closeMenu}
            >
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
