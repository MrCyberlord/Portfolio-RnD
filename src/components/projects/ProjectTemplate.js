import React from "react";
import styles from "./ProjectTemplate.module.css";

const ProjectTemplate = ({ name, image, demoLink, githubLink }) => {
  return (
    <div className={styles.projectCard}>
      <img className={styles.projectImage} src={image} alt={name} />
      <div className={styles.projectTitle}>{name}</div>
      <div className={styles.buttonContainer}>
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className={styles.demoButton}>Live Demo</button>
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button className={styles.gitButton}>GitLink</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectTemplate;
