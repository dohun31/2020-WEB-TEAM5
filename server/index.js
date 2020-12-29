const express = require("express");
const app = express();
const db = require("./models/db");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const commentRouter = require("./router/commentRouter");
const userRouter = require("./router/userRouter");
const auth = require("./middlewares/auth");
const userDetailRouter = require("./router/userDetailRouter");

app.use(express.static("./public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cookieParser());

db.connect((err) => {
  if (err) {
    console.log("no!!🤕");
  } else {
    console.log("db is connected to MYSQL!!");
  }
});

/*
app.get('/login',auth , (req,res)=>{
  res.sendFile(__dirname +"/public/main.html")
});
app.get('/logout',(req,res)=>res.sendFile(__dirname +"/public/logout.html"));
*/

app.get("/api/hello", (req, res) => {
  console.log("api/hello is connected!");
  res.send("hi!!");
});

app.use("/api/comments/", commentRouter);
app.use("/api/user/", userRouter);
app.use("/api/mypage/", userDetailRouter);
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`app is listening on 7000`));
