import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  const skillsList = [
    { name: "JavaScript", icon: "/Images/JavaScriptIcon.png" },
    { name: "React", icon: "/Images/ReactIcon.png" },
    { name: "HTML", icon: "/Images/HTMLIcon.png" },
    { name: "CSS", icon: "/Images/CSSIcon.png" },
    { name: "Redux", icon: "/Images/ReduxIcon.png" },
    { name: "Git", icon: "/Images/GitIcon.png" },
    { name: "GitHub", icon: "/Images/GitHubIcon.png" },
    { name: "Firebase", icon: "/Images/FirebaseIcon.png" },
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.skillsHeading}>
        <span>Skills</span>
      </div>
      <div className={styles.skillsContainer}>
        {skillsList.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <img
              src={skill.icon}
              alt={skill.name}
              className={styles.skillIcon}
            />
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
