import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import Saludo from './components/Saludo.jsx'
import Pagina404 from './components/404.jsx'
import './main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/menu/Menu.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <Menu />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/saludo" element={<Saludo />} />
                <Route path="*" element={<Pagina404 />} />
            </Routes>
        </BrowserRouter>
    </>
)