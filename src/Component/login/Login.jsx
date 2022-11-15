import React, { useState } from "react";  
import { Link,useNavigate } from "react-router-dom";
import Style from "./style.css";
import axios from "axios";
import { login } from "../../redux/action/user";



const Login = () => {
  const [form, setForm] = useState({
    email:'',
    password:''
})
const navigate = useNavigate();
const onSubmit = (e)=>{
    e.preventDefault();
    console.log(form)

    // axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`,form)
    login(form)
    .then((response)=>{
        // console.log(response.data.token.data)
        // console.log(response.data)
        if(response.data.status !== 'success'){
          alert (response.data.message)
        }else{
        localStorage.setItem("token", response.data.token.token);
        localStorage.setItem("data",JSON.stringify(response.data.token.data));
        return navigate('/LandingPage')}

    })
    .catch((err)=>{
        console.log(err);
    })
}

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 bgImage">
            <img src={require("../../Assets/mamarecipe.PNG")} alt="img icon" />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <form className="row g-3 m-5" onSubmit={(e) => onSubmit(e)}>
              <div className="logincoy">
                <h3 className="text-center">Welcome</h3>
                <p className="text-center text-muted">
                  Log in into your exiting account
                </p>
                <div></div>
                <label for="inputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="email@gmail.com"
                  onChange={(e)=> setForm({...form,email:e.target.value})}
                />
                <div>
                  <label for="inputPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Password"
                    onChange={(e)=> setForm({...form,password:e.target.value})}
                  />
                </div>
                <div>
                  <div className="form-check1">
                    <input
                      className="form-check-input btnCustom"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" for="gridCheck">
                      <p>I agree of term conditions</p>
                    </label>
                  </div>
                  <div className="btLogin">
                  <div className="d-grid gap-2">
                  <button type="submit"
                    className="btn btnCustom1"
                    >
                    Login
                  </button>
                </div></div>
                <div className="lPass">
                  <Link to="/ForgotPass"><p>Forgot Password ?</p></Link>
                </div>
                <div className="text-center">
                  <p className="text-muted1">
                    Don't have a account? <Link to="/register">Sign Up</Link>
                  </p>
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
export default Login;
