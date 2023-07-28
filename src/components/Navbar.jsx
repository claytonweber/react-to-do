import { useState, useEffect, useRef } from 'react';
import { ClickedOutside } from './ClickedOutside';

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  // useEffect(() => {
  //   const clickHandler = (event) => {
  //     if(dropdown && ref.current && !ref.current.contains(event.target)) {
  //       setDropdown(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', clickHandler);

  //   return () => {
  //     //prevents memory leaks
  //     document.removeEventListener('mousedown', clickHandler);
  //   }
  // }, [dropdown]);

  //(ref, currentState, updater)
  ClickedOutside(ref, dropdown, () => setDropdown(false));

  //idk how the button and onClick() logic works
  return (
    <nav id="nav">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li ref={ref}>
          <button onClick={() => setDropdown((prev) => !prev)}>
            Services <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
             <li>Design</li>
             <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  )
}