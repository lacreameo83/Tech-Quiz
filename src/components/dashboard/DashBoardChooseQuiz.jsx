import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

function DashBoardChooseQuiz() {
  const [hasQuestion, setHasQuestion,] = useState(false);
  const { setStack, setDifficulty, handleGenerateQuestion, setOptions } =
    useContext(GlobalContext);

  // console.log(question, "hello");
  const handlefrontEnd = () => {
    setStack("Frontend");
  };

  const handleDificult = () => {
    setDifficulty("hard");
    setOptions(50)
  };

   const handleEasy = () => {
     setDifficulty("easy");
     setOptions(20)
   };
    const handlehard = () => {
      setDifficulty(" intermidate");
      setOptions(30);
    };

const handleBackend =()=>{
  setStack("BackEnd");
}

const handleUIUX = () => {
  setStack("Ui/UX");
};


  const handleStartQuiz = () => {
    handleGenerateQuestion();
  
  };

  return (
    <div>
      <div className="h-[328px] w-[992px] mt-[58px] ml-[50px] flex items-center gap-[40px] ">
        <div className=" h-[368px] w-[548px] rounded-[12px] p-[35px] flex flex-col gap-[50px] shadow-lg ">
          <div className="">
            <p className="text-[#18A09A] font-[600] text-[24px] ">
              Stack & Category Selection
            </p>
            <p className="text-[#515151] font-[500] text-[14px] ">
              choose your prefer stack
            </p>
          </div>
          <div className="h-[337px] flex flex-col gap-[34px]">
            <div
              onClick={handlefrontEnd}
              className="border-[#D9D9D9] border-[1px] w-full rounded-[8px] p-[10px] h-[44px] flex items-center gap-[34px] "
            >
              <p className="text-[#1B1B1B] font-[500] text-[18px] w-[150px] ">
                Frontend
              </p>
              <p className="text-[#1B1B1B] font-[500] text-[18px] ">-</p>
              <p className="text-[#1B1B1B] font-[500] text-[18px] ">
                React,vue,Html,Css
              </p>
            </div>
            <div
              onClick={handleBackend}
              className="border-[#D9D9D9] border-[1px] w-full rounded-[8px] p-[10px] h-[44px]  flex items-center gap-[34px]"
            >
              <p className="text-[#1B1B1B] font-[500] text-[18px] w-[150px] ">
                Backend
              </p>
              <p className="text-[#1B1B1B] font-[500] text-[18px] ">-</p>
              <p className="text-[#1B1B1B] font-[500] text-[18px] ">
                Python,Node,Go
              </p>
            </div>
            <div
              onClick={handleUIUX}
              className="border-[#D9D9D9] border-[1px] w-full rounded-[8px] p-[10px] h-[44px]  flex items-center gap-[34px] "
            >
              <p className="text-[#1B1B1B] font-[500] text-[18px] w-[150px] ">
                UI/UX
              </p>
              <p className="text-[#1B1B1B] font-[500] text-[18px] ">-</p>
              <p className="text-[#1B1B1B] font-[500] text-[18px] ">
                Ui design,UX Research
              </p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className=" h-[368px] w-[544px] rounded-[12px] p-[35px] shadow-lg ">
          <div className=" h-[328px] w-[444px] rounded-[12px] p-[10px] flex flex-col gap-[50px] ">
            <div className="">
              <p className="text-[#18A09A] font-[600] text-[24px] ">
                Difficulty Level
              </p>
              <p className="text-[#515151] font-[500] text-[14px] ">
                choose difficulty level & numbers of questions
              </p>
            </div>
            <div className="h-[337px] flex flex-col gap-[34px] mt-[-15px]">
              <div
                onClick={handleEasy}
                className="border-[#D9D9D9] border-[1px] w-full rounded-[8px] p-[10px] h-[44px] flex items-center gap-[34px] "
              >
                <p className="text-[#1B1B1B] font-[500] text-[18px] w-[100px] ">
                  Junior
                </p>
                <p className="text-[#1B1B1B] font-[500] text-[18px] ">-</p>
                <p className="text-[#1B1B1B] font-[500] text-[18px] ">1-20</p>
              </div>
              <div
                onClick={handlehard}
                className="border-[#D9D9D9] border-[1px] w-full rounded-[8px] p-[10px] h-[44px]  flex items-center gap-[34px]"
              >
                <p className="text-[#1B1B1B] font-[500] text-[18px] w-[100px] ">
                  intermediate
                </p>
                <p className="text-[#1B1B1B] font-[500] text-[18px] ">-</p>
                <p className="text-[#1B1B1B] font-[500] text-[18px] ">1-50</p>
              </div>
              <div
                onClick={handleDificult}
                className="border-[#D9D9D9] border-[1px] w-full rounded-[8px] p-[10px] h-[44px]  flex items-center gap-[34px] "
              >
                <p className="text-[#1B1B1B] font-[500] text-[18px] w-[100px] ">
                  Senior
                </p>
                <p className="text-[#1B1B1B] font-[500] text-[18px] ">-</p>
                <p className="text-[#1B1B1B] font-[500] text-[18px] ">1-100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link to={"questiondisplay"}>
          <div
            onClick={handleStartQuiz}
            className="mt-[58px] ml-[50px] w-[992px] flex justify-end items-center"
          >
            <p className="text-[#ffffff] bg-[#18A09A] w-[221px] h-[62px] rounded-[12px] p-[20px] text-[18px] font-[600] text-center">
              Start Quiz
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DashBoardChooseQuiz;
