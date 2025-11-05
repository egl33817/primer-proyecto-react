import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { NavLink, useNavigate } from "react-router-dom"
import "./Menu.css"

const Menu = () => {
    
    const navegación = useNavigate()

    const usuario = useContext(UserContext)

    return (
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/criptomonedas">Lista de criptos</NavLink></li>
                <li><NavLink to="/perfil">Perfil de {usuario.nombre}</NavLink></li>
                <li><a onClick={() => {
                    localStorage.removeItem("tokenCriptoMarket")
                    navegación("/login")
                }} >Cerrar sesión</a></li>
            </ul>
        </nav>
    )
}

export default Menu