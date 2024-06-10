import React, { useState } from 'react'
import { FaPen ,FaRedo,FaUndo,FaEraser,FaDownload} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { IconsArray } from '../util/data'
import store from '../util/Store';
import { updateTopui } from '../util/Toolkit';

const TopUI = () => {
 const active = useSelector(store => store.toolkit.topui)
 const dispatch = useDispatch()
  return (
    <div className=' flex  mx-auto  justify-between w-auto  p-5 absolute top-5 transform  left-1/2 -translate-x-2/4 gap-3 shadow-xl rounded-2xl '>
        {IconsArray.map((item, index) => {
        const IconComponent = item.Icon;
        return (
            <div key={index} className={
                active===index?"flex flex-col items-center justify-center  gap-3 p-2 cursor-pointer bg-slate-400 rounded-xl":"flex flex-col items-center justify-center  gap-3 p-2 cursor-pointer  hover:bg-slate-200 rounded-xl"
              } onClick={()=>{
                dispatch(updateTopui(index))
              }}>
                <IconComponent />
                <p>{item.Label}</p>
              </div>
        );
      })}
    </div>
  )
}

export default TopUI