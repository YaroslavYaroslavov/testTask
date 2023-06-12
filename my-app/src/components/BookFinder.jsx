import { BrowserRouter} from 'react-router-dom';
import SearchZone from './SearchZone';
import ResultZone from './ResultZone';
import {useState } from 'react';

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
        <ResultZone data={data} onClick={handleButtonClick} newSearch={newSearch} />
       
      </BrowserRouter>
    </div>
  );
}

export default BookFinder;
