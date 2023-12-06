import { useState } from "react";
import "./App.css";

import Header from "./Header";
//import Formulario from "./Formulario.js";
import Resultados from "./Resultados";
import { mock1 } from "./constants/users.js";
import CONFIG from "./config/config.js";

function App() {
  const [query, setQuery] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);

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
        setError(null);

      } catch (error) {
        console.log(error);
        setError({ description: error.message });
      }
    } else {
      setResultado(mock1.users);
      setError(null);
    }
  };

  return (
    <div id="main">
      <Header />
      <h2 id="buscador">Buscador de usuarios</h2>
      
      <div>
        <input type="text" id="query" placeholder="Texto a buscar" value={query} onChange={e=>setQuery(e.target.value)}></input>
      </div>
			<br/>
      
      <button id="botonsearch" className="new" onClick={()=>callServer()}>Buscar</button>
      
      <button id="botonall" className="new" onClick={()=>callServer("all")}>Ver Todos</button>        		
      
      {error && <h1>Ha habido un error: {error.description}</h1>}
      
      {resultado && (<Resultados numitems={CONFIG.num_items} resultado={resultado} />)}
      
    </div>
  );
}

export default App;
