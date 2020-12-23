import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import Moment from "react-moment";

const CommentList = ({ comment }) => {
  
  let content;
  
  content = (
    <div className="comment-element">
      <div className="comment-content">
        <div>영화 id: {comment.movieID} </div>
        <div> 😄{comment.userID} | </div>
        <div>{comment.content}</div>

      </div>
      <div className="eidit-box">
        <Moment className="comment-date" parse="YYYY-MM-DD HH:mm">
          {comment.date}
        </Moment>
      </div>
    </div>);
  

  return <div>{content}</div>;
};

export default CommentList;
