import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Cuadricula from './components/Cuadricula.jsx'
import Home from './Home.jsx'
import Pagina404 from './components/404.jsx'
import DetalleCripto from './components/cripto/DetalleCripto.jsx'
import Perfil from './components/usuarios/Perfil.jsx'
import Login from './components/usuarios/Login.jsx'
import { UserContextProvider } from './contexts/UserContext.jsx'
import './main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="perfil" element={<Perfil />} />
                </Route>
                <Route path="/criptomonedas" element={<App />}>
                    <Route index element={<Cuadricula />} />
                    <Route path=":id" element={<DetalleCripto />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Pagina404 />} />
            </Routes>
        </BrowserRouter>
    </UserContextProvider>
)