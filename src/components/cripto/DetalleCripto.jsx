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
    }, [])

    useEffect(() => {
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
        <>
            <h1>Detalle de la criptomoneda {parametros.id}</h1>
            <div className="info">
                <ul>
                    <li><span className="label">Nombre: </span>{datosMoneda.name}</li>
                    <li><span className="label">Símbolo: </span>{datosMoneda.symbol}</li>
                    <li><span className="label">Precio USD: </span>{parseFloat(datosMoneda.priceUsd).toFixed(3)}</li>
                    <li><span className="label">Variación 24h: </span>{parseFloat(datosMoneda.changePercent24Hr).toFixed(2)}</li>
                </ul>
                <h2>Valor histórico de {parametros.id}</h2>
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
                                <td>{date}</td>
                                <td>{parseFloat(priceUsd).toFixed(3)}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Link to="/criptomonedas">Volver...</Link>
            </div>
        </>
    )
}

export default DetalleCripto