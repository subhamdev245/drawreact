import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Color, IconsArray } from '../util/data';

const Board = () => {
  const canvasRef = useRef(null);
  
 
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

    // Cleanup event listeners on component unmount
    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
    };
  }, [BrushSize,Clr, isDrawing]);
  
  return(
    <canvas ref={canvasRef}>
      
    </canvas>
  )
};

export default Board;
