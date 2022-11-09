import React from "react";
function Itemlist ({products}) {
  return (
  <div>
{products.map(poduct => <p>{products.id}</p>)}
  </div>
  );
}

  export default Itemlist;