import React from 'react'
import styles from "../styles/Contact.module.css"

const Contact = () => {
  return (
    <div className={styles.contactW} id='contact'>
        <p className='text-primary1 text-[13px]'><span className='text-primary1'>04.</span> What&lsquo;s Next?</p>
        <h1 className='text-[2rem] font-bold text-var_color'>Get In Touch</h1>
        <p className='lg:w-[60%] text-center'>{"I am excited about the potential of working together to create stunning web experiences that not only meet but exceed expectations. If you would be interested in exploring a collaboration or discussing potential projects, I would be thrilled to set up a time to chat. Please let me know if you would like to schedule a call or if there's any other way I can provide additional information. Thank you🥰😍"}</p>
       <a href="https://api.whatsapp.com/send?phone=2349135619423&text=Hello%20I%20will%20like%20to%20Hire%20You" target='blank'><p className={styles.sayHello}></p></a>
        
    </div>
  )
}

export default Contact
// I am excited about the potential of working together to create stunning web experiences that not only meet but exceed expectations. If you would be interested in exploring a collaboration or discussing potential projects, I would be thrilled to set up a time to chat. Please let me know if you would like to schedule a call or if there's any other way I can provide additional information.

        {/* <p className='lg:w-[60%] text-center'> I&rsquo;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&lsquo;ll try my best to get back to you!</p> */}
