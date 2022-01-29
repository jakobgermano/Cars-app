import React, {useEffect, useState} from "react"
import VehicleCard from "./VehicleCard"
import VehicleForm from "./VehicleForm"
import {Link} from 'react-router-dom';

function Vehicles({driver}) {
    const [vehicles, setVehicles] = useState([])

    function removeVehicle(vehicle) {
        setVehicles((vehicles) => vehicles.filter(v => v.id !== vehicle.id))

    }

    function addVehicle(vehicle) {
        setVehicles([...vehicles, vehicle])
    }
    
    function editVehicle(vehicle) {
        const edited = vehicles.map(v => {
            if (vehicle.id === v.id) {
                return vehicle
            }
            return v
        })
        setVehicles(edited)
        
    }

    useEffect(()=> {
        fetch("/vehicles")
        .then((r) => r.json())
        .then(setVehicles)
    }, [])

    
    return(
        <div>
            <h1>Vehicles</h1>
            <Link to={'/about'}>About site</Link>
            {vehicles.map(v => <VehicleCard editVehicle={editVehicle} vehicle={v} key={v.id} removeVehicle={removeVehicle} /> )}
            <VehicleForm driver={driver} addVehicle={addVehicle} driver={driver}/>
            
        </div>
    )
}
//render all vehicle cards
export default Vehicles