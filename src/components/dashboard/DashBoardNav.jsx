import React from 'react'
import { Link } from 'react-router-dom';

function DashBoardNav() {
  return (
    <div className="h-[74px] bg-[#FDFFFF] py-[10px] pr-[24px] pl-[10px] flex items-center justify-between shadow-md  ">
      <div className=" ">
        <p className="text-[#18A09A] font-[600] text-[24px]  ">Start Quiz</p>
      </div>
      <div className="flex items-center gap-[30px]">
        <div>
          <ul className="flex items-center text-[#515151] text-[15px] font-[500] gap-[20px] ">
            <Link to="/">
             
              <li>Home</li>
            </Link>

            <li>Categories</li>
            <li>Learn</li>
            <li>Profile</li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-[24px] w-[24px] bg-black rounded-full  "></div>
          <p className="text-[#515151] font-[600] text-[16px] ">precious</p>
        </div>
      </div>
    </div>
  );
}

export default DashBoardNav
