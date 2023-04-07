import React from "react";
import { Link } from "react-router-dom";
import {SiLichess} from "react-icons/si"
import {FcGallery} from "react-icons/fc"

export default function Home() {

  return (
 <>
 <h2 className="heading"><span>S</span>p<span>a</span>c<span>e</span></h2>
  <div className="AppDrawer">
  <ul className="iconList">
    <li>
      <Link to="/chess">
        <SiLichess className="chess-icon" color="white" size={18}/>
      </Link>
    </li>
    <li>
      <Link to="/gallery">
        <FcGallery className="other-icon" size={18}/>
      </Link>
    </li>
  </ul>
</div>
</>

  );
}
