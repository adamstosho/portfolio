import React, { useEffect } from 'react'
import styles from "../styles/Expertise.module.css"
import Headings from './Headings'
import Image from 'next/image'

const Expertise = () => {
 
  const expertiseObjArr = [
    {
      src:'/html5.svg',
      alt: 'HTML5 Logo',
    },
    {
      src:'/css3.svg',
      alt: 'css3 Logo',
    },
    {
      src:'/javascript.svg',
      alt: 'JavaScript Logo',
    },
    {
      src:'/tailwindcss.svg',
      alt: 'tailwindcss Logo',
    },
    {
      src:'/reactjs.svg',
      alt: 'reactjs Logo',
    },
    {
      src:'/redux.svg',
      alt: 'redux Logo',
    },
    {
      src:'/vite.svg',
      alt: 'vite Logo',
    },
    {
      src:'/npm.svg',
      alt: 'vite Logo',
    },
    {
      src:'/next.svg',
      alt: 'Nextjs Logo',
    },
    
  ]
  console.log(expertiseObjArr)
  return (
    <div className={styles.ExpertiseW} id='expertise'>
        <Headings
        position={'center'}
        num={'02.'}
        text={"Some of my skills"}
        />
        <h3>{`Here are a few technologies I’ve been working with recently:`}</h3>


<div className={styles.expertiseImages} 
>
         {
          expertiseObjArr.map((expert, i)=>(
            <div className={styles.eachExpertiseImg}
            key={i}
            >
            <Image        
            src={expert.src} 
            width={100}
            height={100}
            alt={expert.alt} />
            </div>
          ))
         }
</div>
        {/* <div className={styles.coreSkills}>
        <h1 className='text-primary1 text-center text-2xl mt-4'>_____ Core Skills</h1>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        </div> */}
    </div>
  )
}

export default Expertise


// https://flowbite.com/docs/components/progress/