import { useState } from "react"
import { useEffect } from "react"

function App() {

  const [criptos, setCriptos] = useState([])
  
  useEffect(() => {
    fetch("https://rest.coincap.io/v3/assets", {
      method: "GET",
      headers: {
        "Authorization": "Bearer 71d696c17b2aa65159d43cd36c081a429fa4e9b1844f2af3b18bc87fa3fe0c54"
      }})
      .then((respuesta) => respuesta.json())
      .then((data) => setCriptos(data.data))
      .catch(
        (error) => console.log("La petición falló. Error: " + error)
      )
  }, [])

  if (criptos.length == 0) return (<h1>Cargando datos...</h1>)

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <ul>
        {criptos.map(({name, symbol, priceUsd}) => (
          <li>Nombre: {name} - Símbolo: {symbol} - Precio (USD): {priceUsd}</li>
        ))}
      </ul>
    </>
  )
}

export default App