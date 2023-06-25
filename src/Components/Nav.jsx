import React, { useEffect, useState } from 'react'
import styles from "../styles/Nav.module.css"
import Logo from './Logo'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Nav = () => {
  const [visible, setVisible] = useState(false)
const [toggle, setToggle] = useState(true)

useEffect(() => {
  let prevS = window.pageYOffset;
  window.addEventListener('scroll', ()=>{
let currenSc = pageYOffset;
prevS > currenSc ? setVisible(false) : setVisible(true)
prevS = currenSc;
AOS.init({duration:1000})
  })
}, [])

const data =[
  {
    num:'01.',
    nav:'About',
    navigator:'#aboutwrapper'
  },
  {
    num:'02.',
    nav:'Expertise',
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
   <div className={`${styles.navW} ${visible ? styles.disappear:''}`}
   data-aos='fade-right'

   >
<a href="https://github.com/intelligence247" target='_blank' rel="noopener noreferrer">
  <Logo/>
</a>


<span className={styles.grow}></span>

<div className={`${styles.navR} ${toggle && styles.active}`}>
  {data.map((d, i)=>(
    <div className={`${styles.each}`}
    onClick={()=>setToggle(!toggle)}
    key={i}
     data-aos='fade-down'

    >
  <a href={d.navigator}><span>{d.num}</span>
  <p>{d.nav}</p></a>
</div>
  ))}
  <a href="https://resume.io/r/b1uoy61aX" target='_blank' rel="noopener noreferrer">
<div className={styles.resume}
onClick={()=> setToggle(!toggle)}>
</div>
</a>
</div>


<div className={`${styles.navHarmburger} ${!toggle && styles.activeHarmburger}`}
onClick={()=>setToggle(!toggle)}
><p></p>
<p></p>
<p></p>
</div>


<div className={`${styles.overlay} ${toggle && styles.activeOverlay}`}
onClick={()=> setToggle(!toggle)}
></div>
   </div>
  )
}

export default Nav