import { useState } from "react";

const SearchInput = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      props.onChange(inputValue);
    }
  };

  const handleButtonClick = () => {
    props.onClick(inputValue);
  };

  return (
    <div className="searchInput">
      <input
        onChange={handleInputChange}
        onKeyDown={handleEnterKey}
        type="text"
        placeholder="Name of book..."
        value={inputValue}
      />
      <button onClick={handleButtonClick} className="searchIco"></button>
    </div>
  );
};

export default SearchInput;
