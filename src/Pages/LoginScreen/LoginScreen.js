import React from 'react'
import "./LoginScreen.css"
import { useState } from 'react';
import SignInScreen from '../SignInScreen/SignInScreen';

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className='loginScreen'>
      <div className='loginScreen__background'>
            <img className='loginScreen__logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt=''/>
            <button className='loginScreen__button' onClick={()=> setSignIn(true)}>Sign In</button>
            <div className='loginScreen__gradient'/>
            <div className='loginScreen__body'>
              {
                signIn ? (<SignInScreen />) : (<>
                <h1>Unlimited Films, Tv Programmes and more</h1>
                <h2>Watch Anywhere, Cancel at Any time</h2> 
                <h3>Ready to watch?Enter your Email to create or restart your membership</h3>
                <div className='loginScreen__input'>
                      <form>
                        <input type='email' placeholder='Email Address'/>
                        <button onClick={()=> setSignIn(true)} className='loginScreen__getStarted'>GET STARTED</button>
                      </form>
                </div></>)
              }
            </div>
      </div>
    </div>
  )
}

export default LoginScreen