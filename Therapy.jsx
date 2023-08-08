import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Scrol from "../Fol/Scrol"


const Data1=[
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxOCBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00356910-esutpwrtrh-portrait.jpg",
Name:"Vipul Goyal Live in Nagpur",

des:"Chitnavis Center : Nagpur",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355125-jkeypdzura-portrait.jpg",
Name:"Anubhav Singh Bassi - New",
con:"Kavivarvya Suresh Bhat",
des:"Material",
way:"Auditorium Nagpur",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362270-nuqwkgnzyl-portrait.jpg",

    Name:"Aakash Mehta - The Dark",
con:"Chitnavis Center : Nagpur",
des:"Tour (Stand Up Comedy)",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364199-kbdbagexuv-portrait.jpg",
Name:"Radhe Radhe-stand Up ",
con:"Bouffage Cafe:Nagpur",
des:" Comedy Solo by Rahul..",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00130544-gbrptpjzsb-portrait.jpg",
Name:"Notes From The Bunker",
con:"watch on Zoom",
des:"With Punit Pania",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzMCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00360452-lbddghfgpb-portrait.jpg",
Name:"Let's Gurpreet-A Stand Up",
con:"Bouffage Cafe:Nagpur",
des:"Comedy Solo",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358104-svagrsctqa-portrait.jpg",
Name:"Subha Mangal Saavdhaan",
con:"Bouffage Cafe:Nagpur",
des:"-ft Mandar Bhide",
way:"Nagpur",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00342242-pyrtjqgpca-portrait.jpg",
Name:"So Rude Of Me by Swati",
con:"Chitnavis Center:Nagpur",
des:"Sachdeva",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA1IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00342819-szfnxleumd-portrait.jpg",
Name:"Blue Material-An All Dalit",
con:"Bouffage Cafe:Nagpur",
des:"Lineup Standup Comedy ",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyNSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364752-jkckwqaqxk-portrait.jpg",
Name:"With This Ability-Comedy",
con:"Watch on Zoom",
des:"and Conversation",

  },
  

]
function Therapy() {
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
    }};
  return (
    <div className="bg-slate-200 w-[100%] pl-60">
         <h1 className="text-2xl font-bold pt-10 ml-5">Laugher Therapy</h1>
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

export default Therapy