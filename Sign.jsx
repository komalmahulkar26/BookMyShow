import React, { useState } from "react";

function Sign({setisOpen}) {
  
  return (
    <div className="bg-slate-500 z-50" data-aos="fade-down">
      <div className=" h-[500px] z-50 absolute right-[400px] flex-col pt-3 top-52 rounded-lg bg-white w-[400px]">
        <div className="flex" >
          {" "}
          <h1 className="ml-32 text-2xl">Get Started</h1>
         
           <p className="ml-28" onClick={()=>{setisOpen(false)}}>❌</p> 
        </div>
        <div className="w-[300px] ml-10 h-10 mt-5 border-black border-2 ">
          {" "}
         
          <button
            className="w-[300px] flex justify- mt-2  items-center gap-10 text-center"
            
          >  <img
          className="pl-2"
          src="//in.bmscdn.com/webin/common/icons/googlelogo.svg"
        />Continue With Google</button>
        </div>
        <div className="w-[300px] ml-10 h-10 mt-5 border-black border-2 ">
          {" "}
         
          <button
            className="w-[300px] flex justify- mt-2  items-center gap-10 text-center"
            
          >  <img
          className="pl-2"
          src="//in.bmscdn.com/webin/common/icons/googlelogo.svg"
        />Continue With Email</button>
        </div> <div className="w-[300px] ml-10 h-10 mt-5  border-black border-2 ">
          {" "}
         
          <button
            className="w-[300px] flex justify- mt-2  items-center gap-10 text-center"
            
          >  <img
          className="pl-2"
          src="//in.bmscdn.com/webin/common/icons/googlelogo.svg"
        />Continue With Apple</button>
        </div>
       
        <p className="ml-40 m-5">OR</p>
        <div className="ml-10">
          <img
            className="relative  top-6 left-8 pt-"
            alt="indian flag"
            src="//in.bmscdn.com/webin/common/icons/indianflag.svg"
          ></img>
          <input
            className="w-[300px] ml-5 h-10 text-center border-black"
            type="number"
            placeholder="+91  continue with mobile no"/> 
        
        </div>
        <p className="ml-14 mt-12">i am agree to the terms & conditions </p>
        <p className="ml-32">& privacy policy</p>
      </div>
    </div>
  );
}

export default Sign;
