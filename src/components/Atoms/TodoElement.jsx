import React from 'react';

const TodoElement = props => {
  return(
    <li>
      {props.content}
    </li>
  );
};

export default TodoElement;