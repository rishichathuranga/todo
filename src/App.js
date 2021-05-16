import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { Container, Row, Col } from 'react-bootstrap';
import AddToDo from './components/AddToDo';
import ViewToDo from './components/ViewToDo';
import SearchToDo from './components/SearchToDo';

export default function App() {
  return (
    <div>
    <Container>
      <Row>
        <Col><h4>TODO APPLICATION</h4></Col>
      </Row>

      <Row>
        <Col><AddToDo></AddToDo></Col>
      </Row>

      <Row>
        <Col><SearchToDo></SearchToDo></Col>
      </Row>

      <Row>
        <Col><ViewToDo></ViewToDo></Col>
      </Row>
    </Container>

    </div>
  )
}
