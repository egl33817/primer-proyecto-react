import { useState, useEffect } from "react"

const Perfil = () => {

    const [usuario, setUsuario] = useState({})
    
        useEffect(() => {
            setUsuario({
                nombre: "Robertiño",
                fechaRegistro: "04/11/2025"
            })
        }, [])

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