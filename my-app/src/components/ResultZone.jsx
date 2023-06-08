import { useEffect, useState } from 'react'
import BookCard from  './BookCard'  

const ResultZone = (props) =>{
    const [books, setBooks] = useState([])
    useEffect(() =>{
        if (props.data.items === undefined) return
        if(props.newRequest){setBooks([...props.data.items])}else{ setBooks([...books, ...props.data.items])}
           
    }, [props.data, props.newRequest])
    return(
        <div className="resultZone"> 
        {props.data.totalItems ? (<div className="countResults">Found {props.data.totalItems} results</div>) : '' }
        <div className="library">
                {
                    books.map(el => {
                        return <BookCard img={el?.volumeInfo?.imageLinks?.thumbnail}/>
                    })
                }
        </div>
        <button onClick={props.onClick} className="loadMore">LoadMore</button>
        </div>
    )
}
export default ResultZone