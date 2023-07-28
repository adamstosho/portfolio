import React from 'react'
import styles from "../styles/About.module.css"
import Headings from './Headings'
import Image from 'next/image'

const About = () => {
 const qualificationArr = [
  'Demonstrated proficiency in building dynamic and interactive websites using HTML, CSS, and JavaScript(ES6+)',
  'Strong experience in frontend frameworks like React, including state management with Redux.',
'Solid understanding of responsive design principles and mobile-first development.',
'Knowledge of version control systems, such as Git, for collaborative development.',
'Ability to work collaboratively in a team environment, adapt to new technologies quickly, and meet project deadlines.'
 ]
  return (
    <div id="aboutwrapper" className='pt-[5rem]'>
       <Headings
        num={'01.'}
        text={'About Me'}
        position={'start'}
        width = {"w-[7rem]"}
        />
    <div id={styles.aboutW}>
<div className={styles.aboutL}>
        <p  
        data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     >Hello! My name is <b><i>Abdullahi.</i></b> I enjoy creating things that live on the internet. With a keen eye for detail and a love for clean and efficient code, I specialize in translating design concepts into high-quality, responsive websites and web applications. I have a solid command of HTML, CSS, and JavaScript, as well as experience with front-end frameworks such as Next.js, React.js and TaliWindCSS.</p>
        <p
         data-aos="fade-up"
         data-aos-anchor-placement="bottom-bottom"
        >Collaboration is at the heart of my work. I thrive in interdisciplinary teams, working closely with designers, back-end developers, and stakeholders to bring projects to life. I excel at understanding project requirements and transforming them into intuitive user interfaces that prioritize usability and accessibility</p>
        <p>{"Here are some highlights of my qualifications and achievements:"}</p>
        <div className={styles.techs} id='experience'>
          {
            qualificationArr.map((q,i)=>(
              <p key={i} data-aos={i%2==0?'fade-right':'flip-right'}>{q}</p>
            ))
          }
          
        </div>
        </div>
        <div className={styles.aboutR}>
          <div className={styles.imgwrapper}>
          <Image
           data-aos="flip-up"
           src="/profile3.png" 
           width={300}
           height={400}
           alt="My Profile"
            />
          </div>
        </div>
    </div>
    </div>
  )
}

export default About


// With a keen eye for detail and a love for clean and efficient code, I specialize in translating design concepts into high-quality, responsive websites and web applications. I have a solid command of HTML, CSS, and JavaScript, as well as experience with front-end frameworks such as [mention relevant frameworks or libraries].

// Collaboration is at the heart of my work. I thrive in interdisciplinary teams, working closely with designers, back-end developers, and stakeholders to bring projects to life. I excel at understanding project requirements and transforming them into intuitive user interfaces that prioritize usability and accessibility