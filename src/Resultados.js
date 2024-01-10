import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Resultados(props) {
  return (
    <div>
      <ul id="resultados">
        {props.resultado.map((item) => {
          return (
            <li key={item.id}>
              <p>
                Nombre: <b>{item.firstName} </b>
                {item.lastName}
              </p>
              <p>Email: {item.email}</p>
              <p>
                <img
                  src={item.image}
                  alt={"imagen del usuario" + item.firstName}
                />
              </p>
              <Link to={`/users/${props.resultado.indexOf(item)}`}>
              <Button variant="success">Ver Usuario</Button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
