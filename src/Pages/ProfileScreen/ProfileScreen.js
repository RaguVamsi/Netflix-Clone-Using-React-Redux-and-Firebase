import React from 'react';
import {useSelector} from "react-redux";
import {selectUser} from "../../features/userSlice";
import Nav from "../../components/Nav/Nav";
import "./ProfileScreen.css"
import {signOut} from "firebase/auth"
import { auth } from '../../firebase';

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const logOut = ()=>{
    signOut(auth);
  }
  return (
    <div className='profileScreen'>
      <Nav/>
      <div className='profileScreen__body'>
          <h1>Edit Profile</h1>
          <div className='profileScreen__info'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''/>
            <div className='profileScreen__details'>
              <h2>{user.email}</h2>
              <div className='profileScreen__plans'>
                <h3>Plans</h3>
                <button className='profileScreen__signOut' onClick={logOut}>Sign Out</button>{""}
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProfileScreen