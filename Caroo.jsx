import React from 'react'

function Caro({url,text,cap}) {
  return (
  
      <div className='p-[0.5rem]  '>
        <img className="w-60  h-80 rounded-lg " src={url}/>
        <h1 className="font-semibold text-white">{text}</h1>
       
        <p className=" text-white">{cap}</p>
      </div>
  
  )
}

export default Caro