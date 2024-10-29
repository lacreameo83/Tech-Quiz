import React from 'react'

function PrefredQuize({logo,title,purpose}) {
  return (
    <div className="w-[450px] lg:w-[302px] h-[326px] rounded-[12px] p-[30px] flex flex-col gap-[10px] bg-[#FFFCFC]">
      <div className="h-[100px] w-[100px] bg-[#FEF4DF] rounded-[100%] flex items-center justify-center">
        <img
          style={{ color: "#FF9437" }}
          className=" h-[32.1px] w-[50.92]"
          src={logo}
        />
      </div>
      <h2 className="font-[600] text-[24px] text-[#1B1B1B]">{title}</h2>
      <p className="text-[#515151] font-[500] text-[16px]">{purpose}</p>
    </div>
  );
}

export default PrefredQuize
