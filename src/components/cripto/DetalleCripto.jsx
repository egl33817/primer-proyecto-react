import { useParams, Link } from "react-router-dom"
import usePetition from "../hooks/usePetition.js"
import "./DetalleCripto.css"

const DetalleCripto = () => {
    
    const parametros = useParams()

    const datosMoneda = usePetition(`${parametros.id}`)
    const datosHistoricos = usePetition(`${parametros.id}/history?interval=d1`)

    return (
        <div className="cripto-page-container">

            {
                datosMoneda && (
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
                    </div>
                )
            }
            
            <div className="history">
                {
                    datosHistoricos && (
                        <table className="history">
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Precio (USD)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datosHistoricos.map(({date, priceUsd, time}) => 
                                    <tr key={time}>
                                        <td className="label">{new Date(date).toDateString()}</td>
                                        <td className="price">{parseFloat(priceUsd).toFixed(3)}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )
                }
                <Link to="/criptomonedas">Volver...</Link>
            </div>
        </div>
    )
}

export default DetalleCripto