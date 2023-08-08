import React from 'react'

function Caro({url,head,des,caption}) {
  return (
    
       
      <div className='p-[0.5rem]'>
       
      <img className="w-60 rounded-lg " src={url}/>
        <h1 className="font-semibold">{head}</h1>
        <h1 className="font-semibold">{des}</h1>
        <p className="text-slate-500 ">{caption}</p>
        {/* <p>{price}</p> */}
      </div>
  
  )
}

export default Caro