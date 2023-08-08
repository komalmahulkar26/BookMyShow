import React from 'react'

function Slide({url}) {
  return (
    <div className='ml-36'>
      <div className=' '>
        <img className="w-60  h-80 rounded-lg " src={url}/>
        
      </div>
    </div>
  )
}

export default Slide