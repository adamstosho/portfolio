import React from 'react'
import styles from "../styles/Socios.module.css"
import Image from 'next/image'
const Socios = () => {
  return (
   
        <div className={styles.soicioAccounts}>
            <div className={styles.soicioAccountsL}>
            <a href=""><Image
            width={200}
            height={200}
             src="/twitter-fill.png" alt="Github gill image" /></a>
            <a href=""><Image
            width={200}
            height={200}
             src="/github-fill.png" alt="Github gill image" /></a>
            <a href=""><Image
            width={200}
            height={200}
             src="/twitter-fill.png" alt="Github gill image" /></a>
            <a href=""><Image
            width={200}
            height={200}
             src="/github-fill.png" alt="Github gill image" /></a>
            <a href=""><Image
            width={200}
            height={200}
             src="/github-fill.png" alt="Github gill image" /></a>
            <p></p>
            </div>
            <div className={styles.soicioAccountsR}>
           <a href=""><span>Uthmanabdullahi2020@gnail.com</span></a>
           <p></p>
        </div>
        </div>
       
        
   
  )
}

export default Socios