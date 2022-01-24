import React, {useEffect, useState} from "react"

function Vehicles() {
    const [vehicles, setVehicles] = useState([])

    useEffect(()=> {
        fetch("/vehicles")
        .then((r) => r.json())
        .then(setVehicles)
    }, [])

    
    return(
        <div>
            <h1>Vehicles</h1>
            {vehicles.map((v) => <VehicleCard vehicle={v}/> )}
        </div>
    )
}
//render all vehicle cards
export default Vehicles