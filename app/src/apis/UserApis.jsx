import { AxiosIntance } from "../config/Axios.Intance"


export const getAllUsers = async()=>{
    try {
        let response = await AxiosIntance.get("/user");
        if(response){
            // console.log("all users -------->",response);
            return response.data
        }
    } catch (error) {
        console.log("error in all users",error);
    }
}