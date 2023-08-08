import React, { useState } from 'react'
// import Movies from './Movies'
// import Eventclick from './Eventclick'

function Navbar() {
  
  return (
    <div className='flex justify-between pb-2 pt-2 bg-[rgb(34,37,57)] '>

        <div className='flex justify-between ml-32 w-[500px] text-white'>

<a href="">Movies</a>
          <a href="">Stream</a>
          <a href="">Events</a>
          <a href="">Plays</a>
          <a href="">Sport</a>
          <a href="">Activites</a>
          <a href="">Buzz</a>          
        </div>
        <div className='flex justify-between mr-10 w-[350px] text-white'>
        <a href="">ListYourShow</a>
          <a href="">Comparates</a>
          <a href="">Offers</a>
          <a href="">GiffCart</a>
        </div>
        {/* <Movies/> */}
        {/* <Eventclick/> */}
    </div>
  )
}

export default Navbar