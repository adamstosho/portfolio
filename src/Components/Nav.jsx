import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from "../styles/Nav.module.css"

const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  // useEffect(() => {
  //  const handleScroll = () =>{
  //   const currentScrollPos = window.pageYOffset;
  //   setVisible(prevScrollPos > currentScrollPos)
  //   console.log(currentScrollPos)
  //   setPrevScrollPos(currentScrollPos)
  //  }
  //  window.addEventListener('scroll', handleScroll);
  //  return ()=> window.removeEventListener('scroll', handleScroll);
  // }, [prevScrollPos]);
  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      console.log(scrollY)
      
    })
  }, []);

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
   <div className={`${styles.navW} ${visible?styles.visisble:styles.hide}`
   
   }>
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
<div className={`${visible?styles.resume : styles.hide}`}>
</div>
</div>

   </div>
  )
}

export default Nav