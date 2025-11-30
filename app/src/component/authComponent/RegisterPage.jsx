import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchRegisterApi } from "../../features/actions/AuthAction";
import { useNavigate } from "react-router";
import { InstagramLogo } from "../../assets/Icons";

export default function RegisterPage({ setToggle }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    try {
      let res = dispatch(fetchRegisterApi(data));
      if (res) {
        // console.log("registered from regPage");
      }
      navigate("/login");

      
    } catch (error) {
      console.log("error in register user", error);
    }
    // Handle sign up logic here
  };

  const handleFacebookLogin = (data) => {
    // Handle Facebook login logic here
    // console.log("Facebook login attempted");
    dispatch(fetchRegisterThunk(data));
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-4">
      <section className="w-full max-w-sm">
        <div className="bg-black border border-[#363636] rounded-lg p-8 mb-4">
          {/* Instagram logo */}
          <div className="text-center mb-6">
            <div className="flex justify-center items-center">
              {/* SVG logo omitted for brevity; keep yours as is */}
              <InstagramLogo />
            </div>
            <p className="text-[#A8A8A8] text-base font-semibold leading-tight">
              Sign up to see photos and videos from your friends.
            </p>
          </div>

          {/* Facebook login button */}
          <button
            type="button"
            onClick={handleFacebookLogin}
            className="w-full flex items-center justify-center space-x-2 bg-[#4150F7] text-white font-semibold py-2 px-4 rounded text-sm mb-6 transition-colors duration-200"
          >
            {/* Facebook SVG icon omitted; keep yours as is */}
            <span>Log in with Facebook</span>
          </button>

          {/* OR divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-[#363636]"></div>
            <div className="px-4 text-gray-500 text-sm font-semibold">OR</div>
            <div className="flex-1 border-t border-[#363636]"></div>
          </div>

          {/* Registration form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            aria-label="Registration form"
          >
            <fieldset className="space-y-2">
              <div>
                <label htmlFor="email" className="sr-only">
                  Mobile Number or Email
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Mobile Number or Email"
                  className={`w-full px-3 py-2.5 bg-[#121212] border border-[#363636] rounded text-white placeholder-gray-500 text-xs focus:outline-none focus:border-gray-500 ${
                    errors.email ? "border-red-600" : ""
                  }`}
                  {...register("email", {
                    required: "Email or mobile is required",
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className={`w-full px-3 py-2.5 bg-[#121212] border border-[#363636] rounded text-white placeholder-gray-500 text-xs focus:outline-none focus:border-gray-500 ${
                    errors.password ? "border-red-600" : ""
                  }`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Min length is 6" },
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && (
                  <p className="text-red-400 text-xs">
                    {errors.password.message}
                  </p>
                )}
              </div>
              

              <div>
                <label htmlFor="fullName" className="sr-only">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Full Name"
                  className={`w-full px-3 py-2.5 bg-[#121212] border border-[#363636] rounded text-white placeholder-gray-500 text-xs focus:outline-none focus:border-gray-500 ${
                    errors.fullName ? "border-red-600" : ""
                  }`}
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  aria-invalid={errors.fullName ? "true" : "false"}
                />
                {errors.fullName && (
                  <p className="text-red-400 text-xs">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  className={`w-full px-3 py-2.5 bg-[#121212] border border-[#363636] rounded text-white placeholder-gray-500 text-xs focus:outline-none focus:border-gray-500 ${
                    errors.fullName ? "border-red-600" : ""
                  }`}
                  {...register("username", {
                    required: "Username is required",
                    minLength: { value: 3, message: "Min length is 3" },
                  })}
                  aria-invalid={errors.username ? "true" : "false"}
                />
                {errors.username && (
                  <p className="text-red-400 text-xs">
                    {errors.username.message}
                  </p>
                )}
              </div>
            </fieldset>

            {/* Contact info text */}
            <div className="text-center mt-4 mb-4">
              <p className="text-gray-400 text-xs leading-relaxed">
                People who use our service may have uploaded your contact
                information to Instagram.{" "}
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Learn More
                </a>
              </p>
            </div>

            {/* Terms text */}
            <div className="text-center mb-6">
              <p className="text-gray-400 text-xs leading-relaxed">
                By signing up, you agree to our{" "}
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Terms
                </a>
                ,{" "}
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Cookies Policy
                </a>
                .
              </p>
            </div>

            {/* Sign up button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-sm transition-colors duration-200"
            >
              Sign up
            </button>
          </form>
        </div>

        {/* Login container */}
        <aside className="bg-black border border-[#363636] rounded-lg p-4 text-center">
          <p className="text-white text-sm">
            Have an account?{" "}
            <button
              type="button"
              onClick={() => setToggle((prev) => !prev)}
              className="text-blue-400 font-semibold cursor-pointer hover:text-blue-300 transition-colors duration-200"
            >
              Log in
            </button>
          </p>
        </aside>
      </section>
    </main>
  );
}
