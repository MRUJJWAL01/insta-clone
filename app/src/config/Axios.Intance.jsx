import axios from "axios";

export const AxiosIntance = axios.create({
    baseURL:"https://insta-clone-99rk.onrender.com/api",
    withCredentials:true
    
}) 
