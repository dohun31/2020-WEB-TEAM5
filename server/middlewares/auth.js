const express = require("express");
const jwt = require('jsonwebtoken');
const db = require("../models/db");

const auth = (req,res,next)=>{
    const token = req.cookies.jwt;
    if(token){
      const decoded = jwt.verify(token, 'secret').token;
      db.query('SELECT * FROM users where id = ?',[decoded],
      (err,results)=>{
        if(results){
            const obj = {name : results[0].name , id :  results[0].id};
            req.user = obj;
            return next();
            // next 함수를 이용해 다음 미들웨어로 현재 상태 넘김
        }
      });
    }
    else{
        return next();
    }
}


module.exports = auth;