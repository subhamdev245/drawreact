import React, { useState } from 'react'
import { Color } from '../util/data'
const SideUI = () => {
 const[active,setActive] = useState(0)
  return (
    <div className='absolute  transform  top-1/2 -translate-y-2/4 shadow-xl p-7 left-6'>
    <div className=' flex  mx-auto  justify-between w-auto  p-5  gap-3  rounded-2xl left-4 '>
        {
            Color.map((e,index)=>{
               return (
                <div className="flex flex-col items-center justify-center   p-2 cursor-pointer  rounded-xl " key={index} >
                    <div className={`w-5 h-5 ${e.color}`}></div>
                    <p>{e.Label}</p>
               </div>
               
               )
                
            })
        }
        
    </div>
    <div className=' flex flex-col  justify-center items-center'>
        <input type="range" name="" id="" />
        <label htmlFor="range">Opacity</label>
    </div>
    </div>
  )
}

export default SideUI