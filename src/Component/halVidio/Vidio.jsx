import React from "react";
import Style from "./style.css";
import style from "./style2.css"
import { Link } from "react-router-dom";

const HalVidio = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="garissamping"></div>
        <nav className="navbar2">
          <ul>
          <Link to="/LandingPage">Home</Link>
            <Link to="/AddRecipe">Add Recipe</Link>
            <Link to="/Profile">Profile</Link>
          </ul>
        </nav>
        <div className="container">
            <div className="video-section">
              <div className="thisVidSection">
                <embed
                  src="https://www.youtube.com/embed/g83Urraf9iQ"
                  className="this-vid"
                ></embed>
                <h2>
                  Beef Steak with Curry Sauce - [Step 4] <br />
                  Cut the condiment and then mix it
                </h2>
                <p>3 month ago</p>
              </div>
              <div className="next-vid-section">
                <h5>Next</h5>
                <div className="next-step">
                  <div className="next-step1-img rounded-2">
                    <p>[step 5]</p>
                  </div>
                  <div className="next-step1-title">
                    <h6>
                      Beef Steak with Curry Sauce - [Step 5]
                      Saute condiments together until turn brown
                    </h6>
                    <p>HanaLohana - 3 month ago</p>
                  </div>
                </div>
                <div className="next-step">
                  <div className="next-step2-img rounded-2">
                    <p>[step 6]</p>
                  </div>
                  <div className="next-step2-title">
                    <h6>
                      Beef Steak with Curry Sauce - [Step 6]

                      Roast beef until it’s medium rare
                    </h6>
                    <p>HanaLohana - 3 month ago</p>
                  </div>
                </div>
                <div className="next-step">
                  <div className="next-step2-img rounded-2">
                    <p>[step 6]</p>
                  </div>
                  <div className="next-step2-title">
                    <h6>
                      Beef Steak with Curry Sauce - [Step 7]
                      <br />
                      Roast beef until it’s medium rare
                    </h6>
                    <p>HanaLohana - 3 month ago</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HalVidio;
