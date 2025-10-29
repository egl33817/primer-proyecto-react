import { useState, useEffect } from "react"

const usePetition = (endpoint) => {
    
    const API_URL = import.meta.env.VITE_API_URL

    const [datos, setDatos] = useState()
    
    useEffect(() => {
        fetch(`${API_URL}assets/${endpoint}`, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer 71d696c17b2aa65159d43cd36c081a429fa4e9b1844f2af3b18bc87fa3fe0c54"
                }}
        )
        .then((respuesta) => respuesta.json())
        .then((data) => setDatos(data.data))
        .catch(
            (error) => console.log("La petición falló. Error: " + error)
        )
    }, [])

    return datos

}

export default usePetition;