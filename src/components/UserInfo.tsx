import React from 'react';
import { User } from '../Types';
//import Jack from '../img/Jack.png';

const UserInfo: React.FC = () => {
  var img1 = new Image();
  img1.src = 'Jack.png';

  const newUser : User = {
    name : "Jack",
    clap : 100,
    applause: 0,
    img : img1,
  }

  return(
    <div>
      <h2>{newUser.name}</h2>
      <h2>拍手できる回数：{newUser.clap}</h2>
      <h2>拍手された回数: {newUser.applause}</h2>
    </div>
  );
}

export default UserInfo;