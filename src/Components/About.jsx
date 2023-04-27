import React from 'react'
import styles from "../styles/About.module.css"
import Headings from './Headings'
const About = () => {
  return (
    <div className={styles.aboutW}>
        <Headings
        num={'01.'}
        text={'About Me'}
        position={'start'}
        />
    </div>
  )
}

export default About