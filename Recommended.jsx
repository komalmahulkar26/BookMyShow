import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Caro from "./Caro";



const data=[
{
  url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4yLzEwICA1OC42SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329481-bcufavugyg-portrait.jpg",
  head:"Mission Impossible : Dead",
  des:"Reckoning-part one",
  caption:"Action/Advanture/Thriller",
},
{
  url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny44LzEwICAzMS4xSyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338378-flxyehczgl-portrait.jpg",
  head:"Satyaprem Ki Katha",
  caption:"Drama/Musical/Romantic",
},
{
  url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MzggTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00364676-jbmgfbxpnb-portrait.jpg",
  head:"Insidious : The Red Doller",
   caption:"Horror/Mystrey/Thriller",
},
{
  url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS40LzEwICAyMS40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00355365-lzflppmver-portrait.jpg",
  head:"Baipan Bhari Deva",
  caption:"Drama/Comedy",
},
{
  url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICAxLjhLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00357595-wspgmtrnnr-portrait.jpg",
  head:"1920 :Horrors of the Heart",
  caption:"Horror/Romantic/Thriller",
},
{
  url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-OUsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00363708-mnwpjjjkpb-portrait.jpg",
  head:"Minus31:The Nagpur Files",
  caption:"Mystrey",
},
{
  url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC45LzEwICAxLjVLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00363802-zltdpqgjgb-portrait.jpg",
  head:"Bharathanyans",
  caption:"Drama/Thriller",
},
{
  url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-NC44LzEwICAyMzEgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00362248-udgulzbebr-portrait.jpg",
  head:"Zero Bani Hero",
   caption:"Comedy/Romantic/Drama",
},
{
  url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-NC45LzEwICA3LjdLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00353537-znerbpawbn-portrait.jpg",
  head:"1920 :Horrors of the Heart",
   caption:"Horror/Romantic/Thriller",
},
{
  url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTQ5LjJLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00072466-kwewqvtsdf-portrait.jpg",
  head:"Barbie",
  caption:"Advanture/Comedy/fantency",
},

 
]

function Recommended ({heading,movie}){
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
    <div className="bg-slate-200 w-[100%]  pl-60 flex justify-center flex-col ">
  
      <h1 className="text-2xl pt-5 text-black font-bold ">Recommended Movies</h1>

<div className="w-[80%] ">
  <Carousel    responsive={  responsive } >
    {data.map((item)=>(
      <div className="flex justify-between  items-center w-[100%]">
      <Caro
      url={item.url}
head={item.head}
des={item.des}
      caption={item.caption}
      /></div>
    ))}
  </Carousel>
</div>
</div>
  );
      }

export default Recommended;
