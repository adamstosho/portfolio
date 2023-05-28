import React from 'react'
import style from "../styles/SomeProjects.module.css"
import Image from 'next/image'
const Eachproject = () => {
  return (
            <div className="projectW flex justify-between w-full gap-10 h-[26rem] bg-black items-center">
            <div className={style.projectImg}>
                <Image 
                src={"/media/rolex.png"}
                width={400}
                height={300}
                />
            </div>

            <div className='w-[45%] relative h-full flex flex-col justify-between p-10 '>
                <div className="projectTitle">
                <p className='text-right text-primary1 text-[13px]'>Featured Project</p>
                <h1 className='text-blur_texts text-right text-[1.2rem]'>Rolex WristWatch</h1>
                </div>
                <div className="description w-[110%] bg-primary_bg2 absolute right-[2rem] top-[30%] text-[13px] p-4 rounded-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil commodi autem laudantium. Accusamus saepe dolorem excepturi ex, non adipisci mollitia nemo maxime illum laboriosam? Natus autem reiciendis culpa iusto magnam!
                </div>
                <div className="materialUsed text-[13px] flex justify-between">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Vanilla Js</p>
                    <p>Netlify</p>
                </div>
                <div className="clickales">
                    <Image
                    src={"/github-fill.png"}
                    height={30}
                    width={30}
                    />
                </div>
            </div>
            </div>
  )
}

export default Eachproject