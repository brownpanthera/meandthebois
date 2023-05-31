// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BsFillLightningFill } from "react-icons/bs";
import { MdOutlineTimer } from "react-icons/md";
import { GiBulletBill } from "react-icons/gi";

export default function ChessProfile() {
  const [playerData, setPlayerData] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingRatings, setIsLoadingRatings] = useState(false);

  useEffect(() => {
    const playerUrls = [
      "https://api.chess.com/pub/player/brownpanthera",
      "https://api.chess.com/pub/player/notsamayraiinaaa",
      "https://api.chess.com/pub/player/avnish0",
      "https://api.chess.com/pub/player/angryskuii",
      "https://api.chess.com/pub/player/jaat54",
      "https://api.chess.com/pub/player/25dinmedouble",
      "https://api.chess.com/pub/player/v00ni_7",
    ];

    const fetchPlayerData = async () => {
      try {
        const playerData = await Promise.allSettled(
          playerUrls.map((url) =>
            fetch(url).then((response) => response.json())
          )
        );
        setPlayerData(playerData.map(({ value }) => value));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    };

    fetchPlayerData();
  }, []);

  function onClickingImage({
    avatar,
    name,
    username,
    last_online,
    league,
    player_id,
  }) {
    setIsLoadingRatings(true);
    fetch(`https://api.chess.com/pub/player/${username}/stats`)
      .then((response) => response.json())
      .then((data) => {
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
        setIsLoadingRatings(false);
      })
      .catch((error) => {
        console.error("Error fetching player ratings:", error);
        setIsLoadingRatings(false);
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
                  src="./noavatar.gif"
                  width={100}
                  alt={username}
                />
              )}
            </div>
          )
        )}
      </div>

      {isLoading ? (
        <div className="outerLoader"><img className="cat" src="loader.gif"/></div>
      ) : (
        selectedPlayer && (
          <div className="modal">
            {selectedPlayer.avatar ? (
              <img
                src={selectedPlayer.avatar}
                alt={selectedPlayer.username}
                width={100}
              />
            ) : (
              <img src="./noavatar.gif" width={100} alt="No Avatar" />
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
            {isLoadingRatings ? (
              <div className="catloader"><img src="/loader.gif"/></div>
            ) : (
              <div className="chess_rating">
                {selectedPlayer.blitz_rating ? (
                  <div className="rating">
                    <p className="rating">Blitz</p>
                    <BsFillLightningFill color="#FEDD00" />
                    <p className="rating">{selectedPlayer.blitz_rating}</p>
                  </div>
                ) : (
                  <p className="no-rating">
                    Blitz Rating: <span>0</span>
                  </p>
                )}

                {selectedPlayer.rapid_rating ? (
                  <div className="rating">
                    <p className="rating">Rapid</p>
                    <MdOutlineTimer color="#6BF216" />
                    <p className="rating">{selectedPlayer.rapid_rating}</p>
                  </div>
                ) : (
                  <p className="no-rating">
                    Rapid Rating: <span>0</span>
                  </p>
                )}

                {selectedPlayer.bullet_rating ? (
                  <div className="rating">
                    <p className="rating">Bullet</p>
                    <GiBulletBill color="#F7F749" />
                    <p className="rating">{selectedPlayer.bullet_rating}</p>
                  </div>
                ) : (
                  <p className="no-rating">
                    Bullet Rating: <span>0</span>
                  </p>
                )}
              </div>
            )}
            <button
              className="modal_close_button"
              onClick={() => {
                setSelectedPlayer(null);
                setIsOpen(false);
              }}
            >
              <IoCloseSharp size={30} />
            </button>
          </div>
        )
      )}
    </>
  );
}
