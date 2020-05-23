import React, {useState} from 'react';
import PostList from '../components/PostList'
import PostInput from '../components/PostInput';
import { Post } from '../Types';
import '../App.css';
import styled from 'styled-components';
import GridArea from '../styles/GridArea';

const initialState: Post[] = [//初期データを登録

]

const App: React.FC = () => {
  const [posts, setPosts] = useState(initialState)

  return(
    <div>
      <h1>褒めるアプリ</h1>
      <PostInput posts={posts} setPosts={setPosts} />
      <PostList posts={posts} setPosts={setPosts}/>
    </div>
  )
}

export default App;

