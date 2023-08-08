import React, { useState } from "react";
import Sign from "./Sign";
import Humberger from "./Humberger";
import Select from "./Select";

function Header() {
  const [isOpen, setisOpen] = useState(false);
  const [isClick, setisClick] = useState(false);
  const [isSelect, setisSelet] = useState(false);
  const handleClick = () => {
    setisClick(!isClick);
  };
  const HandleClick = () => {
    setisSelet(!isSelect);
  };

  const handleclick = () => {
    setisOpen(!isOpen);
  };
  return (
    <div>
      <div className="bg-[rgb(51,53,69)]  flex  justify-between h-24">
        <div className="flex">
          <img
            className="w-52"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS52qLauSMGUDkk2vcsVIdZjKWw9kDp70ZJ3GsJOJiaRRK9RjTE"
          />
          <input
            className="w-[450px] h-8 mt-9 ml-10 p-2 rounded-md"
            type="search"
            placeholder="🔎 Search For Movies,Events,Players,Sports and Activities"
          />
        </div>
        <div className="flex mr-32">
          <div
            className="w-20 h-8 mt-9 flex text-white bg-[rgb(51,53,69)]"
            onClick={HandleClick}
          >
          
            <p> Nagpur</p> <i className="fa-solid fa-chevron-down pt-2 "></i>
            {isSelect ? <Select /> : null}
            
         
          </div>
          <button
            onClick={handleclick}
            className="bg-red-500 mt-9 w-20 ml-8 h-10 rounded-lg"
          >
            sign in
          </button>
          {isOpen ? <Sign setisOpen={setisOpen} /> : null}
          <i
            onClick={handleClick}
            className="fa-solid fa-bars mt-10 text-white ml-8"
          ></i>
        </div>
        {isClick ? <Humberger setisClick={setisClick} /> : null}
      </div>
    </div>
  );
}

export default Header;
