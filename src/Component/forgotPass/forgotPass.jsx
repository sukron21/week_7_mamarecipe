import React from "react";
import Style from "./style.css";
import { Link } from "react-router-dom";

const ForgotPass = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 bgImage">
            <img src={require("../../Assets/mamarecipe.PNG")} alt="img icon" />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <form className="row g-3 m-5">
              <div className="logincoy">
                <h3 className="text-center">
                  <strong>Forgot Password?</strong>{" "}
                </h3>
                <p className="text-center text-muted">
                  We just need your registered e-mail address <br /> to send
                  your password resend
                </p>
                <div>
                  <label for="inputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="email@gmail.com"
                  />
                  <div></div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btnCustom1">
                    <Link to="/CodeEmail">Send E-mail</Link>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPass;
