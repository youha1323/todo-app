import React from 'react';
import Menu from '../Menu';
import GridArea from 'src/styles/GridArea';

type Props = {
  area: string
}
const UserArea: React.FC<Props> = (props) => {

  const {area} = props;

  return(
    <div>
      <GridArea area = {area}>
        <Menu />
      </GridArea>
    </div>
  );
}

export default UserArea;