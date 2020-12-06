const express = require("express");
const db = require("../models/db");
const auth = require("../middlewares/auth");

commentRouter = express.Router()

commentRouter.post('/get', async (req,res) => {
    console.log('댓글')
    const movieId = req.body.movieId;
    if(movieId){
      try{
      db.query(`SELECT * FROM comment where movieId = ?`,
      [movieId],
      (err,results)=>{
        if(err){
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
    console.log(comment, req.body)
    if(!req.user){
      return res.json({success: false ,err : 'notLogined'})
    }
    
    db.query(`INSERT INTO comment (userId, movieId, content)
    VALUES (?,?,?)`,[req.user.name,movieId,comment],
    (err,result) => {
      if(err){
        console.log(err)
        return res.json({success: false ,err : err})
      }else{ 
        return res.json({success: true})
      }
    })
})


commentRouter.get('/delete',auth ,(req,res)=>{
  console.log("지워")
})

commentRouter.get('/edit',auth, (req,res)=>{
  console.log("편집")
})

module.exports = commentRouter