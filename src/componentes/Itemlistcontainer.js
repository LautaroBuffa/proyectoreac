import React, { useState, useEffect } from "react";
import {getProducts} from "./products";
import Itemlist from "./Itemlist";
const Itemlistcontainer = () => {
  const [datos, setDatos] = useState ([])
  useEffect (() => {
    getProducts ().then(data => setDatos (data));
  }, [])
  return (
  <div>

<h3>Nuestros Productos</h3>
<Itemlist products={datos}/>
  </div>
  );
}

  export default Itemlistcontainer;