import {AxiosIntance} from "../../config/Axios.Intance"
export const fetchRegisterThunk = (data) => async (dispatch) => {
  try {
    const res = await AxiosIntance.post("/auth/register", data);
    if (res) console.log(res);
  } catch (error) {
    console.log("error in register", error);
  }
};

export const loginUserApi = (data) => async(dispatch)=>{
    try {
        let res = await AxiosIntance.post("/auth/login",data)
        if(res) console.log(res);
        
        
    } catch (error) {
        console.log("error in loging",error);
        
    }
}