import SearchZone from './components/SearchZone';
import ResultZone from './components/ResultZone';
import { useState } from 'react';

function App() {
    const [data, setData] = useState({}) 
    const [offset, setOffset] = useState(0) 
    const [newSearch, setNewSearch] = useState(true)
    const handleDataChange = (data) => {
      setData(data)
      console.log(data)
    }
    const handleButtonClick = () => {
      setNewSearch(false)
      setOffset(offset + 30)

    }
    const handleOptionsChange = () => {
      setOffset(0)
      setNewSearch(true) 
    }
    
  return (
    <div className="App">
      <SearchZone className='searchZone' onResponse = {handleDataChange} offset={offset} onInputChange={handleOptionsChange}/>
      <ResultZone data = {data}  newSearch = {newSearch}/>
      <button onClick={handleButtonClick} className='loadmore'>loadMore</button>
    </div>
  );
}
  
export default App;
