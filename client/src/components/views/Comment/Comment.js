import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentList from "./CommentList.js";
import CommentForm from "./partials/CommentForm"

import "./Comment.css";

function Comment({ key, movieId }) {
  //console.log("movieId값은 ", movieId, "입니다.");  const [comment, setComment] = useState("");
  const [commentList, setcommentList] = useState([]);


  useEffect(() => {
    axios.post("/api/comments/get", { movieId }).then((result) => {
      if (result.data.comments) {
        setcommentList(result.data.comments);
      }
    });

  }, []);

  

  return (
    <div className="comment">
      <div className="divider"></div>
    
      <CommentForm movieId={movieId}></CommentForm>

      <section className="comment-list">
        {commentList.map((value,index) => {
          return <CommentList key={index} comment={value} movieId={movieId}/>;
        })}
      </section>

    </div>
  );
}

export default Comment;