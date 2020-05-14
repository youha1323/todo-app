import React from 'react';

type Props = {
  label : string;
  onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

const Button :React.FunctionComponent<Props> = (props) => {
  const {label, onClick} = props;
  return (
    <div>
      onClick={onClick}
      {label}
    </div>
  )
}

export default Button;