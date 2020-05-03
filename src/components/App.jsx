import React from 'react';
/*import ReactDOM from 'react-dom';*/
import CountApp from './Atoms/CountApp';
import { useState } from 'react';

const App = () => {
  const[value, setValue] = useState("");
  const[todoList, setTodoList] = useState([]);

  const handleChange = e => {//classベースならhandleChange(e) {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const addTask = () => {
    const newTodo = [...todoList, value];
    setTodoList(newTodo);
    setValue("");
  };

  return(
    <div>
      <h1>TodoApp</h1>
      <input type="text" value={value} onChange= {handleChange} />
      <button onClick={addTask}>追加</button>
      <ul>
        {todoList.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
      <CountApp />
    </div>
  );
};

export default App;