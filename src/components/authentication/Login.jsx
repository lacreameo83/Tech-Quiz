import React from "react";

function Login() {
  return (
    <div className="h-[100vh] flex-col flex items-center justify-center">
      <p className="ml-[-290px] sm:ml-[-600px] text-[12px] text-[#b1ababcc]">
        login
      </p>

      <div className="py-[20px] bg-white px-[30px] h-[456px] w-[332px]  sm:w-[632px] rounded-[12px] lg:py-[34px] lg:px-[71px] shadow-xl">
        <div className="flex flex-col w-[99%] justify-between h-[334px] lg:w-[490px]">
          <p className="text-center text-[#2FB2AC] font-[600] text-[24px]">
            Login
          </p>
          <div>
            <div>
              <label
                className="text-[#333335] text-[16px] font-[500] block"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-[100%] text-[#6B6B6B] border-[#F6F6F6CC] outline-none p-[10px] border-[0.5px] lg:w-[490px] h-[56px] rounded-[0.5px]"
                id="email"
                placeholder="Enter Your email address"
              />
            </div>
            <div>
              <label
                className="text-[#333335] text-[16px] font-[500] block"
                htmlFor=" Password"
              >
                Password
              </label>
              <input
                className=" w-[100%] text-[#6B6B6B] border-[#F6F6F6CC] outline-none p-[10px] border-[0.5px] lg:w-[490px] h-[56px] rounded-[0.5px]"
                id=" Password"
                placeholder="Enter Your  Password"
              />
            </div>
          </div>
          <button className="w-[100%] bg-[#2FB2AC] text-[#ffffff] font-[600] text-[18px] lg:w-[490px] h-[56px] rounded-[6px] p-[10px]">
            Login
          </button>
          <p className="text-center text-[#333335] font-[400] text-[16px]">
            Dont't Have an account?{" "}
            <span className="text-[#2FB2AC] text-[16px] font-[600]">
              Reister
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
