import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Scrol from "../Fol/Scrol"


const Data1=[
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyMiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361456-zsrmxqxakh-portrait.jpg",
Name:"MotoGP Bharat 2023",
con:"Greater Noida",
des:"Buddh International Circuit:",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA5IEp1bCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311494-qmfyvyaefq-portrait.jpg",
Name:"Online Game - Lost",
con:"Online (Play From Home)",
des:"Treasure of Sundarbans",
way:"",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA5IEp1bCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311494-qmfyvyaefq-portrait.jpg",
Name:"Online Game - Flight 9032",
con:"Online (Play From Home)",
des:"Murder Mystery",
way:"",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00363720-mxaeqbfyhs-portrait.jpg",
Name:"ONLINE HOUSIE WITH",
con:"Watch On Zoom.",
des:" KASA KAI MUMBAI",
way:"",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMSBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00336076-mlyrblabfu-portrait.jpg",
Name:"Family Housie Night by",
con:"Watch On Zoom.",
des:"Malsar Events",
way:"",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA1IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00339877-uygyrtckvl-portrait.jpg",
Name:"Samurai Sudoku",
con:"Watch On Zoom.",
des:"Championship by Malsar",
way:"",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348054-kguvwzufka-portrait.jpg",
Name:"All India Quick Chess",
con:"Watch On Zoom.",
des:"Championship",
way:"",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00363814-rxbtlreanf-portrait.jpg",
Name:"ONLINE HOUSIE WITH",
con:"Watch On Zoom.",
des:"KASA KAI MUMBAI",
way:"",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00354868-ejdhwlppta-portrait.jpg",
Name:"All India Blitz Chess",
con:"Watch On Zoom.",
des:"Championship",
way:"",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxNSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00340999-hzewlffagd-portrait.jpg",
Name:"Ludo Tournament by ",
con:"Watch On Zoom.",
des:"Malsar",
way:"",
  },

]

function Games() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide:5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide:5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
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
    <div className="bg-slate-200 w-[100%] pl-60">
         <h1 className="text-2xl font-bold pt-10 ml-5">Top Games And Sport Events</h1>
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

export default Games