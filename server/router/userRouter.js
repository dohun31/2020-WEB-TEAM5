const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models/db");
const auth = require("../middlewares/auth");

userRouter = express.Router();

userRouter.post("/login", (req, res) => {
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
          if (!value) {
            return res.json({ success: false });
          }
          console.log(value);
          const id = results[0].id;
          const token = jwt.sign({ token: id }, "secret");
          //  ?
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
    return res.json({ success: false, err });
  }
});

userRouter.post("/register", (req, res) => {
  const { email, id: userID, pw: password } = req.body;
  db.query("SELECT * FROM users where email = ?", [email], (err, users) => {
    if (users.length) {
      return res.json({ success: false, err: "used-email" });
    } else {
      db.query(
        "SELECT * FROM users where userID = ?",
        [userID],
        (err, users2) => {
          if (err) {
            return res.json({ success: false, err });
          }
          if (users2.length) {
            return res.json({ success: false, err: "used-id" });
          }
          bcrypt.hash(password, 10, function (err, hash) {
            db.query(
              "INSERT INTO users (email, userID, password)VALUES(?,?,?)",
              [email, userID, hash],
              (err, results) => {
                if (!results || err) {
                  return res.json({ success: false, err });
                }
                return res.json({ success: true });
              }
            );
          });
        }
      );
    }
  });
});

userRouter.get("/auth", auth, (req, res) => {
  if (!req.user) {
    return res.json({ err: "nouser" });
  }
  return res.json({ user: req.user });
});

userRouter.post("/logout", (req, res) => {
  //console.log(req.cookies.jwt)
  return res.cookie("id", "").json({ success: true });
});

module.exports = userRouter;
