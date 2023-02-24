import React, { useRef } from "react";
import bro from "./bro.mp3";

function Audio() {
  const audioRef = useRef(null);

  const handleClick = () => {
    audioRef.current.play();
  };

  return (
    <div>
      <audio ref={audioRef}>
        <source src={bro} type="audio/mp3" />
      </audio>
      <button onClick={handleClick}>Play Audio</button>
    </div>
  );
}

export default Audio;
