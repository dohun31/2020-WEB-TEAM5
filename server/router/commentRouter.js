const express = require("express");
const db = require("../models/db");
const auth = require("../middlewares/auth");

<<<<<<< HEAD
commentRouter = express.Router()

commentRouter.post('/get', async (req,res) => {
    const movieId = req.body.movieId;
    if(movieId){
      try{
      db.query(`SELECT * FROM comment where movieId = ? ORDER BY date DESC`,
      // 시간 내림차순으로 가져오기 (마지막 올린 순으로)
      [movieId],
      (err,results)=>{
        if(err){
          console.log(err)
          return res.json({success: false})
        }
        return res.json({success : true, comments : results })
      })}catch(err){
        return res.json({success: false, err : err})
      }
    
    }else{
      return  res.json({success: false ,err : 'noMovie'})
    }
})

commentRouter.post('/upload',auth, (req,res)=>{
    const { comment , movieId} = req.body;
    if(!req.user){
      return res.json({success: false ,err : 'notLogined'})
    }
    
    db.query(`INSERT INTO comment (userId, movieId, content,date)
    VALUES (?,?,?,?)`,[req.user.name,movieId,comment, new Date()],
    (err,result) => {
      if(err){
        console.log(err)
        return res.json({success: false ,err : err})
      }else{ 
        return res.json({success: true})
      }
    })
})


commentRouter.post('/delete',auth ,(req,res)=>{
  const { 
    body : { commentID } , user 
  } = req;
  if(!user){ 
    return res.status(203).json({err : "wronguser"})
  }
  db.query('SELECT * FROM comment where id=?',[commentID],
  (err,results)=>{
    if(err){
      return res.status(203).json({success : false,err : "err"})
    }
    
    if(results[0].userId == user.name ){
      db.query('DELETE FROM comment WHERE id=?',[commentID],
      (err,value)=>{
        if(err){
          return res.status(203).json({success : false, err : err})
        }
        res.status(200).json({success : true})
      })
    }
  })
})

commentRouter.post('/edit', auth, (req,res)=>{
  const { body : { content, id}, user} = req;

  if(!user){
    return res.status(200).send({success : false, err:'notLogined'});
  }
  db.query('SELECT * FROM comment where id=?',[id],
  (err, result)=>{
    if(result[0].userId != user.name){
      return res.status(200).json({success : false, err:'wrongUser'});
    }
    db.query('UPDATE comment SET content =? , date = ? where id =?',
    [content, new Date() ,id],
    (err, result)=>{
      if(err){
        console.log(err)
        return res.status(200).json({success:false, err:err});
      }
      return res.status(200).json({success:true, err:err});
    })
  })
})

module.exports = commentRouter



=======
commentRouter = express.Router();

commentRouter.post("/get", async (req, res) => {
  const movieId = req.body.movieId;
  if (movieId) {
    try {
      db.query(
        `SELECT * FROM comment where movieId = ? ORDER BY date DESC`,
        // 시간 내림차순으로 가져오기 (마지막 올린 순으로)
        [movieId],
        (err, results) => {
          if (err) {
            console.log(err);
            return res.json({ success: false });
          }
          return res.json({ success: true, comments: results });
        }
      );
    } catch (err) {
      return res.json({ success: false, err: err });
    }
  } else {
    return res.json({ success: false, err: "noMovie" });
  }
});

commentRouter.post("/upload", auth, (req, res) => {
  const { comment, movieId } = req.body;
  if (!req.user) {
    return res.json({ success: false, err: "notLogined" });
  }

  db.query(
    `INSERT INTO comment (userId, movieId, content,date)
    VALUES (?,?,?,?)`,
    [req.user.name, movieId, comment, new Date()],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.json({ success: false, err: err });
      } else {
        return res.json({ success: true });
      }
    }
  );
});

commentRouter.post("/delete", auth, (req, res) => {
  const {
    body: { commentID },
    user,
  } = req;
  if (!user) {
    return res.status(203).json({ err: "wronguser" });
  }
  db.query("SELECT * FROM comment where id=?", [commentID], (err, results) => {
    if (err) {
      return res.status(203).json({ success: false, err: "err" });
    }

    if (results[0].userID == user.name) {
      db.query("DELETE FROM comment WHERE id=?", [commentID], (err, value) => {
        if (err) {
          return res.status(203).json({ success: false, err: err });
        }
        res.status(200).json({ success: true });
      });
    }
  });
});

commentRouter.post("/edit", auth, (req, res) => {
  const {
    body: { content, id },
    user,
  } = req;

  if (!user) {
    return res.status(200).send({ success: false, err: "notLogined" });
  }
  db.query("SELECT * FROM comment where id=?", [id], (err, result) => {
    if (result[0].userID != user.name) {
      return res.status(200).json({ success: false, err: "wrongUser" });
    }
    db.query(
      "UPDATE comment SET content =? , date = ? where id =?",
      [content, new Date(), id],
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(200).json({ success: false, err: err });
        }
        return res.status(200).json({ success: true, err: err });
      }
    );
  });
});
commentRouter.get("/a",(req,res)=>{
  console.log("akwdk");
  res.send("야 여기야");
})

module.exports = commentRouter;
>>>>>>> cf1b39c (moon)
