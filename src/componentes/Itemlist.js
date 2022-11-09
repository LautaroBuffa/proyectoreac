import React from "react";
import { Button, Card } from "react-bootstrap";

const Itemlist = ({ product }) => {
  return (
    <Card style={{ width: '18rem', background:"dimgrey" }} >
      <Card.Img variant="top" src={product.imagen} />
      <Card.Body>
        <Card.Title>{product.modelo}</Card.Title>
        <Card.Text>
          {product.Precio}
        </Card.Text>
        <Button variant="primary">Agregar al Carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default Itemlist;