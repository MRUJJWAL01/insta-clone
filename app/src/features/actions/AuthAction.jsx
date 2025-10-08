import { AxiosIntance } from "../../config/Axios.Intance";
import { addUser, removeUser } from "../reducers/AuthSlice";
export const fetchRegisterApi = (data) => async (dispatch) => {
  try {
    const res = await AxiosIntance.post("/auth/register", data);
    if (res) {
      // dispatch(addUser(res.data.user));
    }
  } catch (error) {
    console.log("error in register", error);
  }
};

export const loginUserApi = (data) => async (dispatch) => {
  try {
    let res = await AxiosIntance.post("/auth/login", data);
    if (res) {
      dispatch(addUser(res.data.user));
      
    }
  } catch (error) {
    console.log("error in loging", error);
  }
};

export const logOutUserApi = () => async (dispatch) => {
  try {
    let response = await AxiosIntance.post("/auth/logout");
    if (response) {
      dispatch(removeUser());
    }
  } catch (error) {
    console.log("error in logout user", error);
  }
};
