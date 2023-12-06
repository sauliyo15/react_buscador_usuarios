import { useState } from 'react';
import './App.css';

import Header from './Header';
import Resultados from './Resultados';
import {mock1} from './constants/users.js';
import CONFIG from './config/config.js';

function App() {

  const [query, setQuery] = useState("");
  const [resultado, setResultado] = useState(null);


  const callServer = async (param) => {
    
    if (CONFIG.use_server) {
      try {
        let queryparams;
        if (param === "all") {
          queryparams = "?limit=" + CONFIG.num_items;
        }
        else {
          queryparams = "/search?q=" + query;
        }
        const response = await fetch(CONFIG.server_url + queryparams);
        const data = await response.json();
        setResultado(data.users);
        
      } catch (error) {
        console.log(error);
      }
    }
    else {
      setResultado(mock1.users);
    }
  }

  return (
    <div id='main'>
      <Header/>
      
      <h2 id='buscador'>Buscador de usuarios</h2>
      
      <input type='text' id='query' value={query} onChange={e=>setQuery(e.target.value)} placeholder='Texto a buscar'/>
      
      <button id='botonSearch' onClick={()=>callServer()}>Buscar</button>
      <button id='botonall' onClick={()=>callServer("all")}>Buscar Todos</button>

      {resultado && <Resultados resultado={resultado}/>}

      
    </div>
  );
}

export default App;
