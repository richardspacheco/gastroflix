import { useState } from 'react';

function useModal() {
  const [display, setDisplay] = useState(false);

  function toggle() {
    setDisplay(!display);
  }

  return [
    display,
    toggle,
  ];
}

export default useModal;
