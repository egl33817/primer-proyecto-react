import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "./DetalleCripto.css"

const DetalleCripto = () => {
    
    const API_URL = import.meta.env.VITE_API_URL

    const parametros = useParams()

    const [datosMoneda, setDatosMoneda] = useState([])
    const [datosHistoricos, setDatosHistoricos] = useState([])

    useEffect(() => {
        fetch(`${API_URL}assets/${parametros.id}`, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer 71d696c17b2aa65159d43cd36c081a429fa4e9b1844f2af3b18bc87fa3fe0c54"
                }}
        )
        .then((respuesta) => respuesta.json())
        .then((data) => setDatosMoneda(data.data))
        .catch(
            (error) => console.log("La petición falló. Error: " + error)
        )

        fetch(`${API_URL}assets/${parametros.id}/history?interval=d1`, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer 71d696c17b2aa65159d43cd36c081a429fa4e9b1844f2af3b18bc87fa3fe0c54"
                }}
        )
        .then((respuesta) => respuesta.json())
        .then((data) => setDatosHistoricos(data.data))
        .catch(
            (error) => console.log("La petición falló. Error: " + error)
        )
    }, [])

    return (
        <div className="cripto-page-container">

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

            <div className="history">
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
                <Link to="/criptomonedas">Volver...</Link>
            </div>
        </div>
    )
}

export default DetalleCripto