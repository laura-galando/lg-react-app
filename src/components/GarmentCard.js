import { Link } from 'react-router-dom';

function GarmentCard ({ garment }) {
    return (
    <div className="bg-light border p-4 m-2">
        <h4>{garment.name}</h4>
        <p>{garment.color}</p>
        <p>{garment.price}</p>
        <img src={garment.image} alt={garment.name} className="img-fluid" />
        <Link to={`/garments/${garment.id}`}>Details</Link>
        </div>
    );
}

export default GarmentCard
