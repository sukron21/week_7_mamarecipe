import React, { useState }  from "react";
import Style from "./style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {register} from "../../redux/action/user"
import { useDispatch } from "react-redux";

const Register = () => {
  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  const dispatch= useDispatch();
  const navigate = useNavigate();
  const [form, setForm]=useState({
    username: '',
    email:'',
    phone: '',
    password:'',
    newPass:'',
    level:'1'
})

const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(form);
    if(form.username === "" || form.password === "" || form.phone === ""){
        alert("Data tidak boleh kosong");
    } else {
        const body = {
            username: form.username,
            email:form.email,    
            password: form.password,
            newPass:form.newPass,
            phone: form.phone,
            level: form.level
        }
        if(form.password !==form.newPass){
          alert("Password tidak sama")
        }
          else{
            const handleSucces =()=>{
              alert('Register Succes')
              alert('Silahkan Login')
              return navigate('/');
            }
        // axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, body)
        dispatch(register(body, handleSucces))
        // .then((res) => {
        //     console.log(res.data);
        //     alert("Register Succes");
        //     return navigate('/');
        // })
        // .catch((err) => {
        //     console.log(err);
        // })
        
    }
  }
}



  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 bgImage">
            <img src={require("../../Assets/mamarecipe.PNG")} alt="img icon" />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <form className="row g-3 m-5" onSubmit={(e) => onSubmitHandler(e)}>
              <div className="logincoy">
                <h3 className="text-center">Welcome</h3>
                <p className="text-center text-muted">
                  Create new account to acces all features
                </p>
                <div>
                  <label for="Name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    onChange={handleChange}
                    placeholder="Name"
                    name="username"
                  />
                </div>
                <div></div>
                <div>
                  <label for="inputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    onChange={handleChange}
                    name="email"
                    placeholder="email@gmail.com"
                  />
                </div>
                <div>
                  <label for="inputEmail" className="form-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputphone"
                    onChange={handleChange}
                    name="phone"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>
                <div>
                  <label for="inputPassword" className="form-label">
                    Create New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword1"
                    onChange={handleChange}
                    name="password"
                    placeholder="Create New Password"
                  />
                </div>
                <div>
                  <label for="inputPassword" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    onChange={handleChange}
                    name="newPass"
                    placeholder="New Password"
                  />
                </div>
                <div>
                  <div className="form-check1">
                    <input
                      className="form-check-input btn-custom"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" for="gridCheck">
                      <p>I agree of term conditions</p>
                    </label>
                  </div>
                </div>
                <div className="btLogin">
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btnCustom1">
                  Register
                  </button>
                </div></div>
                <div className="text-center">
                  <p className="text-muted1">
                    Already have a account? <Link to="/Login">Login Here</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
