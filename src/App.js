import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import CONFIG from "./config/config.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagina from "./Pagina.js";
import NotFound from "./NotFound.js";
import Usuario from "./Usuario.js";
import { Route, Routes } from "react-router-dom";

function App() {
  const [datos, setDatos] = useState(null);
  const [resultados, setResultados] = useState(null);
  const [error, setError] = useState(null);
  const [skip, setSkip] = useState(0);
  const [hayMas, setHayMas] = useState(true);
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setCargando(true);
      try {
        let queryparams = `?limit=${CONFIG.num_items}&skip=${skip}`;

        const response = await fetch(CONFIG.server_url + queryparams);
        const data = await response.json();

        if (datos === null) {
          setDatos(data.users);
          setResultados(data.users);
        } else {
          setDatos([...datos, ...data.users]);
          setResultados([...datos, ...data.users]);
        }

        if (data.users.length === 0) {
          setHayMas(false);
        }
        setCargando(false);
      } catch (error) {
        console.error(error);
        setError({ description: error.message });
      }
    };

    fetchData();
  }, [skip]);

  const cargarMas = () => {
    setBusqueda("");
    setSkip((prevSkip) => prevSkip + CONFIG.num_items);
  };

  const buscar = (texto) => {
    setBusqueda(texto);
    setResultados(
      datos.filter((objeto) =>
        `${objeto.firstName.toLowerCase()}${objeto.lastName.toLowerCase()}`.includes(
          texto.toLowerCase()
        )
      )
    );
  };

  return (
    <div id="main">
      <Header texto="Buscador de usuarios" />
      <br />
      {error ? (
        <h1>Ha habido un error: {error.description}</h1>
      ) : (
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <Pagina
                  busqueda={busqueda}
                  buscar={buscar}
                  resultados={resultados}
                  hayMas={hayMas}
                  cargarMas={cargarMas}
                  cargando={cargando}
                />
              }
            />
            <Route
              path="/users/:userId"
              element={<Usuario resultados={resultados} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
      <br />
    </div>
  );
}

export default App;
