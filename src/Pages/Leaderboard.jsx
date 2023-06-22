import { useContext } from 'react';
import { ChessDataContext } from '../ChessDataContext';

export default function Leaderboard() {
  const { playerData } = useContext(ChessDataContext);
  console.log(playerData);
  return (
    <div>
      <h2>Leaderboard</h2>
      {playerData.map((player) => (
        <div key={player.username}>
          <h3>{player.name}</h3>
          <p>Username: {player.username}</p>
          <p>Rapid Rating: {player.rapid_rating}</p>
          <p>Blitz Rating: {player.blitz_rating}</p>
          <p>Bullet Rating: {player.bullet_rating}</p>
        </div>
      ))}
    </div>
  );
}
