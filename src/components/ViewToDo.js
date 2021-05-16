import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from 'react-bootstrap';
import TodoItems from './todoItems';
import {
  retrieveTodo,
} from "../actions/todo";

const TodoList = () => {
  
  const [currentTodo, setcurrentTodo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const { todo } = useSelector(
    state => ({
        todo: state.todo,
    })
  );

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveTodo())
    .then(data => {
      if(data){
       setLoading(false); 
      }
   })
   .catch(e => {
       console.log(e);
   });
  }, [dispatch]);

  const setActiveTodo = (todo, index) => {
    setcurrentTodo(todo);
    setCurrentIndex(index);
  };

  return (
    <div>

        <Container style={{backgroundColor: '#F2F2F2', padding : 20, marginTop: 20, boxShadow: "2px 6px 8px #EBEBEB" }}>
            <Row>
            <Col>
                <h6>MY TODO LIST</h6>
            </Col>
            </Row>

            {loading ? <div>Loading...</div> :
            <Row>
            <Col sm={12}>
                <ul className="list-group">
                {
                    todo.map((todoData, index) => ( 
                    <li
                        className={
                        "list-group-item listItems " + (index === currentIndex ? "actives" : "")
                        }
                        onClick={() => setActiveTodo(todoData, index)}
                        key={index}
                    >
                        <TodoItems {...todoData} current={currentTodo}/>
                                                    
                    </li>
                    ))}
                </ul>
            </Col>
            </Row>
            }
        </Container>

    </div>
  );
};

export default TodoList;