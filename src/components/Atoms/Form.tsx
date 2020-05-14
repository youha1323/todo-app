import React from 'react';

type Props = {
  value: string;
  onChange:(e: React.FormEvent<HTMLInputElement>) => void;
}


const Form : React.FunctionComponent<Props> = (props) => {  
  const { value, onChange } = props;
  return (
    <div>
      type=text onChange={onChange} value={value}
    </div> 
  )
}

export default Form;