import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SearchInput from "./SearchInput.jsx";
import Select from "./Select.jsx";

const API_KEY = process.env.REACT_APP_API_KEY;

const sortOptions = ["relevance", "newest"]
const categoriesOptions = [ "all",
              "art",
              "biography",
              "computers",
              "history",
              "medical",
              "poetry",]

const SearchZone = ({onResponse,onInputChange, offset,}) => {
  const [activeCategories, setActiveCategories] = useState("all");
  const [activeSort, setActiveSort] = useState("relevance");
  const [inputValue, setInputValue] = useState("");
  const [oldOffset, setOldOffset] = useState(0);

  const handleInputChange = (text) => {
    setInputValue(text);
  };
  const handleActiveCategoriesChange = (active) => {
    setActiveCategories(active);
  };
  const handleActiveSortChange = (active) => {
    setActiveSort(active);
  };
  async function logData() {
    const categories =
      activeCategories !== "all" ? `+object:${activeCategories}` : "";
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${inputValue}${categories}&startIndex=${offset}&maxResults=30&orderBy=${activeSort}&key=` +
        API_KEY
    );
    const jsonData = await response.json();

    onResponse(jsonData);
  }

  useEffect(() => {
    if (inputValue) {
      if (offset === oldOffset && oldOffset !== 0) {
        onInputChange();
        setOldOffset(0);
      }
      if (offset === oldOffset && oldOffset === 0) {
        logData();
        setOldOffset(offset);
      }
      if (offset !== oldOffset) {
        logData();
        setOldOffset(offset);
      }
    }
  }, [inputValue, activeSort, activeCategories, offset]); // исправлю на выходных 

  return (
    <Link to="/testTask" className="noLink">
      <div className="searchZone">
        <h1>Search for books</h1>
        <SearchInput onChange={handleInputChange} onClick={handleInputChange} />
        <div className="params">
          <Select
            onChange={handleActiveCategoriesChange}
            name="Categories"
            list={categoriesOptions}
          />
          <Select
            onChange={handleActiveSortChange}
            name="Sorting by"
            list={sortOptions}
          />
        </div>
      </div>
    </Link>
  );
};
export default SearchZone;
