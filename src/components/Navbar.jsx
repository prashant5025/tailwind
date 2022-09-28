import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-slate-900 flex justify-between items-center h-24 w-full mx-auto my-auto px-4 text-white lead">
      <div className="">
        <a className="text-2xl " href="#">
          <span className="text-red-600 font-bold">RENO</span>LITION
        </a>
      </div>

      <ul className="flex gap-4  text-gray-200 hidden font-mono md:flex">
        <li className="py-2 mx-4 hover:text-red-600 hover:font-bold cursor-pointer">
          For Professionals
        </li>
        <li className="py-2 mx-4 hover:text-red-600 hover:font-bold cursor-pointer">
          Construction Stats
        </li>
        <li className="py-2 mx-4 hover:text-red-600 hover:font-bold cursor-pointer">
          Guides & How Tos
        </li>
        <li className="py-2 mx-4 hover:text-red-600 hover:font-bold cursor-pointer">
          Contact us
        </li>
        <li className="py-2 mx-4 hover:text-red-600 hover:font-bold cursor-pointer">
          About us
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-slate-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }>
        <div className="mt-4">
          <a className="text-2xl p-4 m-6" href="#">
            <span className="text-red-600 font-bold">RENO</span>LITION
          </a>
        </div>
        <ul className="uppercase p-4 [line-height:4rem] ">
          <li className="p-4 border-b border-gray-600 hover:text-red-600 hover:font-bold cursor-pointer">
            For Professionals
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-red-600 hover:font-bold cursor-pointer">
            Construction Stats
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-red-600 hover:font-bold cursor-pointer">
            Guides & How Tos
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-red-600 hover:font-bold cursor-pointer">
            Contact us
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-red-600 hover:font-bold cursor-pointer">
            About us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
