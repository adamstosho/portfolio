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
        <p>Hello! My name is <b><i>Abdullahi</i></b> and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
        <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
        <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <div className={styles.techs}>
          <p>JavaScript (ES6+)</p>
          <p>React.js</p>
          <p>Next.js</p>
          <p>Redux toolkit</p>
          <p>TypeScript</p>
          <p>TaliWind CSS</p>
        </div>
        </div>
        <div className={styles.aboutR}>
          <div className={styles.imgwrapper}>
          <Image
           src="/media/myPassport.jpeg" 
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