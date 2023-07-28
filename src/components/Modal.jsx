import { useState, useRef } from 'react';
import { ClickedOutside } from './ClickedOutside';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  ClickedOutside(ref, isOpen, () => setIsOpen(false));

  return (
    <div className="modal">
      <button onClick={() => setIsOpen(true)}>Modal</button>
      
    </div>
  )
}