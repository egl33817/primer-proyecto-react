import Cripto from "./cripto/Cripto"
import "./Cuadricula.css"
import usePetition from "./hooks/usePetition.js"

function Cuadricula() {

  const criptos = usePetition("")

  if (!criptos) return (<h1>Cargando datos...</h1>)

  return (
    <div className="app-container">
      <h1>Lista de criptomonedas</h1>
      <div className="cripto-container">
        {
          criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
            <Cripto id={id} name={name} priceUsd={priceUsd} symbol={symbol} changePercent24Hr={changePercent24Hr}/>
        ))}
      </div>
    </div>
  )
}

export default Cuadricula