import { useState } from 'react';
import './App.css';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';


function App() {
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
