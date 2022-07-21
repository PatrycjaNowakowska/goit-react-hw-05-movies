import Navbar from './Nav/Nav';
import Homepage from './Homepage/Homepage';
import Moviespage from './Moviespage/Moviespage';
import { getDayTrendingMovies, getMovieByQuery } from 'apiCalls';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Moviespage />
      <Homepage />
    </div>
  );
};
