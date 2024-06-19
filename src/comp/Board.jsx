import React, { useRef, useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Color, IconsArray } from '../util/data';
import { updateTopui } from '../util/Toolkit';

const Board = () => {
  const canvasRef = useRef(null);
  const dispatch = useDispatch()
 
  const Clr = useSelector(store => store.toolkit.sideui)
  const BrushSize = useSelector(store => store.toolkit.strokesize)
  const Icon = useSelector(store => store.toolkit.topui)
  const color = Color[Clr].Label
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(()=>{
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;  
    canvas.height = window.innerHeight;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    
  },[])
  useEffect(() => {
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const getMousePosition = (e) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX ,
        y: e.clientY 
      };
    };

    const startDrawing = (e) => {
      setIsDrawing(true);
      draw(e);
    };

    const stopDrawing = () => {
      setIsDrawing(false);
      ctx.beginPath();
   };
   if (IconsArray[Icon].Label === "Download") {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/jpg');
    link.download = 'canvas.jpg';
    link.click();
  dispatch(updateTopui(0))
  }
    const draw = (e) => {
      if (!isDrawing) return;
      const pos = e.type.includes('mouse') ? getMousePosition(e) : getTouchPosition(e);
      ctx.lineWidth = BrushSize;
      ctx.lineCap = 'round'; // Make the line end look rounded
      if (IconsArray[Icon].Label === "Eraser") {
        ctx.strokeStyle = "white";
      } else {
        ctx.strokeStyle = color;
      }

      ctx.lineTo(e.clientX , e.clientY );
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX , e.clientY );
    };

    // Add event listeners
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing); // Stop drawing if the mouse leaves the canvas

    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);
    canvas.addEventListener('touchcancel', stopDrawing);
    // Cleanup event listeners on component unmount
    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);

      canvas.removeEventListener('touchstart', startDrawing);
      canvas.removeEventListener('touchmove', draw);
      canvas.removeEventListener('touchend', stopDrawing);
      canvas.removeEventListener('touchcancel', stopDrawing);
    };
  }, [BrushSize,Clr, isDrawing,Icon]);
  
  return(
    <canvas ref={canvasRef}>
      
    </canvas>
  )
};

export default Board;
