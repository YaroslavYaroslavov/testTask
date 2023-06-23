import { createContext,useEffect, useState } from "react";
import { Route,Routes } from "react-router-dom";

import BookFullCard from "./BookFullCard.jsx";
import Library from "./Library.jsx";

export const Context = createContext("NO PROVIDER");

const ResultZone = ({data, newSearch,onClick }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (data.items === undefined) return;
    if (newSearch) {
      setBooks([...data.items]);
    } else {
      setBooks([...books, ...data.items]);
    }

    setBooks((prev) => {
      const uniqueBooks = [];
      const ids = new Set();

      prev.forEach((book) => {
        if (!ids.has(book.id)) {
          ids.add(book.id);
          uniqueBooks.push(book);
        }
      });

      return uniqueBooks;
    });
  }, [data]); // исправлю на выходных (но я не понимаю почему нельзя так)

  return (
    <div className="resultZone">
      <Routes>
        <Route
          path="/testTask"
          element={
            <Library data={data} books={books} onClick={onClick} />
          }
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
