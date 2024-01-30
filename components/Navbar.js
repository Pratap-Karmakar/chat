import Image from "next/image";
import React from "react";
import shark from '../public/shark.png'
import { signOut, useSession } from "next-auth/react";


const Navbar = () => {
    const {data:session}=useSession();
  return (
    

    <div className="flex fixed w-full justify-between bg-[#161515] h-16 top-0 z-50 shadow-md">
      <div className=" flex items-center ml-4 md:ml-10 xl:ml-20">
        <Image src={shark} alt="Page Logo" className="w-10 h-10 md:mr-2"/>
        <span className="hidden md:flex text-gray-400 text-lg font-bold">SharkChat</span> 
        <h4 className='font-bold md:ml-8 ml-2 text-gray-600'>{session?.user?.name}</h4>
        <img src={session?.user?.image} alt="" className="md:ml-2 ml-1 md:w-10 md:h-10 w-6 h-6 rounded-full"/>
        <div ></div>
      </div>
      <div className="flex items-center md:mr-10 mr-4 xl:mr-20">           
          
          <div className="font-bold text-[#161515] bg-[#c4661f] hover:bg-[#8c4a1c] p-2 rounded-lg hover:cursor-pointer" onClick={()=>signOut('google')}>Log Out</div>
        
      </div>
    </div>
  );
};

export default Navbar;
