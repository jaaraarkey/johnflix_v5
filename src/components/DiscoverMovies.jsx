import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const DiscoverMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{

        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjI2MDI2NjY4MzAyN2JlYjgzOTdlODViZDI4MWNjMiIsInN1YiI6IjY2MjEzM2QwM2Y0ODMzMDBjOTczMWY3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n4BBymN1ULb1zsLHa9wvppKKTUuMGnq9oQ0djtt0q6s'
        }
};

    fetch(url, options)
        .then(res => res.json())
        .then(json =>{ 
            setMovies(json.results);
            console.log(json.results)

    })
        .catch(err => console.error('error:' + err));
    },[])

  return (
    <>  
        <div>DiscoverMovies</div>
        <div className='flex overflow-x-auto whitespace-nowrap '>
        {movies ? movies.map((movie, index)=>{
            return <div 
            className='movieTitle border-2 p-2 w-64 h-96 ' 
            key={index}> 
            {movie.title}
                {/* <Link to={`/movie/privet`}> */}
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}
                    className='w-64 h-96 object-cover min-w-64' />
                {/* </Link> */}
             </div>
        }
        ): <div>Contact your API provider</div>}

        </div>
    </>
    )
}


export default DiscoverMovies