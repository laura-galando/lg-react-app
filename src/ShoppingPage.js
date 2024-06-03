import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GarmentCard from './GarmentCard'
import "../App.css";

export default function ShoppingPage({ garmentsList }) {
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
      <div className='setCategoryFilterContainer'>
        <button className="btn btn-primary me-2" onClick={() => setCategoryFilter('All')}>All</button>
        <button className="btn btn-primary me-2" onClick={() => setCategoryFilter('Pullovers')}>Pullovers</button>
        <button className="btn btn-primary me-2" onClick={() => setCategoryFilter('Vest')}>Vests</button>
        <button className="btn btn-primary me-2" onClick={() => setCategoryFilter('Skirts')}>Skirts</button>
        <button className="btn btn-primary me-2" onClick={() => setCategoryFilter('UnderPinnings')}>Under Pinnings</button>
      </div>
      <div className='product'>
      {filteredGarments.map(g => <GarmentCard garment={g}/>)}
      </div>
    </div>
  );
}

