import React from 'react'
import Image from 'next/image'
import styles from "../styles/SomeProjects.module.css"
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
  return (
    <div className={`${styles.EachOtherProjects} lg:max-w-[32%] max-w-full flex flex-col space-y-4 p-6 bg-primary_bg2 shadow-lg rounded-lg h-80`}>
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
                    <a href={live} target='blank'>
                    <Image
                    src={"/live2.png"}
                    height={30}
                    width={30}
                    alt='icon1'
                    />
                    </a>
                    <a href={github} target='blank'>
                     <Image
                    src={"/github-line.png"}
                    height={25}
                    width={30}
                    alt='icon2'
                    />
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