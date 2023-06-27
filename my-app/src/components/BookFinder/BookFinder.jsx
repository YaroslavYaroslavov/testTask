import "../BookFinder/styled.css";

import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import ResultZone from "../ResultZone/ResultZone.jsx";
import SearchZone from "../SearchZone/SearchZone.jsx";

function BookFinder() {
  const [data, setData] = useState({});
  const [offset, setOffset] = useState(0);
  const [newSearch, setNewSearch] = useState(true);
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(!false);

  const filterOnlyUniq = (data) => {
    if (data?.items === undefined) return;
    const booksArr = newSearch ? [...data.items] : [...books, ...data.items];
    const uniqueBooks = booksArr.filter((book, index, arr) => {
      return arr.findIndex((b) => b.id === book.id) === index;
    });
    setBooks(uniqueBooks);
  };

  const handleDataChange = (data) => {
    setData(data);
    filterOnlyUniq(data);
  };

  const handleButtonClick = () => {
    setNewSearch(false);
    setOffset((prev) => prev + 30);
    filterOnlyUniq();
  };

  const handleOptionsChange = () => {
    setOffset(0);
    setNewSearch(true);
    filterOnlyUniq();
  };
  const handleIsLoading = (isLoading) => {
    setIsLoading(isLoading);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <SearchZone
          className="searchZone"
          onResponse={handleDataChange}
          offset={offset}
          onInputChange={handleOptionsChange}
          handleIsLoading={handleIsLoading}
        />
        <ResultZone
          data={data}
          books={books}
          onClick={handleButtonClick}
          newSearch={newSearch}
          isLoading={isLoading}
        />
      </BrowserRouter>
    </div>
  );
}

export default BookFinder;
