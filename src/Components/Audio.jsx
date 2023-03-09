import React, { useState, useRef } from 'react';
import bro from './bro.mp3'
import { FaPlay, FaPause } from 'react-icons/fa'

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  function handlePlay() {
    audioRef.current.play();
    setIsPlaying(true);
  }

  function handlePause() {
    audioRef.current.pause();
    setIsPlaying(false);
  }

  return (
    <div>
      <audio ref={audioRef} src={bro} autoPlay/>
      {isPlaying ? (
        <button className='audio_button' onClick={handlePause}>{<FaPause />}</button>
      ) : (
        <button className='audio_button' onClick={handlePlay}>{<FaPlay />}</button>
      )}
    </div>
  );
}

export default App;
