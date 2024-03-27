import raghuLogo from "./raghuLogo.jpg";
import "./NavBar.scss";
import { useState } from "react";

const NavBar = () => {
  const [mobileView, setMobileView] = useState(false);

  return (
    <header>
      <div className="navbar">
        <img src={raghuLogo} alt="Raghu Enginerring College" />
        <div className="navbar-menu">
          <a href="#">About</a>
          <a href="#">
            <span className="material-symbols-rounded">account_circle</span>
          </a>
        </div>
        <button onClick={() => setMobileView(!mobileView)}>
          <span className="material-symbols-rounded">menu</span>
        </button>
      </div>
      {mobileView && (
        <div className="navbar-mobile">
          <a href="#">About</a>
          <a href="#">Profile</a>
        </div>
      )}
    </header>
  );
};

export default NavBar;
