import React from "react";

const Comments = ({ data }) => {
  const { name, comments } = data;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{comments}</h2>
    </div>
  );
};

export default Comments;
