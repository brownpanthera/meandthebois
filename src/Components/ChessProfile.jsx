import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function ChessProfile() {
  // DATA state
  const [playerData, setPlayerData] = useState([]);

  //MODAL state
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    const ali = "https://api.chess.com/pub/player/brownpanthera";
    const ankit = "https://api.chess.com/pub/player/notsamayraiinaaa";
    const avnish = "https://api.chess.com/pub/player/avnish0";
    const dev = "https://api.chess.com/pub/player/angryskuii";
    const deepanshu ="https://api.chess.com/pub/player/jaat54";

    Promise.all([
      fetch(ali).then((response) => response.json()),
      fetch(ankit).then((response) => response.json()),
      fetch(avnish).then((response) => response.json()),
      fetch(dev).then((response) => response.json()),
      fetch(deepanshu).then((response) => response.json()),
    ]).then((data) => {
      setPlayerData(data);
    });
  }, []);

  function onClickingImage({ name, username, last_online, league }) {
    console.log(`avatar ${username}`);
    console.log(online(last_online));
    console.log(`bhai ki league ${league}`);
    setSelectedPlayer({ name, username, last_online, league });
  }

  // Function for Last Online [INDIAN STANDARD TIME]
  function online(last_online) {
    const date = new Date(last_online * 1000);
    const actual_date = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return actual_date;
  }

  return (
    <>
      {/* CIRCULAR AVATARS */}
      <div className="avatar-container">
        {playerData.map(({ name, username, avatar, last_online, league }) => (
          <div key={username} className="avatar">
            {avatar ? (
              <img
                onClick={() =>
                  onClickingImage({ name, username, last_online, league })
                }
                src={avatar}
                alt={username}
                width={100}
                height={100}
              />
            ) : (
              
              <img
              onClick={() =>
                  onClickingImage({ name, username, last_online, league })
                }
               src="https://via.placeholder.com/100x100.png?text=No+Avatar" alt={username} />
            )}
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedPlayer && (
        <div className="modal">
          <h2 className="modal_playerName">{selectedPlayer.username}</h2>
          {
            selectedPlayer.name ? (
              <p>{selectedPlayer.name}</p>
            ) : (
              <p>bhai name update kar chess[dot]com pe jaake</p>
            )
          }
          <p>League: {selectedPlayer.league}</p>
          <p>Last Online: {online(selectedPlayer.last_online)}</p>
          <button
            className="modal_close_button"
            onClick={() => setSelectedPlayer(null)}
          >
            {<IoCloseSharp size={20} />}
          </button>
        </div>
      )}
    </>
  );
}
