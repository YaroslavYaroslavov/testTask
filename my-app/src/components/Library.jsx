
import BookCard from "./BookCard"
const Library = ({ books, onClick, totalItems }) => {
  return (
    <div className="library">
      {totalItems ? (<div className="countResults">Found {totalItems} results</div>) : ('')}
      <div className="books">
        {books.map((el) => (
        <BookCard
          key={`${Date.now()}${Math.floor(Math.random()*99999999) + 10000}`}  
          href={`testTask/bookfullcard/${el.id}`}
          img={el?.volumeInfo?.imageLinks?.thumbnail}
          category={el?.volumeInfo?.categories}
          title={el?.volumeInfo?.title}
          author={el?.volumeInfo?.authors}
        />
      ))}
      </div>
      
      
       <button onClick={onClick} className="loadmore">Больше</button>
    </div>
    
  )
}
export default Library