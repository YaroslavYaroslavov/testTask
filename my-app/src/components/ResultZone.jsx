import { createContext } from "react";
import { Route, Routes } from "react-router-dom";

import BookFullCard from "./BookFullCard.jsx";
import Library from "./Library.jsx";

export const Context = createContext("NO PROVIDER");

const ResultZone = ({ data, onClick, books }) => {
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
