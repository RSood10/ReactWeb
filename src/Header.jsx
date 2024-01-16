import { NavLink } from "react-router-dom";
import "./App.css";

function Header() {
  return (
    <div className="contain">
      <div className="head">
        <div className="left">
          <ul>
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/about">
              <li>About</li>
            </NavLink>
            <NavLink to="/Doc">
              <li>Doc</li>
            </NavLink>
            <NavLink to="/contact">
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
        <div className="right">
          <input type="text" name="" id="search" />
          <button className="search-btn">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
