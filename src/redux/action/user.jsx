import axios from 'axios';


// export const register=(body)=>{
//     return new Promise((resolve, reject) => {
//         axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, body)
// .then((response) => {
//     resolve(response);
//     // alert("Register Succes");
//     // return navigate('/');
// })
// .catch((err) => {
//     reject(err);
// })
//     })
// }

export const register=(body,handleSucces)=>({
    type:'REGISTER',
    payload: new Promise((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, body)
.then((response) => {
    handleSucces();
    resolve(response);
    // alert("Register Succes");
    // return navigate('/');
})
.catch((err) => {
    reject(err);
})
    })
})

export const login=(form)=>{
    return new Promise((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, form)
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
