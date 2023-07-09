import React from 'react'
import { getMovies } from '../../movieData';
import { useParams } from 'react-router-dom';

const DetailMovie = () => {
    const {i} = useParams();
    console.log(typeof(i))

    const data = getMovies();

    const singleMovie = data.find(movie => movie.id === parseInt(i) )

    console.log(singleMovie)

  return (
    <div>
        <img src={singleMovie.Poster}></img>
        <p>{singleMovie?.Title}</p>
    </div>
  )
}

export default DetailMovie
