import React, { useState, useRef,useEffect } from "react";
import style from "./style2.css";
import { Link, useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import {updaterecipe} from "../../redux/action/recipe"

const UpdateRecipe = () => {
  const navigate = useNavigate();
  const hiddenFileInput = useRef(null);
  const [image, setImage] = useState("");
  const [recipe, setRecipe] = useState([]);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
//hook useEffect
useEffect(() => {
    //panggil method "fetchData"
    getById();
  }, []);
  const {id}=useParams();

  const getById = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/recipes/${id}`
    );
    //get response data
    const data = await response.data;

    //assign data to state
    setRecipe(data);
  }

  const updateSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    formData.append("image", image);
    handlePost(Object.fromEntries(formData));
  };
const updateGambar = (event) => {
    const fileUploaded = event.target.files[0];
    document.getElementById("customBtn").innerHTML = fileUploaded.name;
    setImage(fileUploaded);
  };
const handlePost = (form) => {
    // axios
    //   .put(`${process.env.REACT_APP_BACKEND_URL}/recipes/${id}`, form, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    updaterecipe(form, id)
      .then((res) => {
        console.log(res);
        setImage("");
        alert("Recipe update successfully");
        return navigate("/LandingPage");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to update recipe");
      });
  };
  
  

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
          <form onSubmit={updateSubmit} className="mx-5">
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
                  id="customBtn"
                  onChange={updateGambar}
                  style={{display: "none"}}
                />
            </div>
            <div className="judul">
            {
                 recipe.map((item)=>(
                    <textarea defaultValue={item.nama_recipe} name="nama_recipe"></textarea>
                ))
            }
            {
                 recipe.map((item)=>(
                    <div className="tambahrecipe">
                <div className="ingredients">
                  <textarea
                    defaultValue={item.ingredients}
                    name="ingredients"
                  ></textarea>
                </div>
              </div>
                ))
            }
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
export default UpdateRecipe;