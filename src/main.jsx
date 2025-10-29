import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Cuadricula from './components/Cuadricula.jsx'
import Saludo from './components/Saludo.jsx'
import Pagina404 from './components/404.jsx'
import './main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/menu/Menu.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Cuadricula />} />
                    <Route path="saludo" element={<Saludo />} />
                </Route>
                <Route path="*" element={<Pagina404 />} />
            </Routes>
        </BrowserRouter>
    </>
)