const BookCard = (props) => {
    return(
        <div className="card">
            <img src={props.img || ''} alt="" />
        </div>
    ) 
}
export default BookCard