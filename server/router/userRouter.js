const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models/db");
const auth = require("../middlewares/auth");

userRouter = express.Router();

userRouter.post("/login", (req, res) => {
  console.log(req.body)
  const { id: userID, pw: password } = req.body;
  try {
    db.query(
      "SELECT * FROM users where userID = ?",
      [userID],
      (err, results) => {
        if (results.length == 0) {
          return res.json({ success: false, err: "cannot-find-user" });
        }
        const hashedPassword = results[0].password;
        bcrypt.compare(password, hashedPassword).then(function (value) {
          console.log(value)
          if (!value) {
            return res.json({ success: false });
          }
          const id = results[0].id;
          const token = jwt.sign({ token: id }, "secret");
          const cookieOptions = {
            expires: new Date(Date.now() + 10 ** 3 * 60 * 60 * 60),
            httpOnly: true,
          };
          res.cookie("id", token, cookieOptions);
          // name : jwt, value : token
          return res.json({ success: true });
        });
      }
    );
  } catch (err) {
    console.log(err)
    return res.json({ success: false, err });
  }
});

userRouter.post("/register", (req, res) => {
  const { email, id: userID, pw: password } = req.body;
  console.log('회원가입')
  db.query("SELECT * FROM users where email = ? OR userID = ?",
   [email, userID], 
   (err, users) => {
    if (users.length) {
      return res.json({ success: false, err: "used" });
    } 
    else {
        bcrypt.hash(password, 10, function (err, hash) {
          db.query(
            "INSERT INTO users (email, userID, password)VALUES(?,?,?)",
            [email, userID, hash],
            (err, results) => {
              if (!results || err) {
                console.log(results)
                return res.json({ success: false, err });
              }
              return res.json({ success: true });
            }
          );
        });
      }
  });
});

userRouter.get("/auth", auth, (req, res) => {
  //console.log(req.user)
  if (!req.user) {
    return res.json({ err: "nouser" });
  }
  return res.json({ user: req.user });
});

userRouter.get("/logout", (req, res) => {
  //console.log(req.cookies.jwt)
  return res.cookie("id", "").redirect('/home')
});

module.exports = userRouter;
