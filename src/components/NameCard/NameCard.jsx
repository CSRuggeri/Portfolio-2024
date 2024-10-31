import React from 'react'
import styles from "./NameCard.module.css"
export const NameCard = () => {
  const despription = `Hola! bienvenido a mi portfolio, 
 esta es una breve descripcion de mis habilidades para el desarrollo web,
 hace ya 3 años que estoy estudiando programacion y tengo dos certificaciones Full-Stack,
 una por parte de la academia online "Soy Henry" y otra por "Digital House".`
  
  return (


    <div className={styles.card}>
  <div className={styles.profile}>
     <h2 className={styles.name}>Santiago Ruggeri</h2><img
      src="https://res.cloudinary.com/doxyqgk7w/image/upload/v1706627979/jybhhhbenrrlog4ezqrx.jpg"
      alt="Profile picture of Santiago Ruggeri"
      className={styles.profileImage}
    />
  </div>
  <div className={styles.details}>
   <h2 className={styles.role}>Web Developer</h2> 
   <p className={styles.description}>
     {despription}
    </p>
    
   
   
  </div> 
  
</div>

  )
}
