import React from 'react'
import DashBordSideBar from '../../components/dashboard/DashBordSideBar'
import DashBoardNav from '../../components/dashboard/DashBoardNav'
import { Outlet } from 'react-router-dom';
function DashBoardHomePage() {
  return (
    <div className="flex ">
      <div>
        <DashBordSideBar />
      </div>
      <div className='w-[100%]'>
        <DashBoardNav />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashBoardHomePage
