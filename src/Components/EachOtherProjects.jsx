import React from 'react'
import Image from 'next/image'
const EachOtherProjects = ({
    lang1,
    lang2,
    lang3,
    lang4,
}) => {
  return (
    <div className='max-w-[32%] flex flex-col gap-4 p-6 bg-primary_bg2 shadow-lg rounded-lg'>
        <div className='flex items-center justify-between'>
            <div>
            <Image
            src={"/github-fill.png"}
            height={50}
            width={50}
            alt={'File'}
            />
            </div>
            <div className={`clickales flex gap-4`}>
                    <a href="">
                    <Image
                    src={"/github-fill.png"}
                    height={25}
                    width={25}
                    alt='icon1'
                    />
                    </a>
                    <a href="">
                     <Image
                    src={"/github-fill.png"}
                    height={25}
                    width={25}
                    alt='icon2'
                    />
                    </a>
                </div>
        </div>
    <div className='flex flex-col gap-3'>
        <h1 className='text-var_color font-[700] '>Integration of Algolia Search width Wordpress Multisite</h1>
        <p className='text-[13px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quas, labore repellat atque facilis voluptatibus dolorem totam rem omnis quasi magnam iusto quidem neque voluptates </p>
        <div className="materialUsed text-[13px] flex justify-around">
                    <p>{'lang1'}</p>
                    <p>{'lang2'}</p>
                    <p>{'lang3'}</p>
                    <p>{'lang4'}</p>
                </div>
    </div>
    </div>
  )
}

export default EachOtherProjects