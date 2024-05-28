import { useState } from "react";
import HomePage from "./components/HomePage";
import { TEST_GARMENTS } from "./TEST_GARMENTS";
import { Link, Route, Routes } from 'react-router-dom';



function App() {
  const [garmentsList, setGarmentsList] = useState( TEST_GARMENTS )

  return (
    <div>
      <h1>LG App</h1>
        <Link to="/" className="btn-link me-3">Home</Link>
        <Routes>
          <Route path="/" element={<HomePage garmentsList={garmentsList} />} />
        </Routes>
      </div>
  );
}

export default App;