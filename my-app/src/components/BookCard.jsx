import { Link } from "react-router-dom";

const BookCard = (props) => {
  const path = `/${props.href}`;
  const author = props.author !== undefined ? props.author[0] : "";
  const category = props.category !== undefined ? props.category[0] : "";
  const title = props.title;
  return (
    <Link to={path} className="noLink">
      <div className="card">
        <div className="cardImage">
          {props.img ? (
            <img src={props.img} alt="" />
          ) : (
            <div className="noImage"></div>
          )}
        </div>
        <div className="textInfo">
          <p className="category ">{category}</p>
          <p className="bookName ">{title}</p>
          <p className="author">{author}</p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
