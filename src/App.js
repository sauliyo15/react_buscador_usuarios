import { useState } from 'react';
import './App.css';

import Header from './Header';
import Resultados from './Resultados';
import {mock1} from './constants/users.js';

function App() {

  const [query, setQuery] = useState("");
  const [resultado, setResultado] = useState(null);

  const callServer = () => {
    console.log("CLICK BUTTON");
    setResultado(mock1.users);
  }

  return (
    <div id='main'>
      <Header/>
      
      <h2 id='buscador'>Buscador de usuarios</h2>
      
      <input type='text' id='query' value={query} onChange={e=>setQuery(e.target.value)} placeholder='Texto a buscar'/>
      
      <button id='botonSearch' onClick={()=>callServer()}>Buscar</button>

      {resultado && <Resultados resultado={resultado}/>}

      
    </div>
  );
}

export default App;
