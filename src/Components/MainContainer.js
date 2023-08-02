import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const flag = useSelector((store) => {
    return store.toggle.flag;
  });
  let str = flag ? "basis-10/12" : "basis:auto";
  // console.log(str);
  return (
    <div className={str + " flex flex-col h-full"}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
