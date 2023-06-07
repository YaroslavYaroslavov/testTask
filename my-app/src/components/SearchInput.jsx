const SearchInput = (props) => {
   const  handleInputChange = (event) =>{
    if(event.key === 'Enter')
            props.onChange(event.target.value)
    }
    return(
    <div className="searchInput">
        <input onKeyDown={handleInputChange} type="text" placeholder="Name of book..."/>
        <div className="searchIco"></div>
    </div>
    ) 
}
export default SearchInput