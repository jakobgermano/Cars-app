function VehicleCard({vehicle}) {
    return(
        <div>
            <h1>{vehicle.name}</h1>
            year:{vehicle.year}
        </div>
    )

}

export default VehicleCard