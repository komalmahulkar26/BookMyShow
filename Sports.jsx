import React, { useState } from "react";
import Caro from "./Caro"

const data=[
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyMiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361456-vmlrnvgjgx-portrait.jpg",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311494-qmfyvyaefq-portrait.jpg",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311497-wyrhslrdpz-portrait.jpg",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMSBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00336076-mlyrblabfu-portrait.jpg",

  },
]
function Eventclick() {
  const [isOpen, setisOpen] = useState();
  const handleclick = () => {
    setisOpen(!isOpen);
  };
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
        
        <div className="bg-white w-[400px] h-36  mt-2 ">
          <div className="flex pt-3" onClick={handleclick}>
            {isOpen ? <p>❌</p> : <p>➕</p>}
            <p className="text-red-600 pl-5">Categories</p>

            <p className="text-red-600 pl-60 pr-3">clear</p>
          </div>
          {isOpen ? (
            <div>
              {" "}
              <div>
                <button className="w-40 pt-2 bg-white ml-6 border-black text-red-600">
                  Online Sports
                </button>
                <button className="w-40 pt-2 bg-white ml-6 border-black text-red-600">
                  E-sports
                </button>
                
              </div>
              <div>
                <button className="w-40 pt-2 bg-white ml-6 border-black text-red-600">
                  chess
                </button>
                <button className="w-40 pt-2 bg-white ml-6 border-black text-red-600">
                motorsports
                </button>
                
              </div>
              <div>
                <button className="w-40 pt-2 bg-white ml-6 border-black text-red-600">
                  onlinesports
                </button>
                
                
              </div>
            </div>
          ) : null}{" "}
        </div>

        

        <div className="bg-white w-[400px] h-28  mt-2 ">
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
                <button className="text-red-600 w-36  bg-white border-black">
                  Fast Filling
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
            </div>
          ) : null}
        </div>

        <div className="bg-white w-[400px] h-28  mt-2 ">
          <div className="flex pt-3" onClick={handleclick}>
            {isOpen ? <p>❌</p> : <p>➕</p>}
            <p className="text-red-600 pl-5">Prices</p>

            <p className="text-red-600 pl-60 pr-3">clear</p>
          </div>
          {isOpen ? (
            <div>
              {" "}
              <div className="flex">
                <button className="w-40 pt-2 bg-white ml-6 border-black text-red-600">
                  Free
                </button>
                <button className="w-40 pt-2 bg-white ml-6 border-black text-red-600">
                  0-500
                </button>
                <button className="w-40 pt-2 bg-white ml-6 border-black text-red-600">
                  501-2000
                </button>
              </div>
              <div>
                <button className="w-40 pt-2 bg-white ml-6 border-black text-red-600">
                  above-2000
                </button>
              </div>
            </div>
          ) : null}{" "}
        </div>
        <button className="text-red-600 ml-20 mt-4 mb-5">
          Browser By Cinemas
        </button>
      </div>
      {/* <Moviesright/> */}
      <div className="">
        <h1 className="font-bold text-2xl mt-8"> Sports In Nagpur </h1>
        <div className="flex mt-5 text-red-600">
          {" "}
          <button className="w-28 h-10 P-3 bg-white rounded-full">
            Online Games
          </button>
          <button className="w-20 ml-2 P-3 bg-white rounded-full">E-sports</button>
          <button className="w-20 ml-2 P-3 bg-white rounded-full">Chess</button>
          <button className="w-28  ml-2 P-3 bg-white rounded-full">Motosports</button>
          <button className="w-28  ml-2 P-3 bg-white rounded-full">
            onlinesports
          </button>
        </div>
        <div className=" flex justify-between bg-white h-14  w-[600px] mt-5 rounded-lg">
          <h1 className="font-bold  pt-2 pl-2 text-2xl">Coming Soon</h1>
          <p className="text-red-900 pr-3 pt-4">explore upcoming movies </p>
        </div>
        <div className="flex">
        {data.map((item) => (
          <div className="">
            <Caro
              url={item.url}
              head={item.head}
              des={item.des}
              caption={item.caption}
            />
          </div>
        ))}</div>
         <div className="flex">
        {data.map((item) => (
          <div className="">
            <Caro
              url={item.url}
              head={item.head}
              des={item.des}
              caption={item.caption}
            />
          </div>
        ))}</div>
          <div className="flex">
        {data.map((item) => (
          <div className="">
            <Caro
              url={item.url}
              head={item.head}
              des={item.des}
              caption={item.caption}
            
            />
          </div>
        ))}</div>
      </div>
    </div>
  );
}

export default Eventclick;
