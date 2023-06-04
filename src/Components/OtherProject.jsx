import React from 'react'
import EachOtherProjects from './EachOtherProjects'
import styles from "../styles/SomeProjects.module.css"
const OtherProject = () => {
    const otherProjectArr = [
        {
            lang1:'React-Redux',
            lang2:'',
            lang3:'TailwindCss',
            lang4:'Netlify',
            title:'Task-List',
            desc:'A Task List to make proper decision. Where users can add a new task and mark or delete any task that has been completed.',
            github:'https://github.com/Intelligence247/Redux_To_Do_List',
            live:'https://creative-gelato-39395b.netlify.app',
            },
            {
              lang1:'HTML/CSS',
              lang2:'',
              lang3:'Vanilla.js',
              lang4:'Netlify',
              title:'Cake-Shop',
              desc:'Time to go for shopping!. This website gives users the opportunity to search for what they want to order for.',
              github:'https://github.com/Intelligence247/cake-shop',
              live:'https://ephemeral-pithivier-dc232a.netlify.app/',
              },
              {
                lang1:'Reactjs',
                lang2:'',
                lang3:'TailwindCSS',
                lang4:'Netlify',
                title:'Temperature Converter',
                desc:'This App can convert any given temperature to another form. Either from Celsius to Fahreint or any other possible forms.',
                github:'https://github.com/Intelligence247/TemperatureConverter',
                live:'https://cute-meerkat-9c5153.netlify.app/',
                },
                {
                  lang1:'Reactjs',
                  lang2:'',
                  lang3:'TailwindCSS',
                  lang4:'Netlify',
                  title:'World Country Visualization',
                  desc:'This App visualizes all the countries in the world with their populations, capital e.t.c. Users can search any country with either the name of the country or the capital',
                  github:'https://github.com/Intelligence247/asabeneh-world-countries-data-project',
                  live:'https://stately-kataifi-5e13a1.netlify.app/',
                  },
    ]
  return (
    <div className={`w-full flex flex-col gap-8 items-center mt-40 ${styles.otherProjectW}`}>
        <div className='flex flex-col gap-6 items-center'>
        <h1 className='text-[1.5rem] text-var_color font-bold text-center'>Other Noteworthy Projects</h1>
        <p className='text-primary1 cursor-pointer'><a href="">View the archive</a></p>
        </div>
        <div className={` ${styles.Otherprojects} flex justify-between lg:flex-row flex-col flex-wrap gap-5`}>
          {
            otherProjectArr.map((other)=>(
              <EachOtherProjects
              lang1={other.lang1}
              lang2={other.lang2}
              lang3={other.lang3}
              lang4={other.lang4}
              title={other.title}
              desc={other.desc}
              github={other.github}
              live={other.live}
              />
            ))
          }
        </div>
        <p className={styles.showMore}></p>
    </div>
  )
}

export default OtherProject