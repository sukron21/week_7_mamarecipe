import React from "react";
import Style from "./style.css";
import { Link } from "react-router-dom";

const ResetPass = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 bgImage">
            <img src={require("../../Assets/mamarecipe.PNG")} alt="img icon" />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <form className="row g-3 m-5">
              <div>
                <label for="inputPassword" className="form-label">
                  Create new Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Create New Password"
                />
                <div>
                  <label for="inputPassword" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="New Password"
                  />
                </div>
                <div className="d-grid gap-2">
                <div></div>
                  <button type="submit" className="btn btnCustom1">
                  <Link to="/CodeEmail">Send E-mail</Link>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResetPass;
