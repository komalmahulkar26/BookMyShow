import React, { useState } from 'react'



function Eventclick() {
  const [isOpen,setisOpen]=useState()
  const handleclick=()=>{
    setisOpen(!isOpen)
  }
  return (
    <div className="bg-slate-200  w-full h-full flex">
      <div className="ml-20">
        <h1 className=" text-2xl  pt-5 w-[600px] font-bold">Filter</h1>


        <div className="bg-white w-[400px] h-32  mt-2">
          {" "}
          <div className="flex pt-3" onClick={handleclick}>
          {isOpen ? <p>❌</p> : <p>➕</p>}
            <p className="text-red-600 pl-5">Date</p>

            <p className="text-red-600 pl-64 pr-3">clear</p>
          </div>
          {isOpen ? (
            <div>
              <div className="flex justify-around pt-2">
                {" "}
                <button className="w-20 bg-white border-black text-red-600">
                Today
                </button>
                <button className=" w-20 bg-white text-red-600 border-black">
                  Tomaarow
                </button>
                
              </div>
              <div className="ml-10 pt-2 ">
                {" "}
                <button className="text-red-600 w-36 bg-white border-black">
                This weekend
                </button>
                
              </div>
            </div>
          ) : null}{" "}
        </div>
        <div className="bg-white w-[400px] h-32  mt-2">
          {" "}
          <div className="flex pt-3" onClick={handleclick}>
          {isOpen?<p>❌</p> :<p>➕</p>}
            <p className="text-red-600 pl-5">Language</p>

            <p className="text-red-600 pl-60 pr-3">clear</p>
            </div>
          {isOpen ? (
            <div>
              <div className="flex justify-around pt-2">
                {" "}
                <button className="w-20 bg-white border-black text-red-600">
                  Hindi
                </button>
                <button className=" w-20 bg-white text-red-600 border-black">
                  English
                </button>
                <button className="text-red-600 w-20 bg-white border-black">
                  Marathi
                </button>
              </div>
              <div className="flex justify-around pt-2 ">
                {" "}
                <button className="text-red-600 w-36 bg-white border-black">
                  Telugu
                </button>
                <button className="text-red-600 w-20 bg-white border-black">
                  Tamil
                </button>
                <button className="text-red-600 w-20 bg-white border-black">
                  Bengali
                </button>
              </div> 
            </div> 
          ) : null}{" "}
        </div>
        <div className="bg-white w-[400px] h-44  mt-2 ">
          <div className="flex pt-3" onClick={handleclick}>
            {isOpen ? <p>❌</p> : <p>➕</p>}
            <p className="text-red-600 pl-5">Categories</p>

            <p className="text-red-600 pl-60 pr-3">clear</p>
          </div>
          {isOpen ? (
            <div>
              {" "}
              <div><button className="w-40 pt-2 bg-white ml-6 border-black text-red-600">
              online streming event
                </button></div>
              <div className="flex  ml-5 pt-2">
                {" "}
                <button className="w-20 bg-white border-black text-red-600">
                  Workshop
                </button>
                
                <button className="text-red-600 w-40 bg-white border-black">
                  Comedy Shows
                </button>
              </div>
              <div className="flex justify-around pt-2 ">
                {" "}
                <button className="text-red-600 w-36 bg-white border-black">
                  Music Shows 
                </button>
                <button className="text-red-600 w-20 bg-white border-black">
                  Kids
                </button>
                <button className="text-red-600 w-20 bg-white border-black">
                  Meetups
                </button>
              </div>
              <div className="flex justify-around pt-2 ">
                {" "}
                <button className="text-red-600 w-36 bg-white border-black">
                  spirituality
                </button>
                <button className="text-red-600 w-40 bg-white border-black">
                  Celebrity Wishes
                </button>
                
              </div>
              
            </div>
          ) : null}{" "}
        </div>
        <div className="bg-white w-[400px] h-40  mt-2 ">
          <div className="flex pt-3" onClick={handleclick}>
            {isOpen ? <p>❌</p> : <p>➕</p>}
            <p className="text-red-600 pl-5">More Filters </p>

            <p className="text-red-600 pl-56 pr-3">clear</p>
          </div>
          {isOpen ? (
            <div>
              {" "}
              <div className="flex justify-around  ">
                {" "}
                <button className="text-red-600 w-36  bg-white border-black">
                  online Streming
                </button>
              </div>
              <div className="flex justify-around pt-2 ">
                {" "}
                <button className="text-red-600 w-36   bg-white border-black">
                  Outdoor Events
                </button>
                <button className="text-red-600 w-36  bg-white border-black">
                  Kids Allowed
                </button>
              </div>
              <div className="flex justify-around pt-2  ">
                {" "}
                <button className="text-red-600 w-36  bg-white border-black">
                  Fast Filling
                </button>
                <button className="text-red-600 w-36  bg-white border-black">
                  Must Attend
                </button>
              </div>
            
              <div className="flex justify-around pt-2  ">
                {" "}
                <button className="text-red-600 w-36  bg-white border-black">
                  Unmissiable Event
                </button>
              </div>
            </div>
          ) : null}
        </div>

        <button className="text-red-600 ml-20 mt-4 mb-5">
          Browser By Cinemas
        </button>
      </div>
      {/* <Moviesright/> */}
      <div className=''>
        <h1 className="font-bold text-2xl mt-8"> Events In Nagpur </h1>
        <div className="flex mt-5 text-red-600">
          {" "}
          <button className="w-44 P-3 bg-white rounded-full">Online Streming Event</button>
          <button className="w-20 p-2 ml-2 bg-white rounded-full">
            workshop
          </button>
          <button className="w-20  ml-2 bg-white rounded-full">comedy shows</button>
          <button className="w-28  ml-2 bg-white rounded-full">
            Music shows
          </button>
          <button className="w-12  ml-2 bg-white rounded-full">kids</button>
          <button className="w-20 ml-2 bg-white rounded-full">meetups</button>
          <button className="w-20 ml-2 bg-white rounded-full">spirituality</button>
          <button className="w-32  ml-2 bg-white rounded-full">celebrity wishes</button>
        </div>
        <div className=" flex justify-between bg-white h-14  w-[600px] mt-5 rounded-lg">
          <h1 className="font-bold  pt-2 pl-2 text-2xl">Coming Soon</h1>
          <p className="text-red-900 pr-3 pt-4">explore upcoming movies </p>
        </div>

        {/* {data.map((item) => (
          <div className="flex-row">
            <Caro
              url={item.url}
              head={item.head}
              des={item.des}
              caption={item.caption}
            />
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default Eventclick