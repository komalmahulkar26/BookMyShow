import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Scrol from "../Fol/Scrol"

const Data1=[
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxOCBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00356910-esutpwrtrh-portrait.jpg",
Name:"The Obssesed Tour -",
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
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00335355-hgydwauecz-portrait.jpg",
Name:"With love, Jaspreet!-A",
con:"Chitnavis Center : Nagpur",
des:"standup solo",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyNSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00350454-prskzplacj-portrait.jpg",
Name:"Gaurav Kapoor Live",
des:"Chitnavis Center : Nagpur",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00313750-ylbeujdtjc-portrait.jpg",
Name:"Punit Pania Live - The",
con:"Bouffage comedy club :",
des:"Never Ending Tour",
way:"Nagpur",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00354491-pvmtmhqznd-portrait.jpg",
Name:"Samay Raina Unfiltered",
con:"Nagpur",
des:"Vasantrao Deshpande Hall:",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMiBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00098092-kxqpghhxlv-portrait.jpg",
Name:"Mourchi Muvshi",
con:"Nagpur",
des:"Vasantrao Deshpande Hall:",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362270-helkfjtntj-portrait.jpg",
Name:"Aakash Mehta-The Dark Tour",

des:"Chinavis Center:Nagpur",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyOCBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358308-qqzvmfqpur-portrait.jpg",
Name:"Sunburn Goa 2023",

des:"Venue To Be Announced:Goa ",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361868-byrzbjauxj-portrait.jpg",
Name:"Sandhy Chaaya",
con:"Nagpur",
des:"Vasantrao Deshpande Hall:",

  },
  

]
function Outdoor() {
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
         <h1 className="text-2xl font-bold pt-10 ml-5">Outdoor Events</h1>
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

export default Outdoor