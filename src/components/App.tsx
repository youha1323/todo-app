import React, {useState} from 'react';
import  User  from './User';
import '../App.css';
import PraiseTemplate from '../components/Templates/PraiseTemplate'
import Jack from '../img/Jack.png';
//import styled from 'styled-components';


const App: React.FC = () => {
  
  const user1 = new User("Jack");
  //const user2 = new User("Ami");
  //const user3 = new User("Tom");
  var img = new Image();
  img.src = 'Jack.png';

  return(
    <div>
      <h1>褒めるアプリ</h1>
      <img src={Jack} width="100" height="150"/>
      <PraiseTemplate />
    </div>
  )
}

export default App;

