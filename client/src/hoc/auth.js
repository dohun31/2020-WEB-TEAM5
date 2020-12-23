import React, {useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';

function auth(Component, Option){
    
    function Authentication(){
        axios.get('/api/user/auth')
        .then(value=>{
            if(value.data.err){
                //console.log('유저정보업다', value.data.err)
            }else{
<<<<<<< HEAD
                //console.log(value.data.user)
=======
              
>>>>>>> cf1b39c (moon)
            }
        })
        return <Component></Component>
    }

    return  Authentication
}


export default auth;