import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GarmentCard from './GarmentCard'

export default function HomePage({ garmentsList }) {
  const [categoryFilter, setCategoryFilter] = useState('All')

  let filteredGarments
  if (categoryFilter === "All") {
    filteredGarments = garmentsList
  }  
  else {
    filteredGarments=garmentsList.filter(garment => garment.category === categoryFilter)
  }
 
  return (
    <div>
      <div>
        <button className="btn btn-primary me-2" onClick={() => setCategoryFilter('All')}>All</button>
        <button className="btn btn-primary me-2" onClick={() => setCategoryFilter('Pullovers')}>Pullovers</button>
        <button className="btn btn-primary me-2" onClick={() => setCategoryFilter('Vest')}>Vests</button>
        <button className="btn btn-primary me-2" onClick={() => setCategoryFilter('Skirts')}>Skirts</button>
        <button className="btn btn-primary me-2" onClick={() => setCategoryFilter('UnderPinnings')}>Under Pinnings</button>
      </div>
      {filteredGarments.map(g => <GarmentCard garment={g}/>)}
    </div>
  );
}
