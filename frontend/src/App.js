import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home';
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import ListUser from "./pages/listUser";

function App() {
  return (
  
  <>
    <Navbar bg="secondary">
      <Container>
      <Link to={"/"} className="navbar-link text-white">
          Página inicial
        </Link>
        <Link to={"/create"} className="navbar-link text-white">
          Novo Usuário
        </Link>
      </Container>
    </Navbar>

    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/edit/:id/" element={<EditUser />} />
            <Route path='/list/:id' element={<ListUser />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  </>
  
  );
}

export default App;