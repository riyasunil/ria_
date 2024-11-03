import React from 'react'

const Landing = () => {
  return (
    <div className='h-screen bg-eggshell p-4 text-black'>
        <div className="flex flex-col items-center justify-center break2:justify-start h-full">
            <p className='font-apple hidden break2:flex break2:text-[10rem] break1:text-[16rem] font-light text-center'> welcome to my</p>
            <p className='font-snell text-[4rem] break2:text-[8rem] break1:text-[14rem] font-bold text-center leading-5'><span>&nbsp;&nbsp;&nbsp;</span>portfolio</p>
        </div>
    </div>
  )
}

export default Landing