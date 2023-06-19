import { Link } from "react-router-dom"
import { useContext } from 'react';
import { Context } from './ResultZone';
const BookFullCard = () => {  
  const books = useContext(Context)
  const bookId = window.location.pathname.split('/').at(-1)
  const book = books.find(book => book.id === bookId)
  const desc = book.volumeInfo?.description !== undefined ? book.volumeInfo?.description.replace(/<(.|\n)*?>/g, '') : ''
  return (
    <div className="bookDetail-wrapper">
        <div className="image-block">
          <img src={book?.volumeInfo?.imageLinks?.thumbnail || ''} alt="" />
        </div>
        <div className="detail-block">
          <div className="bookCategories">{book?.volumeInfo?.categories?.join(', ')}</div>
          <div className="bookTitle">{book?.volumeInfo?.title}</div>
          <div className="bookAuthors">{book?.volumeInfo?.authors?.join(', ')}</div>
          <div className="bookDescrption">{desc}</div>
        </div>
    <Link to="/testTask">
      <button>Go Back</button>
    </Link>
    </div>
  );
};

export default BookFullCard;