import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Scrol from "../Fol/Scrol"

const Data1=[
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyOCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358276-vjdwsfbydg-portrait.jpg",
Name:"Blind Dating 30+ -Flrican",

des:"Watch On Zoom",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00131211-edwmrltndu-portrait.jpg",
Name:"Art and Craft Online",
con:"workshop",
des:"Watch On Zoom",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA4IEp1bCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00307978-zghvczcrde-portrait.jpg",
Name:"Smartphone photography",
con:"Watch On Zoom",
des:"Unleash The Pro Mode",

  },
  {
   url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00357347-hrhmmpsafb-portrait.jpg",
Name:"Kids Sudoku Championship",
con:"Watch On Zoom",
des:"by MALSAR",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyMCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00363742-pxkgyeykmn-portrait.jpg",
Name:"Energy Fitness in 21 Days",
con:"Watch On Zoom",
des:"Workshop!",
way:"",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364626-krmybxjhbg-portrait.jpg",
Name:"Free Workshop",
con:"Watch On Zoom",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAzMSBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362648-yqwsgpbebl-portrait.jpg",
Name:"Talk Session Med",
con:"Watch On Zoom",
des:"-Sciece",
way:"",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364755-suxthfxmjn-portrait.jpg",
Name:"weekly workshop with",
con:"Watch On Zoom",
des:"Rooftop @1099",
way:"",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364655-cxbfmjqqst-portrait.jpg",
Name:"Online Open MIC By Kasa",
con:"Watch On Zoom",
des:"Kai Mumbai ",
way:"",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361252-paxyfyubtg-portrait.jpg",
Name:"Solve The Rubic's Cube",
con:"Watch On Zoom",
des:"Sharpen 6 Vital Skill",
way:"",
  },
  

]


function Streming() {
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
    <div className="bg-slate-200 w-[100%] pl-60 ">
         <h1 className="text-2xl font-bold pt-10 ml-5">Online Streming Events</h1>

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

export default Streming