import React from 'react'
import Headings from './Headings'
import Image from 'next/image'
import styles from "../styles/SomeProjects.module.css"
import Eachproject from './Eachproject'

const SomeProjects = () => {
  return (
    <div className={styles.somprojectW} id='work'>
        <Headings
          num={'03.'}
          text={'Some of my projects'}
          position={'start'}
          width={"w-2"}
          />
          <div className='h-auto w-full flex flex-col gap-20 '>
          <Eachproject
          img={"/media/rolex.png"}
          name={"Rolex Wristwatch"}
          description={'I used this project to practice my frontEnd skills, I built the whole structure with HTML/CSS and JavaScript, Using JavaScript loop to create multiple element in HTML, and reduces the HTML code a lot.'}
          abs_pos={'right-[2rem]'}
          text_pos={'text-right'}
          lang1={'Html'}
          lang2={'CSS'}
          lang3={'Vanilla Js'}
          lang4={"Netlify"}
          lang5={""}
          end={'justify-end'}
          flex_Dir={'lg:flex-row flex-col-reverse'}
          live={"https://visionary-cactus-89f6e7.netlify.app/"}
          github={"https://github.com/Intelligence247/rolexWristWatch"}
          />
            <Eachproject
            img={"/media/Short3.png"}
          name={"Weather App"}
          description={'This is a weather app that gives users the opportunity to search for any city or country in the world and get the forcast for the next five days. The interval can be daily or 3hours. It can also access the location of the user and give the forcast of that city.'}
          text_pos={'text-left'}
          lang1={'React.js'}
          lang3={'Chart.js'}
          lang4={"API"}
          lang5={"TailWindCss"}

          flex_Dir={'lg:flex-row-reverse flex-col-reverse'}
          live={"https://phenomenal-sunshine-547717.netlify.app/"}
          github={"https://github.com/Intelligence247/Weather_Forcast_App"}

          />

<Eachproject
          img={"/media/rolex.png"}
          name={"Rolex Wristwatch"}
          description={'WebOpt is a dynamic web application developed for Startup to enhance user experience and engagement. By leveraging modern front-end technologies and responsive design, the project aimed to provide seamless access and optimal usability across devices. This project was Implemented in collaboration with other developers, but I worked on the whole FrontEnd'}
          abs_pos={'right-[2rem]'}
          text_pos={'text-right'}
          lang1={'Html'}
          lang2={'CSS'}
          lang3={'Vanilla Js'}
          lang4={"Netlify"}
          lang5={""}
        end={'justify-end'}
        flex_Dir={'lg:flex-row flex-col-reverse'}
          />
       
          </div>
    <p className={styles.learnMore}></p>
    </div>
  )
}

export default SomeProjects