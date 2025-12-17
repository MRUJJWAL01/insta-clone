import axios from "axios";

export const AxiosIntance = axios.create({
    baseURL:"http://localhost:5000/api",
   
    withCredentials:true
    
}) 
