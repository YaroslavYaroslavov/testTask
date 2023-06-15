import { useEffect, useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import BookFullCard from './BookFullCard'
import Library from './Library'

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
      
      <Routes>
        <Route path="/testTask" element={<Library  totalItems={props.data.totalItems} books={books} onClick={props.onClick} />} />
        <Route path="/testTask/bookfullcard/:id" element={<BookFullCard/>} />
      </Routes>
     
    </div>

  )
}


export default ResultZone
