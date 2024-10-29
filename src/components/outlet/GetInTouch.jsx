import React from 'react'
// import { GoNorthStar } from "react-icons/go";

function GetInTouch() {
  return (
    <div className="relative">
      <div className="h-[257px] sm:h-[557px]"></div>
      <div className="h-[282px]  sm:h-[432px] bg-[#C9EEED]"></div>
      {/* form */}
      <div className="absolute left-[10%] md:left-[15%] h-[460px] top-[10%] xl:left-[30%] w-[80%] sm:w-[630px] sm:h-[690px]  bg-white shadow-2xl">
        <div className="h-[80px] sm:h-[250px]">
          <div className="h-[100px] sm:h-[158px] flex flex-col items-center justify-start  bg-[#f7f9f9]">
            <p className="text-[#18A09A] font-[700] text-[20px] sm:text-[50px]">
              Get In Touch
            </p>
            <div>
              <p className="text-[#5F5F5F] font-[400] text-[13px] sm:text-[20px] text-center">
                Lorem ipsum decided to leave for the
              </p>
              <p className="text-[#5F5F5F] font-[400] text-[13px] sm:text-[20px]text-center">
                far World of Grammar
              </p>
            </div>
          </div>
        </div>
        <div className="sm:h-[592px]  rounded-[8px] px-4   sm:px-[60px] flex flex-col xl:items-center gap-[5px] sm:gap-[10px]">
          <div>
            <label
              className="text-[#131B42] font-[600] text-[16px] block "
              htmlFor="name"
            >
              NAME
            </label>
            <input
              className="w-[100%] sm:w-[370px] outline-none h-[48px] rounded-[4px] border-[1px]"
              id="name"
            />
          </div>
          <div>
            <label
              className="text-[#131B42] font-[600] text-[16px] block  "
              htmlFor="email"
            >
              EMAIL
            </label>
            <input
              className="w-[100%] sm:w-[370px] outline-none h-[48px] rounded-[4px] border-[1px]"
              id="email"
            />
          </div>
          <div>
            <label
              className="text-[#131B42] font-[600] text-[16px] block "
              htmlFor="message"
            >
              MESSAGE
            </label>
            <textarea
              className="w-[100%] sm:w-[370px] outline-none boder-[#DADADA] h-[129px] rounded-[4px] border-[1px]"
              id="message"
            />
          </div>
          <button className="h-[48px] w-[170px] bg-[#18A09A] text-white rounded-[4px] font-[600]  self-center">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch
