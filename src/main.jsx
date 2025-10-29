import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Saludo from './Saludo.jsx'
import Pagina404 from './404.jsx'
import './main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/saludo" element={<Saludo />} />
            <Route path="*" element={<Pagina404 />} />
        </Routes>
    </BrowserRouter>
)