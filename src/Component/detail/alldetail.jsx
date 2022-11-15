import React,{useEffect, useState} from "react";
import style from "./style2.css"
import { Link, useSearchParams,useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/navbar";
import Footer from "../footer";


const AllDetail = () =>{
  const [queryparams]=useSearchParams();
  const search = queryparams.get('search');
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/nama/${search}`)
      .then((response) => {
        console.log(response.data)
        setRecipe(response.data)
        // console.log(response.data[0]);
        // setTitle(response.data[0].nama_recipe)
        // setingredients(response.data[0].ingredients.split(','))
        // SetImage(response.data[0].image)
      })
      .catch((err) => {
        console.log(err);
      });
      
  },[]);
    return(
      <div>
        <Navbar/>
        <div className="row d-flex flex-row " >
        {
          recipe.map((item)=>{
            return(
              <div className="col-md-4 flex-row">
                <img
                  src={`${process.env.REACT_APP_BACKEND_URL}/${item.image}`}
                  style={{ width: "60%", height: "200px", marginLeft:'90px' }}
                  alt="gambar1"
                ></img>
                <h2 style={{textAlign:'center'}}>{item.nama_recipe}</h2>
                <Link to={`/Detail/${item.id}`}><button 
                style={{backgroundColor:'#C0C0C0', borderRadius:'5px', marginLeft:'180px', marginBottom:'40px', border:'none', color:'white'}}>
                Detail</button></Link>
              </div>
            )
          })
        }
        </div>
        <Footer/>
      </div>
    )
}
export default AllDetail;