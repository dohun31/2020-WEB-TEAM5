const express = require("express");
const db = require("../models/db");

commentRouter = express.Router()

commentRouter.post('/get', async (req,res) => {
    console.log(req.body)
    const movieId = req.body.movieId;
    if(movieId){
      try{
      db.query(`SELECT * FROM comment where movieId = ?`,
      [movieId],
      (err,results)=>{
        //console.log("!!!",results)
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

commentRouter.post('/upload', (req,res)=>{
    const { userId , password, comment,movieId } = req.body;
    db.query(`INSERT INTO comment (userId, password, movieId, content)
    VALUES (?,?,?,?)`,[userId,password,movieId,comment],
    (err,result) => {
      if(err){
        return res.json({success: false ,err : err})
      }else{
        return res.json({success: true})
      }
    })
})


commentRouter.get('/delete',(req,res)=>{
  console.log("지워")
})

module.exports = commentRouter