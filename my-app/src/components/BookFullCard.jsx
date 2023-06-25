import { useCallback, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "./ResultZone.jsx";

const BookFullCard = () => {
  const books = useContext(Context);
  const params = useParams();
  const bookId = params.id;
  const [book, setBook] = useState({});
  const fetchData = useCallback(async () => {
    if (books.find((book) => book.id === bookId)) {
      setBook(books.find((book) => book.id === bookId));
    } else {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
      );
      const data = await response.json();
      setBook(data);
    }
  }, [books, bookId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const desc =
    book?.volumeInfo?.description !== undefined
      ? book?.volumeInfo?.description.replace(/<(.|\n)*?>/g, "")
      : "";

  return (
    <div className="bookDetail-wrapper">
      <div className="image-block">
        <img src={book?.volumeInfo?.imageLinks?.thumbnail || ""} alt="" />
      </div>
      <div className="detail-block">
        <div className="bookCategories">
          {book?.volumeInfo?.categories?.join(", ")}
        </div>
        <div className="bookTitle">{book?.volumeInfo?.title}</div>
        <div className="bookAuthors">
          {book?.volumeInfo?.authors?.join(", ")}
        </div>
        <div className="bookDescrption">{desc}</div>
      </div>
      <Link to="/testTask">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default BookFullCard;
