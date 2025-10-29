import { Link } from "react-router-dom"

const Home = () => {

    return (
        <>
            <h1>Hola, bienvenido a EDMarket</h1>
            <p>Conoce las 100 criptomonedas más populares del mercado</p>
            <Link to="/criptomonedas">Ver criptomonedas</Link>
        </>
    )
}

export default Home