const express = require("express");
const axios = require("axios")

searchRouter = express.Router();

searchRouter.post('/:tag', async (req,res) => {
    const { body : {search}, params : {tag} } = req;
    try{
        axios.get(`https://api.themoviedb.org/3/search/${tag}?api_key=57ff67b493d54292a7b8a96ca3e4c5a9&language=en-US&query=${search}&page=1&include_adult=false`)
        .then(value=>value.data.results)
        .then(value=>{
            value.map(v=>{
                console.log(v)
            })
            return res.status(200).json({info : value})
        })
    }catch(err){
        console.log(err)
    }
})




module.exports = searchRouter