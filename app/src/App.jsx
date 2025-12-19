import AppRouter from "./router/AppRouter";
import { useDispatch } from "react-redux";
import { AxiosIntance } from "./config/Axios.Intance";
import { addUser } from "./features/reducers/AuthSlice";

const App = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    (async () => {
      try {
        let res = await AxiosIntance.get("/auth/me");
        if (res) {
          // console.log(res);
         
        }
        dispatch(addUser(res.data.user));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);
  
  return (
    <div className="min-h-screen bg-black ">
      <AppRouter />
    </div>
  );
};

export default App;
