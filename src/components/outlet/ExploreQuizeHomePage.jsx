import React from 'react'
import PrefredQuize from '../templates/PrefredQuize';

function ExploreQuizeHomePage() {
  return (
    <div className="  sm:h-[557px] bg-[#18A09A] flex items-center justify-center">
      <div className="h-fit pb-2 w-[90%]   sm:w-[950px] sm:h-[424px]  flex flex-col items-center gap-[40px]">
        <p className="text-[30px] font-[700] sm:text-[40px]  h-[58px] w-[628px] text-[#ffffff] text-center">
          Explore our Quiz Categories
        </p>
        <div className="flex items-center flex-col sm:flex-row gap-[24px] ">
          <PrefredQuize
            logo="https://cdn-icons-png.flaticon.com/512/7207/7207850.png"
            title="Frontend"
            purpose="focusing on user interface and experience,React,Vue,HTML,CSS"
          />
          <PrefredQuize
            logo="https://cdn-icons-png.flaticon.com/512/7207/7207850.png"
            title="Backend"
            purpose="handling data storage and processing, python Nod,and Go"
          />
          <PrefredQuize
            logo="https://cdn-icons-png.flaticon.com/512/7207/7207850.png"
            title="UI/UX"
            purpose="focusing on user interface design and experience,ui design and ux design"
          />
        </div>
      </div>
    </div>
  );
}

export default ExploreQuizeHomePage
