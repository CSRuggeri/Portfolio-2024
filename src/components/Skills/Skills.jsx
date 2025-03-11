import React from 'react';
import styles from "./Skills.module.css";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

export const Skills = () => {
    const skills = [
        { name: "JavaScript", icon: <FaJsSquare />, level: 90 },
        { name: "React", icon: <FaReact />, level: 85 },
        { name: "Node.js", icon: <FaNodeJs />, level: 80 },
        { name: "CSS3", icon: <FaCss3Alt />, level: 75 },
        { name: "HTML5", icon: <FaHtml5 />, level: 80 },
    ];

    return (
        <div className={styles.skillsContainer}>
            <h2 className={styles.skillsTitle}>Tech Stack</h2>
            
            {/* Skills Grid */}
            <motion.div 
                className={styles.skillsGrid}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {skills.map((skill, index) => (
                    <motion.div 
                        key={index} 
                        className={styles.skillCard}
                        whileHover={{ scale: 1.1, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className={styles.skillIcon}>{skill.icon}</div>
                        <p className={styles.skillName}>{skill.name}</p>

                        {/* Skill Progress Bar */}
                        <div className={styles.progressBar}>
                            <div className={styles.progressFill} style={{ width: `${skill.level}%` }}></div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

