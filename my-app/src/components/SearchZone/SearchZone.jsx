import "../SearchZone/styled.css";

import { Link } from "react-router-dom";

import SearchInput from "../SearchInput/SearchInput.jsx";
import Select from "../Select/Select.jsx";

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

const SearchZone = ({
  handleInputChange,
  handleActiveSortChange,
  handleActiveCategoriesChange,
}) => {
  return (
    <Link to="/" className="noLink">
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
