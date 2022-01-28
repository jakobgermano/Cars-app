function VehicleCard({vehicle, removeVehicle}) {

    function handleDelete(vehicle) {
        fetch(`/vehicles/${vehicle.id}`, 
     {method: "DELETE"}).then(r => {
       removeVehicle(vehicle)
     })
   }


    return(
        <div>
            <h1>{vehicle.name}</h1>
            year:{vehicle.year}
            <br></br>
            <button onClick={e => handleDelete(vehicle)}> Delete </button>
        </div>
    )

}

export default VehicleCard