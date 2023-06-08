import SearchZone from './components/SearchZone';
import ResultZone from './components/ResultZone';
import { useState } from 'react';

function App() {
    const [data, setData] = useState({}) 
    const [offset, setOffset] = useState(0) 
    const [newRequest, setNewRequest] = useState(false)
    const handleDataChange = (data) => {
      setData(data)
      console.log(data)
    }
    const handleButtonClick = () => {
      setOffset(offset + 30)
      setNewRequest(false)
    }
    const handleOptionsChange = () => {
      setOffset(0)
      setNewRequest (true)
    }
    
  return (
    <div className="App">
      <SearchZone className='searchZone' onResponse = {handleDataChange} offset={offset} onInputChange={handleOptionsChange}/>
      <ResultZone data = {data} newRequest={newRequest}  onClick={handleButtonClick}/>
    </div>
  );
}
  
export default App;
