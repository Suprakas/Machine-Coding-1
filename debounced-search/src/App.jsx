import { useState } from 'react'

import './App.css'
import useDebounce from './hooks/useDebounce';

function App() {
  
const [search, setSearch] = useState("");

const debouncedValue = useDebounce(search, 2000);

  return (
    <div className='App'>
      <input value={search} onChange={(e) => setSearch(e.target.value)}/>
      <hr/>
     <h2>Normal : {search} </h2>
     <hr/>
     <h2>Debounced Search Value : {debouncedValue}</h2>
    </div>
  )
}

export default App
