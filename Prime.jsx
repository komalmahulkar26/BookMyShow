import React from "react";
import Caroo from "../Fol/Caroo";

const Data1 = [
  {
    url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00363824-gelsgrerpp-portrait.jpg",
    text: "A Confession",
    cap: "English",
  },
  {
    url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00352688-bqsmbbayrl-portrait.jpg",
    text: "Joyland",
    cap: "Urdu",
  },
  {
    url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00362982-zhbnwfdwue-portrait.jpg",
    text: "The Five Devil",
    cap: "French",
  },
  {
    url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00356168-szattyrjwz-portrait.jpg",
    text: "The trick",
    cap: "English",
  },
  {
    url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00363044-hxgnqxbdxd-portrait.jpg",
    text: "Wolves Of War",
    cap: "English",
  },
];

function Prime({ heading, movies }) {
  return (
    <div className="bg-[rgb(43,49,72)]  w-[100%]  pl-60 ">
      <img
        className="  "
        src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
      />
      <h1 className="text-2xl mt-3 text-white  ml-3 font-bold ">Premieres</h1>
      <p className="font-semibold text-white ml-3">
        {" "}
        Brand new releases every friday
      </p>
      <div className="flex w-[80%] ">
        {Data1.map((item) => (
          <div className=" w-[100%] ">
            <Caroo url={item.url} text={item.text} cap={item.cap} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prime;
