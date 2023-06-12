import BookCard from "./BookCard"

const Library = ({ books }) => {
    return (
      <div className="library">
        {books.map((el) => (
          <BookCard
            key={el.id}
            href={`bookfullcard/${el.id}`}
            img={el?.volumeInfo?.imageLinks?.thumbnail}
          />
        ))}
      </div>
    )
  }
  export default Library