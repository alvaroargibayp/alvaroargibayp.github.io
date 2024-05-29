import React from 'react';
import './Header.css';
import CustomButton from './CustomComponents/CustomButton';
import Divider from './CustomComponents/Divider';

function Header() {
  return (
    <div className="header">
      <div className='header-buttons'>
        <CustomButton label='Home' />
        <CustomButton label='Artículos' />
        <CustomButton label='Contacto' />
      </div>
      <div className='header-divider'>
        <Divider />
      </div>
    </div>
  );
}

export default Header;