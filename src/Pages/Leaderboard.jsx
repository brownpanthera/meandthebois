import { useState, useEffect } from "react";
import { GiCrown } from "react-icons/gi";

const Leaderboard = () => {
  const [selectedType, setSelectedType] = useState("Rapid");
  const [isLoading, setIsLoading] = useState(true);
  const [leaderboard, setLeaderboard] = useState({
    Rapid: [],
    Blitz: [],
    Bullet: [],
  });
  const [avatars, setAvatars] = useState({
    Rapid: "",
    Blitz: "",
    Bullet: "",
  });
  const players = [
    "brownpanthera",
    "notsamayraiinaaa",
    "angryskuii",
    "avnish0",
    "v00ni_7",
    "jbze",
    "biraj21",
    "archiexzzz"
  ];

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const playerData = await Promise.all(
          players.map(async (player) => {
            const response = await fetch(
              `https://api.chess.com/pub/player/${player}/stats`,
            );
            const data = await response.json();
            return {
              player,
              rapid: data.chess_rapid?.last?.rating || 0,
              blitz: data.chess_blitz?.last?.rating || 0,
              bullet: data.chess_bullet?.last?.rating || 0,
            };
          }),
        );
        const sortedData = {
          Rapid: [...playerData].sort((a, b) => b.rapid - a.rapid),
          Blitz: [...playerData].sort((a, b) => b.blitz - a.blitz),
          Bullet: [...playerData].sort((a, b) => b.bullet - a.bullet),
        };
        console.log(sortedData);
        setLeaderboard(sortedData);
        // Fetch avatars for top players
        const topAvatars = await Promise.all(
          Object.entries(sortedData).map(async ([type, players]) => {
            const topPlayer = players[0].player;
            const response = await fetch(
              `https://api.chess.com/pub/player/${topPlayer}`,
            );
            const data = await response.json();
            return [type, data.avatar];
          }),
        );
        setAvatars(Object.fromEntries(topAvatars));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchPlayerData();
  }, []);

  if (isLoading) {
    return (
      <div className="outerLoader">
        <img className="cat" src="pica.gif" alt="Loading..." />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="leaderboard-card">
        <h1 className="leaderboard-title">Leaderboard</h1>
        {avatars[selectedType] ? (
          <img
            className="top-avatar"
            src={avatars[selectedType]}
            alt={`Top ${selectedType} player`}
          />
        ) : (
          <img
            className="top-avatar"
            src="noavatar.gif"
            alt="Placeholder avatar"
          />
        )}
        <nav className="nav">
          <ul className="nav-list">
            {Object.keys(leaderboard).map((type) => (
              <li key={type} className="nav-item">
                <button
                  onClick={() => setSelectedType(type)}
                  className={`nav-button ${
                    selectedType === type ? "active" : ""
                  }`}
                >
                  {type}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Player</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard[selectedType].map((player, index) => (
              <tr key={player.player}>
                <td>{index + 1}</td>
                <td className="player-cell">
                  <span>{player.player}</span>
                  {index === 0 && <GiCrown className="crown-icon" size={30} />}
                </td>
                <td>{player[selectedType.toLowerCase()]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
