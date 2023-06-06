import React from 'react'
import styles from "../styles/Nav.module.css"

const Logo = () => {
  return (
    <div className={`${styles.logus} relative w-[3rem] h-[3.5rem] rounded-full border-[2.8px] grid place-content-center bg-primary1 border-primary1 border-l-primary_bg rotate-[-5deg] lg:scale-[0.9] scale-[0.7] lg:ml-0 ml-4 `}>

        <div className='w-[3rem] h-[3.5rem] rounded-full border-[2.8px] border-primary1 flex items-center justify-center relative bg-primary_bg bottom-0 right-0 hover:bottom-1 hover:right-1 border-l-transparent'>
            <p className='text-primary1 text-[3rem] absolute -left-[1.5rem] font-[200] rotate-[7deg] -top-4'>A</p>
            <i className='text-primary1 text-[0.7rem] absolute right-[1.3rem] bottom-6'>{'</>'}</i>
            <p className='text-primary1 text-[2.5rem] absolute left-[1.2rem] bottom-[0.1px]'>B</p>
        </div>
    </div>
  )
}

export default Logo