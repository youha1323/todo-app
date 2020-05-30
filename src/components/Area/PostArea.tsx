import React, {useState} from 'react';
import PostInput from '../PostInput';
import PostList from '../PostList';
import { Post } from '../../Types';
import GridArea from '../../styles/GridArea';
import Menu from '../Menu';
//import styled from 'styled-components';

type Props = {
  area: string
}

const initialState: Post[] = [//初期データを登録

]

const PostArea: React.FC<Props> = (props) => {
  const [posts, setPosts] = useState(initialState);
  const {area} = props;

  return(
    <div>
      <GridArea area={area}>
         <Menu />
         <PostInput posts={posts} setPosts={setPosts} />
         <PostList posts={posts} setPosts={setPosts}/>
      </GridArea>
    </div>
  );
}

export default PostArea;



