import React from 'react'
import styles from "../styles/Socios.module.css"
import Image from 'next/image'
const Socios = () => {
  const socioArr = [
    {
      link: "https://github.com/intelligence247",
      ima1 : `bg-[url("/github-line.png")]`,
      ima2 : `hover:bg-[url("/github-lineh.png")]`,
      alter : 'Github icon'
      
    },
    {
      link: "https://twitter.com/I_n_telligence",
      ima1 : `bg-[url("/twitter-line.png")]`,
      ima2 : `hover:bg-[url("/twitter-lineh.png")]`,
      alter : "Twitter icon"
      
    },
    {
      link: "https://www.linkedin.com/in/usman-abdullahi-125a3a23b/",
      ima1 : `bg-[url("/linkedin-fill.png")]`,
      ima2 : `hover:bg-[url("/linkedin-fillh.png")]`,
      alter : "Linkedin icon"
      
    },
    {
      link: "https://instagram.com/abdul_lahi246?igshid=MzNlNGNkZWQ4Mg==",
      ima1 : `bg-[url("/instagram-line.png")]`,
      ima2 : `hover:bg-[url("/instagram-lineh.png")]`,
      alter : "Instagram icon"
      
    },
    {
      link: "",
      ima1 : `bg-[url("/codepen-line.png")]`,
      ima2 : `hover:bg-[url("/codepen-lineh.png")]`,
      alter : "Codepen icon"
      
    },
  ]
  
/*           
         
            <a href="" target='blank'>
              <Image
            width={200}
            height={200}
             src="/instagram-line.png" alt="Instagram icon" /></a>
            <a href="">
              <Image
            width={200}
            height={200}
             src="/codepen-line.png" alt="Codepen icon" /></a>*/
  return (
           <div className={styles.soicioAccounts}>
            <div className={styles.soicioAccountsL}>
              {
                socioArr.map((so)=>(
             <a href={so.link} target='blank'>
            <div className={` ${so.ima1} ${so.ima2}  w-6 h-6 gird place-content-center`}>
                  </div>
                   </a>
                ))
              }
            
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
