import React, { useState } from "react";
import axios from "axios";
import Moment from 'react-moment';
import "./ReplyCommetList.css"

const ReplyCommentList = ( {comment} )=> {
  const [isitEdit, setisitEdit] = useState(false)
  const [editedComment, seteditedComment] = useState('')

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

  function editComment() {
    if(isitEdit){
      setisitEdit(false)
    }else{
      seteditedComment(comment.content)
      setisitEdit(true)
    }
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
    <div className="reply-comment-element">
      <div className="reply-comment-content">
          <div>😾{comment.userID}  | </div>
          <div>{comment.content}</div>
      </div>
      <div className="reply-eidit-box">
          <Moment className="comment-date" parse="YYYY-MM-DD HH:mm">
                  {comment.date}
          </Moment>
          <button className="comment-edit-btn" onClick={editComment}>::</button>
      </div>
    </div>

  } else {
    content = 
    <div>
      <form className="comment-edit">
        <input className="comment-edited-input" name="editedComment" value={editedComment} onChange={editedCommentHandler}></input>
        <div className="editBtn-2">
          <button onClick={postEditComment}>수정하기</button>
          <button onClick={editComment}>수정취소</button>
          <button onClick={deleteComment}>삭제하기</button>
        </div>
      </form>
    </div>
  }
  
  return (
    <div className="reply-comment-container">
      {content}
    </div>
  )
};


export default ReplyCommentList
