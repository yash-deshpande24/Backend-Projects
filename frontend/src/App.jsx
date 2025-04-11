import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  })
  return (
    <>
      <h1>Backend-Projects</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.text}</h3>
            <p>ID: {joke.id}</p>
          </div>
        ))
      }
    </>
  );
}

export default App;