import React, { useState, useRef,useEffect } from "react";
import style from "./style2.css";
import { Link, useNavigate,useSearchParams } from "react-router-dom";
import axios from "axios";
import {addrecipe} from '../../redux/action/recipe'

const AddRecipe = () => {
  const [queryparams]=useSearchParams();
  const navigate = useNavigate();
  const hiddenFileInput = useRef(null);
  // const [title, setTitle] = useState("");
  // const [ingredients, setingredients] = useState("");
  const [image, setImage] = useState("");
  // const [recipe, setRecipe] = useState([]);
  // const tambahrecipe = queryparams.get('id');
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    document.getElementById("customBtn").innerHTML = fileUploaded.name;
    setImage(fileUploaded);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    formData.append("image", image);
    console.log(Object.fromEntries(formData));
    handlePost(Object.fromEntries(formData));
  };
  // let formPost = useRef();
  const handlePost = (form) => {
    // axios
    //   .post("http://localhost:3001/recipes/tambah", form, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    addrecipe(form)
      .then((res) => {
        console.log(res);
        setImage("");
        alert("Recipe added successfully");
        //   form.reset();
        return navigate(`/DetailRecipe?search=${form.nama_recipe}`)
        // return navigate('/DetailRecipe')
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to add recipe");
      });
  };


  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/nama/${tambahrecipe}`)
  //     .then((response) => {
  //       // console.log(response.data.token.data)
  //       console.log(response.data[0]);
  //       setTitle(response.data[0].nama_recipe)
  //       setingredients(response.data[0].ingredients.split(','))
  //       setImage(response.data[0].image)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
      
  // },[]);


  return (
    <>
      <div className="container-fluid">
        <nav className="navbar2">
          <ul>
            <Link to="/LandingPage">Home</Link>
            <Link to="/AddRecipe">Add Recipe</Link>
            <Link to="/Profile">Profile</Link>
          </ul>
        </nav>
        <div className="container">
          <form onSubmit={handleSubmit} className="mx-5">
            <div className="addPhoto">
              <img
                src={require("../../Assets/addphoto.PNG")}
                alt=""
                srcset=""
              />
               <h5 className="text-muted" id="customBtn" onClick={handleClick}>
                    Add image
                  </h5>
                <input
                  className=""
                  type="file"
                  ref={hiddenFileInput}
                  id="formFile"
                  onChange={handleChange}
                  style={{display: "none"}}
                />
            </div>
            <div className="judul">
              <textarea placeholder="Title" name="nama_recipe"></textarea>
              <div className="tambahrecipe">
                <div className="ingredients">
                  <textarea
                    placeholder="Ingredients :"
                    name="ingredients"
                  ></textarea>
                </div>
              </div>
              {/* <div className="judul">
                <textarea placeholder="video "></textarea>
              </div> */}
              <div className="d-grid gap-2">
                <div className="btnpost">
                  <button type="submit" className="btn btn-custom1">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </form>
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
          </div>
        </nav>
      </div>
    </>
  );
};
export default AddRecipe;
