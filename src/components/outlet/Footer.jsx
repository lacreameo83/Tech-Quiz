import React from 'react'
import image from '../../assets/new project logo.png'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="h-fit sm:h-[364px] bg-[#18A09A] sm:p-[100px]">
      <div className="grid grid-cols-2 sm:grid-cols-5">
        <div className="col-span-2 sm:col-span-0">
          <img className="w-[161px] h-[67.97px]" src={image} />
          <p className="text-[#FFFFFF] text-[29.45px] font-[700] ">TechyQuiz</p>
        </div>
        <div className="flex  flex-col gap-2">
          <p className="text-[#ffffff] font-[500] text-[18px]">Home</p>
          <ul className="text-[16px] text-[#ffffff] font-[500] footer">
            <li>Categories</li>
            <li>Learn</li>
            <li>Profile</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#ffffff] font-[500] text-[18px]">SERVICE</p>
          <ul className="text-[16px] text-[#ffffff] font-[500] footer">
            <li>Planning</li>
            <li>Management</li>
            <li>Strategy</li>
            <li>Market</li>
          </ul>
        </div>
        <div className="flex gap-3 justify-center">
          <div className="w-[48px] h-[48px] rounded-[100%] flex items-center justify-center bg-[#ffffff]">
            <FacebookIcon />
          </div>
          <div className="w-[48px] h-[48px] rounded-[100%] flex items-center justify-center bg-[#ffffff]">
            {" "}
            <InstagramIcon />
          </div>
          <div className="w-[48px] h-[48px] rounded-[100%] flex items-center justify-center bg-[#ffffff]">
            <LinkedInIcon />
          </div>
        </div>
      </div>
      <hr className="my-[30px] " />
      {/* last */}
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div>
          <p className="text-[#ffffff] font-[400] text-[16px] opacity-[50.3%] footer">
            Copyright@2024 TecyQuize All Rights Reserved
          </p>
        </div>
        <div className="flex items-center gap-[30px] text-[#ffffff] text-[16px] font-[400] footer">
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </div>
  );
}

export default Footer
