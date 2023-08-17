import React, { useMemo, useRef } from 'react';
import useVirtualList from '.';

export default function UseVirtualList() {
  const containerRef = useRef<ElementRef<'div'>>(null);
  const wrapperRef = useRef<ElementRef<'div'>>(null);

  const originalList = useMemo(() => Array.from(Array(99).keys()), []);

  const [list] = useVirtualList(originalList, {
    containerTarget: containerRef,
    wrapperTarget: wrapperRef,
    itemHeight: 60,
    overScan: 10,
  });
  return (
    <>
      <div
        ref={containerRef}
        style={{ height: '300px', overflow: 'auto', border: '1px solid' }}
      >
        <div ref={wrapperRef}>
          {list.map((ele) => (
            <div
              style={{
                height: 52,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #e8e8e8',
                marginBottom: 8,
              }}
              key={ele.index}
            >
              Row: {ele.data}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
