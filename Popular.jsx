import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Scrol from "../Fol/Scrol"

const Data1=[
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362276-zstjtubqvd-portrait.jpg",
Name:" Parenting Workshop on ",
con:"Watch On Zoom",
des:"Gratification in Kids",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxOCBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00356910-esutpwrtrh-portrait.jpg",
Name:"Vipul Goyal Live in Nagpur",
con:"Chitnavis Center:Nagpur",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA5IEp1bA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362570-wstlmwsghh-portrait.jpg",
Name:"Fun Hour With Two Cute",
con:"Watch On Zoom",
des:"Cubes",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAxMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364054-xpdkcpepjq-portrait.jpg",
Name:"YourMICSTERS musical",
con:"Watch On Zoom",
des:"Jam online 3",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00318756-grekfkebra-portrait.jpg",
con:"Online",
Name:"Prasad From Somnath Ji",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00309320-tlklzqwjdr-portrait.jpg",
Name:"High Probable 1 to 30 min",
con:"",
des:"Online Streming",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00318756-grekfkebra-portrait.jpg",
Name:"Prasad from Somnath Ji",
con:"Online",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00317512-unlypgvpam-portrait.jpg",
Name:"Sameer Anjaan Teachers",
con:"Online Streming",
des:"Lyrics Writing",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361707-cujwutvfvy-portrait.jpg",
Name:"Money Mateers",

des:"Watch on Zoom",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364720-emwbfwsdya-portrait.jpg",
Name:"Shrimad Bhawad Gita",

des:"Watch on Zoom",

  },
  

]


function Popular() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide:5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 5,
      slidesToSlide:5,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
      slidesToSlide:5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide:5,
    }
  };
  return (
    <div className="bg-slate-200 w-[100%] pl-60 ">
         <h1 className="text-2xl font-bold pt-10 ml-5">Popular Events</h1>

         <div className="w-[80%]">
         <Carousel    responsive={  responsive } >
    {Data1.map((item)=>(
      <div className="flex justify-between  items-center w-[100%]">
      <Scrol
      url={item.url}
Name={item.Name}
con={item.con}
des={item.des}
      way={item.way}
      /></div>
    ))}
  </Carousel></div>
      
    </div>
  )
}

export default Popular