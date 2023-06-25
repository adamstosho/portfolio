import React, { useEffect } from 'react'
import styles from "../styles/Socios.module.css"
import AOS from "aos"
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
      link: "https://codepen.io/Intelligence247-the-flexboxer",
      ima1 : `bg-[url("/codepen-line.png")]`,
      ima2 : `hover:bg-[url("/codepen-lineh.png")]`,
      alter : "Codepen icon"
      
    },
  ]
  
  useEffect(() => {
   AOS.init({duration:1000})
  }, [])
  
  return (
           <div className={styles.soicioAccounts}>
            <div className={styles.soicioAccountsL}>
              {
                socioArr.map((so,i)=>(
             <a href={so.link} target='_blank' rel="noopener noreferrer"
             key={i}
             data-aos={`${i%2===0?'fade-right':'flip-right'}`}
             >
            <div className={` ${so.ima1} ${so.ima2} w-6 h-6 gird place-content-center`}>
                  </div>
                   </a>
                ))
              }
            
            <p></p>
            </div>
            <div className={styles.soicioAccountsR} >
           <a href="mailto:Uthmanabdullahi2020@gmail.com?subject=Hi%20Abdullahi&body=" target='_blank' rel="noopener noreferrer"><span data-aos='fade-downn'>Uthmanabdullahi2020@gmail.com</span></a>
           <p></p>
        </div>
        </div>
       
        
   
  )
}

export default Socios
