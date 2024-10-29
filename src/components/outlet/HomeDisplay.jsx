import React, { useContext, useState } from 'react'
import QuizRecord from '../templates/QuizRecord';
import image from '.././../assets/cup.png'
import { Link } from 'react-router-dom';
import Register from '../authentication/Register';
import Login from '../authentication/Login';
import { GlobalContext } from '../../context/GlobalContext';

function HomeDisplay() {
 const {loginModel,RegisterModel}=useContext(GlobalContext)
  return (
    <div className="h-[600px] px-4  md:px-[30px]  xl:px-[100px] grid grid-cols-2">
      <div className="flex flex-col items-start justify-around h-[580.89px]">
        <div className="h-[378px] flex flex-col gap-[50px]">
          <div className="">
            <h2 className=" w-[561px]  h-[80px] font-[700] text-[56px] md:text-[96px] xl:text-[96px] text-[#1B1B1B]">
              Quick Tech
            </h2>
            <h2 className="w-[561px] h-[80px] font-[700] text-[56px] md:text-[96px] xl:text-[96px] text-[#1B1B1B]">
              Interview
            </h2>
          </div>
          <div>
            <p className="font-[500] xl:text-[22px]">
              Practice with real-world questions,learn from
            </p>
            <p className="font-[500] xl:text-[22px]">
              expert resources,and track your progress
            </p>
          </div>
          <Link to="dashboard">
            <button className="font-[600] text-[18px] text-[#ffffff] bg-[#18A09A] w-[221px] h-[62px] rounded-[12px] p-[20px]">
              Start your first Quiz
            </button>
          </Link>
        </div>
        <div className="flex items-center  w-[406px] h-[63px] gap-[30px] ">
          <div className="border-r-[1px] pr-3">
            <QuizRecord total="2.5k" purpose="Active students" />
          </div>
          <div className="border-r-[1px] pr-4 text-[#666666]">
            <QuizRecord total="1.5k" purpose="Attempt Quiz" />
          </div>
          <div>
            <QuizRecord total="3+" purpose="Stack" />
          </div>
        </div>
      </div>
      {/* second */}
      <div>
        <div className="h-[378px] hidden  xl:flex flex-col items-end justify-start">
          <img className="h-[580.06px] w-[505px]" src={image} />
        </div>
      </div>
      {loginModel && (
        <div className="h-[100vh] w-[100vw] bg-[RGBA(0,0,0,0.5)] z-50 fixed top-0 left-0">
          <Login />
        </div>
      )}
      {RegisterModel && (
        <div className="h-[100vh] w-[100vw] bg-[RGBA(0,0,0,0.5)] z-50 fixed top-0 left-0">
          <Register />
        </div>
      )}
    </div>
  );
}

export default HomeDisplay
