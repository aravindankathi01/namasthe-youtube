import React from "react";

const SideBarItem = ({ src, text }) => {
  return (
    <div className='flex w-10/12 h-10 items-center p-2 gap-6 rounded-xl cursor-pointer hover:bg-slate-100'>
      <img className='h-6 w-6' src={src} alt='Not Found'></img>
      <p className='text-base font-normal'>{text}</p>
    </div>
  );
};

export default SideBarItem;
