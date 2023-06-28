import "../Library/styled.css";

import { useEffect, useRef } from "react";

import BookCard from "../BookCard/BookCard.jsx";

const Library = ({ books, onClick, data }) => {
  const buttonEl = useRef(null);
  useEffect(() => {
    if (buttonEl.current) {
      buttonEl.current.textContent = "Load more";
      buttonEl.current.removeAttribute("disabled");
      buttonEl.current.classList.remove("loading");
    }
  }, [books]);

  const handleButtonClick = () => {
    onClick();
    buttonEl.current.textContent = "";
    buttonEl.current.classList.add("loading");
    buttonEl.current.setAttribute("disabled", true);
  };

  if (books.length === 0 && data.totalItems === undefined) {
    return <h1 className="noBooks">Lets find some good books!</h1>;
  }
  if (data.totalItems === 0) {
    return (
      <h1 className="noBooks">We didnt find any books for your request :(</h1>
    );
  }
  return (
    <div className="library">
      {data.totalItems ? (
        <div className="countResults">Found {data.totalItems} results</div>
      ) : (
        ""
      )}
      {data.totalItems ? (
        <div className="books">
          {books.map((el) => (
            <BookCard
              key={el.id}
              id={el.id}
              img={el?.volumeInfo?.imageLinks?.thumbnail}
              category={el?.volumeInfo?.categories}
              title={el?.volumeInfo?.title}
              author={el?.volumeInfo?.authors}
            />
          ))}
        </div>
      ) : (
        ""
      )}
      {data.items ? (
        <button ref={buttonEl} onClick={handleButtonClick} className="loadmore">
          Load more
        </button>
      ) : (
        "No more books on your request"
      )}
    </div>
  );
};

export default Library;
