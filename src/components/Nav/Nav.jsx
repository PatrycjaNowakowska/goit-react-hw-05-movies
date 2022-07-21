import React from 'react';
import styles from '../Nav/Nav.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.navbar__title} href="#homepage">
        Movie Searcher
      </a>
      <ul>
        <li className={styles.navbar__item}>
          <a className={styles.navbar__link} href="#homepage">
            Homepage
          </a>
        </li>
        <li className={styles.navbar__item}>
          <a className={styles.navbar__link} href="#movies">
            Movies
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
