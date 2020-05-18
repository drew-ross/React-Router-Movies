import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    if (!savedList.includes(movie)) {
      setSavedList([...savedList, movie]);
    }
  };

  const clearSavedList = () => {
    setSavedList([]);
  }

  return (
    <div>
      <SavedList list={savedList} clearSavedList={clearSavedList} />
      <Switch>
        <Route path={`/movies/:movieId`}>
          <Movie addToSavedList={addToSavedList} />
        </Route>
        <Route path='/'>
          <div className='movie-list-container'>
            <MovieList movies={movieList} />
          </div>
        </Route>
      </Switch>

    </div>
  );
};

export default App;
