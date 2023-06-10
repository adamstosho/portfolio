import React from 'react'
import styles from "../styles/Expertise.module.css"
import Headings from './Headings'
const Expertise = () => {
  return (
    <div className={styles.ExpertiseW} id='experience'>
        <Headings
        position={'center'}
        num={'02.'}
        text={"Some of my skills"}
        />
        <h3>Here are a few technologies I’ve been working with recently:</h3>

        <div className={styles.coreSkills}>
        <h1 className='text-primary1 text-center text-2xl mt-4'>_____ Core Skills</h1>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        </div>
    </div>
  )
}

export default Expertise