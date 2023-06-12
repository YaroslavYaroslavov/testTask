import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchZone from './SearchZone';
import ResultZone from './ResultZone';
import { useEffect, useState } from 'react';

function BookFinder() {
  const [data, setData] = useState({});
  const [offset, setOffset] = useState(0);
  const [newSearch, setNewSearch] = useState(true);
  
  const handleDataChange = (data) => {
    setData(data);
  };
  const handleButtonClick = () => {
      setNewSearch(false);
      setOffset(offset + 30);
  };

  const handleOptionsChange = () => {
    setOffset(0);
    setNewSearch(true);
  };
  
  return (
    <div className="App">
      <BrowserRouter>
        <SearchZone
          className="searchZone"
          onResponse={handleDataChange}
          offset={offset}
          onInputChange={handleOptionsChange}
        />
        <ResultZone data={data} newSearch={newSearch} />
        <button onClick={handleButtonClick} className="loadmore">Больше</button>
      </BrowserRouter>
    </div>
  );
}

export default BookFinder;
