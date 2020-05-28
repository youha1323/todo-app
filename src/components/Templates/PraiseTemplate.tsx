import React from 'react';
import styled from 'styled-components';
import PostArea from '../Area/PostArea';
import UserArea from '../Area/UserArea';

enum Area {
  PostArea = 'PostArea',
  UserArea = 'UserArea',
}

// Gridの設定をし、areaを指定してOrganismsを呼び出す
const PraiseTemplate: React.FC = () => {
  return (
    <GridLayout>
      <UserArea area={Area.UserArea} />
      <PostArea area={Area.PostArea} />
    </GridLayout>
  )
}

export default PraiseTemplate;


const GridLayout = styled.div`
  display: grid;
  grid-template-colums: 30px 70px;
  grid-template-areas:
  "UserArea PostArea"
`