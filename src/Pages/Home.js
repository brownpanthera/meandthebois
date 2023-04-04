import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="AppDrawer">
    <div className="chessDrawer">
        <Link to="/chess"><img src="chess_trans.png" alt="chessIcon" width={50}/></Link>
    </div>
</div>
  )
}
