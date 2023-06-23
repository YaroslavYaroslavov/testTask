import { useState } from "react";

const SearchInput = ({onChange, onClick,  }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value.trim());
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      onChange(inputValue);
    }
  };

  const handleButtonClick = () => {
    onClick(inputValue);
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
