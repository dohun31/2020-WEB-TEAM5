import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentList from "./CommentList.js";

function User(id, comment) {
  this.id = id;
  this.comment = comment;
}

function Comment({ key, movieId }) {
  console.log("movieId값은 ", movieId, "입니다.");
  const [comment, setComment] = useState("");
  const [commentList, setcommentList] = useState([])
  
  const onCommentHandler = (e) => {
    setComment(e.currentTarget.value);
  };


  const onSubmit = (event) => {
    const values = {
      comment: comment,
      movieId : movieId
    };
    event.preventDefault();
    axios.post("/api/comments/upload", values).then((value) => {
      if (value.data.success) {
        setComment("");
      } else {
        alert("댓글 저장에 실패하였습니다.");
      }
    });
  };

  useEffect(() => {
    axios.post('/api/comments/get', {movieId})
    .then(result => {
       if(result.data.comments){
         //console.log(result.data.comments)
         setcommentList(result.data.comments);
       }
    })
  }, [])

  return (
    <div className="comment">

      <section className="current">
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


      <section className="history">
      {commentList.map(comment => {
          return <CommentList comment={comment}/>
      })}  
      </section>


    </div>
  );
}

export default Comment;
