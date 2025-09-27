const { AxiosIntance } = require("../../config/Axios.Intance")

const fetchRegisterThunk = (data) => async(dispatch) =>{
    try {
        const res = await AxiosIntance.post("/auth/register",data)
        if(res) console.log(res);
        
    } catch (error) {
        console.log(error);
        
        
    }
}