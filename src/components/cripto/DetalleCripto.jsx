import { useParams } from "react-router-dom"
import usePetition from "../hooks/usePetition.js"
import CriptoInfo from "./CriptoInfo.jsx"
import CriptoHistorial from "./CriptoHistorial.jsx"
import "./DetalleCripto.css"

const DetalleCripto = () => {
    
    const parametros = useParams()

    const datosMoneda = usePetition(`${parametros.id}`)
    const datosHistoricos = usePetition(`${parametros.id}/history?interval=d1`)

    return (

        <div className="cripto-page-container">
            {
                datosMoneda && <CriptoInfo datosMoneda={datosMoneda} />
            }
            {
                datosHistoricos && <CriptoHistorial datosHistoricos={datosHistoricos} />
            }
        </div>

    )
}

export default DetalleCripto