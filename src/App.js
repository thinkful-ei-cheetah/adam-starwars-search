import React, {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  useEffect(() => {
    const URL = 'https://swapi.co/api/';
  })
  return (
    <main className='App'>
      <header>
        <h1>Searching Star Wars</h1>
        <label htmlFor='searchTerm'>Search</label>
        <input id='searchTerm' placeholder='skywalker' />
        <select>
          <option value='people'>People</option>
          <option value='species'>Species</option>
          <option value='planets'>Planets</option>
          <option value='vehicles'>Vehicles</option>
          <option value='starships'>Starships</option>
          <option value='films'>Films</option>
        </select>
      </header>
    </main>
  );
}

export default App;