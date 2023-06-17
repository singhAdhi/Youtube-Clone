import React from "react";
import Comments from "./Comments";

const CommentsList = ({ data }) => {
  return (
    <div>
      {data.map((cur) => (
        <Comments data={cur} />
      ))}
    </div>
  );
};

export default CommentsList;
