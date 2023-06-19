
import BookCard from "./BookCard"
const Library = ({ books, onClick, data }) => {
  return (
   
    <div className="library">
      {data.totalItems ? (<div className="countResults">Found {data.totalItems} results</div>) : ('')}
     {data.totalItems ? ( <div className="books">
        {books.map((el) => (
        <BookCard
          key={el.id}  
          href={`testTask/bookfullcard/${el.id}`}
          img={el?.volumeInfo?.imageLinks?.thumbnail}
          category={el?.volumeInfo?.categories}
          title={el?.volumeInfo?.title}
          author={el?.volumeInfo?.authors}
        />
      ))}
      </div>) : ('')}
      {data.items ? (<button onClick={onClick} className="loadmore">Больше</button>) : ('')}
   
    </div>
  )
}
export default Library