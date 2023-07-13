'use client'
import React, { useEffect } from 'react'
import styles from "../styles/Expertise.module.css"
import Headings from './Headings'
import Image from 'next/image'
import Aos from 'aos'
import 'aos/dist/aos.css';
const Expertise = () => {
  useEffect(() => {
    Aos.init({
      disable:false,
      duration: 1000,
      offset: 135,

    })
  }, [])
  
 
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
            data-aos= {i%2===0?'fade-right':'fade-up'}
            data-aos-anchor-placement="top-center"
          
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
    </div>
  )
}

export default Expertise


// https://flowbite.com/docs/components/progress/