import React,{ useState, useEffect }  from "react";
import style from "./style2.css"
import { Link, useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import {getList} from '../../redux/action/recipe'

const Detail = () =>{
    // const [image, setImage] = useState("");
    // const [recipe, setRecipe] = useState([]);
    // const [ingredients, setingredients] = useState("");
    const dispatch= useDispatch();
    const  recipedetail = useSelector((state)=>{
        return state.recipedetail
      }
      );
      console.log(recipedetail)
      const {id}=useParams();
    useEffect(() => {
        //panggil method "fetchData"
        // getById(id);
        dispatch(
          getList(id)
        )
      }, []);
      
      // const getById = async () => {
      //   const response = await axios.get(
      //     `${process.env.REACT_APP_BACKEND_URL}/recipes/${id}`
      //   );
      //   //get response data
      //   const data = await response.data;
      //   setingredients(response.data[0].ingredients.split(','))
      //   setImage(response.data[0].image)
      //   //assign data to state
      //   setRecipe(data);
      // }
    
    return(
       <div>
          <div className="container-fluid">
    <nav className="navbar2">
            <ul>
            <Link to="/">Home</Link>
                <Link to="/AddRecipe">Add Recipe</Link>
                <Link to="/Profile">Profile</Link>
            </ul>
    </nav>
    <div className="container">
        <div className=" hal1">
        {     
              
              recipedetail.data.map((item, index)=>(
                  <div key={index}>
                    <h1>{item.nama_recipe}</h1>
                    <img
                            src={`${process.env.REACT_APP_BACKEND_URL}/${item.image}`}
                            style={{ width: "70%", height: "400px" }}
                            alt="gambar1"
                          ></img>
                    <div className="hal25">
                    <h3>Ingridients</h3>
                    {item.ingredients}
                    </div>
                    </div>
                ))
                
            }
        {/* <img src={require("../../Assets/Rectangle 313.png")} alt="" srcset=""/> */}
        </div>
        {/* <div className="hal25">
            <h3>Ingredients</h3> */}
            {/* <span>-2 eggs</span><br/>
            <span>-2 Tbsp Mayonnise</span><br/>
            <span>-3 slice Bread</span><br/>
            <span>-A Little Butter</span><br/>
            <span>-1/3 Carton of Cres</span><br/>
            <span>-2-2 Slices Of Tomato Or A Lettuce Leaf</span><br/>
            <span>And A Slices Of Ham Or Cheese</span><br/>
            <span>- Crisps, to Serve</span> */}
            {/* <span>{ingredients[0]}</span><br/>
            <span>{ingredients[1]}</span><br/>
            <span>{ingredients[2]}</span><br/>
            <span>{ingredients[3]}</span><br/>
            <span>{ingredients[4]}</span><br/>
            <span>{ingredients[5]}</span><br/>
            <span>{ingredients[6]}</span><br/>
            <span>{ingredients[7]}</span> */}
        {/* </div> */}
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
            <a href="lorean sandwich.html">Post</a>
          
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
export default Detail;