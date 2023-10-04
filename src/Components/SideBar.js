import React from "react";
import shortsLogo from "../assets/shorts-logo.png";
import subscriptions from "../assets/subscriptions-logo.png";
import library from "../assets/Library.png";
import SideBarItem from "./SideBarItem";
import {
  SideBarItems1,
  SideBarItems2,
  SideBarItems3,
  SideBarItems4,
} from "../utils/SideBarArray";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () => {
  const flag = useSelector((store) => {
    return store.toggle.flag;
  });
  console.log(flag);
  if (flag) {
    return (
      <div className='basis-2/12 flex flex-col items-center max-h-128 overflow-auto justify-left pt-4 gap-1 pl-2 sticky left-0 top-20 bg-white'>
        {SideBarItems1.map((item) => {
          return <SideBarItem key={item.text} {...item} />;
        })}
        <div
          key={123456}
          className='border-b-2 border-slate-200 w-11/12 my-3'></div>
        {SideBarItems2.map((item) => {
          return <SideBarItem key={item.text} {...item} />;
        })}
        <div
          key={123457}
          className='border-b-2 border-slate-200 w-11/12 my-3'></div>
        <h1 key={123458} className='text-lg pl-7 font-normal w-full text-left'>
          Explore
        </h1>
        {SideBarItems3.map((item) => {
          return <SideBarItem key={item.text} {...item} />;
        })}
        <div
          key={123459}
          className='border-b-2 border-slate-200 w-11/12 my-3'></div>
        <h1 key={123454} className='text-lg pl-7 font-normal w-full text-left'>
          More from YouTube
        </h1>
        {SideBarItems4.map((item) => {
          return <SideBarItem key={item.text} {...item} />;
        })}
      </div>
    );
  }

  return (
    <div className='basis-20 flex flex-col items-center justify-start pl-3 sticky left-0 top-20 bg-white h-96'>
      <Link
        to='/'
        className='flex flex-col mt-2 gap-2 items-center font-thin hover:bg-gray-200 hover:rounded-lg h-20 w-16 p-4 cursor-pointer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
          />
        </svg>
        <h1 className='text-xs font-medium text-slate-900 text-center'>Home</h1>
      </Link>
      <div className='flex flex-col mt-2 gap-2 items-center font-thin hover:bg-gray-200 hover:rounded-lg h-20 w-16 p-4 cursor-pointer'>
        <img className='w-6 h-6' src={shortsLogo} alt='notfound'></img>
        <h1 className='text-xs font-medium text-slate-900 text-center'>
          Shorts
        </h1>
      </div>
      <div className='flex flex-col mt-2 gap-2 items-center font-thin hover:bg-gray-200 hover:rounded-lg h-20 w-16 p-4 cursor-pointer'>
        <img className='w-6 h-6' src={subscriptions} alt='notfound'></img>

        <h1 className='text-xs font-medium text-slate-900 text-center box-content'>
          Subscriptions
        </h1>
      </div>
      <div className='flex flex-col mt-2 gap-2 items-center font-thin hover:bg-gray-200 hover:rounded-lg h-20 w-16 p-4 cursor-pointer'>
        <img className='w-6 h-6' src={library} alt='notfound'></img>

        <h1 className='text-xs font-medium text-slate-900 text-center'>
          Library
        </h1>
      </div>
    </div>
  );
};

export default SideBar;
