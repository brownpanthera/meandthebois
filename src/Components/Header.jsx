import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ChessProfile from "./ChessProfile";

export default function Header() {
  return (
    <>
      <div className="header">
        <Link to="/chess">
          <img className="logo" src="chess_trans.png" alt="chess_logo" />
        </Link>
      </div>

      <Routes>
        <Route path="/chess" element={<ChessProfile />} />
      </Routes>
    </>
  );
}
