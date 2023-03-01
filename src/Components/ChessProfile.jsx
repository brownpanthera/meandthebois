import React, { useState, useEffect } from "react";

export default function ChessProfile() {
  // DATA state
  const [playerData, setPlayerData] = useState([]);

  //MODAL state
  const [selectedAvatar, setSelectedAvatar] = useState(null);

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

  function onClickingImage(username) {
    console.log(`avatar ${username}`);
    setSelectedAvatar(username);
  }

  return (
    <>
      <div className="avatar-container">
        {playerData.map(({ username, avatar }) => (
          <div key={username} className="avatar">
            {avatar ? (
              <img
                onClick={() => onClickingImage(username)}
                src={avatar}
                alt={username}
                width={100}
                height={100}
              />
            ) : (
              <img src="" alt={""} />
            )}
          </div>
        ))}
      </div>
      
      {selectedAvatar && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedAvatar}</h2>
            <button onClick={() => setSelectedAvatar(null)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
