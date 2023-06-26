import "../BookCard/styled.css";

import { Link } from "react-router-dom";

const BookCard = ({ href, author, category, title, img }) => {
  const path = `/${href}`;
  const authoR = author !== undefined ? author[0] : "";
  const categorY = category !== undefined ? category[0] : "";
  const titlE = title;
  return (
    <Link to={path} className="noLink">
      <div className="card">
        <div className="cardImage">
          {img ? <img src={img} alt="" /> : <div className="noImage"></div>}
        </div>
        <div className="textInfo">
          <p className="category ">{categorY}</p>
          <p className="bookName ">{titlE}</p>
          <p className="author">{authoR}</p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
