import { useEffect } from 'react';

export default function ClickedOutside(ref, currentState, updater) {
  useEffect(() => {
    const clickHandler = (event) => {
      if(currentState && ref.current && !ref.current.contains(event.target)) {
        updater();
      }
    };
    document.addEventListener('mousedown', clickHandler);
    return() => {
      //prevents memory leak
      document.removeEventListener('mousedown', clickHandler);
    };
  }, [ref, currentState, updater]); 
}