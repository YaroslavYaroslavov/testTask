import { Link } from "react-router-dom"

const BookCard = (props) => {
  const path = `/${props.href}`
  const author = props.author !== undefined ? props.author[0] : ''
  const category = props.category !== undefined ? props.category[0] : ''

  return (
    <Link to={path}>
      <div className="card">
        <img src={props.img || ""} alt="" />
        <p className="category">{category}</p>
        <p className="bookName">{props.title || ""}</p>
        <p className="author">{author}</p>
      </div>
    </Link>
  )
}

export default BookCard
