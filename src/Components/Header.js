import React, { useState } from "react";
import NamasteYoutube from "../assets/Namaste-Youtube.png";
import { useDispatch } from "react-redux";
import { toggleHamburger } from "../utils/ToggleSlice";
import { Link } from "react-router-dom";
const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  return (
    <div className='basis-1/12 flex flex-row justify-between items-center mt-2 mb-5'>
      <div className='basis-2/12 flex flex-row justify-start gap-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => {
            dispatch(toggleHamburger());
          }}
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.3}
          stroke='currentColor'
          className='w-10 p-2 rounded-full hover:bg-slate-200 cursor-pointer ml-6'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
        <img
          className='w-24 h-6 mt-2'
          src={NamasteYoutube}
          alt='notfound'></img>
      </div>
      <div className='basis-8/12 flex flex-row justify-center items-center'>
        <div className='flex flex-row w-8/12'>
          <input
            name='search'
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            placeholder='Search'
            id='search'
            className='w-11/12 h-10 border-gray-200 border-2 rounded-l-full px-2 outline-blue-400'></input>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-1/12 h-10 p-2 border-gray-200 border-2 rounded-r-full bg-slate-100 cursor-pointer hover:bg-slate-200'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1}
          stroke='currentColor'
          className='w-10 h-10 p-2 ml-4 rounded-full bg-slate-100 hover:bg-slate-200 cursor-pointer'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z'
          />
        </svg>
      </div>
      <div className='basis-2/12 flex flex-row justify-end gap-3 mr-6'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-10 h-10 p-2 rounded-full hover:bg-slate-200 cursor-pointer'>
          <path
            strokeLinecap='round'
            d='M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z'
          />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-10 h-10 p-2 rounded-full hover:bg-slate-200 cursor-pointer'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5'
          />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-10 h-10 p-2 rounded-full hover:bg-slate-200 cursor-pointer'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
