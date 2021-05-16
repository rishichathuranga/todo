import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "../assets/css/style.css";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { createTodo } from "../actions/todo";

const AddTodo = () => {
     
    const initialTodoState = {
      id: null,
      title: "",
      date: "",
      status: ""
    };

    // Todo TextBox
    const todoTitle = useRef();
    const [todoDate, setTodoDate] = useState(new Date());
    const [todo, setTodo] = useState(initialTodoState);
    const [submitted, setSubmitted] = useState(false);
    const [getLoading, setLoading] = useState(false);
    const dispatch = useDispatch();
    
    const saveTodo =() => {
        setLoading(true);
        const title   = todoTitle.current.value;
        const status  = "pending";
        
        if(title===""){ alert('Title Cannot be blank'); } else {
          dispatch(createTodo(title, todoDate.toLocaleDateString(), status))
          .then(data => {
              setTodo({
                id: data._id,
                title: data.title,
                date: data.date,
                status: data.status
              });
              setLoading(false); 
              setSubmitted(true);
              console.log(todo);
          })
          .catch(e => {
              console.log(e);
          });
        
        }
    }

    const addNewTodo = () => {
        setTodo(initialTodoState);
        setSubmitted(false);
    };

    return (
    <div>
      <Container style={{backgroundColor: '#F2F2F2', padding : 20, boxShadow: "2px 6px 8px #EBEBEB" }}>
      {submitted ? (
      <Row>
        <Col>
          <Alert variant='light' className="alert">Todo created successfully!</Alert>
          <button className="btn btn-light" onClick={addNewTodo}>
            ADD NEW
          </button>
        </Col>
      </Row>
      ) : (
      <Row>
        <Col sm={6}>
            <input
              type="text"
              className="form-control textBox"
              required
              placeholder="Todo Item Title"
              ref={todoTitle} />
        </Col>
        <Col sm={4}>
          <DatePicker className="form-control" selected={todoDate} onChange={date => setTodoDate(date)} />
        </Col>
        <Col sm={2}>
          {getLoading ? <div>Loading...</div> : 
          <button onClick={saveTodo} className="btn btn-light customBtn">
            ADD NEW
          </button>
           }
        </Col>
      </Row> 
      )}
      </Container>
    </div>
    );
}

export default AddTodo;