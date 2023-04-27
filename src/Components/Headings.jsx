import React from 'react'

const Headings = (props) => {
  return (
    <div className={`flex justify-${props.position} items-center gap-4`}>
        <div className='flex items-baseline gap-4'>
        <span className='text-primary1'>{props.num}</span>
        <p className="text text-var_color text-4xl font-[700]">{props.text}</p>
        </div>
      <p className='w-[18rem] h-[1px] bg-blur_texts'></p>
    </div>
  )
}

export default Headings