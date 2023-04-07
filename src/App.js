import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css"
import ChessProfile from "./Components/ChessProfile"
import Home from "./Pages/Home";
import Gallery from "./Components/Gallery";
import Audio from "./Components/Audio";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chess" element={<ChessProfile />} />
      <Route path="/gallery" element={<Gallery />} />
     </Routes>
     {isHome && <Audio />}
    </>
  );
}

export default App;
