import { useEffect, useState } from "react"
import SearchInput from "./SearchInput"
import Select from "./Select" 

// const API_KEY = 'AIzaSyB_GP2txS8lk2NxDU74yIpQfnX1jp1HvYA'
const API_KEY = 'AIzaSyA3gqU7X08zQMrfpfYU9wNFWG9Knbkar1c'

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
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}${categories}&startIndex=${props.offset}&maxResults=30&orderBy=${activeSort}&key=`+API_KEY)
        const jsonData = await response.json();
        // console.log(jsonData)
        
        props.onResponse(jsonData)
        console.log(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}${categories}&startIndex=${props.offset}&maxResults=30&orderBy=${activeSort}&key=`+API_KEY)
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
        <div className="searchZone">
            <h1>Search for books</h1>
            <SearchInput onChange={handleInputChange}/>
            <span>{inputValue}</span>
            <div className="params"> 
               <Select onChange={handleActiveCategoriesChange} name='Categories' list={['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']}/>
               <Select onChange={handleActiveSortChange} name='Sorting by' list = {['relevance','newest']}/>
            </div>
        </div>
    )
}
export default SearchZone