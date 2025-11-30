import { Lock } from "lucide-react";
import InstagramFooter from "../footer/InstagramFooter";
import { useNavigate } from "react-router";
import { InstagramLogo } from "../../assets/Icons";

export default function ForgotPass() {
  const navigate = useNavigate();
  return (
    <>
     <nav className="w-full bg-black border-b border-[#363636] flex items-center justify-between pl-[12.5vw] pr-[17vw] py-5">
      {/* Instagram logo text */}
      <div className="text-white cursor-pointer text-3xl font-title tracking-wide">
        <InstagramLogo />
      </div>
      {/* Right side buttons */}
      <div className="flex items-center gap-5">
        <button onClick={()=>navigate("/")} className="bg-[#18208B] cursor-pointer  text-white font-semibold px-5 py-1.5 rounded-lg transition">
          Log In
        </button>
        <button onClick={()=>navigate("")} className="text-[#6C89F7] cursor-pointer hover:underline text-base font-medium">
          Sign Up
        </button>
      </div>
    </nav>
      <div className="bg-black min-h-screen flex flex-col gap-10 items-center justify-between py-20">
        <div className="w-[26%] border-1 border-[#363636] rounded-xs pt-6">
          <div className="bg-black   px-14 ">
            {/* Lock icon */}
            <div className="flex items-center justify-center mb-4">
              <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center">
                <Lock size={52} className="text-white" />
              </div>
            </div>
            {/* Headline */}
            <div className="text-white text-md font-semibold mb-2 text-center">
              Trouble logging in?
            </div>
            {/* Subheadline */}
            <div className="mb-4 w-full ">
              <p className="text-[#A8A8A8] text-xs text-center ">
                Enter your email, phone or username, and we'll <br /> send you a
                link to get back into your account.
              </p>
            </div>
            {/* Input field */}
            <input
              type="text"
              placeholder="Email, Phone or Username"
              className="w-full rounded bg-[#121212] border border-[#262626] text-white px-4 py-1 mb-3 placeholder-[#A8A8A8] focus:border-gray-500 focus:outline-none"
            />
            {/* Send login link button */}
            <button className="bg-[#18208B] w-full rounded-md py-1  mb-2 text-white font-semibold  ">
              Send login link
            </button>
            {/* Can't reset password? */}
            <div className="mb-6 text-center">
              <a href="#" className="text-[#6C89F7] text-sm ">
                Can't reset your password?
              </a>
            </div>
            {/* Divider */}
            <div className="flex items-center mb-3">
              <div className="flex-1 border-t border-[#363636]"></div>
              <span className="px-3 text-white text-sm">OR</span>
              <div className="flex-1 border-t border-[#363636]"></div>
            </div>
            {/* Create new account */}
            <div className=" text-center ">
              <button className="text-white cursor-pointer font-semibold hover:underline">
                Create new account
              </button>
            </div>
          </div>
          <div onClick={()=>navigate("/")} className=" bg-[#121212] border-t border-[#363636] w-full  rounded-b-lg text-center mt-20 py-3">
            <a className="text-white hover:underline cursor-pointer">
              Back to Login
            </a>
          </div>
        </div>
        <InstagramFooter />
      </div>
    </>
  );
}
