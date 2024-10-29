import React from 'react'
import CopyrightIcon from "@mui/icons-material/Copyright";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import AppsIcon from "@mui/icons-material/Apps";
import InfoIcon from "@mui/icons-material/Info";
import image from '../../assets/new project logo.png'

function DashBordSideBar() {
  return (
    <div className="bg-[#18A09A] w-[312px] h-[100vh]  ">
      <div className="h-[74px] pt-[10px] pl-[20px] ">
        <div className="flex items-center ">
          <img className="w-[41.38px] h-[18px]" src={image} />
          <p className="text-[#F9FFFF] font-[700] text-[18px] ">TechyQuiz</p>
        </div>
      </div>
      <div className="h-[300px] w-[297px] mt-[70px] ml-[26px] flex flex-col gap-[20px]  ">
        <div className="h-[24px] w-[100%] text-[#ffffff] flex items-center gap-2    ">
          <AppsIcon /> Dashboard
        </div>
        <div className="h-[24px] w-[100%] text-[#ffffff]  flex items-center gap-2 ">
          <CopyrightIcon /> Past Quiz
        </div>
        <div className="h-[24px] w-[100%] text-[#ffffff] flex items-center gap-2  ">
          <ContactPageIcon /> contact Us
        </div>
        <div className="h-[24px] w-[100%] text-[#ffffff] flex items-center gap-2  ">
          {" "}
          <InfoIcon /> About Us
        </div>
        <div className="h-[24px] w-[100%] text-[#ffffff] flex items-center gap-2 ">
          <CopyrightIcon />
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
}

export default DashBordSideBar
