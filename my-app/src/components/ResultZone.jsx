import { useEffect, useState } from 'react'
import BookCard from  './BookCard'  

const ResultZone = (props) =>{
    const [books, setBooks] = useState([])
    useEffect(() =>{
        if (props.data.items === undefined) return
        if(props.newSearch){setBooks([...props.data.items])}else{ setBooks([...books, ...props.data.items])}
           // eslint-disable-next-line
    }, [props.data])
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
        </div>
    )
}
export default ResultZone