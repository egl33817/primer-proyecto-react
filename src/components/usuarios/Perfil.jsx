import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

const Perfil = () => {

    const usuario = useContext(UserContext)

    return (
        <div className="perfil-container">
            <h1>Perfil de { usuario.nombre }</h1>
            <div>
                Usuario desde: { usuario.fechaRegistro}
            </div>
        </div>
    )
}

export default Perfil