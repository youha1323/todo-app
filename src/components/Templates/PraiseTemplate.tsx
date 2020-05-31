import React from 'react';
import styled from 'styled-components';
import PostArea from '../Area/PostArea';
import UserArea from '../Area/UserArea';

enum Area {
  UserArea = 'UserArea',
  PostArea = 'PostArea',
}

// Gridの設定をし、areaを指定してOrganismsを呼び出す
const PraiseTemplate: React.FC = () => {
  return (
    <GridLayout>
      <UserArea area={Area.UserArea} />
      <PostArea />
    </GridLayout>
  )
}

export default PraiseTemplate;


const GridLayout = styled.div`
  display: grid;
  grid-template-rows: 200px 1fr;

  grid-template-areas:
  " UserArea "
  " PostArea "
`;