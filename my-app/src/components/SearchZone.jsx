import { useEffect, useState, useRef } from "react"
import SearchInput from "./SearchInput"
import Select from "./Select" 

const API_KEY = 'AIzaSyB_GP2txS8lk2NxDU74yIpQfnX1jp1HvYA'

const SearchZone = () =>{
        const [activeCategories, setActiveCategories] = useState('all')
        const [activeSort, setActiveSort] = useState('relevance')
        const [inputValue, setInputValue] = useState('')
    
    const handleInputChange = (text) => {
         setInputValue(text)
    }     
    const handleActiveCategoriesChange = (active) => {
        setActiveCategories(active)
    }
    const handleActiveSortChange = (active) => {
        setActiveSort(active)
    }
    const useDidMountEffect = (func, deps) => {
        const didMount = useRef(false);
    
        useEffect(() => {
            if (didMount.current) func();
            else didMount.current = true;
        }, deps);
    }
        useDidMountEffect(() => {
            if(inputValue){
                async function logData ()  {
                    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}&key=`+API_KEY)

                    // console.log(response)
                    const jsonData = await response.json();
                    console.log(jsonData)
                }
                logData()
                console.log({
                    sort: activeSort,
                    categ: activeCategories,
                    name: inputValue
                })}

    })
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