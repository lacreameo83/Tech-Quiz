import React from 'react'
import image from '../../assets/man.png'

function Advert() {
  return (
    <div className="h-fit sm:h-[557px] flex justify-center items-center">
      <div className="h-fit sm:h-[404px] grid grid-cols-1  w-[1172px] sm:flex sm:justify-between">
        <div className="sm:-[520px] h-[400px] ">
          <img className="w-[520px] h-[400px] " src={image} />
        </div>
        <div className="w-[520px] h-[400px] flex flex-col gap-[40px] py-[28px]  ">
          <div className="text-[#1B1B1B] font-[700] sm:text-[30px]">
            <h2>Let's Shape your Preparation</h2>
            <h2>for Your Tech Interview</h2>
          </div>
          <div className=" w-[300px] bg-[#FF9437] border sm:w-[400px] h-[314px] rounded-[8px] flex items-center justify-center">
            <div className="text-[#FFFFFF]  font-[600] sm:text-[20px] w-[340px] h-[150px] flex flex-col ">
              <p>Boost your confidence and land</p>
              <p>your dream job with our tailored</p>
              <p>prep quiz,transform your skills</p>
              <p>and stand out from the</p>
              <p>interview.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advert
