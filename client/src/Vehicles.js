import React, {useEffect, useState} from "react"
import VehicleCard from "./VehicleCard"

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
            {vehicles.map(v => <VehicleCard vehicle={v} key={v.id} /> )}
        </div>
    )
}
//render all vehicle cards
export default Vehicles