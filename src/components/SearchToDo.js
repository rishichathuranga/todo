import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Row, Col } from 'react-bootstrap';
import {
  search,
} from "../actions/todo";

export default function SearchToDo() {

    const [todoDate, setTodoDate] = useState(new Date());
    const [getLoading, setLoading] = useState(false);
    const todoTitle = useRef();
    const statusSelect = useRef();
    const dispatch = useDispatch();

    const searchData = () => {
        setLoading(true);
        const title = todoTitle.current.value;
        const dateValue = todoDate.toLocaleDateString();
        const status = statusSelect.current.value;
        var searchQuery = '';
        
        if(title.length>0){
            if(status==='all'){
                searchQuery = { title : title, date: dateValue };
            } else {
                searchQuery = { title : title, date: dateValue, status: status };
            }
            
        } else {

            if(status==='all'){
                searchQuery = { date: dateValue };
            } else {
                searchQuery = { date: dateValue, status: status };
            }
        }
        dispatch(search(searchQuery))
        .then(data => {
           if(data){
            setLoading(false); 
           }
        })
        .catch(e => {
            console.log(e);
        });

    };

    return (
        <div>
            <Container style={{backgroundColor: '#F2F2F2', padding :20, marginTop: 20, boxShadow: "2px 6px 8px #EBEBEB" }}>
            <Row>
            <Col>
                <h6>SEARCH</h6>
            </Col>
            </Row>

            

            <Row>
            <Col sm={4}>
                <input
                    type="text"
                    className="form-control textBox"
                    placeholder="Search by title"
                    ref={todoTitle}/>
            </Col>
            <Col sm={3}>
                <DatePicker className="form-control" selected={todoDate} onChange={date => setTodoDate(date)} />
            </Col>
            <Col sm={3}>
                <select ref={statusSelect} className="form-control textBox">
                    <option defaultValue value="all">All</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
            </Col>
            <Col sm={2}>

                {getLoading ? <div>Loading...</div> :
                <button
                className="btn btn-light customBtn"
                type="button"
                onClick={searchData}>
                    Search
                </button>
                }
            </Col>
            </Row>

            
            </Container>
        </div>
    )
}
