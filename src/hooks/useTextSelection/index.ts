import { isBrowser } from 'darwish';
import { useEffect, useState } from 'react';

export default function useTextSelection() {
  const [text, setText] = useState('');

  const handleMouseUp = () => {
    if (isBrowser() && window && window.getSelection) {
      const selection = window.getSelection();
      if (selection && selection.toString()) {
        setText(selection.toString());
      }
    }
  };
  const handleMouseDown = () => {
    setText('');
  };
  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousedown', handleMouseDown);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return {
    text,
  };
}
