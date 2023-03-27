import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import App from "../App";
import ChessProfile from "./ChessProfile";
import Main from "./Main";
import Gallery from "./Gallery"

export default function Header() {
  return (
    <>
      <div className="header">
        <Link to="/chess">
          <img className="logo" src="chess_trans.png" alt="chess_logo" />
        </Link>
      </div>

      <Routes>
      <Route path="*" element={<Main />}/>
        <Route path="chess" element={<ChessProfile />}/>
        <Route path="gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

// replicate of App, will fix it infuture