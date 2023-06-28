import "../ResultZone/styled.css";

import { createContext } from "react";
import { Route, Routes } from "react-router-dom";

import BookFullCard from "../BookFullCard/BookFullCard.jsx";
import Library from "../Library/Library.jsx";

export const Context = createContext("NO PROVIDER");

const ResultZone = ({ data, onClick, books, isLoading, newSearch }) => {
  if (isLoading && newSearch) {
    return (
      <div className="skeleton-wrapper">
        <div className="skeleton-totalItems"></div>
        <div className="skeleton-books">
          <div className="skeleton-book"></div>
          <div className="skeleton-book"></div>
          <div className="skeleton-book"></div>
          <div className="skeleton-book"></div>
          <div className="skeleton-book"></div>
          <div className="skeleton-book"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="resultZone">
        <Routes>
          <Route
            path="/"
            element={<Library data={data} books={books} onClick={onClick} />}
          />
          <Route
            path="/testTask/bookfullcard/:id"
            element={
              <Context.Provider value={books}>
                <BookFullCard />
              </Context.Provider>
            }
          />
        </Routes>
      </div>
    );
  }
};

export default ResultZone;
