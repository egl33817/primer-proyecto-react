import { Outlet, Navigate } from "react-router-dom"
import Menu from "./components/menu/Menu"

const App = () => {

    if (!localStorage.getItem("tokenCriptoMarket")) return <Navigate to="/login" />
    
    return (
        <>
            <Menu />
            <Outlet />
        </>
    )
}

export default App