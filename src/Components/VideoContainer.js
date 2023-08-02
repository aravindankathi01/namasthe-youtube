import React, { useEffect, useState } from "react";
import { VIDEO_API } from "../utils/Constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState(null);
  useEffect(() => {
    fetchVideoData();
  }, []);

  async function fetchVideoData() {
    try {
      const response = await fetch(VIDEO_API);
      const data = await response.json();
      setVideoData(data);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
  console.log(">>>Video Data", videoData);

  return (
    <div className='grow px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 max-h-126 overflow-y-auto gap-x-4 gap-y-9 pt-5'>
      {videoData &&
        videoData.items.map((item) => {
          return (
            <VideoCard
              key={item.id}
              {...item.snippet}
              {...item.statistics}
              videoId={item.id}
            />
          );
        })}
    </div>
  );
};

export default VideoContainer;
