import React, { useState, useEffect } from "react";

export default function ChessProfile() {
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    const ali = "https://api.chess.com/pub/player/brownpanthera";
    const ankit = "https://api.chess.com/pub/player/notsamayraiinaaa";
    const avnish = "https://api.chess.com/pub/player/avnish0";
    const dev = "https://api.chess.com/pub/player/angryskuii";

    Promise.all([
      fetch(ali).then((response) => response.json()),
      fetch(ankit).then((response) => response.json()),
      fetch(avnish).then((response) => response.json()),
      fetch(dev).then((response) => response.json()),
    ]).then((data) => {
      setPlayerData(data);
    });
  }, []);

  console.log(playerData);

  return (
    <>
      <div className="avatar-container">
        {playerData.map(({ username, avatar }) => (
          <div key={username} className="avatar">
            {avatar ? (
              <img src={avatar} alt={username} width={100} height={100}/>
            ) : (
              <img src="/c" alt={''} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
