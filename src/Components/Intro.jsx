import React from 'react'
import styles from "../styles/Intro.module.css"
const Intro = () => {
  return (
    <div className={styles.introW}>
        <p>Hi, my name is</p>
        <h1 className={styles.name}>Usman Abdullahi.</h1>
        <h2>I build things for the web</h2>
        <p className={styles.desc}>I’m a software engineer specialized in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <a href="">WebOpt.</a> </p>
        <p></p>
    </div>
  )
}

export default Intro