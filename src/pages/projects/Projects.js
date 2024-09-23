import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

const Projects = () => {
  return (
    <div className='projectspage flex flex-row flex-grow'>
        <Sidebar />

        <div className="projects-container flex flex-col mx-32 my-10 flex-grow">
            <p className='font-times text-4xl'>PROJECTS</p>
            <div className="content mt-6">
                    <p className='font-times italic'>some stuff ive worked on that i really like :3</p>
            </div>

            {/* projects grid  */}
            <div className="projectsgrid border border-rose-600 h-full">
                

            </div>
        </div>
    </div>
  )
}

export default Projects