import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Scrol from "../Fol/Scrol"

const Data1=[
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00312049-ckvvzshyyn-portrait.jpg",
Name:"Maa Kamakhya Devi",
con:"Online",
des:"Prasad",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxNyBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358358-tgjbnbbhfx-portrait.jpg",
Name:"Explore Shimla- Manali",
con:"Airport",
des:"Meeting Point: Outside Delhi",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00312048-tzzydpymyf-portrait.jpg",
Name:"Kashi Prasad Of Baba",
con:"Online",
des:"Vishwanath",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxNyBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358947-ggmlxbtkhk-portrait.jpg",
Name:"Explore shimla",
con:"Airport",
des:"Meeting Point: Outside Delhi",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00363132-hkrlwenzls-portrait.jpg",
Name:"DUGGA DUGGA - VIRTUAL",
con:"Watch On Zoom",
des:"SAPTAMI DURGA PUJA...",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00310275-nxeasmrzgl-portrait.jpg",
Name:"Imagicaa Water Park",
con:"Mumbai",
des:"Imagicaa Water Park(khopli)",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00312053-pxadtxklqz-portrait.jpg",
Name:"Ma Kali Prasad From",
con:"Online",
des:"Kalighat",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00064007-mhtvrvdfkr-portrait.jpg",
Name:"Meher Retreat-Day Picnic",

des:"Meher Retreat:Pune",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355866-cqlfxwauyc-portrait.jpg",
Name:"Samyog - Art Science Gallery",
con:"Watch on Zoom",

  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355870-cpyunbzkkk-portrait.jpg",
Name:"ANOKHI - The Science Illusion Gallery",
con:"Watch on Zoom",

  },

  

]
function Explore() {
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
    <div className="bg-slate-200 pb-10 w-[100%] pl-60">
         <h1 className="text-2xl font-bold pt-10 ml-5">Explore Fun And Activities</h1>
   
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

export default Explore