import React, {useState} from "react";
import EditForm from "./EditForm";

function VehicleCard({vehicle, removeVehicle, driver, editVehicle}) {
    const [editForm, setEditForm ] = useState(false)

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
            <button onClick={e => setEditForm(!editForm)}> Update </button>
            {editForm ?<EditForm editVehicle={editVehicle} vehicle={vehicle} driver={driver}/> : null }
        </div>
    )

}

export default VehicleCard