import React, { useEffect, useState } from 'react'
import styles from "../styles/Nav.module.css"
import Image from 'next/image'


const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
const [toggle, setToggle] = useState(true)

const data =[
  {
    num:'01.',
    nav:'About',
    navigator:'#aboutwrapper'
  },
  {
    num:'02.',
    nav:'Experience',
    navigator:'#experience'

  },
  {
    num:'03.',
    nav:'Work',
    navigator:'#work'

  },
  {
    num:'04.',
    nav:'Contact',
    navigator:'#contact'

  },
 
]
  return (
   <div className={`${styles.navW}`}>
<Image
src={'/media/logo3.png'}
width={300}
height={300}
alt={"My Logo"}
/>

<span className={styles.grow}></span>

<div className={`${styles.navR} ${toggle && styles.active}`}>
  {data.map((d, i)=>(
    <div className={`${styles.each}`}
    onClick={()=>setToggle(!toggle)}
    key={i} >
  <a href={d.navigator}><span>{d.num}</span>
  <p>{d.nav}</p></a>
</div>
  ))}
<div className={styles.resume}
onClick={()=> setToggle(!toggle)}
>
</div>

</div>
<div className={`${styles.navHarmburger} ${!toggle && styles.activeHarmburger}`}
onClick={()=>setToggle(!toggle)}
><p></p>
<p></p>
<p></p></div>
<div className={`${styles.overlay} ${toggle && styles.activeOverlay}`}
onClick={()=> setToggle(!toggle)}
></div>
   </div>
  )
}

export default Nav