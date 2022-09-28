import React from 'react'
import {MdOutlineShower,MdEngineering,MdOutlineArchitecture} from 'react-icons/md'
import {FaBath} from 'react-icons/fa'

const About = () => {
  return (
    <>
        <div className=' flex  flex-col w-full h-[1240px] bg-gray-200'>
          <div className='mt-[100px] mb-8 '>
            <h6 className='font-mono text-lg font-bold text-yellow-500 text-center'>Queck Search</h6>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl text-gray-800 font-sans font-bold font-mono'>Try a quick search for</h1>
            <h1 className='text-4xl text-gray-800 font-sans font-bold my-2 font-mono'>San Francisco</h1>
          </div>

          <div className='grid md:grid-cols-4 gap-4 px-2 items-center mt-12 text-gray-800'>
            <div className='flex flex-col justify-center items-center border border-gray-300 py-8 rounded-xl shadow-xl  hover:text-white hover:bg-slate-900 '>
              <FaBath className='text-blue-500' size={30}/>
              <p className='font-bold font-mono text-xl mt-8'>Bathroom Remodel Contractors</p>
            </div>
            <div className='flex flex-col justify-center items-center border border-gray-300 py-8 rounded-xl shadow-xl  hover:text-white hover:bg-slate-900 '>
              <MdOutlineShower className='text-pink-500 ' size={30}/>
              <p className='font-bold font-mono text-xl mt-8'>Roofers</p>
            </div>
            <div className='flex flex-col justify-center items-center border border-gray-300 py-8 rounded-xl shadow-xl  hover:text-white hover:bg-slate-900 '>
              <MdOutlineArchitecture className='text-green-500' size={30}/>
              <p className='font-bold font-mono text-xl mt-8'>Remodeling Architects</p>
            </div>
            <div className='flex flex-col justify-center items-center border border-gray-300 py-8 rounded-xl shadow-xl hover:text-white hover:bg-slate-900 '>
              <MdEngineering className='text-green-500' size={30}/>
              <p className='font-bold font-mono text-xl mt-8'>Civil & Structural Engineers</p>
            </div>

            
          </div>



          <div className='mt-[200px] mb-8 '>
            <h6 className='font-mono text-lg font-bold text-yellow-500 text-center'>Queck Search</h6>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl text-gray-800 font-sans font-bold font-mono'>Try a quick search for</h1>
            <h1 className='text-4xl text-gray-800 font-sans font-bold my-2 font-mono'>San Francisco</h1>
          </div>

          <div className='grid md:grid-cols-4 gap-4 px-2 items-center mt-12 text-gray-800'>
            <div className='flex flex-col justify-center items-center border border-gray-300 py-8 rounded-xl shadow-xl  hover:text-white hover:bg-slate-900 '>
              <FaBath className='text-blue-500' size={30}/>
              <p className='font-bold font-mono text-xl mt-8'>Bathroom Remodel Contractors</p>
            </div>
            <div className='flex flex-col justify-center items-center border border-gray-300 py-8 rounded-xl shadow-xl  hover:text-white hover:bg-slate-900 '>
              <MdOutlineShower className='text-pink-500 ' size={30}/>
              <p className='font-bold font-mono text-xl mt-8'>Roofers</p>
            </div>
            <div className='flex flex-col justify-center items-center border border-gray-300 py-8 rounded-xl shadow-xl  hover:text-white hover:bg-slate-900 '>
              <MdOutlineArchitecture className='text-green-500' size={30}/>
              <p className='font-bold font-mono text-xl mt-8'>Remodeling Architects</p>
            </div>
            <div className='flex flex-col justify-center items-center border border-gray-300 py-8 rounded-xl shadow-xl hover:text-white hover:bg-slate-900 '>
              <MdEngineering className='text-green-500' size={30}/>
              <p className='font-bold font-mono text-xl mt-8'>Civil & Structural Engineers</p>
            </div>

            
          </div>
          

        </div>
    </>
  )
}

export default About