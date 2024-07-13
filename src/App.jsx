import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import ChessProfile from "./Pages/ChessProfile";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Audio from "./Components/Audio";
import Leaderboard from "./Pages/Leaderboard";
import { ChessDataProvider } from "./ChessDataContext";
import Upload from "./Pages/Upload";

function App() {
  const location = useLocation();
  const isAppPage = location.pathname === "/";

  return (
    <>
      {isAppPage && (
        <>
          <h2 className="heading">
            <span>S</span>p<span>a</span>c<span>e</span>
          </h2>
          <Audio />
        </>
      )}
      <Home />
      <ChessDataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chess" element={<ChessProfile />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </ChessDataProvider>
    </>
  );
}

export default App;
