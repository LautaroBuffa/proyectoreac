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
      <h3 style={{
        backgroundColor:"grey",
        display:"flex",
        justifyContent:"center"
        }}>Nuestros Autos</h3>
      <Row>
        {datos.map(product => <Col style={{margin: "10px",
      marginTop:"5%"}} key={product.id}>
          <Itemlist product={product} />
        </Col>)}
      </Row>
    </div>
  );
}

export default ItemListContainer;