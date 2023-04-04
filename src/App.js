import { Route, Routes } from "react-router-dom";
import "./App.css"
import Audio from "./Components/Audio";
import ChessProfile from "./Components/ChessProfile"
import Home from "./Pages/Home";

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chess" element={<ChessProfile />} />
     </Routes>
     <Audio />
    </>
  );
}

export default App;