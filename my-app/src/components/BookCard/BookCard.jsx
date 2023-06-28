import "../BookCard/styled.css";

import { Link } from "react-router-dom";

const BookCard = ({ id, author, category, title, img }) => {
  return (
    <Link to={`/testTask/bookfullcard/${id}`} className="noLink">
      <div className="card">
        <div className="cardImage">
          {img ? <img src={img} alt="" /> : <div className="noImage"></div>}
        </div>
        <div className="textInfo">
          <p className="category ">
            {category !== undefined ? category[0] : ""}
          </p>
          <p className="bookName ">{title}</p>
          <p className="author">{author !== undefined ? author[0] : ""}</p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
