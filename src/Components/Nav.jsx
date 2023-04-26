import React from 'react'
import Image from 'next/image'
import styles from "../styles/Nav.module.css"

const Nav = () => {
const data =[
  {
    num:'01.',
    nav:'About',
  },
  {
    num:'02.',
    nav:'Experience',
  },
  {
    num:'03.',
    nav:'Work',
  },
  {
    num:'04.',
    nav:'Contact',
  }
]
  return (
   <div className={styles.Nav}>
<Image
src={'next.svg'}
width={100}
height={300}
/>

<span className={styles.grow}></span>

<div className={styles.navR}>
  {data.map((d)=>(
    <div className={`${styles.each}`}>
  <span>{d.num}</span>
  <p>{d.nav}</p>
</div>
  ))}
<div className="resume">
  Resume
</div>
</div>

   </div>
  )
}

export default Nav