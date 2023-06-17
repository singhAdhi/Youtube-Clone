import React from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import LiveChat from "./LiveChat";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    dataCall();
  }, []);

  const dataCall = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const resp = await data.json();
    setVideo(resp.items);
  };
  return (
    <div className="flex flex-wrap">
      {video.map((i) => (
        <Link to={"/watch?v=" + i.id}>
          <VideoCard video={i} />
        </Link>
      ))}
      <div className="w-full">
        <LiveChat />
      </div>
    </div>
  );
};

export default VideoContainer;
