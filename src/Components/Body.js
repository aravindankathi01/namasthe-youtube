import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className='basis-11/12 flex flex-row h-full'>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
