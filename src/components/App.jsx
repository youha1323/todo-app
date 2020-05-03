import React from 'react';
/*import ReactDOM from 'react-dom';*/
import Button from './Atoms/Button';
import CountApp from './Atoms/CountApp';
import { useState } from 'react';

const App = () => {

  const[value,setValue] = useState("");

  const handleChange = e => {//classベースならhandleChange(e) {
    const newValue = e.target.value;
    setValue(newValue);
  };
  return(
    <div>
      <h1>TodoApp</h1>
      <input type="text" value={value} onChange= {handleChange} />
  <p>{value}</p>
      <Button />
      <CountApp />
    </div>
  );
}

export default App;