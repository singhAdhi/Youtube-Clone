import React from "react";
import Comments from "./Comments";
import CommentsList from "./CommentsList";
const commentsData = [
  {
    name: "adhiraj",
    comments: "lorem ipsum all is good",
    replies: [
      {
        name: "adhiraj",
        comments: "lorem ipsum all is good",
        replies: [],
      },
      {
        name: "adhiraj",
        comments: "lorem ipsum all is good",
        replies: [],
      },
      {
        name: "adhiraj",
        comments: "lorem ipsum all is good",
        replies: [],
      },
      {
        name: "adhiraj",
        comments: "lorem ipsum all is good",
        replies: [],
      },
      {
        name: "adhiraj",
        comments: "lorem ipsum all is good",
        replies: [],
      },
    ],
  },
  {
    name: "adhiraj",
    comments: "lorem ipsum all is good",
    replies: [],
  },
  {
    name: "adhiraj",
    comments: "lorem ipsum all is good",
    replies: [],
  },
  {
    name: "adhiraj",
    comments: "lorem ipsum all is good",
    replies: [],
  },
  {
    name: "adhiraj",
    comments: "lorem ipsum all is good",
    replies: [],
  },
  {
    name: "adhiraj",
    comments: "lorem ipsum all is good",
    replies: [],
  },
  {
    name: "adhiraj",
    comments: "lorem ipsum all is good",
    replies: [],
  },
];
const CommentsContainer = () => {
  return (
    <div>
      <CommentsList data={commentsData} />
    </div>
  );
};

export default CommentsContainer;
