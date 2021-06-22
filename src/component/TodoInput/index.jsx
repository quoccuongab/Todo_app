import { Button, Input } from 'antd';
import React from 'react';
import { useState } from 'react';
import { addTodo } from '../../redux/actions';
import './style.scss';
import { useDispatch } from 'react-redux';
import { v1 as uuid } from 'uuid';

function TodoInput(props) {
    const [name, setName] = useState();
    let dispatch = useDispatch();
    return (
        <div className="todo-input">
            <input
                type="text"
                name=""
                id=""
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <Button type="danger"
                onClick={() => {
                    dispatch(addTodo(
                        {
                            id: uuid(),
                            name: name,
                        }
                    ))
                    setName('');
                }
                }
            >
                Add</Button>
        </div >
    );
}

export default TodoInput;