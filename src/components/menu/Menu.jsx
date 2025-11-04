import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { NavLink } from "react-router-dom"
import "./Menu.css"

const Menu = () => {
    
    const usuario = useContext(UserContext)

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