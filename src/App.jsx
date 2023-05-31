import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css"
import ChessProfile from "./Pages/ChessProfile"
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
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
      <Home />
      {isHome && <h2 className="heading"><span>S</span>p<span>a</span>c<span>e</span></h2>}
      {isHome && <Audio />}
    </>
  );
}


export default App; 