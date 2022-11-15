import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import Login from "../Component/login/Login";
import Register from "../Component/register/Register"
import ResetPass from "../Component/resetpassword/resetPass";
import ForgotPass from "../Component/forgotPass/forgotPass"
import CodeEmail from "../Component/codeReset/Code";
import Profile from "../Component/Profile/Profile";
import AddRecipe from "../Component/addRecipe/addRecipe";
import DetailRecipe from "../Component/detail/detailRecipe"
import HalVidio from "../Component/halVidio/Vidio";
import LandingPage from "../Component/landingpage/landingPage";
import UpdateRecipe from "../Component/addRecipe/updaterecipe";
import Detail from "../Component/detail/newdetail";
import AllDetail from "../Component/detail/alldetail";
import Error from "../views/halerror";


const PrivateRouteDua = () =>{
  const token = localStorage.getItem('token');
  if(token){
      // console.log('OKE')
      return <Outlet/>;
  }else{
    alert('Login Terlebih Dahulu')
      return <Navigate to='/'/>
  }
}


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
        <Route index element={<Login />} />
          {/* <Route index element={<Login />} />
          <Route index element={<Register />} />
          <Route index element={<ResetPass />} />
          <Route index element={<ForgotPass />} />
          <Route index element={<CodeEmail />} />
          <Route index element={<Profile />} />
          <Route index element={<AddRecipe />} />
          <Route index element={<DetailRecipe />} />
          <Route index element={<HalVidio />} /> */}
          <Route path="/LandingPage" element={<PrivateRouteDua />}>
          <Route index element={<LandingPage />} />
          </Route>

          <Route path="/Register" element={<Register />} />
          <Route path="/ResetPass" element={<ResetPass />} />
          <Route path="/ForgotPass" element={<ForgotPass />} />
          <Route path="/CodeEmail" element={<CodeEmail />} />

          <Route path="/Profile" element={<PrivateRouteDua />}>
          <Route index element={<Profile />} />
          </Route>

          <Route path="/AddRecipe" element={<PrivateRouteDua />}>
          <Route index element={<AddRecipe />} />
          </Route>

          <Route path="/DetailRecipe" element={<PrivateRouteDua />}>
          <Route index element={<DetailRecipe />} />
          </Route>

          <Route path="/HalVidio" element={<PrivateRouteDua />}>
          <Route index element={<HalVidio />} />
          </Route>

          <Route path="/UpdateRecipe/:id" element={<PrivateRouteDua />}>
          <Route index element={<UpdateRecipe />} />
          </Route>

          <Route path="/Detail/:id" element={<PrivateRouteDua />}>
          <Route index element={<Detail />} />
          </Route>

          <Route path="/AllDetail" element={<PrivateRouteDua />}>
          <Route index element={<AllDetail />} />
          </Route>
          <Route path="*" element={<Error/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
