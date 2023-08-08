import React from "react";

function Home() {
  return (
    <div className="bg-[rgb(51,53,69)]">
      {" "}
      <div className="bg-slate-200">
        {" "}
        <p className="pl-60 bg-white">Home</p>
      </div>
      <div className="flex ml-36 pt-5 pb-5">
        <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" />
        <h1 className="text-white ml-2 font-bold">List Your Show</h1>
        <p className="text-white ml-5 font-bold">
          Got a show,event,activity or a great experience?partner with us & get
          listed on BookMyShow
        </p>
        <button className="bg-red-700 text-white font-bold ml-40  rounded-sm w-36 h-10">
          contact today!
        </button>
      </div>
      <div className="w-[1200px] text-slate-400 ml-36">
        <h1 className="">MOVIES NOW SHOWING IN NAGPUR</h1>
        <p className=" pb-5 pt-5">
          {" "}
          Satyaprem Ki Katha | Baiapan Bhari Deva | Mission Impossible: Dead
          Reckoning-Part One |Oppenheimer |Ajmer 92 |Minus 31: The Nagpur Files
          |Barbie |Aflatoon | Tuzyt Mee | Trailers Screening Show
        </p>
        <h1 className=""> UPCOMING MOVIES IN NAGPUR</h1>
        <p className=" pb-5 pt-5">
          Abhyuham | Akasham Kadann | Hotel Huduguru Bekagiddare | Nimmellara
          Aashirvada | Suronogo | Bhagavan Dasante Ramarajyam | Detective
          Karthik |Echo |Hatya(Telugu)| Aval Appadithan 2| Snake Cave| Natho
          Nenu| Janha Ratira Sathi |Annapurna Photo Studio| Valatty
        </p>
        <h1 className="">MOVIES BY GENRE</h1>
        <p className=" pb-5 pt-5">
          Drama Movies | Romantic Movie | Thriller Movies | Comedy Movies |
          Historical Movies | Hooror Movies | Advanture Movies | Action Movies |
          Crime Movies | Devotional Movies | Political Movies | Supernatural
          Movies | Sports Movies | Suspense Movies | Animation Movies | Anime
          Movies | Biography Movies
        </p>
        <h1 className="">MOVIES BY LANGUAGE</h1>
        <p className=" pb-5 pt-5">
          Movies in Hindi | Movies in English | Movies in Marathi | Movies in
          Khasi | Movies in English 7D | Movies in Nepali | Movies in French |
          Movies in Bhojpuri | Movies in Tulu | Movies in Urdu | Movies in
          Sindhi | Movies in Japanese | Movies in Kannada
        </p>
        <h1 className="">PLAY BY GENRE IN NAGAPUR</h1>
        <p className=" pb-5 pt-5">
          {" "}
          Drama Plays | Action Plays | Adaptation Plays | Mythological Plays |
          Online Plays | Noir Plays | Political Plays | Classical Plays | Period
          Plays | War Plays | Broadway Plays | Romatic Plays | Musical Plays
        </p>
        <h1 className="">MOVIES REVIEWS AND TRENDING ARTICLES</h1>
        <p className=" pb-5 pt-5">
          Trending Articles | Latest News on Movies ,Events ,Plays and Sports |
          Movie Celebrities{" "}
        </p>
        <h1 className="">MOVIES UPDATES AND CELEBRITIES</h1>
        <p className=" pb-5 pt-5">
          Upcoming Movies | Movies Now Showing | Movie Celebrities{" "}
        </p>
        <h1 className="">EVENTS IN NAGPUR</h1>
        <p className=" pb-5 pt-5">
          {" "}
          Workshops Comedy Shows | Music Shows | Kids | Meetups | Beer Festival
          | Conference | Celebrities Wishes | Award Shows
        </p>
        <h1 className="">CINEMAS IN TOP CITIES</h1>
        <p className=" pb-5 pt-5">
          {" "}
          Cinemas in Mumbai | Cinemas in Chennai | Cinemas in Delhi-NCR |
          Cinemas in Hyderabad | Cinemas in Pune | Cinemas in Ahmadabad
        </p>
        <h1 className="">HELP</h1>
        <p className=" pb-5 pt-5">
          {" "}
          About Us | Contact us | Current Opening | Press Releses | Press
          Covered | FAQs | Terms and Conditions | privacy Policy
        </p>

        {/* <hr>book my show</hr> */}
      </div>
      <div className=" w-44 mt-5 flex justify-between ml-[600px]">
        
      <i className="fa-brands fa-facebook  text-3xl text-center hover:bg-white"></i>
     
      <i className="fa-brands fa-twitter text-3xl text-center hover:bg-white "></i>
      <i className="fa-brands fa-instagram text-3xl text-center hover:bg-white"></i>
      <i className="fa-brands fa-youtube text-3xl text-center hover:bg-white"></i>
       
       
      <i className="fa-brands fa-linkedin text-3xl text-center hover:bg-white"></i>
      </div>
      <div className="pb-5 text-slate-400 mt-5">
      <p className="ml-[450px]" >Copyright 2023 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
    
      <p className="ml-3">The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no</p>
      <p className="ml-[350px]"> endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>
      </div>
    </div>
  
  );
}

export default Home;
