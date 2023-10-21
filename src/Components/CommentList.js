import React from "react";
import Comment from "./Comment";

const CommentList = ({ commentsArray }) => {
  return (
    <>
      {commentsArray.map((user, index) => {
        return (
          <div
            key={index}
            className='border-l border-black ml-4 flex flex-col gap-1'>
            <Comment data={user} />
            {user?.replies && <CommentList commentsArray={user.replies} />}
            {/* {user.replies.map((data) => {
              return <CommentList />;
            })} */}
          </div>
        );
      })}
    </>
  );
};

export default CommentList;
