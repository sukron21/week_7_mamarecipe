import React from "react";
import Style from "./style.css";
import { Link } from "react-router-dom";

const CodeEmail = () => {
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
                <label for="inputcode" className="form-label">
                  Code 6 Digit
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail"
                  placeholder="code"
                />
                <div>
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btnCustom1">
                  <Link to="/">Reset password</Link>
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
export default CodeEmail;
