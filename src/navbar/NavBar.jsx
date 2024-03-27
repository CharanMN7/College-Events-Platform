import raghuLogo from "./raghuLogo.jpg";
import "./NavBar.scss";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // adding event listener
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      {width <= 430 && mobileView && (
        <div className="navbar-mobile">
          <a href="#">About</a>
          <a href="#">Profile</a>
        </div>
      )}
    </header>
  );
};

export default NavBar;
