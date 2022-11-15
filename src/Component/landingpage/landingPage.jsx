/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Component/footer";
import style from "./style.css";
import Navbar from "../../Component/navbar/navbar";
import axios from "axios";
import { Alert } from "bootstrap";

const LandingPage = () => {
  const [Search, setSearch] = useState("");
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(Search);

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/nama/${Search}`)
      .then((response) => {
        // console.log(response.data.token.data)
        console.log(response.data);
        if (response.data == "") {
          alert("Data Tidak ada");
        } else {
          return navigate(`/AllDetail?search=${Search}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   const [recipe, setRecipe] = useState([]);
  //   useEffect(() => {
    
  //     const getData = async () => {
  //     const data = await axios.get(
  //         `${process.env.REACT_APP_BACKEND_URL}/recipes`
  //       );
  //       return data;
  //     };
  // getData()
  // .then((res)=>{
  //     // console.log(res);
  //     setRecipe(res.data.data.rows);
      
  // }).catch((err)=>{
  //     console.log(err)
  // })
  // console.log(recipe)
  //   }, []);

    // const deleteRow = (id,e) => {
    //   e.preventDefault();
    //   axios
    //     .delete(`${process.env.REACT_APP_BACKEND_URL}/recipes/${id}`)
    //     .then((res) => {
    //       console.log(res);
    //       console.log(res.data);
  
    //       const posts = recipe.filter((item) => item.id !== id);
    //       setRecipe({ data: posts });
    //       return navigate ('/LandingPage')
    //     });
    // };
    // const editData = (data)=>{
    //   console.log(data)
      // const recipeDipilih = recipe.filter((item) => item.id !== id)
      // .map((recipeDipilih))
      // return navigate('/UpdateRecipe')
      
    // }


  return (
    <div>
      <div className="container-fluid">
        <Navbar />
        <section className="hero">
          <div className="content">
            <div className="jumbroton">
              <h1>Discover Recipe & Delicous Food</h1>
              <div className="form-group">
                <div className="search">
                  <div className="icon">
                    <img
                      src={require("../../Assets/search.png")}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <input
                      className="form"
                      type="search"
                      placeholder="Search Restaurant, Food"
                      aria-label="Search"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="decoration">
            <img
              src={require("../../Assets/Rectangle 313 (1).png")}
              className="img-fluid"
              alt=""
            />
          </div>
        </section>

        <div className="container">
          <div className="hal2"></div>
          <div className="hal21">
            <br />
            <h3> Popular For You</h3>
          </div>
        </div>
        <div className="container">
          <div className="hal2coy">
            <div className="gambar">
              <div className="kotak">
                <img
                  src={require("../../Assets/Rectangle 309.png")}
                  alt=""
                  srcset=""
                />
              </div>
              <div className="hal3">
                <img
                  src={require("../../Assets/Rectangle 313 (3).png")}
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <div className="narasi">
              <h3>
                Helthy Bone Broth <br />
                Ramen (Quick & Easy)
              </h3>
              <p>
                Quick + Easy Chicken Bone Broth Ramen-
                <br />
                Helthy chicken ramen in a hurry? That's right!
              </p>
              <a href="lorean sandwich.html" target="_blank">
                <button>Learn More</button>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="hal23"></div>
          <div className="hal24">
            <br />
            <h3> New Recipe</h3>
          </div>
        </div>
        <div className="container">
          <div className="hal5coy">
            <div className="gambar2">
              <div className="kotakwarna"></div>
              <div className="hal5">
                <img
                  src={require("../../Assets/Rectangle 313 (2).png")}
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <div className="narasi1">
              <h3>
                Helthy Bone Broth <br />
                Ramen (Quick & Easy)
              </h3>
              <p>
                Quick + Easy Chicken Bone Broth Ramen-
                <br />
                Helthy chicken ramen in a hurry? That's right!
              </p>
              <a href="lorean sandwich.html" target="_blank">
                <button>Learn More</button>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="hal26"></div>
          <div className="hal27">
            <br />
            <h3>Popular Recipe</h3>
          </div>
        </div>
        <div className="container">
        <div className="gambar6">        
            <div className="lessons">
                {/* <!-- Ketik code Anda di bawah --> */}
                <div className="lesson">
                    <img src={require("../../Assets/Rectangle 314.png")} alt="..." />
                    <p>Chiken<br/>Kare</p>
                  </div>
                <div className="lesson">
                    <img src={require("../../Assets/Rectangle 315.png")} alt="..." />
                    <p>Bomb<br/>Chicken</p>
                </div>
                <div className="lesson">
                    <img src={require("../../Assets/Rectangle 316.png")} alt="..." />
                    <p>Banana<br/>Smoothie Pop</p>
                </div> </div>
                <br/>
            <div className="lessons1">
          <div className="lesson">
            <img src={require("../../Assets/Rectangle 317.png")} alt="..." />  
            <p>Coffe Lava<br/>Cake</p>
            </div>
            <div class="lesson">
                <img src={require("../../Assets/Rectangle 318.png")} alt="..." />
                <p>Sugar<br/>Salmon</p>
              </div>
              <div className="lesson">  
                <img src={require("../../Assets/Rectangle 319.png")} alt="..."/>    
                <p>Indian<br/>Salad</p>
                  </div></div>
                  </div>
            </div>
      </div>
      <Footer />
    </div>
  );
};
export default LandingPage;
