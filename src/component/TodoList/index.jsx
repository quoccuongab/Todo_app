import React from 'react';
import TodoItem from '../TodoItem';
import { useSelector } from 'react-redux';
import './style.scss';

function TodoList(props) {
    let todos = useSelector(state => state)
    return (
        <div>
            <div className="catalog">
                <div className="id">ID</div>
                <div className="name">Name</div>
                <div className="detail"> Details</div>
            </div>
            <hr />
            {todos.map(todo => {
                return <TodoItem key={todo.id} todo={todo} />
            })}
        </div>
    );
}

export default TodoList;