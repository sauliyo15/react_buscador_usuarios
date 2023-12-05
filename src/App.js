import { useState } from 'react';
import './App.css';

import Header from './Header';

function App() {

  const [query, setQuery] = useState("");

  const callServer = () => {
    console.log("CLICK BUTTON");
  }

  return (
    <div id='main'>
      <Header/>
      <h2 id='buscador'>Buscador de usuarios</h2>
      <input type='text' id='query' value={query} onChange={e=>setQuery(e.target.value)} placeholder='Texto a buscar'/>
      <button id='botonSearch' onClick={()=>callServer()}>Buscar</button>
    </div>
  );
}

export default App;
