import React from 'react'

function QuizRecord({total,purpose}) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <p className=" h-[39px] font-[600] text-[32px] text-[#FF9437]">
        {total}
      </p>
      <p className="text-[#515151] text-[16px] font-[500] h-[20px]">{purpose}</p>
    </div>
  );
}

export default QuizRecord
