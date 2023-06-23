import { useContext, useState, useEffect } from 'react';
import { ChessDataContext } from '../ChessDataContext';

export default function Leaderboard() {
  const { playerData, fetchPlayerStats } = useContext(ChessDataContext);
  console.log(fetchPlayerStats);
  const BS = "01100011 01101111 01101101 01101001 01101110 01100111 00100000 01110011 01101111 01101111 01101110 00101110";
  const [binaryChars, setBinaryChars] = useState([]);

  useEffect(() => {
    const chars = BS.split('');
    let index = 0;
    const timer = setInterval(() => {
      if (index >= chars.length) {
        clearInterval(timer);
      } else {
        setBinaryChars(prevChars => [...prevChars, chars[index]]);
        index++;
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: 'green', animation: 'reveal 1s linear' }}>
        {binaryChars.join('')}
      </h2>
      <style>
        {`
          @keyframes reveal {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
