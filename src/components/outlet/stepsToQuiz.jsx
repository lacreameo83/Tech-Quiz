import React from 'react'
import image from '../../assets/how it works.png'

function StepsToQuiz() {
  return (
    <div className="bg-[#18A09A] h-[800px] sm:h-[1175px] flex justify-center items-center">
      <div className="h-[375px] sm:w-[1170px] sm:h-[1023px]  flex flex-col items-center gap-[40px]">
        <p className="font-[700] text-[40px] text-[#FFFFFF]">How it Works</p>
        <img src={image} />
      </div>
    </div>
  );
}

export default StepsToQuiz
