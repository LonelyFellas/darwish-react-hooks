import React, { useRef } from 'react';

export default function useDemo() {
  // ref
  const divRef = useRef<ElementRef<'div'>>(null);
  const audioRef = useRef<ElementRef<'audio'>>(null);
  const svgRef = useRef<ElementRef<'svg'>>(null);
  const canvasRef = useRef<ElementRef<'canvas'>>(null);
  const imgRef = useRef<ElementRef<'img'>>(null);
  const inputRef = useRef<ElementRef<'input'>>(null);
  const textareaRef = useRef<ElementRef<'textarea'>>(null);
  // click event
  const handleDivClick = (e: ElementClickEvent<'div'>) => {};
  const handleImgClick = (e: ElementClickEvent<'img'>) => {};
  const handleCanvasClick = (e: ElementClickEvent<'canvas'>) => {};
  // change event
  const handleInputChange = (e: ElementChangeEvent<'input'>) => {};
  const handleTextareaChange = (e: ElementChangeEvent<'textarea'>) => {};
  return (
    <div ref={divRef} onClick={handleDivClick}>
      <audio ref={audioRef}></audio>
      <svg ref={svgRef}></svg>
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        width="300"
        height="300"
      ></canvas>
      <img ref={imgRef} onClick={handleImgClick}></img>
      <input ref={inputRef} onChange={handleInputChange} />
      <textarea ref={textareaRef} onChange={handleTextareaChange} />
    </div>
  );
}
