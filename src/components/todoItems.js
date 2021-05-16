import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Row, Col } from 'react-bootstrap';
import {
    updateTodo,
    retrieveTodo,
    deleteTodo
} from "../actions/todo";

const TodoList = (todoItem) => {
  
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const dispatch = useDispatch();

  const showStatus = todo => {
    var d1 = new Date();
    var d2 = new Date(todo.date);

        if(todo.status==="pending"){
            if(d1.toLocaleDateString() > d2.toLocaleDateString()){
                return (<div className="dueItem">DUE</div>)
            } else {
                return (<div  className="pendingItem">{todo.status}</div>)
            } 
        } else if(todo.status==="completed"){
            return (<div  className="completedItem">{todo.status}</div>)
        }  
    }

    const showCompleteBtn = (todo) => {
        if(todo.status!=="completed"){
            return false;
        } else {
            return true;
        }
    }
    
    const complete = (todo) =>{
        setLoading(true);
        const data = {
            id: todo._id,
            title: todo.title,
            status: 'completed',
        };

        dispatch(updateTodo(todo._id, data))
        .then(response => {
            dispatch(retrieveTodo())
            setLoading(false);
        })
        .catch(e => {
            console.log(e);
        });
    }

    const deleteItem = (todo) =>{
        setDeleteLoading(true);

        dispatch(deleteTodo(todo._id))
        .then(response => {
            dispatch(retrieveTodo())
            setDeleteLoading(false);
        })
        .catch(e => {
            console.log(e);
        });
    }

  return (
    <div>

            <Row>
                <Col sm={2}><div className="todoStatus">{showStatus(todoItem)}</div></Col>

                <Col sm={6}><div className="todoTitle"><h6>{todoItem.title}</h6></div>
                    <Row>
                        <Col sm={6}><div className="todoDate">{todoItem.date}</div></Col>
                    </Row>
                </Col>

                <Col sm={4}>
                    <Row>
                        <Col sm={6}><div className="actionBtnDiv">
                            {showCompleteBtn(todoItem) ? <div></div> :
                            <div>
                                {loading ? <div>Loading...</div> : 
                                <button type="button" className="btn btn-success btn-sm actionBtnSuccess" onClick={() => complete(todoItem)} >Complete</button>
                                }
                            </div>
                            }
                            </div>
                        </Col>
                        <Col sm={6}><div className="actionBtnDiv">
                                {deleteLoading ? <div>Loading...</div> : 
                                    <button type="button" className="btn btn-danger btn-sm actionBtnDelete" onClick={() => deleteItem(todoItem)} >Delete</button>
                                }
                                </div>
                        </Col>
                    </Row>
                </Col>
            </Row>


    </div>
  );
};

export default TodoList;