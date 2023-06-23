import { createContext, useState } from 'react';

export const ChessDataContext = createContext();

export function ChessDataProvider({ children }) {
  const [playerData, setPlayerData] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [allAvatarsLoaded, setAllAvatarsLoaded] = useState(false);
  const [isLoadingAvatars, setIsLoadingAvatars] = useState(true);
  const [isLoadingRatings, setIsLoadingRatings] = useState(false);

  const updatePlayerData = (updatedPlayerData) => {
    setPlayerData(updatedPlayerData);
  };

  const fetchPlayerStats = (username) => {
    setIsLoadingRatings(true); // Set loading status to true

    return fetch(`https://api.chess.com/pub/player/${username}/stats`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedPlayer((prevSelectedPlayer) => ({
          ...prevSelectedPlayer,
          rapid_rating: data.chess_rapid.last.rating,
          blitz_rating: data.chess_blitz.last.rating,
          bullet_rating: data.chess_bullet.last.rating,
        }));
        setIsOpen(true);
      })
      .catch((error) => {
        console.error("Error fetching player ratings:", error);
      })
      .finally(() => {
        setIsLoadingRatings(false); // Set loading status to false
      });
  };

  return (
    <ChessDataContext.Provider
      value={{
        playerData,
        updatePlayerData,
        setPlayerData,
        selectedPlayer,
        setSelectedPlayer,
        isOpen,
        setIsOpen,
        allAvatarsLoaded,
        setAllAvatarsLoaded,
        isLoadingAvatars,
        setIsLoadingAvatars,
        isLoadingRatings,
        setIsLoadingRatings,
        fetchPlayerStats,
      }}
    >
      {children}
    </ChessDataContext.Provider>
  );
}
