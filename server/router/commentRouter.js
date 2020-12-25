const express = require("express");
const db = require("../models/db");
const auth = require("../middlewares/auth");

commentRouter = express.Router()

commentRouter.post('/get', async (req,res) => {
    const movieId = req.body.movieId;
    if(movieId){
      try{
      db.query(`
      SELECT * FROM comment 
      where movieID = ? 
      AND commentID is NULL
      ORDER BY date DESC`,
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

commentRouter.post("/reply/get", (req, res) => {
  console.log(req.body)
  const commentId = req.body.commentId;
  console.log(commentId)
  try{
    db.query(`
     SELECT * FROM comment 
     where commentID = ?
     ORDER BY date DESC`,
    // 시간 내림차순으로 가져오기 (마지막 올린 순으로)
    [commentId],
    (err,results)=>{
      if(err){
        console.log(err)
        return res.json({success: false})
      }
      console.log( results)
      return res.json({success : true, replyComments : results })
    })}catch(err){
      return res.json({success: false, err : err})
    }
})

commentRouter.post('/upload',auth, (req,res)=>{
    const { comment , movieId} = req.body;

    let commentId = null;
    if(req.body.replyComment){
      commentId = req.body.replyComment;
    }

    if(!req.user){
      return res.json({success: false ,err : 'notLogined'})
    }
    
    db.query(`INSERT INTO comment (userId, movieId, content,date, commentID)
    VALUES (?,?,?,?,?)`,
    [req.user.name,movieId,comment, new Date(),commentId],
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
      console.log(err)
      return res.status(203).json({success : false,err : "err"})
    }
    if(results[0].userID == user.name ){
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
    if(result[0].userID != user.name){
      return res.status(200).json({success : false, err:'wrongUser'});
    }
    db.query('UPDATE comment SET content =?  where id =?',
    [content ,id],
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



