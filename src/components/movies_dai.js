import React from 'react'
import {  useParams } from 'react-router-dom'
import { useState ,useEffect } from 'react';
import axios from 'axios';

function Movies_datails() {
  const {id}= useParams()
  const [movies, setMovies ]=useState([]);
  const fechdata = async ()=>{
    const resp = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2e4b236b8c1aec89547db95004e7b090`)
    setMovies(resp.data)
    console.log(resp.data)
    
  }
  useEffect(()=>{
    
    fechdata()
  },[])

//   // rating js 
useEffect(() => {
  // Apply rating logic when movies state changes
  const ratings = document.querySelectorAll(".rating");

  ratings.forEach((rating) => {
    const ratingContent = rating.innerHTML;
    const ratingScore = parseInt(ratingContent, 10);
    const scoreClass = ratingScore < 40 ? "bad" : ratingScore < 70 ? "meh" : "good";

    rating.classList.add(scoreClass);

    const ratingColor = window.getComputedStyle(rating).backgroundColor;
    const gradient = `background: conic-gradient(${ratingColor} ${ratingScore}%, transparent 0 100%)`;

    rating.setAttribute("style", gradient);
    rating.innerHTML = `<span>${ratingScore} ${
      ratingContent.indexOf("%") >= 0 ? "<small>%</small>" : ""
    }</span>`;
  });
}, [movies]);

  //end of rating js 
  const divStyle = {
    
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)),url(https://image.tmdb.org/t/p/w500${movies.backdrop_path})`,
    backgroundSize: 'cover',  
    backgroundRepeat: 'no-repeat',
    
    
    
  };
  
  return (
    <>
    {/* {movies.map((movies)=>{ */}
     <div key={movies.id} style={divStyle}className='dait'>

      
    <div  className='card1'>
                <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}` } width="240" alt="Product"/>
              
              </div>
              <div className='card2'>
                <h1> {movies.title}</h1>
                <p><div  className="rating">{movies.vote_average*10}</div></p>
                <p><b>Overview</b></p>
                <p >{movies.overview}</p> 
                
              </div>
     
     </div>
     
     {/* })}  */}
    </>
    
    
  )
}

export default  Movies_datails

