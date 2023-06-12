import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const BookFullCard = (props) => {
  
  const [book, setBook] = useState({})

  const catalog = window.location.pathname.split('/').at(-1)

  async function getBook () {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${catalog}`)
    const jsonData = await response.json();
    setBook(jsonData)
  }
    useEffect(() =>{
      getBook()
       // eslint-disable-next-line
    },[])

  return (
    <div className="bookDetail-wrapper">
        <div className="image-block">
            <img src={book?.volumeInfo?.imageLinks?.thumbnail || ''} alt="" />
        </div>
        <div className="detail-block">
          <div className="bookCategories">{book?.volumeInfo?.categories.join(', ')}</div>
          <div className="bookTitle">{book?.volumeInfo?.title}</div>
          <div className="bookAuthors">{book?.volumeInfo?.authors.join(', ')}</div>
          <div className="bookDescrption">{book.volumeInfo?.description}</div>
        </div>
     
    <Link to="/">
      <button>Go Back</button>
    </Link>
      </div>
  );
};

export default BookFullCard;