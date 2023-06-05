import React from 'react'
import styles from "../styles/Socios.module.css"
import Image from 'next/image'
const Socios = () => {
  return (
   
        <div className={styles.soicioAccounts}>
            <div className={styles.soicioAccountsL}>
            <a href="https://github.com/intelligence247" target='blank'>
              <Image
            width={200}
            height={200}
             src="/github-line.png" alt="Github icon" /></a>
            <a href="https://twitter.com/I_n_telligence" target='blank'><Image
            width={200}
            height={200}
             src="/twitter-line.png" alt="Twitter icon" /></a>
            <a href="https://www.linkedin.com/in/usman-abdullahi-125a3a23b/" target='blank'>
              <Image
            width={200}
            height={200}
             src="/linkedin-fill.png" alt="LinkedIN icon" /></a>
            <a href="https://instagram.com/abdul_lahi246?igshid=MzNlNGNkZWQ4Mg==" target='blank'>
              <Image
            width={200}
            height={200}
             src="/instagram-line.png" alt="Instagram icon" /></a>
            <a href="">
              <Image
            width={200}
            height={200}
             src="/codepen-line.png" alt="Codepen icon" /></a>
            <p></p>
            </div>
            <div className={styles.soicioAccountsR}>
           <a href="mailto:Uthmanabdullahi2020@gnail.com?subject=Hi%20Abdullahi&body="><span>Uthmanabdullahi2020@gnail.com</span></a>
           <p></p>
        </div>
        </div>
       
        
   
  )
}

export default Socios