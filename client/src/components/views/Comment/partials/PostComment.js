import React, {useState} from 'react'
import axios from "axios";

function PostComment(props) {
 
    const [comment, setComment] = useState([])

    const onCommentHandler = (e) => {
        setComment(e.currentTarget.value);
      };
    
    const onSubmit = (event) => {
        event.preventDefault();

        const values = {
        comment: comment,
        movieId: props.movieId,
        replyComment: props.commentId
        };

        axios.post("/api/comments/upload", values).then((value) => {
            if (value.data.success) {
            setComment("");
            window.location.reload();
            } 
            else {
            if(value.data.err === 'notLogined'){
                return alert("로그인 해주세요");
            }
            alert("댓글 저장에 실패하였습니다.");
            }
        });
    };

    
    

    return (
        <div>
        <section className="comment-form">
            <form onSubmit={onSubmit}>
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
        </div>
    )
}

export default PostComment
