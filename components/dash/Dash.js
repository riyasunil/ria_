import React from 'react'
import R from "../../assets/R.svg"
import ph from "../../assets/placeholder.jpeg"
import Image from 'next/image'
const Dash = () => {
  return (
    <div className='text-black flex-grow flex flex-col '>
      {/* header   */}
      <div className="header w-full h-2/5 flex flex-col justify-center items-center p-10">

        <Image alt='R-logo' src={R} className='w-32' />

        {/* links */}
        <div className="links font-times text-lg flex flex-row mt-6 gap-10">
            <a href='/about'>ABOUT</a>
            <a href='/tools'>SKILLS</a>
            <a href='/projects'>PROJECTS</a>
        </div>
        {/* links */}
        
      </div>
      {/* header   */}

      {/* featured */}
      <div className="featured flex flex-col font-times mx-32">
        <p className='italic text-3xl'> A little about me, </p>
        <p className=''>Hey, I'm Riya Sunil, University Student, self-taught designer and developer based in Kochi.<br />
          I like to build things, whether its for the web or my living room table or tinkets.
          
        </p>
        {/* <p className='mb-4'>FEATURED</p>
        <div className="featblock flex flex-row justify-between">
          <div className='bg-gray-200 w-[25rem] h-[15rem]'></div>
          <div className='flex flex-col'>
          <p className=''>PROJECT NAME ~ a short description or maybe a little longer</p>
          <p className='italic'>full-stack</p>
          </div>
          
        </div> */}
      </div>

    </div>
  )
}

export default Dash