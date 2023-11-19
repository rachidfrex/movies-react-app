import React from 'react'
import { Link } from 'react-router-dom';

function Movies(props) {
    const movie = props.movie;
  return (
    
            <div className='content'  key={movie.id}> 
                 <div className='.main-image'>
                 <Link to={`/Movies_datails/${movie.id}`}> <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}` } width="240" alt="Product"/></Link>
                 </div>
            

            </div>
       
            
        
        

    
  )
}

export default Movies