import React, { useEffect, useState } from "react";
import { convertCountsToIndianFormat } from "../utils/countFormatter";
import { getRelativeTime } from "../utils/RelativeTime";
import { Link } from "react-router-dom";
import { API_KEY_AUTH } from "../utils/Constants";
const VideoCard = ({ ...snippet }) => {
  // console.log(snippet);

  const {
    channelTitle,
    title,
    thumbnails,
    publishedAt,
    viewCount,
    channelId,
    videoId,
  } = snippet;
  // console.log(videoId);
  const CHANNEL_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY_AUTH}`;

  const [channelData, setChannelData] = useState(null);

  useEffect(() => {
    fetchChannelData();
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
  const views = convertCountsToIndianFormat(viewCount);
  const relativeTime = getRelativeTime(publishedAt);
  // console.log("channel Data>>>>>", channelData);
  return (
    <Link
      to={"/watch?v=" + videoId}
      className='h-72 flex flex-col justify-start cursor-pointer box-border'>
      <div className='h-4/6 object-cover'>
        <img
          className='object-fill w-full h-full rounded-2xl hover:rounded-none'
          alt='Not Found'
          src={thumbnails?.maxres?.url || thumbnails?.standard?.url}></img>
      </div>
      <div className='flex flex-row h-2/6 w-full pt-1'>
        <div className='basis-1/6 w-2/12 px-2'>
          <img
            className='rounded-full h-10 w-10 object-fill'
            src={
              channelData &&
              (channelData.items[0].snippet.thumbnails.high.url ||
                channelData.items[0].snippet.thumbnails.medium.url)
            }
            alt='icon'></img>
        </div>
        <div className='basis-5/6 w-10/12'>
          <h1 className='line-clamp-2 font-medium text-base pb-1'>{title}</h1>
          <p className='text-slate-600 text-sm font-medium'>{channelTitle}</p>
          <div className='text-slate-600 text-sm font-medium flex flex-row items-center'>
            <p>{views} views</p>
            <p className='mx-1 border-2 rounded-full h-2 bg-slate-600 w-2'></p>
            <p>{relativeTime}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
