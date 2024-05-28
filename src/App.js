import { useState } from "react";
import HomePage from "./components/HomePage";
import  DetailPage  from './DetailPage';
import { AboutPage } from "./components/AboutPage";
import { TEST_GARMENTS } from "./TEST_GARMENTS";
import { Link, Route, Routes } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';



function App() {
  const [garmentsList, setGarmentsList] = useState( TEST_GARMENTS )

  return (
      <div>
      <Navbar bg="dark" data-bs-theme="dark">
      <Container>
      <Navbar.Brand as={Link}to="/">TBD App Name</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <Container className="mt-4">
      <Routes>
        <Route path="/" element={<HomePage garmentsList={garmentsList} />} />
        <Route path="/garments/:garmentId" element={<DetailPage garmentsList={garmentsList} />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      </Container>
    </div>
  );
}


export default App;