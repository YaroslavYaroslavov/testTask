import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import BookFullCard from "./BookFullCard.jsx";
import Library from "./Library.jsx";

export const Context = createContext("NO PROVIDER");

const ResultZone = ({ data, newSearch, onClick }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (data.items === undefined) return;
    const booksArr = newSearch ? [...data.items] : [...books, ...data.items];

    const uniqueBooks = [];
    const ids = new Set();

    booksArr.forEach((book) => {
      if (!ids.has(book.id)) {
        ids.add(book.id);
        uniqueBooks.push(book);
      }
    });
    setBooks(uniqueBooks);
  }, [data]);

  return (
    <div className="resultZone">
      <Routes>
        <Route
          path="/testTask"
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
};

export default ResultZone;
