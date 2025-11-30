import axios from "axios";

export const AxiosIntance = axios.create({
    baseURL:"https://insta-clone-d8ef.onrender.com/api",
    withCredentials:true
    
}) 
