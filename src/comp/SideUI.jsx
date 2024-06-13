import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Color ,IconsArray} from '../util/data'
import { updateSideui,updateStrokeSize } from '../util/Toolkit'
const SideUI = () => {
 const active = useSelector( store => store.toolkit.sideui)
 const topActive = useSelector( store => store.toolkit.topui)
 const brushsize = useSelector(store => store.toolkit.strokesize)
 const [stroke,setStroke] = useState(brushsize)

 const dispatch = useDispatch()
  return (
    <div className='absolute sm:left-0 sm:top-1/2 sm:transform sm:-translate-y-1/2 sm:translate-x-0 
    left-1/2 bottom-0 transform -translate-x-1/2 translate-y-0 ' >
    {IconsArray[topActive].Label !== "Eraser" && 
    <div className=' flex  mx-auto  justify-between w-auto  p-5  gap-3  rounded-2xl left-4 '>
    {
        Color.map((e,index)=>{
           return (
            <div className={active===index ? `flex flex-col items-center justify-center text-white  p-2 cursor-pointer  rounded-xl ${e.color}`  :"flex flex-col items-center justify-center   p-2 cursor-pointer  rounded-xl hover:bg-gray-400"} key={index} 
            onClick={()=>{
                dispatch(updateSideui(index))
            }}
            >
                <div className={`w-5 h-5 ${e.color}`}></div>
                <p>{e.Label}</p>
           </div>
           
           )
            
        })
    }
    
</div>
    }
    <div className=' flex flex-col  justify-between items-center gap-3'>
        <input type="range" name="" id="" value={stroke} onChange={(e)=>{
            setStroke(e.target.value)
            dispatch(updateStrokeSize(stroke))
        }}/>
        <label htmlFor="range" >Stroke Opacity</label>
        <p>{stroke}</p>
    </div>
    </div>
  )
}

export default SideUI