import React from 'react'
import Image from 'next/image'
import styles from "../styles/Nav.module.css"

const Nav = () => {
const data =[
  {
    num:'01.',
    nav:'About',
    navigator:'#aboutwrapper'
  },
  {
    num:'02.',
    nav:'Experience',
    navigator:'#aboutW'

  },
  {
    num:'03.',
    nav:'Work',
    navigator:'#aboutW'

  },
  {
    num:'04.',
    nav:'Contact',
    navigator:'#aboutW'

  },
 
]
  return (
   <div className={styles.navW}>
<Image
src={'next.svg'}
width={100}
height={300}
alt={"My Logo"}
/>

<span className={styles.grow}></span>

<div className={styles.navR}>
  {data.map((d, i)=>(
    <div className={`${styles.each}`}
    key={i} >
  <span><a href={d.navigator}>{d.num}</a></span>
  <p>{d.nav}</p>
</div>
  ))}
<div className={`${styles.resume}`}>
</div>
</div>

   </div>
  )
}

export default Nav