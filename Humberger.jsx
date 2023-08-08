import React from "react";

function Humberger({setisClick}) {
  return (
    <div className="">
      <div className="bg-white ml-28 w-[300px] h-[500px] relative z-50 top-24">
       <div className="bg-indigo-900 flex justify-between font-semibold text-white " > <h1 className=" text-2xl pl-5 ">Hey!</h1>
       <p onClick={()=>{setisClick(false)}}>❌</p></div>
       <div className="pl-5"> <p className="mt-5 mb-5">About</p>
        <p className="mt-5 mb-5">🔔 Notification</p>
        <p className="mt-5 mb-5">🔐 Your Order</p>
        <p className="mt-5 mb-5">🗯 Help & Support</p>
        <p className="mt-5 mb-5"> Account & Setting</p>
        <p className="mt-5 mb-5"> 🎁 Rewards</p>
        <p className="mt-5 mb-5">BookASmile</p>{" "}</div>
      </div>
    </div>
  );
}

export default Humberger;
