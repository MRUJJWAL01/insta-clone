import axios from "axios";
export const AxiosIntance = axios.create({
    baseURL:procees.env.base_url,
    withCredentials:true
}) 