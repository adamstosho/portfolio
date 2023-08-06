import React from 'react'
import Image from 'next/image'
import styles from "../../styles/Expertise.module.css"
const ExpertiseCard = ({img,skillName}) => {
 
  return (
    <div 
    className='border-2 border-primary1 w-32 h-40 rounded-lg flex flex-col justify-center items-center gap-4 hover:scale-[1.05]'>

<Image
className={styles.expImg}
src={img}
alt='expertise'
width={100}
height={100}
/>
<p className="nameOfLang text-primary1">
{skillName}
</p>
    </div>
  )
}

export default ExpertiseCard