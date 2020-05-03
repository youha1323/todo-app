import React from 'react';
import { useState } from 'react';
/*import ReactDOM from 'react-dom';*/
import TodoElement from './Atoms/TodoElement';
import AddTodo from './Atoms/AddTodo';

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

  return(
    <div>
      <h1>TodoApp</h1>
      <div>
        <AddTodo value={value} onChange={handleChange} add={add} />
        <ul>
          {todoList.map(todo => (
            <TodoElement key={todo.id}
              content={todo.content}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;