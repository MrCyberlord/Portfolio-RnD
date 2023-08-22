import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section id="about-me" className={styles.aboutMe}>
      <h1 className={styles.aboutMeHeading}>About Me</h1>
      <div className={styles.aboutMeIntro}>
        <p>
          I am passionate about coding. I love creating awesome user interfaces
          that are engaging and aesthetically pleasing. I am enthusiastic about
          transforming <span className={styles.ideas}>ideas</span> into{" "}
          <span className={styles.digitalProduct}>digital products</span>. I
          have an Engineering degree in Electronics and Telecommunications, but
          I followed my heart and became a Software Engineer. I have over 1 year
          of experience in software development. I write{" "}
          <span className={styles.clean}>clean and efficient code </span>
          that conveys the most satisfying, effective and visually appealing
          experiences for users. Apart from technology, I am into fitness and
          love watching sci-fi movies & series.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
