import React from 'react';
import { useState } from 'react';
/*import ReactDOM from 'react-dom';*/
import TodoElement from './TodoElement';
import AddTodo from './AddTodo';
import CountApp from './CountApp';

const App = () => {
  const[value, setValue] = useState("");
  const[todoList, setTodoList] = useState([]);

  const handleChange = e => {//classベースならhandleChange(e) {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const add = () => {
    const newTodo = { id: todoList.length, content: value };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setValue("");
  };

  const handleDelete = id => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };

  return(
    <div>
      <h1>TodoApp</h1>
      <div>
        <AddTodo value={value} onChange={handleChange} add={add} />
        <ul>
          {todoList.map(todo => (
            <TodoElement key={todo.id}
              content={todo.content}
              onDelete={() => handleDelete(todo.id)}
            />
          ))}
        </ul>
      </div>
      <CountApp />
    </div>
  );
};

export default App;