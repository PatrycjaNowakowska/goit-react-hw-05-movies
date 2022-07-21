import React from 'react';
import { useState, useEffect } from 'react';
import { getDayTrendingMovies, getMovieByQuery } from 'apiCalls';
import styles from '../Homepage/Homepage.module.css';

const Homepage = () => {
  const [dayTrendingMovies, setDayTrendingMovies] = useState([]);

  useEffect(() => {
    getDayTrendingMovies()
      .then(({ data }) => setDayTrendingMovies(data.results))
      .catch(error => console.log(error));
  }, []);
  
  return (
    <div>
      <>
        <ul className={styles.ul}>
          {dayTrendingMovies.map(({ id, poster_path, title }) => (
            <li className={styles.list} key={id}>
              <img
                className={styles.poster}
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
              />
              <p className={styles.title}>{title}</p>
            </li>
          ))}
        </ul>
      </>
    </div>
  );
};

export default Homepage;
