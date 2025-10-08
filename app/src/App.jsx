import React, { useEffect } from "react";
import AppRouter from "./router/AppRouter";
import { useDispatch } from "react-redux";
import { AxiosIntance } from "./config/Axios.Intance";
import { addUser } from "./features/reducers/AuthSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      (async () => {
        let res = await AxiosIntance.get("/auht/me");
        if (res) {
          dispatch(addUser(req.data.user));
        }
      })();
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  return (
    <div className="h-screen bg-black ">
      <AppRouter />
    </div>
  );
};

export default App;
