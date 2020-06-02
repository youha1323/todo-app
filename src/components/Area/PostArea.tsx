import React, {useState} from 'react';
import PostInput from '../PostInput';
import PostList from '../PostList';
import { Post } from '../../Types';
import Menu from '../Menu';

const initialState: Post[] = [//初期データを登録

]

const PostArea: React.FC = () => {
  const [posts, setPosts] = useState(initialState);

  return(
    <div>
        <Menu />
        <PostInput posts={posts} setPosts={setPosts} />
        <PostList posts={posts} setPosts={setPosts}/>
    </div>
  );
}

export default PostArea;



