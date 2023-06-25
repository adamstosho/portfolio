import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from "../styles/SomeProjects.module.css"
import AOS from 'aos'
const EachOtherProjects = ({
    lang1,
    lang2,
    lang3,
    lang4,
    live,
    github,
    title,
    desc,

}) => {
  useEffect(() => {
   AOS.init({duration:1000})
  }, [])
  
  return (
    <div className={`${styles.EachOtherProjects} lg:max-w-[32%] max-w-full flex flex-col space-y-4 p-6 bg-primary_bg2 shadow-lg rounded-lg h-80 max-h-80 relative bottom-0 hover:bottom-2`}
    data-aos='flip-right'
    >
        <div className='flex items-center justify-between'>
            <div>
            <Image
            src={"/file.png"}
            height={50}
            width={50}
            alt={'File'}
            />
            </div>
            <div className={`clickales flex gap-4`}>
                    <a href={live} target='_blank' rel="noopener noreferrer">
                    <div className={`bg-[url(/live1.png)] hover:bg-[url(/live2.png)] w-6 h-6 gird place-content-center`}>
                  </div>
                    </a>
                    <a href={github} target='_blank' rel="noopener noreferrer">
                    <div className={`bg-[url(/github-line.png)] hover:bg-[url(/github-lineh.png)] w-6 h-6 grid place-content-center `}>
                  </div>
                    </a>
                </div>
        </div>
    <div className='flex flex-col justify-between h-full'>
        <h1 className='text-var_color font-[700] '>{title}</h1>
        <p className='text-[13px]'>{desc}</p>
        <div className="materialUsed text-[13px] flex justify-around">
                    <p>{lang1}</p>
                    <p>{lang2}</p>
                    <p>{lang3}</p>
                    <p>{lang4}</p>
                </div>
    </div>
    </div>
  )
}

export default EachOtherProjects