import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Sidebar2 from '../../components/sidebar-scroll/Sidebar2'

const Projects = () => {
  return (
    <div className="skillspage flex flex-row flex-grow bg-eggshell text-black">
        <Sidebar2 />

        <div className="skills flex flex-col mx-32 my-10 flex-grow">
            
            <p className='font-times text-4xl'>PROJECTS</p>
            {/* links */}
            {/* <div className="links font-times text-sm flex flex-row mt-6 gap-10">
            <a href='/'>HOME</a>
            <a href='/about'>ABOUT</a>
            <p>PROJECTS</p>
            <p>BLOG</p>
            <p>CONNECT</p>
            </div> */}
            {/* links */}
        

            {/* content  */}
            <div className="content mt-6">
                <p className='font-times italic'>a collection of projects ive done</p>
            </div>
            
            <div className='flex flex-col mt-6 gap-y-4'>
                <div className="featblock flex flex-row justify-between">
                    {/* <img className='placeholder w-[25rem]'src={ph}/> */}
                    <div className='bg-gray-200 w-[25rem] h-[15rem]'></div>
                    <div className='flex flex-col'>
                    <p className=''>PROJECT NAME ~ a short description or maybe a little longer</p>
                    <p className='italic'>full-stack</p>
                    </div>
                
                </div>
                <div className="featblock flex flex-row justify-between">
                    {/* <img className='placeholder w-[25rem]'src={ph}/> */}
                    <div className='bg-gray-200 w-[25rem] h-[15rem]'></div>
                    <div className='flex flex-col'>
                    <p className=''>PROJECT NAME ~ a short description or maybe a little longer</p>
                    <p className='italic'>full-stack</p>
                    </div>
                
                </div>
                <div className="featblock flex flex-row justify-between">
                    {/* <img className='placeholder w-[25rem]'src={ph}/> */}
                    <div className='bg-gray-200 w-[25rem] h-[15rem]'></div>
                    <div className='flex flex-col'>
                    <p className=''>PROJECT NAME ~ a short description or maybe a little longer</p>
                    <p className='italic'>full-stack</p>
                    </div>
                
                </div>
            </div>

        </div>
           
    </div>

  )
}

export default Projects