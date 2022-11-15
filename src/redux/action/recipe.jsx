import axios from 'axios';

export const addrecipe = (form)=>{
    return new Promise((resolve, reject) => {
        axios
      .post("http://localhost:3001/recipes/tambah", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
            resolve(response);
            // alert("Register Succes");
            // return navigate('/');
        })
        .catch((err) => {
            reject(err);
        })
            })
        }

export const updaterecipe = (form,id)=>{
  return new Promise((resolve, reject) => {
    axios
    .put(`${process.env.REACT_APP_BACKEND_URL}/recipes/${id}`, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      resolve(response);
      // alert("Register Succes");
      // return navigate('/');
  })
  .catch((err) => {
      reject(err);
  })
  })
}
export const getList = (id)=>{
  return {
      type:'GET_LIST_RECIPE',
      payload: axios ({
          url:`${process.env.REACT_APP_BACKEND_URL}/recipes/${id}`,
          method:'GET'
      })
  }
}

export const ListProfile = ()=>{
  return {
      type:'GET_LIST_PROFILE',
      payload: axios ({
          url:`${process.env.REACT_APP_BACKEND_URL}/recipes`,
          method:'GET'
      })
  }
}

export const deleterecipe = (id)=>{
  return new Promise((resolve, reject) => {
    axios
    .delete(`${process.env.REACT_APP_BACKEND_URL}/recipes/${id}`)
    .then((response) => {
      resolve(response);
      // alert("Register Succes");
      // return navigate('/');
  })
  .catch((err) => {
      reject(err);
  })
  })
}