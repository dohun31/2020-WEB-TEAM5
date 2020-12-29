import React, { useState, useEffect } from "react";
import axios from "axios";

import CommentForm from "./partials/CommentForm"
import ReplyCommentList from "./ReplyCommentList";

import Moment from 'react-moment';

const CommentList = ( {comment, movieId} )=> {
  const [editedComment, seteditedComment] = useState("")
  const [replyComments, setreplyComments] = useState([])

  const [isitEdit, setisitEdit] = useState(false)
  const [replyClicked, setreplyClicked] = useState(false)

  useEffect(() => {
    axios.post("/api/comments/reply/get", { commentId : comment.id})
    .then(result=>{
      return result.data.replyComments
    })
    .then(result=>{
      console.log(result)
      setreplyComments(result)
    })
  }, [])

  function replyComment(e) {
    if(replyClicked){
      setreplyClicked(false)
    }else{
      setreplyClicked(true)
    }
  }


  function editComment() {
    if(isitEdit){
      setisitEdit(false)
    }else{
      seteditedComment(comment.content)
      setisitEdit(true)
    }
  }

  const editedCommentHandler = (e) => {
    seteditedComment(e.currentTarget.value);
    console.log(editedComment)
  };

  function  deleteComment(event) {
    const commentID = comment.id;
    event.preventDefault();
    axios.post('/api/comments/delete', {commentID})
    .then(value =>{
      if(value.status !== 203){
        alert("삭제되었습니다")
        window.location.reload();
      }
    })

  }

  function postEditComment(e){
    e.preventDefault();
    const edit = {
      content : editedComment,
      id: comment.id,
    }
    axios.post("/api/comments/edit", edit)
    .then(value=>{
      console.log(value)
      if(!value.data.success){
        if(value.data.err === "notLogined"){
          return alert('로그인해주세요')
        }
        return alert('댓글 수정 실패')
      }
      alert('댓글 수정하였습니다.')
      window.location.reload();
    })
  }


  let content;
  if (!isitEdit) {
    content =    
    <div className="comment-element">
      <div className="comment-content">
          <div> 😄{comment.userID} | </div>
          <div>{comment.content}</div>
      </div>
      <div className="eidit-box">
          <Moment className="comment-date" parse="YYYY-MM-DD HH:mm">
                  {comment.date}
          </Moment>
          <button className="comment-edit-btn" onClick={editComment}>::</button>
      </div>
    </div>

  } else {
    content = 
    <section className="comment-edit-container">
      <form >
        <input 
          className="comment-edited-input" 
          name="editedComment" 
          value={editedComment} 
          onChange={editedCommentHandler}
          type="text"
        ></input>

        <div className="comment-edit-btns">
          <button onClick={postEditComment}>수정하기</button>
          <button onClick={editComment}>수정취소</button>
          <button onClick={deleteComment}>삭제하기</button>
        </div>
        
      </form>
    </section>
  }

  return(
    <div>
      {content}

      {
        replyClicked?
        <button className="comment-reply-btn" onClick={replyComment}>
          취소
        </button>
        :
        <button className="comment-reply-btn" onClick={replyComment}>
          답글적기
        </button>
      }

      {
        replyClicked?
        
        <CommentForm commentId={comment.id} movieId={movieId}></CommentForm>
        :
        <div></div>
      }   

      { replyComments && replyComments.map(reply=>{
        return(
          <ReplyCommentList comment={reply}></ReplyCommentList>
        )
        })
      }

    </div>
  )
};

export default CommentList;
