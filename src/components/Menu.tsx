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
      <img src={Button} width="200" height="70" onClick={() => setIsOpen(isOpen ? false : true)} />
      {isOpen &&
        <ul  
          onBlur={() => setTimeout(() => setIsOpen(false), 100)} 
          ref={menuRef}
          tabIndex={1}
         >
          <li><a href="/somewhere">Jack</a></li>
          <li>Ami</li>
          <li>Tom</li>
        </ul>
      }
    </div>
  )
}

export default Menu;