import React, { useState } from 'react';
import Clap from '../img/Clap.png';

const Clapbtn: React.FC = () => {
  const [clap, setClap] = useState(0);

  const hundleClick = () => {
    setClap(clap + 1);
  };
  
  var img = new Image();
  img.src = 'Clap.png';
  
  return(
    <div>
      <button
         onClick={hundleClick}>
         <img src={Clap} alt="clap" width= "30" height= "30"/>
      </button>
    </div>
  );
}

export default Clapbtn;