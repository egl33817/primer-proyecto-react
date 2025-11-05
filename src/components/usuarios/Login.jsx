import { useState } from "react"
import { useNavigate, Navigate } from "react-router-dom"
import "./Login.css"

const Login = () => {

    const navegación = useNavigate()

    const [usuario, setUsuario] = useState({
        email: "",
        password: ""
    })

    const iniciarSesión = (e) => {
        
        e.preventDefault()
        console.log(usuario)

        fetch("https://reqres.in/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "reqres-free-v1"
                },
                body: JSON.stringify(usuario)
            }
        )
        .then((respuesta) => respuesta.json())
        .then((data) => {
            console.log(data)
            localStorage.setItem("tokenCriptoMarket", data.token)
            navegación("/")
        }       
        )
        .catch(
            (error) => console.log("La petición falló. Error: " + error)
        )

    }

    if (localStorage.getItem("tokenCriptoMarket")) return <Navigate to="/" />

    return (
        <div className="login-container">
            <h1>Iniciar sesión</h1>
            <form onSubmit={iniciarSesión}>
                <div className="field">
                    <label htmlFor="email">Correo electrónico: </label>
                    <input onChange={(e) => setUsuario({ ...usuario, email: e.target.value })} 
                            type="email" name="email" />
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña: </label>
                    <input onChange={(e) => setUsuario({ ...usuario, password: e.target.value })} 
                            type="password" name="password" />
                </div>
                <div className="submit">
                    <input type="submit" value="Iniciar sesión" />
                </div>
            </form>
        </div>
    )

}

export default Login