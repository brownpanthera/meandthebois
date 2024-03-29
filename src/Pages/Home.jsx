import { Link } from "react-router-dom";
import { SiLichess } from "react-icons/si";
import { FcGallery } from "react-icons/fc";
import { GoHome } from "react-icons/go";
import { MdLeaderboard } from "react-icons/md"
import { FcUpload } from "react-icons/fc"

export default function Home() {
  return (
    <div className="AppDrawer"> {/* Update the className prop */}
      <ul className="iconList">
        <li>
          <Link to="/">
            <GoHome color="white" size={18} />
          </Link>
        </li>
        <li>
          <Link to="/chess">
            <SiLichess className="chess-icon" color="white" size={18} />
          </Link>
        </li>
        <li>
          <Link to="/leaderboard">
            <MdLeaderboard style={{color: "white"}} size={18} />
          </Link>
        </li>
        <li>
          <Link to="/upload">
            <FcUpload className="other-icon" size={18} />
          </Link>
        </li>
        <li>
          <Link to="/gallery">
            <FcGallery className="other-icon" size={18} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
