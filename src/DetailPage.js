import { useParams } from 'react-router-dom'

export default function DetailPage({ garmentsList }) {
    // const garmentId = 2
    let { garmentId } = useParams()
    garmentId = parseInt(garmentId)

    const garment = garmentsList.find(g => g.id === garmentId)
    // console.log('Garment:', garment);

    if (!garment) {
        return <h2>Garment Not Found</h2>
    }
    
        return (
            <div>
                <h3>{ garment.name }</h3>
                <p>{ garment.category }</p>
                <p>{ garment.color }</p>
            </div>
        );
}    
