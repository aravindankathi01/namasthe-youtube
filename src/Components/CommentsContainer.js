import React from "react";
import Comment from "./Comment";
import { CommentsData } from "../utils/Constants";
import CommentList from "./CommentList";

const CommentsContainer = () => {
  return (
    <div className='flex flex-col gap-1'>
      <h1 className='font-medium text-base border-b-2 border-dotted border-black p-2'>
        110 Comments
      </h1>
      <CommentList commentsArray={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
