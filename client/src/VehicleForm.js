import {useState} from "react"

function VehicleForm({driver, addVehicle}) {
    const [name, setName] = useState("")
    const[year, setYear] = useState(0)


    
    function handleSubmit(e) {
        e.preventDefault()
        fetch("/vehicles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                year,
                driver_id: driver.id
            }),
        })
        .then((r => r.json())
        .then(v => addVehicle(v))
        )}
    


    return (
        <div>
            <h1>Add Vehicle</h1>
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


export default VehicleForm 