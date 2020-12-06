import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentList from "./CommentList.js";
import "./Comment.css";

function Comment({ key, movieId }) {
  console.log("movieId값은 ", movieId, "입니다.");
  const [comment, setComment] = useState("");
  const [commentList, setcommentList] = useState([]);

  const onCommentHandler = (e) => {
    setComment(e.currentTarget.value);
  };

  const onSubmit = (event) => {
    const values = {
      comment: comment,
      movieId: movieId,
    };
    event.preventDefault();
    axios.post("/api/comments/upload", values).then((value) => {
      if (value.data.success) {
        setComment("");
      } 
      else {
        if(value.data.err === 'notLogined'){
          return alert("로그인 해주세요");
        }
        alert("댓글 저장에 실패하였습니다.");
      }
    });
  };

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
      
      <section className="comment-form">
        <form onSubmit={onSubmit}>
          <label>댓글달기</label>
          <br></br>
          <input
            value={comment}
            onChange={onCommentHandler}
            type="text"
            required
          ></input>
          <button onSubmit={onSubmit}>upload</button>
        </form>
      </section>
  
      <section className="comment-list">
        {commentList.map((value,index) => {
          return <CommentList comment={value}/>;
        })}
      </section>

    </div>
  );
}

export default Comment;
