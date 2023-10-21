import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
const WatchPage = () => {
  let [searchParams] = useSearchParams();
  // const [videoId, setVideoId] = useState(null);
  // useEffect(() => {}, [videoId]);
  // useEffect(() => {
  //   console.log("not cool", searchParams.get("v"));
  // });
  return (
    <div className='flex flex-col gap-2'>
      <div>
        <iframe
          width='850'
          height='480'
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen></iframe>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
