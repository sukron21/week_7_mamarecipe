import Style from "./style2.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {ListProfile} from '../../redux/action/recipe'
import {deleterecipe} from '../../redux/action/recipe'

const Profile = () => {
  // const  recipedetail = useSelector((state)=>{
  //   return state.recipedetail
  // }
  // );
  // console.log(recipedetail)
  const dispatch = useDispatch();
  const  listrecipe = useSelector((state)=>{
    return state.listrecipe
  }
  );

  const data = JSON.parse(localStorage.getItem("data"));
  const [Search, setSearch] = useState("");
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    dispatch( 
      ListProfile())
  },[])
  //   const getData = async () => {
  //     const data = await 
  //     // getList()
  //   //   axios.get(
  //   //     `${process.env.REACT_APP_BACKEND_URL}/recipes`
  //   //   );
  //   //   return data;
  //   // };
  //   getData()
  //     .then((res) => {
  //       // console.log(res);
  //       setRecipe(res.data.data.rows);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   console.log(recipe);
  // }, []);


  const deleteRow = (id,e) => {
    e.preventDefault();
    // axios
    //   .delete(`${process.env.REACT_APP_BACKEND_URL}/recipes/${id}`)
    deleterecipe(id)
      .then((res) => {
        console.log(res);
        console.log(res.data);

        const posts = recipe.filter((item) => item.id !== id);
        setRecipe({ data: posts });
        alert('Data berhasil dihapus')
        return navigate ('/LandingPage')
      });
  };
  
  // const onSubmit = (e, id) => {
  //   e.preventDefault();
  //   console.log(Search);

  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/nama/${nama_recipe}`)
  //     .then((response) => {
  //       // console.log(response.data.token.data)
  //       console.log(response.data);
  //       if (response.data == "") {
  //         alert("Data Tidak ada");
  //       } else {
  //         return navigate(`/DetailRecipe?search=${id}`);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };


  return (
    <div>
      {/* {JSON.stringify(listrecipe)} */}
      <div className="container-fluid">
        <nav className="navbar2">
          <ul>
            <Link to="/LandingPage">Home</Link>
            <Link to="/AddRecipe">Add Recipe</Link>
            <Link to="/Profile">Profile</Link>
          </ul>
        </nav>
        <div className="container">
          <div className="photop">
            <img
              src={require("../../Assets/photopropil.png")}
              alt=""
              srcset=""
            />
            <div className="btncustom">
              <button
                className="btn1"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="img1">
                  <img
                    src={require("../../Assets/edit-3.png")}
                    alt=""
                    srcset=""
                  />
                </div>
                <p>{data.username}</p>
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link className="dropdown-item" href="#">
                  {" "}
                  Change Photo Profile{" "}
                </Link>
                <Link className="dropdown-item" to="/ResetPass">
                  {" "}
                  Change Password{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="halcolapse">
            <p>
              <a
                className="btn btnaja"
                data-toggle="collapse"
                href="#collapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample1"
              >
                My Recipe
              </a>
              <a
                className="btn btnaja"
                data-toggle="collapse"
                href="#collapseExample2"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample2"
              >
                Saved Recipe
              </a>
              <a
                className="btn btnaja"
                data-toggle="collapse"
                href="#collapseExample3"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample3"
              >
                Liked Recipe
              </a>
            </p>
            <div className="collapse" id="collapseExample1">
                    <div className="row d-flex flex-row " style={{marginTop:'-100px'}} >
                      {
                      listrecipe.data.map((item, index) => (
                        <div className="col-md-4" key={index}>
                          <img
                            src={`${process.env.REACT_APP_BACKEND_URL}/${item.image}`}
                            style={{ width: "100%", height: "300px" }}
                            alt="gambar1"
                          ></img>
                          <h2>{item.nama_recipe}</h2>
                          <div className="btnCoyini" style={{marginBottom:'20px'}}>
                          <button onClick={(e) => deleteRow(item.id, e)} style={{border:'none',borderRadius:'5px',backgroundColor:'#FF0000', color:'white'}}>
                            Delete
                          </button>
                          <Link to={`/UpdateRecipe/${item.id}`}><button style={{marginLeft:'10px',border:'none',borderRadius:'5px',backgroundColor:'#32CD32'}}>Update</button></Link>
                          <Link to={`/Detail/${item.id}`}><button style={{marginLeft:'10px',border:'none',borderRadius:'5px',backgroundColor:'#C0C0C0'}}>Detail</button></Link>
                        </div>
                        </div>  
                      ))
                      }
                    </div>
                </div>
            <div className="collapse" id="collapseExample2">
              <div className="lessons1">
                <div className="lesson1">
                  <div className="lesson-icon">
                    <img src={require("../../Assets/Rectangle 327(1).png")} />
                    <p>
                      Bomb
                      <br />
                      Chicken
                    </p>
                  </div>
                </div>
                <div className="lesson1">
                  <div className="lesson-icon">
                    <img src={require("../../Assets/Rectangle 327(1).png")} />
                    <p>
                      Bananas
                      <br />
                      Pancake
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse" id="collapseExample3">
              <div className="lessons1">
                <div className="lesson1">
                  <div className="lesson-icon">
                    <img src={require("../../Assets/Rectangle 327(1).png")} />
                    <p>
                      Bomb
                      <br />
                      Chicken
                    </p>
                  </div>
                </div>
                <div className="lesson1">
                  <div className="lesson-icon">
                    <img src={require("../../Assets/Rectangle 327(1).png")} />
                    <p>
                      Bananas
                      <br />
                      Pancake
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    </div>
  );
};
export default Profile;
