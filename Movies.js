import React from 'react'
import { useGlobalContext } from './context'
import {NavLink} from 'react-router-dom';

const Movies = () => {
const {movie} = useGlobalContext();

return (
  <section className="movie-page">
    <div className="container grid grid-4-col">

    {movie.map((curMovie) => 
    {
      const{ imdbID, Title, Poster} = curMovie;
      return <NavLink to={`movie/${imdbID}`} key={imdbID}>
        <div className="card">
          <div className="crd-info">
            <h2>{Title}</h2>
            <img src={Poster} alt="noname"></img>
          </div>
        </div>

      </NavLink>
    })}

    </div>
  </section>
)
}

export default Movies