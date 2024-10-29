import React from "react";

function Register() {
  return (
    <div className="h-[100vh] flex-col flex items-center justify-center ">
      <p className="ml-[-290px]  sm:ml-[-550px] text-[12px] text-[#b1ababcc]">
        Register
      </p>

      <div className="py-[10px] bg-white px-[15px] w-[332px] sm:w-[632px] h-[650px] rounded-[12px] sm:py-[34px] sm:px-[71px] shadow-xl">
        <div className="w-[99%] flex flex-col justify-between h-[590px] sm:w-[490px]">
          <p className="text-center text-[#2FB2AC] font-[600] text-[24px]">
            Register
          </p>
          <div className="flex flex-col gap-[10px]">
            <div>
              <label
                className="text-[#333335] text-[16px] font-[500] block"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="text-[#6B6B6B] w-[100%] border-[#F6F6F6CC] outline-none p-[10px] border-[0.5px] sm:w-[490px] h-[56px] rounded-[0.5px]"
                id="name"
                placeholder="Enter Your email address"
              />
            </div>
            <div>
              <label
                className="text-[#333335] text-[16px] font-[500] block"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="text-[#6B6B6B] border-[#F6F6F6CC] outline-none p-[10px] border-[0.5px] w-[100%] sm:w-[490px] h-[56px] rounded-[0.5px]"
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
                className="text-[#6B6B6B] w-[100%] border-[#F6F6F6CC] outline-none p-[10px] border-[0.5px] sm:w-[490px] h-[56px] rounded-[0.5px]"
                id=" Password"
                placeholder="Enter Your  Password"
              />
            </div>

            <button className="bg-[#2FB2AC] text-[#ffffff] font-[600] w-[100%] text-[18px] sm:w-[490px] h-[56px] rounded-[6px] p-[10px]">
              Create an acoount
            </button>
            <div className="text-center flex items-center justify-center w-[100%]  sm:w-[490px] h-[56px] text-[#333335] font-[700] text-[16px]">
              <p>OR</p>
            </div>
            <button className="bg-[#3B5999] text-[#ffffff] font-[600] text-[18px] w-[100%] sm:w-[490px] h-[56px] rounded-[6px] p-[10px] flex items-center justify-center gap-2">
              <img
                className="h-[30px] w-[30px]"
                src="https://dailyinfo24.site/storage/images/2/64ff5623a605f.png"
              />
              <p>Continue with Facebook</p>
            </button>
            <button className="bg-[#D5281A] text-[#ffffff] font-[600] text-[18px] w-[100%] sm:w-[490px] h-[56px] rounded-[6px] p-[10px] flex items-center justify-center gap-2">
              <img
                className="h-[30px] w-[30px]"
                src="https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-internet-icon-vector-png-image_9183287.png"
              />
              <p> Contine with Google</p>
            </button>
            <p className="text-center w-[100%]  sm:w-[490px] h-[56px] text-[#333335] font-[400] text-[16px]">
              Already have an account?
              <span className="text-[#2FB2AC] text-[16px] font-[600]">
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
