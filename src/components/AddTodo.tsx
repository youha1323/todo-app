import React from 'react';

type Props = {
  value: string;
  onChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
  add:()=>void
}

const AddTodo: React.FunctionComponent<Props> = (props) => {
  return(
    <div>
      <input type="text" value={props.value} onChange={props.onChange} />
      <button onClick={props.add}>追加</button>
    </div>
  );
};

export default AddTodo;