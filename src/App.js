import logo from './logo.svg';
import { useEffect, useState } from 'react';

import './App.css';
import { movies } from './data';

const App = () => {

  const [title, setTitle] = useState('Wall-E')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    messageCalculation(title)
  }, [title])

  const messageCalculation = (title) => {
    if (title?.length < 5 ) {
      setMessage(<div>Tutuł jest za krótki. Nagrywają takie filmy?</div>)
    } else if (title?.length < 15) {
      setMessage(<div>Tutuł jest za ekstra. W sam raz na plakat na kino</div>)
    } else {
      setMessage(<div>Tutuł jest za zadługi</div>)
    }
  }

  const handleChange = (event) => {
      console.log(event.target.value);
      setTitle(event.target.value)
  }

  const handleButton = () => {
    alert(title)
  }

  return (
      <div>
          <h1>My favourite movies to watch</h1>
          <div>
            <h2>Title</h2>
            <ul>
              {movies.map((el) => <li key={el.title}>{el.title}</li>)}
            </ul>
          </div>
          <h2>My favourite movie for today is {title}</h2>
          {message}
          <div>
            <input type="text" value={title} onChange={handleChange}/>
            <button onClick={handleButton}>Show me movie title</button>
          </div>
      </div>
  );
}

export default App;
