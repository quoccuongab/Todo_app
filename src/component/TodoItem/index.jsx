import { Button } from 'antd';
import React, { useState } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../redux/actions';

function TodoItem(props) {
    const [editItem, setEditItem] = useState(false);
    const [name, setName] = useState('');

    let dispatch = useDispatch();


    const { todo } = props;
    return (
        <div className="todo-item">
            <div className="todo-item-table">
                <div className="todo-id">{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
                <div className="todo-name">{editItem ? (<input type="text" value={name} onChange={(e) => setName(e.target.value)} />) : <h5> {todo.name} </h5>}</div>
                <div className="group-button" >
                    <Button
                        type="primary"
                        onClick={() => {
                            dispatch(updateTodo({
                                ...todo,
                                name: name
                            }))
                            if (editItem) {
                                setName(todo.name)
                            };
                            setEditItem(!editItem)
                        }}>{editItem ? "Update " : 'Edit'}</Button>
                    <Button Button type="primary" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</Button>

                </div>

            </div>

        </div >
    );
}

export default TodoItem;