import React from 'react';
import TwitterLogo from '../styles/assets/twitter-logo.png';
import { Link } from 'react-router-dom';
import '../styles/landing.css';
export default function Landing() {
  return (
    <div className='main'>
      <div className='wrapper'>
        <div className='left'>
          <div className='items-wrapper'>
            <div className='item'>
              <span className='icon'>
                <i className='fa fa-search' aria-hidden='true'></i>
              </span>
              <span className='label'>Follow your interests.</span>
            </div>

            <div className='item'>
              <span className='icon'>
                <i className='fa fa-user' aria-hidden='true'></i>
              </span>
              <span className='label'>Hear what people are talking about.</span>
            </div>

            <div className='item'>
              <span className='icon'>
                <i className='fa fa-comment' aria-hidden='true'></i>
              </span>
              <span className='label'>Join the conversation.</span>
            </div>
          </div>
        </div>
        <div className='center'>
          <img src={TwitterLogo} alt='Twitter logo' style={{ width: '50px' }} />
          <h1>
            See what's happing in
            <br />
            the world right now
          </h1>
          <span>Join Twitter Today.</span>
          <Link to='/signup' className='btn-sign-up'>
            Sign Up
          </Link>
          <Link to='/login' className='btn-sign-up'>
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
