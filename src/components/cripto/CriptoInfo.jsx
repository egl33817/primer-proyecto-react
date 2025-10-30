import { Link } from "react-router-dom"

const CriptoInfo = ({datosMoneda}) => {
    
    return (
                 
        <div className="info">

            <div className="main-info">
                <span>Ranking: {datosMoneda.rank}</span>
                <h1>{datosMoneda.name}</h1>
                <span className="symbol">{datosMoneda.symbol}</span>
            </div>

            <div className="details">
                <ul>
                    <li className="detail">
                        <span className="label">Precio (USD): </span>
                        <span>{parseFloat(datosMoneda.priceUsd).toFixed(3)}</span>
                    </li>
                    <li className="detail">
                        <span className="label">MaxSupply: </span>
                        <span>{parseFloat(datosMoneda.maxSupply).toFixed(3)}</span>
                    </li>
                    <li className="detail">
                        <span className="label">Market Cap (USD): </span>
                        <span>{parseFloat(datosMoneda.marketCapUsd).toFixed(3)}</span>
                    </li>
                    <li className="detail">
                        <span className="label">Volumen (USD - 24h): </span>
                        <span>{parseFloat(datosMoneda.volumeUsd24Hr).toFixed(3)}</span>
                    </li>
                    <li className="detail">
                        <span className="label">Variación (24h): </span>
                        <span>{parseFloat(datosMoneda.changePercent24Hr).toFixed(3)}</span>
                    </li>
                    <li className="detail">
                        <span className="label">Vwap (24h): </span>
                        <span>{parseFloat(datosMoneda.vwap24Hr).toFixed(3)}</span>
                    </li>
                </ul>
            </div>
            <Link to="/criptomonedas">Volver...</Link>
        </div>
    )
}

export default CriptoInfo