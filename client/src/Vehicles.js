import React, {useEffect, useState} from "react"
import VehicleCard from "./VehicleCard"
import VehicleForm from "./VehicleForm"

function Vehicles({driver}) {
    const [vehicles, setVehicles] = useState([])

    function removeVehicle(vehicle) {
        setVehicles((vehicles) => vehicles.filter(v => v.id !== vehicle.id))

    }

    function addVehicle(vehicle) {
        setVehicles([...vehicles, vehicle])
    }
    
    useEffect(()=> {
        fetch("/vehicles")
        .then((r) => r.json())
        .then(setVehicles)
    }, [])

    
    return(
        <div>
            <h1>Vehicles</h1>
            {vehicles.map(v => <VehicleCard vehicle={v} key={v.id} removeVehicle={removeVehicle} /> )}
            <VehicleForm driver={driver} addVehicle={addVehicle}/>
        </div>
    )
}
//render all vehicle cards
export default Vehicles