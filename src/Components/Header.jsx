import React from "react";
import {GoHome} from 'react-icons/go'
import { Routes, Route, Link } from "react-router-dom";
import ChessProfile from "./ChessProfile";
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
        <Route path="/chess" element={<ChessProfile />}/>
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}