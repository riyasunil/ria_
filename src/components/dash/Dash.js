import React from 'react'
import R from "../../assets/R.svg"
import ph from "../../assets/placeholder.jpeg"
const Dash = () => {
  return (
    <div className='text-black flex-grow flex flex-col '>
      {/* header   */}
      <div className="header w-full h-2/5 flex flex-col justify-center items-center p-10">

        <img src={R} className='w-32' />

        {/* links */}
        <div className="links font-times text-lg flex flex-row mt-6 gap-10">
            <a>ABOUT</a>
            <a href='/tools'>SKILLS</a>
            <p>PROJECTS</p>
            <p>BLOG</p>
            <p>CONNECT</p>
        </div>
        {/* links */}
        
      </div>
      {/* header   */}

      {/* featured */}
      <div className="featured flex flex-col font-times mx-32">
        <p className='mb-4'>FEATURED</p>
        <div className="featblock flex flex-row justify-between">
          <img className='placeholder w-[25rem]'src={ph}/>
          <p className=''>Whisperings of Anna ~ Issue No. 28, January/ February 2024</p>
        </div>
      </div>

    </div>
  )
}

export default Dash