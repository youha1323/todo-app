import React from 'react';
import GridArea from 'src/styles/GridArea';
import UserInfo from '../UserInfo';

type Props = {
  area: string;
}

const UserArea: React.FC<Props> = (props) => {
  const {area} = props;

  return(
    <div>
      <GridArea area = {area}>
        <UserInfo />
      </GridArea>
    </div>
  );
}

export default UserArea;