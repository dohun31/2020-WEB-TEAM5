import React, { useState } from "react";
import {withRouter} from 'react-router-dom';
import axios from "axios";
import SearchResult from "../Search/SearchResualt"
import "./Search.css"

function Serach(props) {
    axios.get('/api/info')
    .then(value=>{
        console.log("11", value)
    })
    const [Search, setSearch] = useState('')
    const [Tag, setTag] = useState('movie')
    const [Infos, setInfos] = useState([])

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(Tag, Search);

        await axios.post(`/api/search/${Tag}`, {search : Search})
        .then(value=>{
            return value.data.info
        })
        .then(value=>{
            setInfos(value)
        })
    };

    const handleSearch = (e)=>{
        setSearch(e.target.value)
    }
    const handleTag = (e)=>{
        setTag(e.target.value)
    }
        

    return (
        <div>
            <form className="search-box" onSubmit={onSubmitHandler} > 
                <input className="search-bar" required name="search" onChange={handleSearch}></input>
                <select name="tag" onChange={handleTag}>
                    <option value="movie">영화</option>
                    <option value="tv">드라마</option>
                    <option value="multi">영화,드리마</option>
                </select>
                <button>검색</button>
            </form>
            <div className="videos">
                {Infos && Infos.map((info, index) => {
                    if(Tag === "movie" && info.poster_path){
                    return(
                        <SearchResult
                        key={info.id}
                        id={info.id}
                        title={info.title}
                        poster={info.poster_path}
                        ></SearchResult>
                    )}
                    
                    
                    else if(Tag === "tv" && info.poster_path){
                        return(
                        <SearchResult
                        key={info.id}
                        id={info.id}
                        title={info.name}
                        poster={info.poster_path}
                        ></SearchResult>
                    )}
                    
                    else if(Tag === "multi" && info.poster_path){
                        if(info.media_type === "movie"){
                            return(
                                <SearchResult
                                key={info.id}
                                id={info.id}
                                title={info.title}
                                poster={info.poster_path}
                                ></SearchResult>
                            )
                        }
                        if(info.media_type === "tv"  && info.poster_path){
                            return(
                                <SearchResult
                                key={info.id}
                                id={info.id}
                                title={info.name}
                                poster={info.poster_path}
                                ></SearchResult>
                            )
                        }
                    }})
                }
            </div>
        </div>
    )
}

export default withRouter(Serach)

