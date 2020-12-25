userDetailRouter.get('/', (req, res)=>{
    if(!req.user){
        return res.status(200).json({success : false, err : 'notLogined'});
    }

    const { user : { name , id }} = req; 
    const information = {};

    try{
        db.query('SELECT * FROM comment where userID = ?', [name],
        (err, results) => {
            if(err){
                console.log(err)
                return res.status(200).json({success : false, err : err})
            }

            information.comments = results;

            db.query('SELECT * FROM users where id=?', [id], (err , results)=>{
                if(err){
                    return res.status(200).json({success : false, err : err})
                }
                const userInfo =  {userID : results[0].userID, email : results[0].email};
                information.user = userInfo;

                return res.status(200).json({success : true, info : information})
            })   
        })
    }catch(err){
        console.log(err)
        return res.status(200).json({success : false, err : err})
    }
})

