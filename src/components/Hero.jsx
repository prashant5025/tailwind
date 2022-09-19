import React from "react";
import Img1 from '../assets/img/img1.png'
import Img2 from '../assets/img/img2.png'

const Hero = () => {
  return (
    <div className="w-screen h-screen bg-slate-900 flex flex-col justify-between text-white">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col kjustify-center md:items-start w-full px-2 py-8">
          <p className="text-5xl md:text-6xl font-bold">
            Find Construction
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-mono mt-4">Professionals</h1>
          <p className="text-4xl md:text-6xl font-bold font-mono text-yellow-500 mt-4">You Can Trust!</p>
          <p className="text-gray-400 mt-4 overflow-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime blanditiis odit, nobis non quibusdam voluptas! Voluptatem eum ab nostrum.</p>
          <button className="py-3 px-4 mt-4">Get Started</button>
        </div>

      </div>
    </div>
  );
};

export default Hero;
