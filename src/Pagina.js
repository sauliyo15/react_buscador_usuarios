import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Resultados from "./Resultados";

import { Spinner } from "react-bootstrap";

export default function Pagina(props) {
  return (
    <div>
      <Form.Control
        size="lg"
        type="text"
        placeholder="Usuario a buscar"
        value={props.busqueda}
        onChange={(e) => props.buscar(e.target.value)}
        style={{ width: "100%" }}
      />
      <br />
      {props.resultados && (
        <div>
          <Resultados resultado={props.resultados} />
          {props.hayMas ? (
            <Button variant="dark" onClick={props.cargarMas}>
              Cargar más
            </Button>
          ) : (
            <h2>No hay más datos para mostrar</h2>
          )}
          <br />
        </div>
      )}
      {props.cargando && (
        <div>
          <br />
          <Spinner animation="border" role="status">
            <span className="sr-only">Cargando...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
}
