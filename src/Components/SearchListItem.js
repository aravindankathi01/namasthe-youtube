import React, { useState, useEffect } from "react";
import { convertCountsToIndianFormat } from "../utils/countFormatter";
import { getRelativeTime } from "../utils/RelativeTime";
import { Link } from "react-router-dom";
import { API_KEY_AUTH } from "../utils/Constants";
const SearchListItem = ({ ...snippet }) => {
  const {
    channelTitle,
    title,
    thumbnails,
    publishedAt,
    channelId,
    videoId,
    viewCount,
    description,
  } = snippet;
  const views = convertCountsToIndianFormat(viewCount);
  const relativeTime = getRelativeTime(publishedAt);

  const CHANNEL_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY_AUTH}`;

  // const VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyA20MzU99wjT1APVWFzSwcMRL18zpGmV5w`;
  const [channelData, setChannelData] = useState(null);
  // const [videoData, setVideoData] = useState(null);
  useEffect(() => {
    fetchChannelData();
    // fetchVideoData();
  }, []);
  async function fetchChannelData() {
    try {
      const response = await fetch(CHANNEL_API);
      const data = await response.json();
      setChannelData(data);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
  // async function fetchVideoData() {
  //   try {
  //     const response = await fetch(VIDEO_API);
  //     const data = await response.json();
  //     console.log(data);
  //     setVideoData(data);
  //   } catch (error) {
  //     console.log(error.message);
  //     return null;
  //   }
  // }
  return (
    <Link
      to={"/watch?v=" + videoId}
      className='flex flex-row gap-2 cursor-pointer'>
      <div className='basis-4/12'>
        <img
          src={thumbnails?.medium?.url || thumbnails?.default.url}
          alt='SearchListItem'
          className='object-fill w-full rounded-2xl hover:rounded-none'></img>
      </div>
      <div className='basis-8/12 w-full'>
        <p className='font-medium text-base p-2 pb-0'>{title}</p>
        <div className='text-slate-600 text-sm font-medium flex flex-row items-center pt-0 p-2'>
          <p>{views} views</p>
          <p className='mx-1 border-2 rounded-full h-2 bg-slate-600 w-2'></p>
          <p>{relativeTime}</p>
        </div>
        <div className='flex flex-row gap-2 p-2 items-center'>
          <img
            className='rounded-full h-10 w-10 object-fill'
            src={
              channelData && channelData.items[0].snippet.thumbnails.default.url
            }
            alt='icon'></img>
          <h1 className='text-slate-600 text-sm font-medium'>{channelTitle}</h1>
        </div>
        <p className='text-slate-600 text-sm font-medium pt-1 p-2'>
          {description}
        </p>
      </div>
    </Link>
  );
};

export default SearchListItem;
