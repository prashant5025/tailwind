import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {

  // function onLinkClick(e){
  //   e.preventDefault();
  //   console.log('clicked')
  // }

  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-200 py-4 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-b-2 border-gray-600 py-8">
        <div>
          <a className="text-2xl " href="/">
            <span className="text-red-600 font-bold">RENO</span>LITION
          </a>
          <p className="text-sm mt-4 py-1 text-gray-500">201 Spear Street STE 1100</p>
          <p className="text-sm mt-1 py-1 text-gray-500">&copy; 2022 Workflow, LLC. All right reserved</p>
          <div className="flex flex-wrap gap-6 mt-2">
            <a href="https://www.facebook.com"><FaFacebook size={24}/></a>
            <a href="https://www.instagram.com"><FaInstagram size={24}/></a>
            <a href="https://www.twitter.com"><FaTwitter size={24}/></a>
            <a href="https://www.github.com"><FaGithub size={24}/></a>
            <a href="https://www.twitch.com"><FaTwitch size={24}/></a>
            

          </div>
        </div>

        <div>
          <h6 className="uppercase text-gray-200 font-semibold py-2">Company</h6>
          <ul>
            <li className="py-1 text-gray-500">Top General Contractors</li>
            <li className="py-1 text-gray-500">Top Roofing Contractors</li>
            <li className="py-1 text-gray-500">Top Architects</li>
            <li className="py-1 text-gray-500">Top Engineers</li>
          </ul>
        </div>

        <div>
          <h6 className="uppercase text-gray-200 font-semibold py-2">Information</h6>
          <ul>
            <li className="py-1 text-gray-500">Contact us</li>
            <li className="py-1 text-gray-500">Privacy Policy</li>
            <li className="py-1 text-gray-500">Trems of Service</li>
            <li className="py-1 text-gray-500">About us</li>
            <li className="py-1 text-gray-500">Guides and How-Tos</li>
          </ul>
        </div>

        <div className="">
          <h6 className="uppercase text-gray-200 font-semibold py-2">Subscribe Now</h6>
          <div className="flex flex-wrap gap-1 mt-2">
            <input className="bg-transparent border-[1px] rounded-lg py-1 px-[.20rem] md:px-4 " type="email" name="email" id="" placeholder="Email Address"/>
            <div>

            <button className="bg-gray-200 text-gray-900 font-semibold py-1 px-4 rounded-md hover:bg-transparent hover:text-white">Send</button>
            </div>
          </div>
          <button className="py-2 px-4 mt-4 text-sm rounded-lg  font-semibold text-center ">For Professionals</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
