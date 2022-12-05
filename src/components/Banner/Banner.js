import React, { useState,useEffect } from 'react';
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constants';
import './Banner.css'
const Banner = () => {
    const [movie, setMovie] = useState()
    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        setMovie(response.data.results[18])
      })
    }, [])
    
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner-bottons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='discription'>{movie ? movie.overview : ""}</h1>
        </div> 
        <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner