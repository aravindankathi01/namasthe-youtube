import React from "react";

const ButtonList = () => {
  const buttonArray = [
    "All",
    "Javascript",
    "React",
    "Computer programming",
    "Music",
    "Gaming",
    "Prabhas",
    "Stocks",
    "Live",
    "Recently uploaded",
    "New to you",
  ];

  return (
    <div className='basis-1/12 flex flex-row justify-start items-center gap-3 pl-4 pb-2'>
      {buttonArray.map((item, index) => {
        return (
          <button
            className='text-base font-normal h-9 w-auto px-3 bg-slate-100 hover:bg-slate-200 cursor-pointer rounded-lg truncate'
            key={index}>
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonList;
