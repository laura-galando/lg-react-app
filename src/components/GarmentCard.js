function GarmentCard (props) {
    return (
    <div className="bg-light border p-4 m-2">
        <h4>{props.garment.name}</h4>
        <p>{props.garment.color}</p>
        <p>{props.garment.price}</p>
        </div>
    );
}

export default GarmentCard
