import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentList from "./CommentList.js";
import PostComment from "./partials/PostComment"

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
    
      <PostComment movieId={movieId}></PostComment>

      <section className="comment-list">
        {commentList.map((value,index) => {
          return <CommentList key={index} comment={value} movieId={movieId}/>;
        })}
      </section>

    </div>
  );
}

export default Comment;
