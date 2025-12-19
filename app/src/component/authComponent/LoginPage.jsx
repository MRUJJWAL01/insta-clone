import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { loginUserApi } from "../../features/actions/AuthAction";
import { InstagramLogo } from "../../assets/Icons";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { lazy, useState } from "react";

export default function LoginPage({ setToggle }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors,inValid },
  } = useForm({mode:"onChange"});
  const [showPassword, setShowPassword] = useState(false);

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

  const onSubmit = async ({ identity, password }) => {
    if (loading) return;

    setLoading(true);

    try {
      const type = getIdentifierType(identity);
      let payload;

      if (type === "email") payload = { email: identity, password };
      else if (type === "mobile") payload = { mobile: identity, password };
      else if (type === "username") payload = { username: identity, password };
      else throw new Error("Invalid identity");

      const res = await dispatch(loginUserApi(payload)); //

      navigate("/home");
    } catch (error) {
      console.log("Login failed:", error);
    } finally {
      setLoading(false);
    }
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
                  minLength : {value:4, message:"minlength is 4"},
                  validate: (val) =>
                    isEmail(val) ||
                    isMobile(val) ||
                    isUsername(val) ||
                    "Enter a valid email, mobile, or username",
                })}
                type="text"
                defaultValue={"ujjwal"}
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
            <div className="relative">
              <input
                {...register("password", {
                  required: "Password is required",

                  minLength: { value: 6, message: "Min length is 6" },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                defaultValue={"123456"}
                className={`w-full px-3 py-3 bg-[#121212] border border-[#363636] rounded text-white placeholder-[#A8A8A8] text-sm focus:outline-none focus:border-gray-500 ${
                  errors.password ? "border-red-600" : ""
                }`}
                autoComplete="current-password"
                aria-invalid={errors.password ? "true" : "false"}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                tabIndex={-1}
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
              {errors.password && (
                <p className="text-red-400 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Login button */}
            <button
              type="submit"
              disabled={loading }
              className={`w-full h-12 rounded-xl flex items-center justify-center
    ${
      loading 
        ? "bg-[#3846B5]"
        : "bg-[#4F5DFF] cursor-pointer active:scale-95"
    }`}
            >
              {loading ? (
                <div className="insta-spinner">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i}></div>
                  ))}
                </div>
              ) : (
                <span className="text-white font-semibold">Log in</span>
              )}
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
