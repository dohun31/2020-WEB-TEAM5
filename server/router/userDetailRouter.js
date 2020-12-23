const express = require("express");
const db = require("../models/db");
const auth = require("../middlewares/auth");

userDetailRouter = express.Router()

<<<<<<< HEAD
=======
userDetailRouter.post("/load", auth, (req, res) => {
    const userID=req.body.userID;
    db.query(
        `SELECT *FROM comment where userID = ? ORDER BY date DESC`,[userID],
        (err,results)=>{
            if(err){
                console.log(err);
                return res.json({success:false});
            }
            console.log(results);
            return res.json({success:true, comments:results});
        }
    )
})
>>>>>>> cf1b39c (moon)



module.exports = userDetailRouter