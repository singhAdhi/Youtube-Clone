import React from "react";

const SideVideo = ({ data }) => {
  return (
    <div>
      {" "}
      <div className="p-2 m-2 w-72 shadow-lg">
        <img
          className="rounded-lg"
          src={data?.snippet?.thumbnails?.high?.url}
          alt=""
        />
        <ul>
          <li>{data?.snippet?.channelTitle}</li>
          <li>{data?.snippet?.title}</li>
          <li>{data?.statistics?.viewCount}</li>
        </ul>
      </div>
    </div>
  );
};

export default SideVideo;
