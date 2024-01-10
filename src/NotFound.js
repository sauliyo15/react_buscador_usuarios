import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound(props) {
  
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/404.jpg"} alt="logo" style={{ width: "25rem", height: "18rem" }} />
      <br />
      <h2 id="info">Ruta no encontrada</h2>
      <br />
      <Link to={"/"}>
        <Button id="volver" variant="success" style={{ width: "15rem", height: "3rem" }}>
          Volver atrás
        </Button>
      </Link>
    </div>
  );
}