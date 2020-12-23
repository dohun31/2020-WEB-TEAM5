const express = require("express");
const app = express()
const db = require("./models/db");
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");

const commentRouter = require("./router/commentRouter");
const userRouter = require("./router/userRouter");
const auth = require("./middlewares/auth");
<<<<<<< HEAD
=======
const userDetailRouter = require("./router/userDetailRouter");
>>>>>>> cf1b39c (moon)

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json())
app.use(cookieParser());

db.connect((err) => {
    if(err){
      console.log("no!!🤕")
    }else{
      console.log("db is connected to MYSQL!!")
    }
})
  

/*
app.get('/login',auth , (req,res)=>{
  res.sendFile(__dirname +"/public/main.html")
});
app.get('/logout',(req,res)=>res.sendFile(__dirname +"/public/logout.html"));
*/

app.get('/api/hello', (req,res) => {
  console.log("api/hello is connected!")
  res.send("hi!!");
})

app.use('/api/comments/', commentRouter);
app.use('/api/user/',userRouter);
<<<<<<< HEAD
=======
app.use('/api/mypage/',userDetailRouter);
>>>>>>> cf1b39c (moon)


app.listen(7000, () => console.log(`app is listening on 7000`))

