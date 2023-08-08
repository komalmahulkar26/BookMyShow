import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Scrol from "../Fol/Scrol";

const Data1=[
  {
   
  url:"https://img.etimg.com/thumb/msid-100310645,width-600,height-450,imgsize-35726,overlay-economictimes/photo.jpg",
    
  },
  {
    
    url:"https://moviescast.in/wp-content/uploads/2023/05/Satyaprem-Ki-Katha-cast.jpg",
    
  },
  {
    
    url:"https://www.filmibeat.com/img/popcorn/movie_posters/insidious:-the-red-door-20230628174636-21886.jpg",
    
  },
  {
   
    url:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/baipan-bhari-deva-et00355365-1686835658.jpg",
   
  },
  {
   
    url:"https://www.siasat.com/wp-content/uploads/2023/06/1920.jpg",
    
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-OUsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00363708-mnwpjjjkpb-portrait.jpg",
   
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC45LzEwICAxLjVLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00363802-zltdpqgjgb-portrait.jpg",
    
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-NC44LzEwICAyMzEgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00362248-udgulzbebr-portrait.jpg",
   
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-NC45LzEwICA3LjdLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00353537-znerbpawbn-portrait.jpg",
  },
  {
    url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTQ5LjJLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00072466-kwewqvtsdf-portrait.jpg",
    
  },
  
   
  ]

function Events({heading,movie}){
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide:5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3, 
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
      <div className="bg-slate-200 flex pb-10">
        <h1 className='text-2xl font-bold ml-36'>The Best Of Live Events</h1>
    <div>  
    <Carousel    responsive={  responsive } >
    {Data1.map((item,index)=>(
      <div className="flex justify-between  items-center w-[100%]"key={index}>
      <Scrol 
      
      url={item.url}

      /></div>
    ))}
  </Carousel>
</div>
        
      </div>
    );
  }
export default Events
