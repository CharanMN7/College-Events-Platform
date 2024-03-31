import "./NavBar.scss";
import logoRect from "../../assets/logo_rectangle.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <img src={logoRect} alt="" />
      <nav>
        <ul className="open-nav">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link>
              <span className="material-symbols-rounded">account_circle</span>
            </Link>
          </li>
        </ul>
        <span className="material-symbols-rounded nav-menu">menu</span>
        <ul className="popup-nav">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link>Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
