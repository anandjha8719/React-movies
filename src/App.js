import React, { useState, useEffect, Suspense, lazy } from 'react';
import './App.css';
import SearchBox from './components/search-box/search-box.component';
import axios from 'axios';

const CardList = lazy(() => import('./components/card-list/card-list.component'));


const App = () => {


  const [searchField, setSearchField] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  
  //getting movie data from api
  const getMovies = async () => {
    const { data } = await axios.get(`https://movie-task.vercel.app/api/popular?page=${page}`);

    setMovies(data.data.results);
  }

  // getting movie data again when user wants next page
  useEffect(() => {
    getMovies();
  }, [page]);


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  const filteredMovies = movies.filter((m) => {
    return m.release_date.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className='App'>
      <h1 className='app-title'>Movies App React</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search Year'
        className='movies-search-box'
      />
      <Suspense fallback={<div className='fallback'>Lazy Loading...</div>}>
        <CardList movies={filteredMovies} />
      </Suspense>
      <button className='next-button' onClick={() => setPage(page - 1)}>Previous</button>
      <button className='next-button' onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};


export default App;
