import React,{useEffect, useState} from "react";
import style from "./style2.css"
import { Link, useSearchParams,useNavigate } from "react-router-dom";
import axios from "axios";


const DetailRecipe = () =>{
    const navigate = useNavigate();
    const [queryparams]=useSearchParams();
    const search = queryparams.get('search');
    const tambahrecipe = queryparams.get('nama_recipe');
    const idnih = queryparams.get('id');
    const [title, setTitle] = useState("");
    const [ingredients, setingredients] = useState("");
    const [image, SetImage] = useState("")
    const [recipe, setRecipe] = useState([]);
    const data = JSON.parse(localStorage.getItem("data"));
    useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/nama/${search}`)
      .then((response) => {
        // console.log(response.data.token.data)
        console.log(response.data[0]);
        setTitle(response.data[0].nama_recipe)
        setingredients(response.data[0].ingredients.split(','))
        SetImage(response.data[0].image)
      })
      .catch((err) => {
        console.log(err);
      });
      
  },[]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/nama/${tambahrecipe}`)
      .then((response) => {
        // console.log(response.data.token.data)
        console.log(response.data[0]);
        setTitle(response.data[0].nama_recipe)
        setingredients(response.data[0].ingredients.split(','))
        SetImage(response.data[0].image)
      })
      .catch((err) => {
        console.log(err);
      });
      
  },[]);
  // const deleteRow = (id) => {
  //   axios
  //     .delete(`${process.env.REACT_APP_BACKEND_URL}/recipes/${idnih}`)
  //     // .delete(`${process.env.REACT_APP_BACKEND_URL}/${image}`)
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //       const posts = recipe.filter((item) => item.id !== id);
  //       setRecipe({ data: posts });
  //       // return navigate('/LandingPage')
  //     });
  // };

    return(
       <div>
          <div className="container-fluid">
    <nav className="navbar2">
            <ul>
            <Link to="/LandingPage">Home</Link>
                <Link to="/AddRecipe">Add Recipe</Link>
                <Link to="/Profile">Profile</Link>
            </ul>
    </nav>
    <div className="container">
        <div className=" hal1">
        <h1>{title}</h1>
                <img src={`${process.env.REACT_APP_BACKEND_URL}/${image}`} style={{width:'40%', height:'500px'}} alt="gambar1"></img>
        </div>
        <div className="hal25">
            <h3>Ingredients</h3>
            <span>{ingredients[0]}</span><br/>
            <span>{ingredients[1]}</span><br/>
            <span>{ingredients[2]}</span><br/>
            <span>{ingredients[3]}</span><br/>
            <span>{ingredients[4]}</span><br/>
            <span>{ingredients[5]}</span><br/>
            <span>{ingredients[6]}</span><br/>
            <span>{ingredients[7]}</span>
        </div>
    </div>
    <div className="container">
        <div className="hal35">
        <h3>Video Step</h3>
        <div class="d-grid gap-2">
            <button type="submit" className="btn btnCustom2">
            <Link to="/HalVidio"><img src={require("../../Assets/Vector (1).png")} alt="" srcset=""/></Link>
            </button><br/><br/>
            <button type="submit" className="btn btnCustom2">
            <Link to="/HalVidio"><img src={require("../../Assets/Vector (1).png")} alt="" srcset=""/></Link>
              </button><br/><br/>
              <button type="submit" className="btn btnCustom2">
              <Link to="/HalVidio"><img src={require("../../Assets/Vector (1).png")} alt="" srcset=""/></Link>
              </button><br/><br/>
              <button type="submit" className="btn btnCustom2">
              <Link to="/HalVidio"><img src={require("../../Assets/Vector (1).png")} alt="" srcset=""/></Link>
              </button><br/><br/>
        </div>
    </div>
    <div className="ingredients1">
      <textarea  placeholder="Commnet :"></textarea>
  </div>
        <div className="d-grid gap-2">
          <div className="btnpost">
          <button type="submit" class="btn btnCustom2">
            <Link to="/DetailRecipe">Post</Link>
          
          </button></div>
        </div>
    </div>
    <div className="container">
      <div className="komen">
        <div className="hal455">
        <h3>Comment</h3>
        <img src={require("../../Assets/Ellipse 128.png")} class="" alt="" width="304" height="236"/>
        <span>Ayudia</span>
        <p>Nice Recipe, Simple and Delicious, Thankyou</p>
    </div></div>
</div>
</div>
<div className="foot">
        <div className="kata21">
          <h1>Eat, Cook, Repeat</h1>
          <p>Share Your Best Recipe By Uploading Here !</p>
        </div>
        <nav className="navbar31">
          <div className="navbarFooter">
            <ul>
              <a href="">Product</a>
              <a href="">Company</a>
              <a href="">Learn More</a>
              <a href="">Get in Touch</a>
            </ul>
          </div>
        <div className="logo1">
          <p>@PijarCamp</p>
        </div></nav>
      </div>
</div>

    )
}
export default DetailRecipe;