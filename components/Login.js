import React from "react";
import shark from "../public/shark.png";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-[#c4661f] h-screen grid place-items-center">
        <Image src={shark} className="h-32 w-32 md:h-80 md:w-80" alt="logo"/>
      </div>

      <div className="grid place-items-center">
        {/* login button */}
        <div
          className="flex gap-2 md:gap-4 bg-white p-1 md:p-4 px-2 md:px-6 items-center rounded-[6px] cursor-pointer"
          onClick={() => signIn("google")}
        >
          <FcGoogle className="text-[30px]" /> 
          SignIn with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
