import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const SavedList = props => {

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <Link to={`/movies/${movie.id}`} className="saved-movie">{movie.title}</Link>
      ))}
      <div className='flex-end'>
        <Link to='/' className="button">Home</Link>
        <Link onClick={props.clearSavedList} className="button">Clear</Link>
      </div>
    </div>
  )
};

export default SavedList;
