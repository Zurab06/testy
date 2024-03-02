import React from 'react';
import { useSelector } from 'react-redux';
const Quotes = () => {
  const jokes = useSelector((state) => state.quotes.quotes);

  console.log(jokes, 'quotes');
  return (
    <div>
     ff
    </div>
  );
};

export default Quotes;
