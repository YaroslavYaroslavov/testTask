import { useEffect, useState } from 'react';
const BookFullCard = () => {
  
  const [book, setBook] = useState({})

  const catalog = window.location.pathname.split('/').at(-1)
  const desc = book.volumeInfo?.description !== undefined ? book.volumeInfo?.description.replace(/<(.|\n)*?>/g, '') : ''
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
          <div className="bookCategories">{book?.volumeInfo?.categories?.join(', ')}</div>
          <div className="bookTitle">{book?.volumeInfo?.title}</div>
          <div className="bookAuthors">{book?.volumeInfo?.authors?.join(', ')}</div>
          <div className="bookDescrption">{desc}</div>
        </div>
    {/* <Link to="/testTask">
      <button>Go Back</button>
    </Link> */}
      </div>
  );
};

export default BookFullCard;