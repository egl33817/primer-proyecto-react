const CriptoHistorial = ({datosHistoricos}) => {

    return (
        
        <div className="history">
            {
                datosHistoricos && (
                    <table className="history">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Precio (USD)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datosHistoricos.map(({date, priceUsd, time}) => 
                                <tr key={time}>
                                    <td className="label">{new Date(date).toDateString()}</td>
                                    <td className="price">{parseFloat(priceUsd).toFixed(3)}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )
            }
                
        </div>
    )
}

export default CriptoHistorial