import { useEffect, useState } from "react"
import SearchInput from "./SearchInput"
import Select from "./Select" 
import { Link } from "react-router-dom"
const API_KEY = process.env.REACT_APP_API_KEY
console.log(API_KEY)
const SearchZone = (props) =>{
        const [activeCategories, setActiveCategories] = useState('all')
        const [activeSort, setActiveSort] = useState('relevance')
        const [inputValue, setInputValue] = useState('')
        const [oldOffset, setOldOffset] = useState(0)
    const handleInputChange = (text) => {
         setInputValue(text)
    }     
    const handleActiveCategoriesChange = (active) => {
        setActiveCategories(active)
    }
    const handleActiveSortChange = (active) => {
        setActiveSort(active)
    } 
    async function logData ()  {
        let categories = ''
        if(activeCategories !== 'all'){
            categories = `+object:${activeCategories}`
        }else{
            categories = ''
        }
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${inputValue}${categories}&startIndex=${props.offset}&maxResults=30&orderBy=${activeSort}&key=`+API_KEY)
        const jsonData = await response.json();
        // console.log(jsonData)
        
        props.onResponse(jsonData)
        // console.log(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}${categories}&startIndex=${props.offset}&maxResults=30&orderBy=${activeSort}&key=`+API_KEY)
    }
    
    useEffect(()=>{
        
        if(inputValue){
           if(props.offset === oldOffset && oldOffset !== 0 ){
            props.onInputChange()
            setOldOffset(0)
           }
           if(props.offset === oldOffset && oldOffset === 0){
               logData()
               setOldOffset(props.offset)
            }
            if(props.offset !== oldOffset){
                logData()
                setOldOffset(props.offset)
            }
        }
        // eslint-disable-next-line
    },[inputValue, activeSort, activeCategories, props.offset])      

    return(
            <Link to="/testTask" className="noLink">
        <div className="searchZone">
            <h1>Search for books</h1>
            <SearchInput onChange={handleInputChange} onClick={handleInputChange}/>
            <div className="params"> 
               <Select onChange={handleActiveCategoriesChange} name='Categories' list={['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']}/>
               <Select onChange={handleActiveSortChange} name='Sorting by' list = {['relevance','newest']}/>
            </div>
        </div>
            </Link>
    )
}
export default SearchZone