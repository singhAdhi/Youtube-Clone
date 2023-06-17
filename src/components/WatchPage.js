import React from "react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import SideVideo from "./SideVideo";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import LiveChat from "./LiveChat";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  let [searchParams] = useSearchParams();
  const [sideVideo, setSideVideo] = useState([]);
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    getPopularVideo();
  }, []);

  const getPopularVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const resp = await data.json();
    setSideVideo(resp.items);
    console.log(resp);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="px-5">
          <div>
            <iframe
              width="1100"
              height="600"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <LiveChat />
          </div>
        </div>
        <CommentsContainer />
      </div>
      <div className="flex flex-col">
        {sideVideo.map((all) => (
          <SideVideo data={all} />
        ))}
      </div>
    </>
  );
};

export default WatchPage;
