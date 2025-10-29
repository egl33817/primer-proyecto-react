import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Cuadricula from './components/Cuadricula.jsx'
import Home from './Home.jsx'
import Pagina404 from './components/404.jsx'
import DetalleCripto from './components/cripto/DetalleCripto.jsx'
import './main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/criptomonedas" element={<App />}>
                    <Route index element={<Cuadricula />} />
                    <Route path=":id" element={<DetalleCripto />} />
                </Route>
                <Route path="*" element={<Pagina404 />} />
            </Routes>
        </BrowserRouter>
    </>
)