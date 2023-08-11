import { useRef } from 'react';
import useScroll from '.';
export default function UseScrollDemo() {
  const scrollRef = useRef<ElementRef<'div'>>(null);
  const res = useScroll(scrollRef);
  return (
    <div ref={scrollRef}>
      {/* {[...new Array(10).keys()].map((item, index) => (
        <div data-key={index} key={index}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          fugit accusamus vel sit deleniti odit qui, at odio dolor non ad, vitae
          minus possimus nemo. Exercitationem eaque dolorum earum itaque?
        </div>
      ))} */}
      {Array.from(new Array(10)).map((item, index) => (
        <div key={index}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          fugit accusamus vel sit deleniti odit qui, at odio dolor non ad, vitae
          minus possimus nemo. Exercitationem eaque dolorum earum itaque?
        </div>
      ))}
    </div>
  );
}
