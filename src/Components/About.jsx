import React from 'react'
import styles from "../styles/About.module.css"
import Headings from './Headings'
import Image from 'next/image'
const About = () => {
  return (
    <div id="aboutwrapper">
       <Headings
        num={'01.'}
        text={'About Me'}
        position={'start'}
        width = {"w-[7rem]"}
        />
    <div id={styles.aboutW}>
<div className={styles.aboutL}>
        <p>Hello! My name is <b><i>Abdullahi</i></b> and I enjoy creating things that live on the internet. With a keen eye for detail and a love for clean and efficient code, I specialize in translating design concepts into high-quality, responsive websites and web applications. I have a solid command of HTML, CSS, and JavaScript, as well as experience with front-end frameworks such as [mention relevant frameworks or libraries].</p>
        <p>Collaboration is at the heart of my work. I thrive in interdisciplinary teams, working closely with designers, back-end developers, and stakeholders to bring projects to life. I excel at understanding project requirements and transforming them into intuitive user interfaces that prioritize usability and accessibility</p>
        <p>{"Here are a few technologies I’ve been working with recently:"}</p>
        <div className={styles.techs}>
          <p>JavaScript (ES6+)</p>
          <p>React.js</p>
          <p>Next.js</p>
          <p>Redux toolkit</p>
          {/* <p>TypeScript</p> */}
          <p>TaliWind CSS</p>
        </div>
        </div>
        <div className={styles.aboutR}>
          <div className={styles.imgwrapper}>
          <Image
           src="/profiles.jpg" 
           width={300}
           height={400}
           alt="My Profile" />
          </div>
        </div>
    </div>
    </div>
  )
}

export default About


// With a keen eye for detail and a love for clean and efficient code, I specialize in translating design concepts into high-quality, responsive websites and web applications. I have a solid command of HTML, CSS, and JavaScript, as well as experience with front-end frameworks such as [mention relevant frameworks or libraries].

// Collaboration is at the heart of my work. I thrive in interdisciplinary teams, working closely with designers, back-end developers, and stakeholders to bring projects to life. I excel at understanding project requirements and transforming them into intuitive user interfaces that prioritize usability and accessibility