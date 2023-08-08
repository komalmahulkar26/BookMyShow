import React, { useState } from "react";
import Caro from "./Caro";

const data = [
  {
    url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4yLzEwICA1OC42SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329481-bcufavugyg-portrait.jpg",
    head: "Mission Impossible : Dead",
    des: "Reckoning-part one",
    caption: "Action/Advanture/Thriller",
  },
  {
    url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny44LzEwICAzMS4xSyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338378-flxyehczgl-portrait.jpg",
    head: "Satyaprem Ki Katha",
    caption: "Drama/Musical/Romantic",
  },
  {
    url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MzggTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00364676-jbmgfbxpnb-portrait.jpg",
    head: "Insidious : The Red Doller",
    caption: "Horror/Mystrey/Thriller",
  },
  {
    url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS40LzEwICAyMS40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00355365-lzflppmver-portrait.jpg",
    head: "Baipan Bhari Deva",
    caption: "Drama/Comedy",
  },
];

function Movies() {
  const [isOpen, setisOpen] = useState(false);
  const handleclick = () => {
    setisOpen(!isOpen);
  };
  return (
    <div className="bg-slate-200  mt-10 flex">
      <div className="ml-12">
        <h1 className=" text-2xl  pt-5 w-[500px] text-black font-bold">Filter</h1>
        <div className="bg-white w-[400px] h-36  mt-2">
          {" "}
          <div className="flex pt-3" onClick={handleclick}>
            {isOpen ? <p>❌</p> : <p>➕</p>}
            <p className="text-red-600 pl-5">Language</p>

            <p className="text-red-600 pl-60 pr-">clear</p>
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
                  Multi Language
                </button>
                <button className="text-red-600 w-20 bg-white border-black">
                  Tamil
                </button>
              </div>
            </div>
          ) : null}{" "}
        </div>
        <div className="bg-white w-[400px] h-44  mt-2 ">
          <div className="flex pt-3" onClick={handleclick}>
            {isOpen ? <p>❌</p> : <p>➕</p>}
            <p className="text-red-600 pl-5">Generas</p>

            <p className="text-red-600 pl-64 pr-3">clear</p>
          </div>
          {isOpen ? (
            <div>
              {" "}
              <div className="flex justify-around pt-2">
                {" "}
                <button className="w-20 bg-white border-black text-red-600">
                  Drama
                </button>
                <button className=" w-20 bg-white text-red-600 border-black">
                  Advanture
                </button>
                <button className="text-red-600 w-20 bg-white border-black">
                  comedy
                </button>
              </div>
              <div className="flex justify-around pt-2 ">
                {" "}
                <button className="text-red-600 w-36 bg-white border-black">
                  Histrorical
                </button>
                <button className="text-red-600 w-20 bg-white border-black">
                  Thriller
                </button>
                <button className="text-red-600 w-20 bg-white border-black">
                  Action
                </button>
              </div>
              <div className="flex justify-around pt-2 ">
                {" "}
                <button className="text-red-600 w-36 bg-white border-black">
                  Biography
                </button>
                <button className="text-red-600 w-20 bg-white border-black">
                  Crime
                </button>
                <button className="text-red-600 w-20 bg-white border-black">
                  Fantasy
                </button>
              </div>
              <div className="flex justify-around pt-2 ">
                {" "}
                <button className="text-red-600 w-36 bg-white border-black">
                  Musical
                </button>
                <button className="text-red-600 w-20 bg-white border-black">
                  Mystery
                </button>
                <button className="text-red-600 w-20 bg-white border-black">
                  Romantic
                </button>
              </div>
            </div>
          ) : null}{" "}
        </div>
        <div className="bg-white w-[400px] h-16  mt-2 ">
          <div className="flex pt-3" onClick={handleclick}>
            {isOpen ? <p>❌</p> : <p>➕</p>}
            <p className="text-red-600 pl-5">Format</p>

            <p className="text-red-600 pl-64 pr-3">clear</p>
          </div>
          {isOpen ? (
            <div>
              {" "}
              <div className="flex justify-around  ">
                {" "}
                <button className="text-red-600 w-36  bg-white border-black">
                  2D
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
      <div>
        <h1 className="font-bold text-black text-2xl mt-8"> Movies In Nagpur </h1>
        <div className="flex mt-5 text-red-600">
          {" "}
          <button className="w-20  bg-white rounded-full">Hindi</button>
          <button className="w-20 p-2 ml-2 bg-white rounded-full">
            English
          </button>
          <button className="w-20  ml-2 bg-white rounded-full">Marathi</button>
          <button className="w-32  ml-2 bg-white rounded-full">
            Multi Language
          </button>
          <button className="w-20  ml-2 bg-white rounded-full">Tamil</button>
        </div>
        <div className=" flex justify-between bg-white h-14  w-[600px] mt-5 rounded-lg">
          <h1 className="font-bold text-black  pt-2 pl-2 text-2xl">Coming Soon</h1>
          <p className="text-red-900 pr-3 pt-4">explore upcoming movies </p>
        </div>
<div className="flex ">
        {data.map((item) => (
          <div className="w-44 text-black">
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

export default Movies;
