import React from 'react';
import { getMovieByQuery } from 'apiCalls';
import { useState, useEffect } from 'react';
import styles from '../Moviespage/Moviespage.module.css';

const Moviespage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const onChange = e => {
    const { value } = e.target;
    setQuery(value);
    console.log(value);
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(query)
  //   getMovieByQuery(query);
  //   console.log(getMovieByQuery);
  //   };

  useEffect(() => {
    if (!query) return;
    getMovieByQuery(query)
      .then(({ data }) => setMovies(data.results))
      .catch(error => console.log(error));
  }, [query]);

  return (
    <div>
      <h2>Movies</h2>
      <form>
        <input placeholder="Search movie here.." onChange={onChange}></input>
        {/* <button >Search</button> */}
      </form>

      <>
        <ul className={styles.ul}>
          {movies.map(({ id, poster_path, title }) => (
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

export default Moviespage;
