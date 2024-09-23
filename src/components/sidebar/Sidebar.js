import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar h-screen flex flex-col w-1/6 shadow-custom">
        {/* pink border */}
        {/* <div className='h-6 bg-[#FFD1DC] justify-center items-center mb-4'> </div> */}

        {/* sections */}
        <div className="sidebarsections px-6 mt-4 flex flex-col h-full justify-between">
            {/* about */}
            {/* <p className='font-bold font-3xl font-times mb-2'>ABOUT</p> */}
            <div>
              <p className='font-normal font-xs font-times mb-4 italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ipsum justo, imperdiet at elit ut, faucibus ultrices lectus. Donec ullamcorper eros at fermentum ultrices.</p>
              {/* get in touch */}
              <p className='font-bold font-3xl font-times mb-2'>GET IN TOUCH</p>
              <p className='font-normal font-xs font-times italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ipsum justo, imperdiet at elit ut, faucibus ultrices lectus. Donec ullamcorper eros at fermentum ultrices.</p>
            </div>
            
            {/* links */}
            <div className="links font-times text-sm flex flex-col my-6 gap-2">
            <a href='/'>HOME</a>
            <a href='/about'>ABOUT</a>
            <a href='/tools'>SKILLS</a>
            <p>PROJECTS</p>
            <p>BLOG</p>
            <p>CONNECT</p>
            </div>
        </div>


    </div>
  )
}

export default Sidebar