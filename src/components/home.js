import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movies from './movies';

function Home() {
    const [movies, setMovies ]=useState([]);
  const fechdata = async ()=>{
    const resp = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=2e4b236b8c1aec89547db95004e7b090&language=ar')
    setMovies(resp.data.results)
    
    
  }
  useEffect(()=>{
    
    fechdata()
  },[])
  console.log(movies)
  return (
    <div className='main'>
        {movies.map((m)=>{
          return(<Movies movie={m}/>)         
        })}
    </div>
  )
}

export default Home