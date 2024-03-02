import React, { useState } from 'react';
import '../MainPage/jokes.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchQuotes } from '../features/quotes/quotesSlice';

const Jokes = () => {
  const jokes = useSelector((state) => state.quotes.quotes)
  const [value, setValue] = useState('');

  const dispatch = useDispatch();
  console.log(value);
  useEffect(() => {
    if (value.length >= 3) {
      setTimeout(()=>{
        dispatch(fetchQuotes(value));
      },3000)
      
    }
  }, [value, dispatch]);
  return (
    <div className='container'>
      
      <div className='inputblock'>
        <input
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Search jokes..."
          className="input"
        />
        
      </div >{ value.length > 3 &&<p className='founded'>found jokes: {jokes.total}</p>}
      <div className='main'> {jokes.result?.map((joke) => {
        return <div className='quoteblock' key={joke.id}><a href={joke.url} target="_blank">{joke.value}</a><p><a  className='url'>{joke.id}</a></p><a className='created'>{joke.created_at}</a></div>;
      })}</div>
    </div>
    
  );
};

export default Jokes;
