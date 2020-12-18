import React, { useState, useEffect  } from "react";
import { useSelector } from 'react-redux';
import axios from "axios";
import userEvent from "@testing-library/user-event";
import Moment from 'react-moment';

const CommentList = ( {comment} )=> {
  const [isitEdit, setisitEdit] = useState(false)
  const [editedComment, seteditedComment] = useState('')


  const date = comment.date.split('T')[0];

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
    <div className="comment-element">
      <div className="comment-content">
          <div> 😄{comment.userId}  | </div>
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
    <div>
      {content}
    </div>
  )
};

export default CommentList;
