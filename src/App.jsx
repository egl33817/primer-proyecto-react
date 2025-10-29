import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import Cripto from "./Cripto"
import "./App.css"

function App() {

  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState([])
  
  useEffect(() => {
    axios.get(`${API_URL}assets`, 
      { headers: { "Authorization": "Bearer 71d696c17b2aa65159d43cd36c081a429fa4e9b1844f2af3b18bc87fa3fe0c54" } })
      .then((data) => setCriptos(data.data.data))
      .catch(
        (error) => console.log("La petición falló. Error: " + error)
      )
  }, [])

  if (criptos.length == 0) return (<h1>Cargando datos...</h1>)

  return (
    <div className="app-container">
      <h1>Lista de criptomonedas</h1>
      <div className="cripto-container">
        {
          criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
            <Cripto key={id} name={name} priceUsd={priceUsd} symbol={symbol} changePercent24Hr={changePercent24Hr}/>
        ))}
      </div>
    </div>
  )
}

export default App