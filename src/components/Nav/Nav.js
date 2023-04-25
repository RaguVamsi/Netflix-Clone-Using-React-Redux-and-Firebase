import React, { useEffect, useState } from 'react'
import "./Nav.css"
import {Link} from "react-router-dom"

const Nav = () => {
  const [show, setShow] = useState(false)
  const transitionNavBar = ()=>{
    if (window.scrollY > 100){
      setShow(true)
    } else { 
      setShow (false)
    }
  };

  useEffect (()=>{
    window.addEventListener("scroll", transitionNavBar);
    return ()=> window.removeEventListener("scroll", transitionNavBar);
  }, []);
  console.log(show);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
        <div className='nav__contents'>
          <Link to="/">
            <img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='logo' className='nav__logo'/>
            </Link>
            <Link to="/profile">
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar' className='nav__avatar'/>
            </Link>
        </div>
         
    </nav>
  )
}

export default Nav