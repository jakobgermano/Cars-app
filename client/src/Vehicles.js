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
        fetch(`/drivers/${driver.id}`)
        .then((r) => r.json())
        .then((d) => {
            setVehicles(d.vehicles)
        })
    }, [])

    
    return(
        <div>
            <h1>Vehicles</h1>
            <Link to={'/about'}>About site</Link>
            <br></br>
            <Link to={'/brand'}>Brand Reference</Link>
            {vehicles.map((v) =>
            <VehicleCard vehicle = {v} key={v.id} driver={driver} editVehicle={editVehicle} removeVehicle={removeVehicle}/>)}
            <VehicleForm driver={driver} addVehicle={addVehicle} driver={driver}/>
            
        </div>
    )
}
//render all vehicle cards
export default Vehicles;