import React from 'react'
import EachOtherProjects from './EachOtherProjects'
import styles from "../styles/SomeProjects.module.css"
const OtherProject = () => {
    const otherProjectArr = [
        {
            title:'Integration of Algolia Search width Wordpress Multisite',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quas, ',
            lang1:'Html',
            lang2:'Css',
            lang3:'TypeScript',
            lang4:'Redux',
            }
    ]
  return (
    <div className={`w-full flex flex-col gap-8 items-center mt-40 ${styles.otherProjectW}`}>
        <div className='flex flex-col gap-6 items-center'>
        <h1 className='text-[1.5rem] text-var_color font-bold '>Other Noteworthy Projects</h1>
        <p className='text-primary1 cursor-pointer'><a href="">View the archive</a></p>
        </div>
        <div className='Otherprojects flex justify-between flex-wrap gap-5'>
        <EachOtherProjects/>
        <EachOtherProjects/>
        <EachOtherProjects/>
        <EachOtherProjects/>
        <EachOtherProjects/>
        <EachOtherProjects/>
        </div>
        <p className={styles.showMore}></p>
    </div>
  )
}

export default OtherProject