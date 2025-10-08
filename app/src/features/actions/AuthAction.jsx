import { AxiosIntance } from "../../config/Axios.Intance";
import {  addUser }from "../reducers/AuthSlice";
export const fetchRegisterApi = (data) => async (dispatch) => {
  try {
    const res = await AxiosIntance.post("/auth/register", data);
    if (res) {
      console.log(res);
      dispatch(addUser(res.data.user));
    }
  } catch (error) {
    console.log("error in register", error);
  }
};

export const loginUserApi = (data) => async (dispatch) => {
  try {
    let res = await AxiosIntance.post("/auth/login", data);
    if (res) {
      dispatch(addUser(res.data.user))
    };
  } catch (error) {
    console.log("error in loging", error);
  }
};
