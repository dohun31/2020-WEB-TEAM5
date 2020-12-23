import React from 'react'
import axios from "axios";

function Mypage() {
    
    axios.get('/api/info')
    .then(value=>{
        console.log("11", value)
    })

    return (
        <div>
            my
        </div>
    )
}

export default Mypage
