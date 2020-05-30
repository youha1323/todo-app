import React from 'react';
import GridArea from 'src/styles/GridArea';

type Props = {
  area: string;
}

const UserArea: React.FC<Props> = (props) => {
  const {area} = props;

  return(
    <div>
      <GridArea area = {area}>
        <h1>褒めるアプリ</h1>
      </GridArea>
    </div>
  );
}

export default UserArea;