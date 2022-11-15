import { Button } from "bootstrap";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./style.css";

const Navbar = () => {
  const data = JSON.parse(localStorage.getItem("data"));

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    return navigate("/");
  };

  return (
    <div>
      <nav className="navbar">
        <div className="primaryMenu">
          <ul>
            <li>
              <Link to="/LandingPage">Home</Link>
            </li>
            <li>
              <Link to="/AddRecipe">Add Recipe</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
          </ul>
        </div>
        <div className="secondaryMenu1">
          <ul>
            {/* <button onClick={logout} className="login1">
                    <img src={require("../../Assets/User icon.png")}/>
                        <span>{data.username}</span>
                        Login
                    </button> */}
            <div className="dropdown">
              <button
                className=" login1"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src={require("../../Assets/User icon.png")}/>
                <span>{data.username}</span>
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button onClick={logout}>Logout</button>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
