import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
        <h1>Directors Page</h1>
        {directors.map(director =>
          <div>
            <h2>Name: {director.name}</h2>
            Movies:{director.movies.map(movie => <li>{movie}</li>)}
          </div>
        )}
    </div>
  );
}

export default Directors
