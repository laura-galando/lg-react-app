import { useState } from "react";
import ShoppingPage from './pages/ShoppingPage'; // default export
import Detailpage from "./pages/Detailpage"; // default export
import { LandingPage } from './pages/LandingPage'; // named export
import { AboutPage } from './pages/AboutPage'; // named export
import { ShoppingCart } from './pages/ShoppingCart'; // named export
import { TEST_GARMENTS } from "./TEST_GARMENTS";
import { Link, Route, Routes } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [garmentsList, setGarmentsList] = useState(TEST_GARMENTS);

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Laura Galando</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/shopping">Shop</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/cart">
              <i className="fa fa-shopping-cart fa-xl"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shopping" element={<ShoppingPage garmentsList={garmentsList} />} />
          <Route path="/garments/:garmentId" element={<Detailpage garmentsList={garmentsList} />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;


