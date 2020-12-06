import React from "react";
import axios from "axios";
import userEvent from "@testing-library/user-event";



const CommentList = ( {comment} )=> {
  function deleteComment() {
    console.log('지워')
  }

  function editComment() {
    console.log('편집하기')
  }
  
  return (
    <div class="comment-element">
      <div>{comment.userId}  | </div>
      <div>{comment.content}</div>
      <div className="eiditBtn">
      <button onClick={deleteComment}>삭제하기</button>
      <button onClick={editComment}>편집하기</button>
      </div>
    </div>
  );
};

export default CommentList;
