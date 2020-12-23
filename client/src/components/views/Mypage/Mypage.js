import React , {useState, useEffect }from 'react'
import axios from "axios";
import "./Mypage.css"

function Mypage() {
    const [userInfo, setuserInfo] = useState([])
    const [commentInfo, setcommentInfo] = useState({})

    useEffect(() => {
        fetch('/api/info')
        .then(value=>value.json())
        .then(results=>{
            if(!results.success){
                alert("ERR");
                return;
            }

            setcommentInfo(results.info.comments)
            setuserInfo(results.info.user)
        })
    }, [])


    /*
            Object.keys(commentInfo).map((key, index)=>{
                console.log(commentInfo[key])
            })
    */
    return (
        <div>
            <div className="userinfo-container">

                <div className="left">
                </div>

                <div className="right">

                    <div className="info">
                        <h2>user profile</h2>
                        <div className="info_data">
                            <div className="data">
                                <h4> id </h4>
                                <p>{userInfo.userID}</p>
                            </div>
                            <div className="data">
                                <h4> email </h4>
                                <p>{userInfo.email}</p>
                            </div>
                        </div>
                        <br></br>
                    </div>


                    <div className="info2">
                        <h2>information</h2>
                        <div className="info2_data">
                            <div className="data comment-info">
                            <h4>comment</h4>
                            {Object.keys(commentInfo).map((key, index)=>{
                                    console.log(commentInfo[key])
                                    return(
                                        <div className="user-comments">
                                            <a href={`/information/${commentInfo[key].movieID}`}>
                                            <div>{commentInfo[key].movieID}</div>
                                            </a>
                                            <div>{commentInfo[key].content}</div>
                                        </div>
                                    )
                            })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Mypage

/*
                          <div className="data comment-info">
                                <h4>comment</h4>
                                {Object.keys(commentInfo).map((key, index)=>{
                                    console.log(commentInfo[key])
                                    return(
                                        <div>{commentInfo[key].content}</div>
                                    )
                                })}
                            </div>

*/