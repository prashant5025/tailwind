import React from "react";
import Img1 from '../assets/img/img1.png'
import Img2 from '../assets/img/img2.png'

const Hero = () => {
  return (
    <div className="text-white ">
      <div className="h-screen flex flex-col md:flex-row gap-2 m-4 p-4">
        <div className="m-8">
          <h1 className="text-5xl md:text-6xl font-semibold pt-4">Find Construction</h1>
          <h1 className="text-5xl md:text-6xl font-semibold pt-4">Professionals</h1>
          <h2 className="text-4xl font-semibold text-yellow-500 font-mono pt-4">
            You Can Trust
          </h2>
          <p className="text-gray-500 overflow-hidden my-6">
            A maketplace for finding construction professionals to hire for a
            home renovation project.
          </p>
          <div className="py-8">

          <button className="bg-red-600 font-semibold text-gray-200 py-2 px-6 rounded-lg shadow-md">
            Get Started
          </button>
          </div>
          <div>
            <div className="flex gap-8 mt-8 ">
              <div className=''>
                <h1 className="text-3xl font-bold text-yellow-500">10+</h1>
                <p className="text-gray-200 pt-2">Year of</p>
                <p className="text-gray-200 ">Experience</p>
              </div>
            <div className=''>
                <h1 className="text-3xl text-sky-600 font-bold">300+</h1>
                <p className="text-gray-200 pt-2">Year of</p>
                <p className="text-gray-200">Experience</p>
            </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={Img1} alt="" />
          </div>
          <div>
            <img src={Img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
