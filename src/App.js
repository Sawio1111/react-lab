import "milligram";
import { useState } from 'react';

import './App.css';
import { movies } from './data';
import { Titles } from './Titles';
import { MovForm } from './MovForm';

const App = () => {

  const [myMovies, setMyMovies] = useState(movies)
  const [showForm, setShowForm] = useState(false)

  const handleOnAdd = (title, year) => {
    if (myMovies.some(movie => movie.title === title)) {
      alert(`The movie ${title} is already in the list.`);
      return;
    }
    setMyMovies([...myMovies, {
      title: title,
      year: year
    }])
    alert(`Added new movie ${title} ${year}`)
  }
  
  const handleButtonShow = () => {
    setShowForm(!showForm)
  }

  const deleteMovieByTitle = (title) => {
    return myMovies.filter(movie => movie.title !== title);
  }

  const handleOnDelete = (title) => {
    const newMovies = deleteMovieByTitle(title)
    setMyMovies(newMovies)
  }

  return (
      <div>
          <h1>My favourite movies to watch</h1>
          <Titles movies={myMovies} handleOnDelete={handleOnDelete}/>
          <div>
          <button onClick={handleButtonShow}>{showForm ? 'Hide' : 'Show'}</button>
          {showForm ? <MovForm handleOnAdd={handleOnAdd} />: null}
          </div>
      </div>
  );
}

export default App;
