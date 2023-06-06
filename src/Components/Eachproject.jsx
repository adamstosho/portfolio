import React from 'react'
import styles from "../styles/SomeProjects.module.css"
import Image from 'next/image'
const Eachproject = ({
    name,
    description,
    lang1,
    lang2,
    lang3,
    lang4,
    lang5,
    flex_Dir,
    abs_pos,
    end,
    text_pos,
    img,
    live,
    live2,
    github,
    top,
}) => {
  return (
            <div className={`projectW flex lg:justify-between w-full lg:gap-10 space-y-4 gap-4 lg:h-[26rem] h-[40rem] lg:items-center lg:p-4 p-0 rounded-lg ${flex_Dir}`}>
            <div className={styles.projectImg}>
                <a href={live2} className='w-full h-full'>
                <Image 
                src={img}
                width={400}
                height={300}
                alt={'Project view'}
                />
                </a>
            </div>

            <div className='lg:w-[45%] w-full relative h-full flex flex-col justify-between lg:px-8 lg:py-0 p-0 '>
                <div className="projectTitle">
                <p className={`${text_pos} text-primary1 text-[13px] mb-2`}>Feautured Project</p>
                <h1 className={`text-var_color font-[700] ${text_pos} text-[1.5rem] lg:mb-0 mb-4`}>{name}</h1>
                </div>
                <div className={`description lg:w-[110%] w-full bg-primary_bg2 lg:absolute ${abs_pos} ${top} text-[15px] p-4 rounded-lg `}> {description}    
                </div>
                <div className='flex flex-col gap-4'>
                <div className="materialUsed text-[13px] flex justify-around lg:mt-0 mt-2">
                    <p>{lang1}</p>
                    <p>{lang2}</p>
                    <p>{lang3}</p>
                    <p>{lang4}</p>
                    <p>{lang5}</p>
                </div>
                <div className={`clickales flex gap-4 ${end}`}>
                    <a href={live}>
                    <Image
                    src={"/live2.png"}
                    height={30}
                    width={30}
                    alt='icon1'
                    />
                    </a>
                    <a href={github}>
                     <Image
                    src={"/github-line.png"}
                    height={30}
                    width={30}
                    alt='icon2'
                    />
                    </a>
                </div>
                </div>
            </div>
            </div>
  )
}

export default Eachproject