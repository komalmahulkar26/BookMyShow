import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Scrol from "../Fol/Scrol"


const Data1=[
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyOCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00337587-vhvjvujhrs-portrait.jpg",
Name:"The Obssesed Tour -",
con:"Nagpur",
des:"Venue  To Be Announced :",
way:"0.00 kms away",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00313750-ylbeujdtjc-portrait.jpg",
Name:"Punit Pania Live- The",
con:"Nagpur",
des:"Venue  To Be Announced :",
way:"0.00 kms away",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyOCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00337587-vhvjvujhrs-portrait.jpg",
Name:"Kunal Rao Live(standup comedy)",
con:"Nagpur",
des:"Bouffage Comedy Club:",
way:"1.40 kms away",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00337527-mwcttfmugz-portrait.jpg",
Name:"Gem Of A Person by",
con:"Nagpur",
des:"Venue  To Be Announced :",
way:"0.00 kms away",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyNSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00350454-prskzplacj-portrait.jpg",
Name:"Gaurav Kapoor Live",
con:"Nagpur",
des:"Venue  To Be Announced :",
way:"0.00 kms away",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00342242-pyrtjqgpca-portrait.jpg",
Name:"Gaurav Kapoor Live",
con:"Nagpur",
des:"Venue  To Be Announced :",
way:"0.00 kms away",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00354491-pvmtmhqznd-portrait.jpg",
Name:"Gaurav Kapoor Live",
con:"Nagpur",
des:"Venue  To Be Announced :",
way:"0.00 kms away",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355125-mqmycvxlpm-portrait.jpg",
Name:"So Rude of Me by Swati Sachdeva",
con:"Nagpur",
des:"Venue  To Be Announced :",
way:"0.00 kms away",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362270-helkfjtntj-portrait.jpg",
Name:"Aakash Mehta - The Dark Tour",
con:"Nagpur",
des:" comedy club",
way:"1.88 kms away",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA0IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00321994-nukmpabtfp-portrait.jpg",
Name:"Memories by Mohd Suhel",
con:"Nagpur",
des:"baffelo comedy club",
way:"1.40 kms away",
  },
  

]


function Near() {
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
       <h1 className="text-2xl font-bold pt-10 ml-5">Events Happening Near You</h1>
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
  </Carousel>
       </div>
      
    </div>
  );
}

export default Near;
