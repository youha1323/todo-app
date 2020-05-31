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
    img : img1
  }

  return(
    <div>
      {newUser.name}
    </div>
  );
}

export default UserInfo;