import React from "react";
import axios from "axios";
import userEvent from "@testing-library/user-event";

function User(id, comment) {
  this.id = id;
  this.comment = comment;
}

const CommentList = () => {
  const User1 = new User("도훈", "너무 재밌어요.");
  const User2 = new User("지웅", "아 제 최애 미드입니다.");
  const User3 = new User("은정", "진짜 추천합니다.");
  return (
    <div>
      <strong>id| {User1.id}</strong>
      <br />
      <strong>comment| {User1.comment}</strong>
    </div>
  );
};

export default CommentList;
