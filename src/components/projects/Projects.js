import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import styles from "./Projects.module.css";

const Projects = () => {
  const projectList = [
    {
      name: "E-Commerce Website",
      image: "/ProjectImages/EcommerceWebsite.jpg",
      demoLink: "https://example.com/demo",
      githubLink: "https://github.com/yourusername/project1",
    },
    {
      name: "Food Delivery Website",
      image: "/ProjectImages/FoodOrderingApp.jpg",
      demoLink: "https://example.com/demo2",
      githubLink: "https://github.com/yourusername/project2",
    },
    {
      name: "Expense Tracker App",
      image: "/ProjectImages/ExpenseTracker.jpg",
      demoLink: "https://example.com/demo2",
      githubLink: "https://github.com/yourusername/project2",
    },
    {
      name: "Mailbox Client",
      image: "/ProjectImages/MailboxClient.jpg",
      demoLink: "https://example.com/demo2",
      githubLink: "https://github.com/yourusername/project2",
    },
  ];

  return (
    <section id="projects" className={styles.projectSection}>
      <div className={styles.title}>The Projects</div>
      <div className={styles.projectGrid}>
        {projectList.map((project, index) => (
          <ProjectTemplate key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
