import React from 'react'
import {MdOutlineShower,MdEngineering,MdOutlineArchitecture} from 'react-icons/md'
import {FaBath} from 'react-icons/fa'

const About = () => {
  return (
    <>
        <div className='w-full h-[2040px] sm:h-[1440px] lg:h-[1240px] bg-white'>
          <div className='mt-[100px] mb-8 '>
            <h6 className='font-mono text-lg font-bold text-yellow-500 text-center'>Queck Search</h6>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl text-gray-600  font-bold '>Try a quick search for</h1>
            <h1 className='text-4xl text-gray-600 font-bold my-2 '>San Francisco</h1>
          </div>

          <div className='flex flex-wrap justify-evenly mt-8'>
            <div className='flex flex-col sm:w-60 bg-white  rounded-lg shadow-md w-full m-6 justify-center items-center overflow-hidden hover:bg-slate-900 hover:text-white transition-all duration-500  cursor-pointer'>
              <FaBath className='text-blue-500 h-20 m-6 ' size={30}/>
              <p className='text-center px-2 pb-5 font-mono font-bold'>Bathroom Remodel Contractors</p>

            </div>
            <div className='flex flex-col sm:w-60 bg-white  rounded-lg shadow-md w-full m-6 justify-center items-center overflow-hidden hover:bg-slate-900 hover:text-white transition-all duration-500  cursor-pointer'>
              <MdOutlineShower className='text-pink-500 h-20 m-6 ' size={30}/>
              <p className='text-center px-2 pb-5 font-mono font-bold'>Roofers</p>

            </div>
            <div className='flex flex-col sm:w-60 bg-white  rounded-lg shadow-md w-full m-6 justify-center items-center overflow-hidden hover:bg-slate-900 hover:text-white transition-all duration-500  cursor-pointer'>

              <div className=''>

              <MdOutlineArchitecture className='text-black-500 h-20 m-6 ' size={30}/>
              </div>
              <p className='text-center px-2 pb-5 font-mono font-bold'>Remodeling Architects</p>

            </div>
            <div className='flex flex-col sm:w-60 bg-white  rounded-lg shadow-md w-full m-6 justify-center items-center overflow-hidden hover:bg-slate-900 hover:text-white transition-all duration-500  cursor-pointer'>
              <MdEngineering className='text-green-500 h-20 m-6 ' size={30}/>
              <p className='text-center px-2 pb-5 font-mono font-bold'>Civil & Structural Engineers</p>

            </div>
          </div>



          <div className='mt-[200px] mb-8 '>
            <h6 className='font-mono text-lg font-bold text-yellow-500 text-center'>Find Professionals</h6>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl text-gray-600  font-bold '>Find construction</h1>
            <h1 className='text-4xl text-gray-600  font-bold my-2 '>professionals you can trust!</h1>
          </div>

          

          <div className='flex flex-wrap justify-evenly mt-8'>
            <div className='flex flex-col sm:w-60 bg-white  rounded-lg shadow-md w-full m-6 justify-center items-center overflow-hidden hover:bg-slate-900 hover:text-white transition-all duration-500 hover:scale-y-110 cursor-pointer'>
              <FaBath className='text-blue-500 h-20 m-6 ' size={30}/>
              <p className='text-center px-2 pb-5 font-mono font-bold'>General Contractors</p>

            </div>
            <div className='flex flex-col sm:w-60 bg-white  rounded-lg shadow-md w-full m-6 justify-center items-center overflow-hidden hover:bg-slate-900 hover:text-white transition-all duration-500 hover:scale-y-110 cursor-pointer'>
              <FaBath className='text-blue-500 h-20 m-6 ' size={30}/>
              <p className='text-center px-2 pb-5 font-mono font-bold'>Remodeling Architects</p>

            </div>
            <div className='flex flex-col sm:w-60 bg-white  rounded-lg shadow-md w-full m-6 justify-center items-center overflow-hidden hover:bg-slate-900 hover:text-white transition-all duration-500 hover:scale-y-110 cursor-pointer'>
              {/* <div className='bg-black h-20 w-20 rounded-full '></div> */}
              <FaBath className='text-blue-500 h-20 m-6' size={30}/>
              <p className='text-center px-2 pb-5 font-mono font-bold'>Civil & Structural Engineers</p>

            </div>
          </div>
          

        </div>
    </>
  )
}

export default About