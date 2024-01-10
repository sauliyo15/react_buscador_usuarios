import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";

export default function Usuario(props) {
  let { userId } = useParams();
  userId = parseInt(userId);

  // Verificar si productId es válido
  if (
    !props.resultados ||
    isNaN(userId) ||
    userId < 0 ||
    userId >= props.resultados.length
  ) {
    return <NotFound />;
  }

  let usuario = props.resultados[userId];

  return (
    <div id="resultados">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={usuario.image}
          style={{ width: "18rem", height: "15rem" }}
        />
        <Card.Body>
          <Card.Title id="titulo">{usuario.firstName}</Card.Title>
          <Card.Title id="titulo">{usuario.lastName}</Card.Title>
          <Card.Text>Email: {usuario.email}</Card.Text>
        </Card.Body>
        <br/>
        <Link to={"/"}>
        <Button
          id="volver"
          variant="success"
          style={{ width: "18rem", height: "3rem" }}
        >
          Volver atrás
        </Button>
      </Link>
      </Card>
    </div>
  );
}
