import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BsFillLightningFill } from "react-icons/bs";
import { MdOutlineTimer } from "react-icons/md";
import { GiBulletBill } from "react-icons/gi";

export default function ChessProfile() {
  // DATA state
  const [playerData, setPlayerData] = useState([]);

  //MODAL state player basic detail
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  //MODAL BACKDROP
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const ali = "https://api.chess.com/pub/player/brownpanthera";
    const ankit = "https://api.chess.com/pub/player/notsamayraiinaaa";
    const avnish = "https://api.chess.com/pub/player/avnish0";
    const dev = "https://api.chess.com/pub/player/angryskuii";
    const deepanshu = "https://api.chess.com/pub/player/jaat54";

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

  // REQ on 2 diff param, and getting the data
  function onClickingImage({
    avatar,
    name,
    username,
    last_online,
    league,
    player_id,
  }) {
    fetch(`https://api.chess.com/pub/player/${username}/stats`)
      .then((response) => response.json())
      .then((data) => {
        // added the rating data to the selectedPlayer state
        setSelectedPlayer({
          name,
          username,
          last_online,
          league,
          player_id,
          rapid_rating: data.chess_rapid.last.rating,
          blitz_rating: data.chess_blitz.last.rating,
          bullet_rating: data.chess_bullet.last.rating,
          avatar: avatar,
        });
        setIsOpen(true);
      });
    setSelectedPlayer({
      avatar,
      name,
      username,
      last_online,
      league,
      player_id,
    });
    setIsOpen(true);
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
      <div
        className={`avatar-container ${
          isOpen ? "avatar-container--hidden" : ""
        }`}
      >
        {playerData.map(
          ({ name, username, avatar, last_online, league, player_id }) => (
            <div key={player_id} className="avatar">
              {avatar ? (
                <img
                  onClick={() =>
                    onClickingImage({
                      name,
                      username,
                      last_online,
                      league,
                      player_id,
                      avatar,
                    })
                  }
                  src={avatar}
                  alt={username}
                  width={100}
                  height={100}
                />
              ) : (
                <img
                  onClick={() =>
                    onClickingImage({
                      name,
                      username,
                      last_online,
                      league,
                      player_id,
                      avatar,
                    })
                  }
                  src="https://via.placeholder.com/100x100.png?text=No+Avatar"
                  alt={username}
                />
              )}
            </div>
          )
        )}
      </div>

      {/* MODAL */}
      {selectedPlayer && (
        <div className="modal">
          {selectedPlayer.avatar ? (
            <img
              src={selectedPlayer.avatar}
              alt={selectedPlayer.username}
              width={100}
            />
          ) : (
            <img
              src="https://via.placeholder.com/100x100.png?text=No+Avatar"
              alt="No Avatar"
            />
          )}
          <h2 className="modal_playerName">
            <span>{selectedPlayer.username}</span>
          </h2>
          {selectedPlayer.name ? (
            <p>{selectedPlayer.name}</p>
          ) : (
            <p>
              <span>bhai name update kar chess[dot]com pe jaake</span>
            </p>
          )}
          <p>
            League: <span>{selectedPlayer.league}</span>
          </p>
          <p>
            Last Online: <span>{online(selectedPlayer.last_online)}</span>
          </p>
          <hr></hr>
          <div className="chess_rating">
            {selectedPlayer.blitz_rating ? (
              <div className="rating">
                <p className="rating">Blitz</p>
                {<BsFillLightningFill color="#FEDD00" />}
                <p className="rating">{selectedPlayer.blitz_rating}</p>
              </div>
            ) : (
              <p className="rating">
                Blitz Rating: <span>0</span>
              </p>
            )}

            {selectedPlayer.rapid_rating ? (
              <div className="rating">
                <p className="rating">Rapid</p>
                {<MdOutlineTimer color="#6BF216" />}
                <p className="rating">{selectedPlayer.rapid_rating}</p>
              </div>
            ) : (
              <p className="rating">
                Blitz Rating: <span>0</span>
              </p>
            )}

            {selectedPlayer.bullet_rating ? (
              <div className="rating">
                <p className="rating">Bullet</p>
                {<GiBulletBill color="#F7F749" />}
                <p className="rating">{selectedPlayer.bullet_rating}</p>
              </div>
            ) : (
              <p className="rating">
                Blitz Rating: <span>0</span>
              </p>
            )}

            <button
              className="modal_close_button"
              onClick={() => {
                setSelectedPlayer(null);
                setIsOpen(false);
              }}
            >
              {<IoCloseSharp size={20} />}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
