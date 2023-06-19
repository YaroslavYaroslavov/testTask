import { useEffect, useState,createContext} from 'react'
import { Routes, Route} from 'react-router-dom'
import BookFullCard from './BookFullCard'
import Library from './Library'

export const Context = createContext('NO PROVIDER')

const ResultZone = (props) => {
  const [books, setBooks] = useState([])
  
  useEffect(() => {
    if (props.data.items === undefined) return
    if (props.newSearch) {
      setBooks([...props.data.items]) 
    } else {
      setBooks([...books, ...props.data.items])
    }

    setBooks(prev => {
      const uniqueBooks = [];
      const ids = new Set();
    
      prev.forEach(book => {
        if (!ids.has(book.id)) {
          ids.add(book.id);
          uniqueBooks.push(book);
        }
      });
    
      return uniqueBooks;
    })
    // eslint-disable-next-line
  }, [props.data])


  return (
    <div className="resultZone">
      
      <Routes>
        <Route path="/testTask" element={
          <Library  data={props.data} books={books} onClick={props.onClick} />        
        }/>
        <Route path="/testTask/bookfullcard/:id" element={
          <Context.Provider value = {books}>
            <BookFullCard />
          </Context.Provider>
        
        } />
      </Routes>
     
    </div>

  )
}


export default ResultZone
