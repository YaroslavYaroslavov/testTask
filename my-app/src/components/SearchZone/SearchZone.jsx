import "../SearchZone/styled.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SearchInput from "../SearchInput/SearchInput.jsx";
import Select from "../Select/Select.jsx";

const API_KEY = process.env.REACT_APP_API_KEY;

const sortOptions = ["relevance", "newest"];
const categoriesOptions = [
  "all",
  "Art",
  "Biography",
  "Computers",
  "History",
  "Medical",
  "Poetry",
];

const SearchZone = ({ onResponse, onInputChange, offset, handleIsLoading }) => {
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
    handleIsLoading(true);
    const categories =
      activeCategories !== "all" ? `+subject:${activeCategories}` : "";
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${inputValue}${categories}&startIndex=${offset}&maxResults=30&orderBy=${activeSort}&key=` +
        API_KEY
    );

    const jsonData = await response.json();
    handleIsLoading(false);

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
  }, [inputValue, activeSort, activeCategories, offset]);

  return (
    <Link to="/testTask" className="noLink">
      <div className="searchZone">
        <h1>Search for books</h1>
        <SearchInput onClick={handleInputChange} />
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
