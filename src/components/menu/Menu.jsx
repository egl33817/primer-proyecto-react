import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import "./Menu.css"

const Menu = () => {

    const [usuario, setUsuario] = useState({})

    useEffect(() => {
        setUsuario({
            nombre: "Robertiño",
            fechaRegistro: "04/11/2025"
        })
    }, [])
    
    return (
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/criptomonedas">Lista de criptos</NavLink></li>
                <li><NavLink to="/perfil">Perfil de {usuario.nombre}</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu