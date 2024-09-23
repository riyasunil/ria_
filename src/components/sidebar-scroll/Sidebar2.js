import React from 'react'

const Sidebar2 = () => {
  return (
    <div className="Sidebar2 flex flex-col w-[18%] shadow-custom">
        {/* pink border */}
        {/* <div className='h-6 bg-[#FFD1DC] justify-center items-center mb-4'> </div> */}

        {/* sections */}
        <div className="Sidebar2sections px-6 mt-12 mx-4 flex flex-col h-full justify-between">
            {/* about */}
            {/* <p className='font-bold font-3xl font-times mb-2'>ABOUT</p> */}
            <div>
              <p className='font-normal font-xs font-times mb-4 italic'>
                Hi! I'm <span className='text-[#fc6a8c]'>Riya</span>. Welcome to my little space on the internet where I showcase some of my talents and works. Feel free to stay and find out more about me! 
              </p>
              {/* get in touch */}
              
            </div>
            
            {/* links */}
            <div className="links font-times text-sm flex flex-col my-6 gap-2">
            <a href='/'>HOME</a>
            <a href='/about'>ABOUT</a>
            <a href='/tools'>SKILLS</a>
            <a href='/projects'>PROJECTS</a>
            <p>BLOG</p>
            {/* <p className='font-bold font-3xl font-times mb-2 '>GET IN TOUCH</p>
              <form className='font-times'>
              <label>
                Name
                <input type="text" name="name" className='border border-black bg-[#f2f3f4] overflow-x-auto'/>
              </label>
              <label>
                Email*
                <input type="text" name="name" required="true" className='border border-black bg-[#f2f3f4] overflow-x-auto' />
              </label>
              <label>
                Message*
                <textarea type="text" name="name"  required="true" className='border border-black bg-[#f2f3f4] h-[10rem] '/>
              </label>
                
              </form> */}
            </div>
        </div>


    </div>
  )
}

export default Sidebar2