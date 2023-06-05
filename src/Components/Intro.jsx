import React from 'react'
import styles from "../styles/Intro.module.css"
const Intro = () => {
  return (
    <div className={styles.introW}>
        <p>Hi, my name is</p>
        <h1 className={styles.name}>Usman Abdullahi.</h1>
        <h2>I build things for the web</h2>
        <p className={styles.desc}>{"Welcome to my portfolio! I'm a dedicated Front-End Developer passionate about crafting engaging and user-centric digital experiences. With a keen eye for design and a strong understanding of user behavior, I specialize in bringing ideas to life through clean, intuitive, and interactive front-end solutions."} </p>
        <p className={styles.desc}>{"Throughout my portfolio, you will find a collection of projects that demonstrate my ability to turn ideas into reality, highlighting my attention to detail, problem-solving prowess, and commitment to delivering high-quality results. I invite you to explore the projects I have worked on, where you'll witness the harmonious fusion of design and code, resulting in seamless user experiences. Join me on this Journey!!!"}</p>
        {/* <p></p> */}
{/* <a href="">WebOpt.</a> */}
    </div>
  )
}

export default Intro