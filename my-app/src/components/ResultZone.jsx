import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
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
  }, [props.data])

  return (
    <div className="resultZone">
      {props.data.totalItems ? (<div className="countResults">Found {props.data.totalItems} results</div>) : ('')}
      <Routes>
        <Route path="/" element={<Library books={books} />} />
        <Route path="/bookfullcard/:id" element={<BookFullCard />} />
      </Routes>
    </div>
  )
}

const Library = ({ books }) => {
  return (
    <div className="library">
      {books.map((el) => (
        <BookCard
          key={`${Date.now()}` + `${Math.floor(Math.random()*99999999) + 10000}`}
          href={`bookfullcard/${el.id}`}
          img={el?.volumeInfo?.imageLinks?.thumbnail}
        />
      ))}
    </div>
  )
}

export default ResultZone
