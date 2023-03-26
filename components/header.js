import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';
import profile_photo from '../assets/small_images/portriats/smallsnake.jpeg';
import Navbar from './nav';


function Header() {
  return (
    <header className="header">
    <div className='container'>
        <img src={profile_photo} alt="Profile_Photo_Colton" />
    </div>
      <h1 className='name'>Colton Wilson</h1>
      <Navbar>

      </Navbar>
    </header>
  );
}

export default Header;
