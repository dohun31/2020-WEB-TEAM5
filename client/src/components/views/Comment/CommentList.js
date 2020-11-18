import React from 'react'
import axios from 'axios';

function CommentList({comment}) {
    return (
        <div>
            <div>id |{comment.userId}</div>
            <div>comment |{comment.content} </div>
        </div>
    )
}

export default CommentList