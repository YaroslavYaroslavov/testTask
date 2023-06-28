import "../BookFinder/styled.css";

import { useState } from "react";
import { HashRouter } from "react-router-dom";

import ResultZone from "../ResultZone/ResultZone.jsx";
import SearchZone from "../SearchZone/SearchZone.jsx";

const API_KEY = process.env.REACT_APP_API_KEY;
let newSearch = true;

function BookFinder() {
  const [data, setData] = useState({});
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [options, setOptions] = useState({
    activeCategories: "all",
    activeSort: "relevance",
    inputValue: "",
    offset: 0,
  });

  async function logData(obj) {
    if (obj.inputValue.trim()) {
      handleIsLoading(true);
      const categories =
        obj.activeCategories !== "all"
          ? `+subject:${obj.activeCategories}`
          : "";
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${obj.inputValue.trim()}${categories}&startIndex=${
          obj.offset
        }&maxResults=30&orderBy=${obj.activeSort}&key=` + API_KEY
      );

      const jsonData = await response.json();
      handleIsLoading(false);

      handleDataChange(jsonData);
    }
  }

  const handleInputChange = (text) => {
    const newOptions = options;
    newOptions.inputValue = text;
    setOptions(newOptions);
    // setInputValue(text);
    handleOptionsChange();
  };
  const handleActiveCategoriesChange = (active) => {
    // setActiveCategories(active);
    const newOptions = options;
    newOptions.activeCategories = active;
    setOptions(newOptions);
    handleOptionsChange();
  };
  const handleActiveSortChange = (active) => {
    const newOptions = options;
    newOptions.activeSort = active;
    setOptions(newOptions);
    handleOptionsChange();
  };

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
    newSearch = false;
    console.log(newSearch);
    const newOptions = options;
    newOptions.offset = options.offset + 30;
    setOptions(newOptions);
    logData(options);
  };

  const handleOptionsChange = () => {
    const newOptions = options;
    newOptions.offset = 0;
    setOptions(newOptions);
    newSearch = true;
    logData(options);
  };
  const handleIsLoading = (isLoading) => {
    setIsLoading(isLoading);
  };
  return (
    <div className="App">
      <HashRouter>
        <SearchZone
          className="searchZone"
          handleInputChange={handleInputChange}
          handleActiveSortChange={handleActiveSortChange}
          handleActiveCategoriesChange={handleActiveCategoriesChange}
        />
        <ResultZone
          data={data}
          books={books}
          onClick={handleButtonClick}
          newSearch={newSearch}
          isLoading={isLoading}
        />
      </HashRouter>
    </div>
  );
}

export default BookFinder;
