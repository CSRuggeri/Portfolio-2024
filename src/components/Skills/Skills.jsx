import React from 'react'
import styles from "./Skills.module.css"
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

export const Skills = () => {
    const skills = [
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        // Add more skills here
      ];

    return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.skillsTitle}>Tech Stack</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <div className={styles.skillIcon}>{skill.icon}</div> {/* Render icon as JSX */}
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
