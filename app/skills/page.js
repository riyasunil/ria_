import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { SiGooglecloud } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
const Skills = () => {
  return (
    <div className="skillspage flex flex-row flex-grow bg-eggshell text-black">
        <Sidebar />

        <div className="skills flex flex-col mx-32 my-10 flex-grow">
            <p className='font-times text-4xl'>WHATS IN MY BAG ?</p>
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
                <p className='font-times italic'>loot id drop if i was in a video game</p>
            </div>
            <div className="toolbox grid grid-cols-4 mt-8 justify-items-center gap-4 font-times">
                <div className="w-[70px] xs:w-[100px] md:w-[150px] justify-center items-center flex flex-col px-5 py-4 border border-gray-300 rounded-2xl">
                    <FaHtml5 size={40}/>
                    <p>HTML</p>
                </div>
                <div className="w-[70px] xs:w-[100px] md:w-[150px] justify-center items-center flex flex-col  px-5 py-4 border border-gray-300 rounded-2xl">
                    <FaCss3 size={40}/>
                    <p>CSS</p>
                </div>
                <div className="w-[70px] xs:w-[100px] md:w-[150px] justify-center items-center flex flex-col  px-5 py-4 border border-gray-300 rounded-2xl">
                    <FaJs size={40}/>
                    <p>Javascript</p>
                </div>
                <div className="w-[70px] xs:w-[100px] md:w-[150px] justify-center items-center flex flex-col  px-5 py-4 border border-gray-300 rounded-2xl">
                <FaReact size={40}/>
                <p>ReactJs</p>
                </div>
                <div className="w-[70px] xs:w-[100px] md:w-[150px] justify-center items-center flex flex-col  px-5 py-4 border border-gray-300 rounded-2xl">
                <TbBrandNextjs size={40}/>
                <p>NextJs</p>
                </div>
                <div className="toolwrapperrw-[70px] xs:w-[100px] md:w-[150px] justify-center items-center flex flex-col  px-5 py-4 border border-gray-300 rounded-2xl">
                <RiTailwindCssFill size={40}/>
                <p>Tailwind</p>
                </div>
                <div className="toolwrapperrw-[70px] xs:w-[100px] md:w-[150px] justify-center items-center flex flex-col  px-5 py-4 border border-gray-300 rounded-2xl">
                <SiTypescript size={40}/>
                <p>Typescript</p>
                </div>
                <div className="toolwrapperrw-[70px] xs:w-[100px] md:w-[150px] justify-center items-center flex flex-col  px-5 py-4 border border-gray-300 rounded-2xl">
                <FaJava size={40}/>
                <p>JAVA</p>
                </div>
                <div className="toolwrapperrw-[70px] xs:w-[100px] md:w-[150px] justify-center items-center flex flex-col  px-5 py-4 border border-gray-300 rounded-2xl">
                <AiOutlinePython size={40}/>
                <p>Python</p>
                </div>
                <div className="toolwrapperrw-[70px] xs:w-[100px] md:w-[150px] justify-center items-center flex flex-col  px-5 py-4 border border-gray-300 rounded-2xl">
                <SiGooglecloud size={40}/>
                <p>GCP</p>
                </div>
                <div className="toolwrapperrw-[70px] xs:w-[100px] md:w-[150px] justify-center items-center flex flex-col  px-5 py-4 border border-gray-300 rounded-2xl">
                <FaAws size={40}/>
                <p>AWS</p>
                </div>
                <div className="toolwrapperrw-[70px] xs:w-[100px] md:w-[150px] justify-center items-center flex flex-col  px-5 py-4 border border-gray-300 rounded-2xl">
                <SiMongodb size={40}/>
                <p>MongoDB</p>
                </div>
                <div className="toolwrapperrw-[70px] xs:w-[100px] md:w-[150px] justify-center items-center flex flex-col  px-5 py-4 border border-gray-300 rounded-2xl">
                <FaReact size={40}/>
                <p>React Native</p>
                </div>
                <div className="toolwrapperrw-[70px] xs:w-[100px] md:w-[150px] justify-center items-center flex flex-col  px-5 py-4 border border-gray-300 rounded-2xl">
                <RiFlutterFill size={40}/>
                <p>Flutter</p>
                </div>
                <div className="toolwrapperrw-[70px] xs:w-[100px] md:w-[150px] justify-center items-center flex flex-col  px-5 py-4 border border-gray-300 rounded-2xl">
                <FaFigma size={40}/>
                <p>HTML</p>
                </div>
            </div>


        </div>
           
    </div>

  )
}

export default Skills