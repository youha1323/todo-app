import React from 'react';

type Props = {
  content:string;
  onDelete: () => void;
}

const TodoElement:React.FunctionComponent<Props> = (props) => {
  return(
    <li>
      {props.content}
      <button onClick={props.onDelete}>削除</button>
    </li>
  );
};

export default TodoElement;