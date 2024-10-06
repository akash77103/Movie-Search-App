import React,{useState} from 'react'
import { MovieCard } from './MovieCard'

export const Movie = (movie) => {
    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])
    const searchMovie=async(e)=>{
        e.preventDefault();
        console.log("ubit")
        
         const url=`https://api.themoviedb.org/3/search/movie?api_key=9a500f32aef5e06676b4feb8a5110045&language=en-US&query=${query}&page=1&include_adult=false`;
         try{
            const res=await fetch(url)
         const data= await res.json()
        
         setMovies(data.results)
         }
         catch(err){
            console.log(err)
         }
         
    }
   
  return (
    <>
        <form className='form' onSubmit={searchMovie} >
            <label htmlFor='query' className='label' >Movie Title:</label>
            <input className='input' type='text' name='query' placeholder='i.e. Money Heist' value={query} onChange={(e)=>setQuery(e.target.value)} ></input>
            <button className='button' type='submit'>Search</button>
        </form>
        <div className='card-list'>
            {movies.map(movie=>(
                <MovieCard movie={movie} key={movie.id} ></MovieCard>
                ))}
                
                
        </div>
        
    </>
  )
}

