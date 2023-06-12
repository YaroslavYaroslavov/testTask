import { Link } from "react-router-dom"

const BookCard = (props) => {
  const path = `/${props.href}`

  return (
    <Link to={path}>
      <div className="card">
        <img src={props.img || ""} alt="" />
      </div>
    </Link>
  )
}

export default BookCard
