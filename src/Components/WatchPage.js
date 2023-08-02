import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
const WatchPage = () => {
  let [searchParams] = useSearchParams();
  // const [videoId, setVideoId] = useState(null);
  // useEffect(() => {}, [videoId]);
  useEffect(() => {
    console.log("not cool", searchParams.get("v"));
  });
  return (
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
  );
};

export default WatchPage;
