  import { useForm } from "react-hook-form";
  import { useDispatch } from "react-redux";
  import { NavLink, useNavigate } from "react-router";
  import { loginUserApi } from "../../features/actions/AuthAction";
import { InstagramLogo } from "../../assets/Icons";


  export default function LoginPage({ setToggle }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    // Validation helpers (unchanged)
    const isEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    const isMobile = (val) => /^[6-9]\d{9}$/.test(val); // adjust for your locale
    const isUsername = (val) => /^[a-zA-Z0-9_.-]{3,30}$/.test(val);
    function getIdentifierType(value) {
      if (isEmail(value)) return "email";
      if (isMobile(value)) return "mobile";
      if (isUsername(value)) return "username";
      return "unknown";
    }
    

    // Hook form handles state, login logic on submit
    const onSubmit = ({ identity, password }) => {
      const type = getIdentifierType(identity);
      let payload = {};
      if (type === "email") {
        payload = { email: identity, password };
      } else if (type === "mobile") {
        payload = { mobile: identity, password };
      } else if (type === "username") {
        payload = { username: identity, password };
      } else {
        return console.error("Invalid identity type");
      }
      dispatch(loginUserApi(payload));
      console.log("logg in");
    };
    
    return (
      <div className="flex items-center justify-center p-4 ">
        <div className="w-full max-w-sm pt-12 px-5">
          {/* Main login container */}
          <div className="bg-black border-0 sm:border sm:border-[#363636] rounded-xs p-8 mb-4">
            {/* Instagram logo */}
            <div className="text-center mb-8 flex justify-center items-center">
              {/* SVG omitted for brevity */}
           <InstagramLogo />
            </div>

            {/* Login form */}
            <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
              {/* Username/Email/Mobile input */}
              <div>
                <input
                  {...register("identity", {
                    required: "This field is required",
                    validate: (val) =>
                      isEmail(val) ||
                      isMobile(val) ||
                      isUsername(val) ||
                      "Enter a valid email, mobile, or username",
                  })}
                  type="text"
                  placeholder="Phone number, username, or email"
                  className={`w-full px-3 py-3 bg-[#121212] border border-[#363636] rounded text-white placeholder-[#A8A8A8] text-sm focus:outline-none focus:border-gray-500 ${
                    errors.identity ? "border-red-600" : ""
                  }`}
                  autoComplete="username"
                  aria-invalid={errors.identity ? "true" : "false"}
                />
                {errors.identity && (
                  <p className="text-red-400 text-xs">
                    {errors.identity.message}
                  </p>
                )}
              </div>

              {/* Password input */}
              <div>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Min length is 6" },
                  })}
                  type="password"
                  placeholder="Password"
                  className={`w-full px-3 py-3 bg-[#121212] border border-[#363636] rounded text-white placeholder-[#A8A8A8] text-sm focus:outline-none focus:border-gray-500 ${
                    errors.password ? "border-red-600" : ""
                  }`}
                  autoComplete="current-password"
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && (
                  <p className="text-red-400 text-xs">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Login button */}
              <button
                type="submit"
                className="w-full mt-3 bg-[#3441AF] text-white font-semibold py-3 px-4 rounded-2xl text-sm"
              >
                Log in
              </button>
            </form>

            {/* OR divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-[#363636]"></div>
              <div className="px-4 text-gray-500 text-sm font-semibold">OR</div>
              <div className="flex-1 border-t border-[#363636]"></div>
            </div>

            {/* Facebook login */}
            <button className="w-full flex items-center justify-center space-x-2 text-[#0095F6] font-semibold text-md mb-3 ">
              {/* Facebook SVG icon omitted */}
              <span>Log in with Facebook</span>
            </button>

            {/* Forgot password */}
            <div className="text-center">
              <NavLink
                to="/forgot-password"
                className="text-white hover:underline font-bold cursor-pointer text-md"
              >
                Forgotten your password?
              </NavLink>
            </div>
          </div>

          {/* Sign up container */}
          <div className="bg-black border-0 sm:border sm:border-[#363636] rounded-xs p-4 text-center">
            <p className="text-white text-sm">
              Don't have an account?{" "}
              <span
                onClick={() => setToggle((prev) => !prev)}
                className="text-[#708DFF] cursor-pointer font-semibold "
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
