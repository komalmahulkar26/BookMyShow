import React from 'react'

function Scrol({url,Name,con,des,way}) {
  return (
  
      <div className='p-[0.5rem]  '>
        <img className="w-60  h-80 rounded-lg " src={url}/>
        <h1 className="font-semibold text-black">{Name}</h1> 
      
         <p className=" text-black">{des}</p> 
       <p className=" text-black">{con}</p> 
       <p className=" text-black">{way}</p>
      </div>
  
  )
}

export default Scrol