import React, { useEffect, useRef } from "react";
import { notes } from "./helpers";
import Octave from "./Octave";

function App() {
  const keyboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    keyboardRef.current && keyboardRef.current.focus();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const audio = new Audio(`sounds/piano_${e.currentTarget.value}.mp3`);
    audio.play();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const key = notes.find((item) => item.key === event.key.toUpperCase());
    const audio = new Audio(`sounds/piano_${key?.note}.mp3`);
    audio.play();
  };

  return (
    <div tabIndex={0} ref={keyboardRef} onKeyDown={handleKeyDown}>
      <Octave notes={notes} clickHandler={handleClick} />
    </div>
  );
}

export default App;
