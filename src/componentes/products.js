import products from "./productos.json"

export const getProducts = () => {
  const autos = new Promise((resolve, reject) => {
    resolve (products)
  })
  
  return autos
}
