import React, {useState} from 'react';
import PostList from '../components/PostList'
import PostInput from '../components/PostInput';
import { Post } from '../Types';
import  User  from './User';
import Menu from './Menu';
import '../App.css';
import Jack from '../img/Jack.png';
import Ami from '../img/Ami.png';
import Tom from '../img/Tom.png';
//import styled from 'styled-components';
//import GridArea from '../styles/GridArea';

const initialState: Post[] = [//初期データを登録

]

const App: React.FC = () => {
  const [posts, setPosts] = useState(initialState);
  const user1 = new User("Jack");
  const user2 = new User("Ami");
  const user3 = new User("Tom");
  var img = new Image();
  img.src = 'Jack.png';

  return(
    <div>
      <h1>褒めるアプリ</h1>
      <img src={Jack} width="100" height="150"/>
      <Menu/>
      <PostInput posts={posts} setPosts={setPosts} />
      <PostList posts={posts} setPosts={setPosts}/>]
      
    </div>
  )
}

export default App;

