import React, {useState} from "react";

function EditForm({vehicle, editVehicle}) {
    const [name, setName] = useState(vehicle.name)
    const[year, setYear] = useState(vehicle.year)

    function handleSubmit(e) {
        e.preventDefault()
        setName("")
        setYear(0)
        fetch(`/vehicles/${vehicle.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                year,
                vehicle_id: vehicle.id
            }),
        })
        .then(r => r.json())
        .then(v => editVehicle(v))
    }

return (
    <div>
        <form onSubmit={handleSubmit}>
                <label> Name </label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)}/>
                <label>Year</label>
                <input type="text" id="name" value={year} onChange={e => setYear(e.target.value)}/>
                <input type="submit"/>
            </form>
    </div>
)
}

export default EditForm