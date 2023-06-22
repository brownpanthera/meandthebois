import { createContext, useState } from 'react';

export const ChessDataContext = createContext();

export function ChessDataProvider({ children }) {
  const [playerData, setPlayerData] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [allAvatarsLoaded, setAllAvatarsLoaded] = useState(false);
  const [isLoadingAvatars, setIsLoadingAvatars] = useState(true);

  const updatePlayerData = (updatedPlayerData) => {
    setPlayerData(updatedPlayerData);
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
      }}
    >
      {children}
    </ChessDataContext.Provider>
  );
}
