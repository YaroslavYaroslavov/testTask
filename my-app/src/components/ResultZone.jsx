import { useEffect, useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import BookCard from './BookCard'
import BookFullCard from './BookFullCard'

const ResultZone = (props) => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    if (props.data.items === undefined) return
    if (props.newSearch) {
      setBooks([...props.data.items])
    } else {
      setBooks([...books, ...props.data.items])
    }
    // eslint-disable-next-line
  }, [props.data])

  return (
    <div className="resultZone">
      {props.data.totalItems ? (<div className="countResults">Found {props.data.totalItems} results</div>) : ('')}
      <Routes>
        <Route path="/" element={<Library books={books} onClick={props.onClick} />} />
        <Route path="/bookfullcard/:id" element={<BookFullCard/>} />
      </Routes>
     
    </div>

  )
}

const Library = ({ books, onClick }) => {
  return (
    <div className="library">
      {books.map((el) => (
        <BookCard
          key={`${Date.now()}${Math.floor(Math.random()*99999999) + 10000}`}
          href={`bookfullcard/${el.id}`}
          img={el?.volumeInfo?.imageLinks?.thumbnail}
          category={el?.volumeInfo?.categories}
          title={el?.volumeInfo?.title}
          author={el?.volumeInfo?.authors}
        />
      ))}
       <button onClick={onClick} className="loadmore">Больше</button>
    </div>
    
  )
}

export default ResultZone
