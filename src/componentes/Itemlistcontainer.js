import React, { useState, useEffect } from "react";
import { getProducts } from "./products";
import Itemlist from "./Itemlist";
import { Col, Row } from "react-bootstrap";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([])

  useEffect(() => {
    getProducts().then(data => setDatos(data));
  }, [])

  return (
    <div>
      <h3>Nuestros Autos</h3>
      <Row style={{gridgap: "5px"}}>
        {datos.map(product => <Col key={product.id}>
          <Itemlist product={product} />
        </Col>)}
      </Row>
    </div>
  );
}

export default ItemListContainer;