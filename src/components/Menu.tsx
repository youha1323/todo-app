import React, {useState, useRef, useEffect} from 'react';
import Button from '../img/Button.png';


const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef: any = useRef()

  useEffect(() => {
    isOpen && menuRef.current.focus()
  }, [isOpen])

  return (
    <div>
      <img src={Button} width="100" height="70" onClick={() => setIsOpen(isOpen ? false : true)} />
      {isOpen &&
        <ul  
          onBlur={() => setTimeout(() => setIsOpen(false), 100)} 
          ref={menuRef}
          tabIndex={2}
         >
          <li><a href="/Jack.png">Jack</a></li>
          <li><a href="/Ami.png">Ami</a></li>
          <li><a href="/Tom.png">Tom</a></li>
        </ul>
      }
    </div>
  )
}

export default Menu;