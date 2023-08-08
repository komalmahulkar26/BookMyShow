import React from 'react'

function Select() {
  return (
    <div data-aos="fade-down" className='z-50'>
        <div className='bg-white w-[850px] h-[400px] z-50 relative right-[800px] top-12 ' >
            <input className='ml-10 w-[700px] h-9 mt-5 p-5 text-black ' type='search' placeholder=' 🔎   search for your city'/>
            <p className='ml-[350px] mt-3 text-black'>Popular Cities</p>
            <div className='flex justify-between  text-black ml-3 mr-2 mt-10'>
               <div> <img src='https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png'/>
                <p>Mumbai</p></div>
              <div>  <img src='https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png'/>
              <p>Delhi-NCR</p></div>
              <div>  <img src='https://in.bmscdn.com/m6/images/common-modules/regions/bang.png'/>
              <p>Bengaluru</p></div>
              <div>   <img src='https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png'/>
              <p>Hyderbad</p></div>
              <div> <img src='https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png'/>
              <p>Ahmedabad</p></div>
              <div>  <img src='https://in.bmscdn.com/m6/images/common-modules/regions/pune.png'/>
              <p>Pune</p></div>
              <div>  <img src='https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png'/>
              <p>Kolkata</p></div>
              <div>  <img src='https://in.bmscdn.com/m6/images/common-modules/regions/koch.png'/>
              <p>Kochi</p></div>
               
            </div>
        </div>
    </div>
  )
}

export default Select