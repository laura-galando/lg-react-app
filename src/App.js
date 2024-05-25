import React from 'react'
import GameCard  from './GameCard'

const gamesList = [
  {
    id: 0,
    name: 'Sweater 1',
    rating: null,
    category: "Pullovers",
    price: "$99",
    color: 'Green'
  },
  {
    id: 1,
    name: 'Sweater 2',
    rating: null,
    category: "Vest",
    price: "$99",
    color: 'Green'
  },
  {
  id: 2,
  name: 'Sweater 3',
  rating: null,
  category: "Skirts",
  price: "$99",
  color: 'Green'
}
]

function App() {
  return (
    <div>
      <h1>LG App</h1>
      { gamesList.map( g => <GameCard game={g} /> )}
      </div>
  );
}

export default App;
