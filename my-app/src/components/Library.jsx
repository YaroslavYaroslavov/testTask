
import BookCard from "./BookCard"
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
export default Library