import React from 'react'
import Headings from './Headings'
import Image from 'next/image'
import style from "../styles/SomeProjects.module.css"
import Eachproject from './Eachproject'

const SomeProjects = () => {
  return (
    <div className='w-full h-max'>
        <Headings
          num={'03.'}
          text={'Some Things I\'ve built'}
          position={'start'}/>
          <div className='h-auto w-ful flex flex-col gap-10 '>
          <Eachproject/>
            <Eachproject/>
          </div>
       
    </div>
  )
}

export default SomeProjects