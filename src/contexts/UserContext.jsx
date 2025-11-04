import { createContext, useEffect, useState } from "react"

const UserContext = createContext()

const UserContextProvider = ({children}) => {

    const [usuario, setUsuario] = useState({})

    useEffect(() => {
        setUsuario({
            nombre: "Robertiño",
            fechaRegistro: "04/11/2025"
        })
    }, [])

    return (
        <UserContext.Provider value={usuario}>
            { children }
        </UserContext.Provider>
    )

}

export { UserContext, UserContextProvider}