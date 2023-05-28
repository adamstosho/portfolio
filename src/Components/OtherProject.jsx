import React from 'react'
import EachOtherProjects from './EachOtherProjects'

const OtherProject = () => {
    const otherProjectArr = [
        {
            title:'Integration of Algolia Search width Wordpress Multisite',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quas, labore repellat atque facilis voluptatibus dolorem totam rem omnis quasi magnam iusto quidem neque voluptates ',
            lang1:'Html',
            lang2:'Css',
            lang3:'TypeScript',
            lang4:'Redux',
            }
    ]
  return (
    <div>
        <h1>Other Noteworthy Projects</h1>
        <p>View the archive</p>
        <div className='Otherprojects flex justify-between flex-wrap gap-5'>
        <EachOtherProjects/>
        <EachOtherProjects/>
        <EachOtherProjects/>
        <EachOtherProjects/>
        <EachOtherProjects/>
        <EachOtherProjects/>
        </div>
    </div>
  )
}

export default OtherProject