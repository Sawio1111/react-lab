import logo from './logo.svg';
import "milligram";
import { useEffect, useState } from 'react';

import './App.css';
import { movies } from './data';
import { Titles } from './Titles';
import { MyFav } from './MyFav';

const App = () => {

  const [title, setTitle] = useState(null)
  const [year, setYear] = useState(null)
  const [myMovies, setMyMovies] = useState(movies)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    messageCalculation(title)
  }, [title])

  const messageCalculation = (title) => {
    if (title?.length < 5 ) {
      setMessage('Tutuł jest za krótki. Nagrywają takie filmy?')
    } else if (title?.length < 15) {
      setMessage('Tutuł jest za ekstra. W sam raz na plakat na kino')
    } else {
      setMessage('Tutuł jest za zadługi')
    }
  }

  const clearInputs = () => {
    setTitle('')
    setYear('')
  }

  const handleTitle = (event) => {
      setTitle(event.target.value)
  }

  const handleYear = (event) => {
    setYear(event.target.value)
}

  const handleAdd = () => {
    setMyMovies([...myMovies, {
      title: title,
      year: year
    }])
    clearInputs()
    alert(`Added new movie ${title} ${year}`)
  }

  return (
      <div>
          <h1>My favourite movies to watch</h1>
          <Titles movies={myMovies}/>
          <MyFav title={title}/>
          <h2>Add Movie</h2>
          <div>
            <h3 style={{ fontWeight: 'bold' }}>Title</h3>
            <input type="text" value={title} onChange={handleTitle}/>
            <div>{message}</div>
            <h3 style={{ fontWeight: 'bold' }}>Year</h3>
            <input type="text" value={year} onChange={handleYear}/>
            <button onClick={handleAdd}>Add Movie</button>
          </div>
      </div>
  );
}

export default App;
