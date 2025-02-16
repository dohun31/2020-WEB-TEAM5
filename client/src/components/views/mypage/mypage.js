import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentList from "./CommentList.js";
import "./mypage.css";
import { useDispatch } from "react-redux";
import { editUser } from "../../../_actions/user_action";

function Mypage() {
  const [commentList, setCommentList] = useState([]);

  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Password, setPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/api/user/auth").then((value) => {
      if (value.data.err) {
      } else {
        let ID = value.data.user.name;
        axios.post("/api/mypage/load", { ID }).then((result) => {
          if (result.data.comments) {
            console.log(result);
            setCommentList(result.data.comments);
          }
        });
      }
    });
  }, []);

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onConfirmPWHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (Password !== ConfirmPassword) {
      alert("비밀번호가 다릅니다.");
      return "비번 다름!";
    } else {
      console.log("okay");
    }
    let body = {
      pw: Password,
    };
    console.log(body);

    dispatch(editUser(body)).then((res) => {
      if (res.payload.success) {
        alert("비밀번호가 수정되었습니다.");
      } else {
        alert("수정 실패");
      }
    });
  };

  return (
    <div className="mypage">
      <div className="divider"></div>
      <section className="mybox">
        <div className="comment">
          <section className="comment-list">
            내가쓴 댓글
            {commentList.map((value, index) => {
              return <CommentList key={index} comment={value} />;
            })}
          </section>
        </div>
        <form className="form" onSubmit={onSubmitHandler}>
          <h1>비밀번호 수정</h1>
          <label>Password</label>
          <input
            type="password"
            value={Password}
            onChange={onPasswordHandler}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            value={ConfirmPassword}
            onChange={onConfirmPWHandler}
          />
          <br />
          <button type="submit">Edit</button>
        </form>
      </section>
    </div>
  );
}
export default Mypage;
