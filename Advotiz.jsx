import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import Movies from "./Movies";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function Advotiz() {
  var settings = {
    dots: true,
    infinite: true,
  
    speed: 500,
    autoplay:true,
    slidesToShow: 3,
    slidesToScroll: 2,
    cssEase:"linear",
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          
      
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
      
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        
        }
      },
    ]
  };

  return (
    <div className=" bg-slate-400">
      
       
        <Slider {...settings}>
        <img
          className=" h-52 ml-3 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwF3yD06hKQtKIfRDHiIPnGFcnCCw6jDGUNw&usqp=CAU"
        />
        <img
          className=" h-52 ml-3 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNH3jaipoBXc9k6KO0LH9plGuZZw0bWojzSQ&usqp=CAU"
        />
      <img
          className="  h-52 ml-3"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1688206553268_aanchaldesktop.jpg"
        />
        <img
          className=" h-52 ml-3 "
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1688198088033_motogpdesktop.jpg"
        />
         <img
          className="  h-52 ml-3 "
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1688391474768_freeaccessdesktop.jpg"
        />
</Slider>
       
      {/* <Movies/> */}
    </div>
  );
}

export default Advotiz;
